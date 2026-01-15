import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface Review {
  id: string;
  user_id: string;
  restaurant_name: string;
  restaurant_country: string;
  restaurant_city: string | null;
  rating: number;
  comment: string;
  created_at: string;
  updated_at: string;
  profiles?: {
    display_name: string | null;
    avatar_url: string | null;
  } | null;
}

export const useReviews = (restaurantName?: string, country?: string) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (restaurantName) {
        query = query.eq("restaurant_name", restaurantName);
      }
      if (country) {
        query = query.eq("restaurant_country", country);
      }

      const { data: reviewsData, error: fetchError } = await query;

      if (fetchError) throw fetchError;

      // Fetch profiles separately for each review
      if (reviewsData && reviewsData.length > 0) {
        const userIds = [...new Set(reviewsData.map(r => r.user_id))];
        const { data: profilesData } = await supabase
          .from("profiles")
          .select("id, display_name, avatar_url")
          .in("id", userIds);

        const profilesMap = new Map(profilesData?.map(p => [p.id, p]) || []);
        
        const reviewsWithProfiles = reviewsData.map(review => ({
          ...review,
          profiles: profilesMap.get(review.user_id) || null
        }));
        
        setReviews(reviewsWithProfiles);
      } else {
        setReviews([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [restaurantName, country]);

  return { reviews, loading, error, refetch: fetchReviews };
};

export const useAddReview = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addReview = async (data: {
    restaurant_name: string;
    restaurant_country: string;
    restaurant_city?: string;
    rating: number;
    comment: string;
  }) => {
    if (!user) {
      setError("You must be logged in to submit a review");
      return { success: false };
    }

    try {
      setLoading(true);
      setError(null);

      const { error: insertError } = await supabase.from("reviews").insert({
        user_id: user.id,
        restaurant_name: data.restaurant_name,
        restaurant_country: data.restaurant_country,
        restaurant_city: data.restaurant_city || null,
        rating: data.rating,
        comment: data.comment,
      });

      if (insertError) throw insertError;
      return { success: true };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to submit review";
      setError(message);
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { addReview, loading, error };
};
