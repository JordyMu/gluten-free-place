import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { useHiddenRestaurants } from "@/hooks/useHiddenRestaurants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, EyeOff, Eye, Loader2, ArrowLeft, Star, Shield } from "lucide-react";
import { toast } from "sonner";
import { SEOHead } from "@/components/SEOHead";

// Aggregate all restaurants from data files
import { capeTownRestaurants } from "@/data/capeTownRestaurants";
import { johannesburgRestaurants } from "@/data/johannesburgRestaurants";
import { durbanRestaurants } from "@/data/durbanRestaurants";
import { pretoriaRestaurants } from "@/data/pretoriaRestaurants";
import { parisRestaurants } from "@/data/parisRestaurants";
import { lyonRestaurants } from "@/data/lyonRestaurants";
import { bordeauxRestaurants } from "@/data/bordeauxRestaurants";
import { marseilleRestaurants } from "@/data/marseilleRestaurants";
import { niceRestaurants } from "@/data/niceRestaurants";
import { strasbourgRestaurants } from "@/data/strasbourgRestaurants";
import { londonRestaurants } from "@/data/londonRestaurants";
import { edinburghRestaurants } from "@/data/edinburghRestaurants";
import { manchesterRestaurants } from "@/data/manchesterRestaurants";
import { birminghamRestaurants } from "@/data/birminghamRestaurants";
import { torontoRestaurants } from "@/data/torontoRestaurants";
import { montrealRestaurants } from "@/data/montrealRestaurants";
import { vancouverRestaurants } from "@/data/vancouverRestaurants";
import { calgaryRestaurants } from "@/data/calgaryRestaurants";
import { nairobiRestaurants } from "@/data/nairobiRestaurants";
import { mombasaRestaurants } from "@/data/mombasaRestaurants";
import { kisumuRestaurants } from "@/data/kisumuRestaurants";
import { nakuruRestaurants } from "@/data/nakuruRestaurants";
import { allEgyptRestaurants } from "@/data/egyptRestaurants";
import { mauritiusRestaurants } from "@/data/mauritiusRestaurants";
import { portLouisRestaurants } from "@/data/portLouisRestaurants";
import { grandBaieRestaurants } from "@/data/grandBaieRestaurants";
import { flicEnFlacRestaurants } from "@/data/flicEnFlacRestaurants";
import { curepipeRestaurants } from "@/data/curepipeRestaurants";
import { quatreBornesRestaurants } from "@/data/quatreBornesRestaurants";
import { mahebourgRestaurants } from "@/data/mahebourgRestaurants";

interface AdminReview {
  id: string;
  restaurant_name: string;
  restaurant_city: string | null;
  restaurant_country: string;
  rating: number;
  comment: string;
  created_at: string;
  user_id: string;
  display_name?: string | null;
}

interface AdminPhoto {
  id: string;
  photo_url: string;
  restaurant_slug: string;
  restaurant_city: string;
  restaurant_country: string;
  created_at: string;
  uploaded_by: string;
}

interface AdminRestaurantRow {
  name: string;
  slug: string;
  city: string;
  country: string;
  icon: string;
}

const toRow = (r: any): AdminRestaurantRow | null => {
  if (!r?.slug || !r?.city || !r?.country) return null;
  return {
    name: r.name,
    slug: r.slug,
    city: r.city,
    country: r.country,
    icon: r.icon || "🍽️",
  };
};

