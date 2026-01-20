import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface VerifyRequest {
  restaurantSlug: string;
  restaurantCity: string;
  restaurantCountry: string;
  verificationCode: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Missing authorization header" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    if (userError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { restaurantSlug, restaurantCity, restaurantCountry, verificationCode }: VerifyRequest = await req.json();

    // Find the claim
    const { data: claim, error: findError } = await supabaseClient
      .from("restaurant_claims")
      .select("*")
      .eq("user_id", user.id)
      .eq("restaurant_slug", restaurantSlug)
      .eq("restaurant_city", restaurantCity)
      .eq("restaurant_country", restaurantCountry)
      .eq("verification_code", verificationCode)
      .eq("verified", false)
      .single();

    if (findError || !claim) {
      return new Response(JSON.stringify({ error: "Invalid verification code" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Update the claim to verified
    const { error: updateError } = await supabaseClient
      .from("restaurant_claims")
      .update({ verified: true, verified_at: new Date().toISOString() })
      .eq("id", claim.id);

    if (updateError) {
      console.error("Error verifying claim:", updateError);
      return new Response(JSON.stringify({ error: "Failed to verify claim" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Restaurant ownership verified" }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in verify-restaurant-claim function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
