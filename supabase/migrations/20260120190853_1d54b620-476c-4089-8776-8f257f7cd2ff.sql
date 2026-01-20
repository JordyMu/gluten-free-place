-- Create restaurant ownership claims table
CREATE TABLE public.restaurant_claims (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  restaurant_slug TEXT NOT NULL,
  restaurant_name TEXT NOT NULL,
  restaurant_city TEXT NOT NULL,
  restaurant_country TEXT NOT NULL,
  verification_code TEXT NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  verified_at TIMESTAMP WITH TIME ZONE,
  UNIQUE (restaurant_slug, restaurant_city, restaurant_country)
);

-- Create restaurant photos table
CREATE TABLE public.restaurant_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_slug TEXT NOT NULL,
  restaurant_city TEXT NOT NULL,
  restaurant_country TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  uploaded_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.restaurant_claims ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.restaurant_photos ENABLE ROW LEVEL SECURITY;

-- RLS for restaurant_claims
CREATE POLICY "Users can view their own claims"
ON public.restaurant_claims
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create claims"
ON public.restaurant_claims
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own claims"
ON public.restaurant_claims
FOR UPDATE
USING (auth.uid() = user_id);

-- RLS for restaurant_photos
CREATE POLICY "Anyone can view restaurant photos"
ON public.restaurant_photos
FOR SELECT
USING (true);

-- Function to check if user owns a restaurant
CREATE OR REPLACE FUNCTION public.is_restaurant_owner(
  _user_id UUID,
  _restaurant_slug TEXT,
  _restaurant_city TEXT,
  _restaurant_country TEXT
)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.restaurant_claims
    WHERE user_id = _user_id
      AND restaurant_slug = _restaurant_slug
      AND restaurant_city = _restaurant_city
      AND restaurant_country = _restaurant_country
      AND verified = true
  )
$$;

-- Only verified owners can add photos
CREATE POLICY "Verified owners can add photos"
ON public.restaurant_photos
FOR INSERT
WITH CHECK (
  public.is_restaurant_owner(
    auth.uid(),
    restaurant_slug,
    restaurant_city,
    restaurant_country
  )
);

-- Owners can delete their own photos
CREATE POLICY "Owners can delete their photos"
ON public.restaurant_photos
FOR DELETE
USING (
  public.is_restaurant_owner(
    auth.uid(),
    restaurant_slug,
    restaurant_city,
    restaurant_country
  )
);

-- Create storage bucket for restaurant photos
INSERT INTO storage.buckets (id, name, public) VALUES ('restaurant-photos', 'restaurant-photos', true);

-- Storage policies
CREATE POLICY "Anyone can view restaurant photos"
ON storage.objects
FOR SELECT
USING (bucket_id = 'restaurant-photos');

CREATE POLICY "Authenticated users can upload restaurant photos"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'restaurant-photos' AND auth.role() = 'authenticated');

CREATE POLICY "Users can delete their own uploads"
ON storage.objects
FOR DELETE
USING (bucket_id = 'restaurant-photos' AND auth.uid()::text = (storage.foldername(name))[1]);