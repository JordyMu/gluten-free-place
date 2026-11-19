ALTER TABLE public.restaurant_claims
  ADD COLUMN IF NOT EXISTS email_verified_at timestamp with time zone,
  ADD COLUMN IF NOT EXISTS approved_by uuid;

COMMENT ON COLUMN public.restaurant_claims.email_verified_at IS 'Set by the verification function after the emailed code is confirmed; does not grant ownership.';
COMMENT ON COLUMN public.restaurant_claims.verified IS 'Ownership is granted only after administrator approval.';
COMMENT ON COLUMN public.restaurant_claims.approved_by IS 'Administrator user ID who approved ownership.';

DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;
CREATE POLICY "Users can view their own private profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = id);
REVOKE SELECT ON public.profiles FROM anon;
GRANT SELECT ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

CREATE OR REPLACE FUNCTION public.get_public_profiles()
RETURNS TABLE(id uuid, display_name text, avatar_url text)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT p.id, p.display_name, p.avatar_url
  FROM public.profiles AS p
$$;
REVOKE ALL ON FUNCTION public.get_public_profiles() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_profiles() TO anon, authenticated, service_role;

CREATE VIEW public.public_profiles
WITH (security_invoker = on) AS
  SELECT * FROM public.get_public_profiles();
GRANT SELECT ON public.public_profiles TO anon, authenticated;
GRANT ALL ON public.public_profiles TO service_role;

DROP POLICY IF EXISTS "Anyone can view hidden restaurants list" ON public.hidden_restaurants;
CREATE POLICY "Admins can view hidden restaurant administration"
  ON public.hidden_restaurants FOR SELECT
  TO authenticated
  USING (public.has_role((select auth.uid()), 'admin'::public.app_role));
REVOKE SELECT ON public.hidden_restaurants FROM anon;
GRANT SELECT ON public.hidden_restaurants TO authenticated;
GRANT ALL ON public.hidden_restaurants TO service_role;

CREATE OR REPLACE FUNCTION public.get_public_hidden_restaurants()
RETURNS TABLE(id uuid, restaurant_slug text, restaurant_city text, restaurant_country text, reason text, created_at timestamp with time zone)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT h.id, h.restaurant_slug, h.restaurant_city, h.restaurant_country, h.reason, h.created_at
  FROM public.hidden_restaurants AS h
$$;
REVOKE ALL ON FUNCTION public.get_public_hidden_restaurants() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_hidden_restaurants() TO anon, authenticated, service_role;

CREATE VIEW public.public_hidden_restaurants
WITH (security_invoker = on) AS
  SELECT * FROM public.get_public_hidden_restaurants();
GRANT SELECT ON public.public_hidden_restaurants TO anon, authenticated;
GRANT ALL ON public.public_hidden_restaurants TO service_role;

DROP POLICY IF EXISTS "Users can create claims" ON public.restaurant_claims;
DROP POLICY IF EXISTS "Users can update their own claims" ON public.restaurant_claims;
DROP POLICY IF EXISTS "Users can view their own claims" ON public.restaurant_claims;
CREATE POLICY "Admins can review restaurant claims"
  ON public.restaurant_claims FOR SELECT
  TO authenticated
  USING (public.has_role((select auth.uid()), 'admin'::public.app_role));
CREATE POLICY "Admins can approve restaurant claims"
  ON public.restaurant_claims FOR UPDATE
  TO authenticated
  USING (public.has_role((select auth.uid()), 'admin'::public.app_role))
  WITH CHECK (public.has_role((select auth.uid()), 'admin'::public.app_role));
REVOKE ALL ON public.restaurant_claims FROM anon, authenticated;
GRANT SELECT, UPDATE ON public.restaurant_claims TO authenticated;
GRANT ALL ON public.restaurant_claims TO service_role;

DROP POLICY IF EXISTS "Verified owners can add photos" ON public.restaurant_photos;
CREATE POLICY "Approved owners can add their own photo records"
  ON public.restaurant_photos FOR INSERT
  TO authenticated
  WITH CHECK (
    (select auth.uid()) = uploaded_by
    AND public.is_restaurant_owner((select auth.uid()), restaurant_slug, restaurant_city, restaurant_country)
  );

DROP POLICY IF EXISTS "Authenticated users can upload restaurant photos" ON storage.objects;
CREATE POLICY "Approved owners can upload restaurant photo files"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'restaurant-photos'
    AND (storage.foldername(name))[1] = (select auth.uid())::text
    AND public.is_restaurant_owner(
      (select auth.uid()),
      replace((storage.foldername(name))[4], '%2F', '/'),
      replace((storage.foldername(name))[3], '%2F', '/'),
      replace((storage.foldername(name))[2], '%2F', '/')
    )
  );

DROP POLICY IF EXISTS "Users can delete their own uploads" ON storage.objects;
CREATE POLICY "Owners and admins can delete restaurant photo files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'restaurant-photos'
    AND (
      public.has_role((select auth.uid()), 'admin'::public.app_role)
      OR (
        (storage.foldername(name))[1] = (select auth.uid())::text
        AND public.is_restaurant_owner(
          (select auth.uid()),
          replace((storage.foldername(name))[4], '%2F', '/'),
          replace((storage.foldername(name))[3], '%2F', '/'),
          replace((storage.foldername(name))[2], '%2F', '/')
        )
      )
      OR public.is_restaurant_owner(
        (select auth.uid()),
        replace((storage.foldername(name))[3], '%2F', '/'),
        replace((storage.foldername(name))[2], '%2F', '/'),
        replace((storage.foldername(name))[1], '%2F', '/')
      )
    )
  );