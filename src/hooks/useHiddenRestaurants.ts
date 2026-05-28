import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface HiddenRestaurant {
  id: string;
  restaurant_slug: string;
  restaurant_city: string;
  restaurant_country: string;
  reason: string | null;
  created_at: string;
}

const keyOf = (slug: string, city: string, country: string) =>
  `${slug}::${city.toLowerCase()}::${country.toLowerCase()}`;

export const useHiddenRestaurants = () => {
  const [hidden, setHidden] = useState<HiddenRestaurant[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHidden = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from("hidden_restaurants").select("*");
    setHidden(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchHidden();
  }, [fetchHidden]);

  const hiddenKeys = new Set(
    hidden.map((h) =>
      keyOf(h.restaurant_slug, h.restaurant_city, h.restaurant_country)
    )
  );

  const isHidden = (slug: string, city: string, country: string) =>
    hiddenKeys.has(keyOf(slug, city, country));

  return { hidden, isHidden, loading, refetch: fetchHidden };
};