const allRestaurants: AdminRestaurantRow[] = [
  ...capeTownRestaurants,
  ...johannesburgRestaurants,
  ...durbanRestaurants,
  ...pretoriaRestaurants,
  ...parisRestaurants,
  ...lyonRestaurants,
  ...bordeauxRestaurants,
  ...marseilleRestaurants,
  ...niceRestaurants,
  ...strasbourgRestaurants,
  ...londonRestaurants,
  ...edinburghRestaurants,
  ...manchesterRestaurants,
  ...birminghamRestaurants,
  ...torontoRestaurants,
  ...montrealRestaurants,
  ...vancouverRestaurants,
  ...calgaryRestaurants,
  ...nairobiRestaurants,
  ...mombasaRestaurants,
  ...kisumuRestaurants,
  ...nakuruRestaurants,
  ...allEgyptRestaurants,
  ...mauritiusRestaurants,
  ...portLouisRestaurants,
  ...grandBaieRestaurants,
  ...flicEnFlacRestaurants,
  ...curepipeRestaurants,
  ...quatreBornesRestaurants,
  ...mahebourgRestaurants,
]
  .map(toRow)
  .filter((r): r is AdminRestaurantRow => r !== null);

const Admin = () => {
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: roleLoading } = useIsAdmin();
  const { hidden, isHidden, refetch: refetchHidden } = useHiddenRestaurants();

  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [photos, setPhotos] = useState<AdminPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [restaurantSearch, setRestaurantSearch] = useState("");

  const loadData = async () => {
    setLoading(true);
    const [reviewsRes, photosRes] = await Promise.all([
      supabase.from("reviews").select("*").order("created_at", { ascending: false }),
      supabase.from("restaurant_photos").select("*").order("created_at", { ascending: false }),
    ]);

    if (reviewsRes.data) {
      const userIds = [...new Set(reviewsRes.data.map((r) => r.user_id))];
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, display_name")
        .in("id", userIds);
      const profMap = new Map(profiles?.map((p) => [p.id, p.display_name]) || []);
      setReviews(
        reviewsRes.data.map((r) => ({ ...r, display_name: profMap.get(r.user_id) }))
      );
    }
    if (photosRes.data) setPhotos(photosRes.data);
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) loadData();
  }, [isAdmin]);

  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <Shield className="h-12 w-12 text-red-500 mb-3" />
        <h1 className="text-2xl font-bold mb-2">Access denied</h1>
        <p className="text-gray-600 mb-6">You don't have permission to view this page.</p>
        <Link to="/"><Button>Go home</Button></Link>
      </div>
    );
  }

  const deleteReview = async (id: string) => {
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete review");
      return;
    }
    toast.success("Review deleted");
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const deletePhoto = async (photo: AdminPhoto) => {
    const urlParts = photo.photo_url.split("/restaurant-photos/");
    if (urlParts[1]) {
      await supabase.storage.from("restaurant-photos").remove([urlParts[1]]);
    }
    const { error } = await supabase.from("restaurant_photos").delete().eq("id", photo.id);
    if (error) {
      toast.error("Failed to delete photo");
      return;
    }
    toast.success("Photo deleted");
    setPhotos((prev) => prev.filter((p) => p.id !== photo.id));
  };

  const toggleHide = async (
    slug: string,
    city: string,
    country: string,
    currentlyHidden: boolean
  ) => {
    if (currentlyHidden) {
      const target = hidden.find(
        (h) =>
          h.restaurant_slug === slug &&
          h.restaurant_city.toLowerCase() === city.toLowerCase() &&
          h.restaurant_country.toLowerCase() === country.toLowerCase()
      );
      if (!target) return;
      const { error } = await supabase.from("hidden_restaurants").delete().eq("id", target.id);
      if (error) return toast.error("Failed to unhide");
      toast.success("Restaurant restored");
    } else {
      const { error } = await supabase.from("hidden_restaurants").insert({
        restaurant_slug: slug,
        restaurant_city: city,
        restaurant_country: country,
        hidden_by: user.id,
      });
      if (error) return toast.error("Failed to hide");
      toast.success("Restaurant hidden from site");
    }
    refetchHidden();
  };

  const filteredRestaurants = allRestaurants.filter((r) => {
    if (!restaurantSearch) return true;
    const q = restaurantSearch.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      r.city.toLowerCase().includes(q) ||
      r.country.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead title="Admin Dashboard" description="Admin moderation panel" canonical="/admin" />
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to site
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Shield className="h-8 w-8" /> Admin Dashboard
          </h1>
          <p className="text-white/90 mt-1">Moderate reviews, photos, and restaurant listings.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="reviews" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-xl">
            <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
            <TabsTrigger value="photos">Photos ({photos.length})</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurants ({allRestaurants.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="mt-6">
            {loading ? (
              <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin" /></div>
            ) : reviews.length === 0 ? (
              <p className="text-gray-500 text-center py-12">No reviews yet.</p>
            ) : (
              <div className="space-y-3">
                {reviews.map((r) => (
                  <Card key={r.id}>
                    <CardContent className="pt-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-semibold">{r.restaurant_name}</span>
                            <Badge variant="outline">{r.restaurant_city || "—"}, {r.restaurant_country}</Badge>
                            <div className="flex items-center gap-0.5">
                              {[1,2,3,4,5].map(s => (
                                <Star key={s} className={`h-3.5 w-3.5 ${s <= r.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">
                            by {r.display_name || "Anonymous"} · {new Date(r.created_at).toLocaleDateString()}
                          </p>
                          <p className="text-gray-700">{r.comment}</p>
                        </div>
                        <DeleteConfirm onConfirm={() => deleteReview(r.id)} label="review" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="photos" className="mt-6">
            {loading ? (
              <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin" /></div>
            ) : photos.length === 0 ? (
              <p className="text-gray-500 text-center py-12">No photos yet.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((p) => (
                  <Card key={p.id} className="overflow-hidden">
                    <img src={p.photo_url} alt="" className="w-full h-40 object-cover" />
                    <CardContent className="p-3">
                      <p className="text-xs text-gray-600 truncate mb-2">
                        {p.restaurant_slug} · {p.restaurant_city}
                      </p>
                      <DeleteConfirm onConfirm={() => deletePhoto(p)} label="photo" full />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="restaurants" className="mt-6">
            <Input
              placeholder="Search by name, city, or country…"
              value={restaurantSearch}
              onChange={(e) => setRestaurantSearch(e.target.value)}
              className="mb-4 max-w-md"
            />
            <p className="text-sm text-gray-500 mb-3">
              Showing {filteredRestaurants.length} of {allRestaurants.length}. Hidden listings stay in code but won't appear on the site once filtering is wired into a page.
            </p>
            <div className="space-y-2">
              {filteredRestaurants.slice(0, 200).map((r) => {
                const hiddenNow = isHidden(r.slug, r.city, r.country);
                return (
                  <Card key={`${r.slug}-${r.city}-${r.country}`} className={hiddenNow ? "opacity-60 border-red-300" : ""}>
                    <CardContent className="py-3 flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">
                          {r.icon} {r.name}
                          {hiddenNow && <Badge variant="destructive" className="ml-2">Hidden</Badge>}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{r.city}, {r.country} · /{r.slug}</p>
                      </div>
                      <Button
                        variant={hiddenNow ? "outline" : "destructive"}
                        size="sm"
                        onClick={() => toggleHide(r.slug, r.city, r.country, hiddenNow)}
                      >
                        {hiddenNow ? <><Eye className="h-4 w-4 mr-1" /> Unhide</> : <><EyeOff className="h-4 w-4 mr-1" /> Hide</>}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
              {filteredRestaurants.length > 200 && (
                <p className="text-center text-sm text-gray-500 py-2">Refine search to see more results.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const DeleteConfirm = ({
  onConfirm,
  label,
  full,
}: {
  onConfirm: () => void;
  label: string;
  full?: boolean;
}) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive" size={full ? "sm" : "icon"} className={full ? "w-full" : ""}>
        <Trash2 className="h-4 w-4" />
        {full && <span className="ml-1">Delete</span>}
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete this {label}?</AlertDialogTitle>
        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm} className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Admin;
