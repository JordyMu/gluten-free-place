import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Camera, Upload, X, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface PhotoUploadSectionProps {
  restaurantSlug: string;
  restaurantCity: string;
  restaurantCountry: string;
  onPhotoUploaded: () => void;
}

export const PhotoUploadSection = ({
  restaurantSlug,
  restaurantCity,
  restaurantCountry,
  onPhotoUploaded,
}: PhotoUploadSectionProps) => {
  const { user } = useAuth();
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5MB");
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile || !user) return;

    setIsUploading(true);
    try {
      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${restaurantCountry}/${restaurantCity}/${restaurantSlug}/${Date.now()}.${fileExt}`;

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from("restaurant-photos")
        .upload(fileName, selectedFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from("restaurant-photos")
        .getPublicUrl(fileName);

      // Save to database
      const { error: dbError } = await supabase.from("restaurant_photos").insert({
        restaurant_slug: restaurantSlug,
        restaurant_city: restaurantCity,
        restaurant_country: restaurantCountry,
        photo_url: publicUrl,
        uploaded_by: user.id,
      });

      if (dbError) throw dbError;

      toast.success("Photo uploaded successfully!");
      setSelectedFile(null);
      setPreviewUrl(null);
      onPhotoUploaded();
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(error.message || "Failed to upload photo");
    } finally {
      setIsUploading(false);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="bg-muted/50 rounded-lg p-4 border border-dashed border-muted-foreground/30">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {previewUrl ? (
        <div className="space-y-4">
          <div className="relative inline-block">
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-48 rounded-lg object-cover"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute -top-2 -right-2 h-6 w-6"
              onClick={clearSelection}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleUpload} disabled={isUploading}>
              {isUploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Photo
                </>
              )}
            </Button>
            <Button variant="outline" onClick={clearSelection} disabled={isUploading}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-24 flex flex-col gap-2"
        >
          <Camera className="w-6 h-6" />
          <span>Add Photo</span>
        </Button>
      )}
    </div>
  );
};
