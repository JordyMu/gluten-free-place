import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerifyRequest {
  restaurantSlug: string;
  restaurantCity: string;
  restaurantCountry: string;
  verificationCode: string;
}

const jsonResponse = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return jsonResponse({ error: "Missing authorization header" }, 401);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      console.error("Verification function is missing required server configuration");
      return jsonResponse({ error: "Verification is temporarily unavailable" }, 500);
    }

    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: userError } = await userClient.auth.getUser();
    if (userError || !user) {
      return jsonResponse({ error: "Unauthorized" }, 401);
    }

    const { restaurantSlug, restaurantCity, restaurantCountry, verificationCode }: VerifyRequest = await req.json();
    if (!restaurantSlug || !restaurantCity || !restaurantCountry || !/^\d{6}$/.test(verificationCode)) {
      return jsonResponse({ error: "Invalid verification request" }, 400);
    }

    // Only the server can read claim codes or change verification fields.
    const adminClient = createClient(supabaseUrl, serviceRoleKey);
    const { data: claim, error: findError } = await adminClient
      .from("restaurant_claims")
      .select("id")
      .eq("user_id", user.id)
      .eq("restaurant_slug", restaurantSlug)
      .eq("restaurant_city", restaurantCity)
      .eq("restaurant_country", restaurantCountry)
      .eq("verification_code", verificationCode)
      .eq("verified", false)
      .is("email_verified_at", null)
      .single();

    if (findError || !claim) {
      return jsonResponse({ error: "Invalid or expired verification code" }, 400);
    }

    // Email confirmation starts manual review; it never grants ownership by itself.
    const { error: updateError } = await adminClient
      .from("restaurant_claims")
      .update({
        email_verified_at: new Date().toISOString(),
        verification_code: crypto.randomUUID(),
      })
      .eq("id", claim.id)
      .eq("verified", false)
      .is("email_verified_at", null);

    if (updateError) {
      console.error("Error recording email verification:", updateError);
      return jsonResponse({ error: "Failed to verify email" }, 500);
    }

    return jsonResponse({
      success: true,
      message: "Email verified. Your ownership claim is now awaiting administrator approval.",
    }, 200);
  } catch (error: unknown) {
    console.error("Error in verify-restaurant-claim function:", error);
    return jsonResponse({ error: "Unable to verify this claim" }, 500);
  }
};

serve(handler);
