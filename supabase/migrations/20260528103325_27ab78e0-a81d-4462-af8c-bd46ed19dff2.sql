-- 1. Roles enum + table
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- 2. has_role security-definer function
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 3. Seed Jordy as admin
INSERT INTO public.user_roles (user_id, role)
VALUES ('bef665ee-6c60-4913-bbd2-b9759d676c55', 'admin')
ON CONFLICT DO NOTHING;

-- 4. Admin delete policies on existing tables
CREATE POLICY "Admins can delete any review"
ON public.reviews FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete any photo"
ON public.restaurant_photos FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Also let admins view all reviews/photos (already public SELECT, fine)
-- And let admins manage submissions
CREATE POLICY "Admins can view all submissions"
ON public.restaurant_submissions FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 5. Hidden restaurants (soft-delete for hardcoded listings)
CREATE TABLE public.hidden_restaurants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_slug text NOT NULL,
  restaurant_city text NOT NULL,
  restaurant_country text NOT NULL,
  hidden_by uuid NOT NULL,
  reason text,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (restaurant_slug, restaurant_city, restaurant_country)
);

GRANT SELECT ON public.hidden_restaurants TO anon;
GRANT SELECT, INSERT, DELETE ON public.hidden_restaurants TO authenticated;
GRANT ALL ON public.hidden_restaurants TO service_role;

ALTER TABLE public.hidden_restaurants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view hidden restaurants list"
ON public.hidden_restaurants FOR SELECT
USING (true);

CREATE POLICY "Admins can hide restaurants"
ON public.hidden_restaurants FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin') AND auth.uid() = hidden_by);

CREATE POLICY "Admins can unhide restaurants"
ON public.hidden_restaurants FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));