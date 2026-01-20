import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { PhotoUploadSection } from "./PhotoUploadSection";
import { ClaimRestaurantDialog } from "./ClaimRestaurantDialog";
import { Button } from "@/components/ui/button";
import { Trash2, Camera, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface Photo {
  id: string;
  photo_url: string;
  created_at: string;
}

interface RestaurantPhotoGalleryProps {
  restaurantName: string;
  restaurantSlug: string;
  restaurantCity: string;
  restaurantCountry: string;
}

export const RestaurantPhotoGallery = ({
  restaurantName,
  restaurantSlug,
  restaurantCity,
  restaurantCountry,
}: RestaurantPhotoGalleryProps) => {
  const { user } = useAuth();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isOwner, setIsOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchPhotos = async () => {
    const { data, error } = await supabase
      .from("restaurant_photos")
      .select("id, photo_url, created_at")
      .eq("restaurant_slug", restaurantSlug)
      .eq("restaurant_city", restaurantCity)
      .eq("restaurant_country", restaurantCountry)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPhotos(data);
    }
  };

  const checkOwnership = async () => {
    if (!user) {
      setIsOwner(false);
      return;
    }

    const { data, error } = await supabase.rpc("is_restaurant_owner", {
      _user_id: user.id,
      _restaurant_slug: restaurantSlug,
      _restaurant_city: restaurantCity,
      _restaurant_country: restaurantCountry,
    });

    if (!error) {
      setIsOwner(data === true);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await Promise.all([fetchPhotos(), checkOwnership()]);
      setIsLoading(false);
    };
    loadData();
  }, [restaurantSlug, restaurantCity, restaurantCountry, user]);

  const handleDelete = async (photoId: string, photoUrl: string) => {
    setDeletingId(photoId);
    try {
      // Extract file path from URL
      const urlParts = photoUrl.split("/restaurant-photos/");
      const filePath = urlParts[1];

      // Delete from storage
      if (filePath) {
        await supabase.storage.from("restaurant-photos").remove([filePath]);
      }

      // Delete from database
      const { error } = await supabase
        .from("restaurant_photos")
        .delete()
        .eq("id", photoId);

      if (error) throw error;

      toast.success("Photo deleted");
      fetchPhotos();
    } catch (error: any) {
      console.error("Delete error:", error);
      toast.error("Failed to delete photo");
    } finally {
      setDeletingId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Camera className="w-5 h-5" />
          Photo Gallery
        </h3>
        {!isOwner && user && (
          <ClaimRestaurantDialog
            restaurantName={restaurantName}
            restaurantSlug={restaurantSlug}
            restaurantCity={restaurantCity}
            restaurantCountry={restaurantCountry}
            onClaimSuccess={() => {
              checkOwnership();
            }}
          />
        )}
      </div>

      {isOwner && (
        <PhotoUploadSection
          restaurantSlug={restaurantSlug}
          restaurantCity={restaurantCity}
          restaurantCountry={restaurantCountry}
          onPhotoUploaded={fetchPhotos}
        />
      )}

      {photos.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.photo_url}
                alt="Restaurant photo"
                className="w-full h-32 object-cover rounded-lg"
              />
              {isOwner && (
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDelete(photo.id, photo.photo_url)}
                  disabled={deletingId === photo.id}
                >
                  {deletingId === photo.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-center py-8">
          No photos yet. {isOwner ? "Upload the first one!" : ""}
        </p>
      )}
    </div>
  );
};
