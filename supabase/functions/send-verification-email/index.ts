import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerificationRequest {
  restaurantName: string;
  restaurantSlug: string;
  restaurantCity: string;
  restaurantCountry: string;
  ownerEmail: string;
}

const jsonResponse = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);

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
    const resendApiKey = Deno.env.get("RESEND_API_KEY") ?? "";
    if (!supabaseUrl || !anonKey || !serviceRoleKey || !resendApiKey) {
      console.error("Verification email function is missing required server configuration");
      return jsonResponse({ error: "Verification is temporarily unavailable" }, 500);
    }

    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: userError } = await userClient.auth.getUser();
    if (userError || !user) {
      return jsonResponse({ error: "Unauthorized" }, 401);
    }

    const body: VerificationRequest = await req.json();
    const restaurantName = body.restaurantName?.trim();
    const restaurantSlug = body.restaurantSlug?.trim();
    const restaurantCity = body.restaurantCity?.trim();
    const restaurantCountry = body.restaurantCountry?.trim();
    const ownerEmail = body.ownerEmail?.trim().toLowerCase();

    if (
      !restaurantName || restaurantName.length > 200 ||
      !restaurantSlug || restaurantSlug.length > 200 ||
      !restaurantCity || restaurantCity.length > 200 ||
      !restaurantCountry || restaurantCountry.length > 100 ||
      !ownerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownerEmail)
    ) {
      return jsonResponse({ error: "Invalid verification request" }, 400);
    }

    const randomValues = new Uint32Array(1);
    crypto.getRandomValues(randomValues);
    const verificationCode = (100000 + (randomValues[0] % 900000)).toString();

    // Claims and their secret codes are never exposed through client-side table access.
    const adminClient = createClient(supabaseUrl, serviceRoleKey);
    const { data: claim, error: claimError } = await adminClient
      .from("restaurant_claims")
      .insert({
        user_id: user.id,
        restaurant_name: restaurantName,
        restaurant_slug: restaurantSlug,
        restaurant_city: restaurantCity,
        restaurant_country: restaurantCountry,
        verification_code: verificationCode,
      })
      .select("id")
      .single();

    if (claimError || !claim) {
      console.error("Error creating claim:", claimError);
      return jsonResponse({ error: "Failed to create claim" }, 500);
    }

    const resend = new Resend(resendApiKey);
    const emailResponse = await resend.emails.send({
      from: "Gluten Free Finder <onboarding@resend.dev>",
      to: [ownerEmail],
      subject: `Verify ownership of ${restaurantName}`,
      html: `
        <h1>Restaurant Ownership Verification</h1>
        <p>Hello,</p>
        <p>Someone has requested to claim ownership of <strong>${escapeHtml(restaurantName)}</strong> on Gluten Free Finder.</p>
        <p>If this was you, please use the following verification code:</p>
        <h2 style="background: #f0f0f0; padding: 20px; text-align: center; font-size: 32px; letter-spacing: 5px;">${verificationCode}</h2>
        <p>After email verification, the claim will be reviewed before photo access is granted.</p>
        <p>If you did not request this, please ignore this email.</p>
        <p>Best regards,<br>Gluten Free Finder Team</p>
      `,
    });

    if (emailResponse.error) {
      console.error("Error sending verification email:", emailResponse.error);
      await adminClient.from("restaurant_claims").delete().eq("id", claim.id);
      return jsonResponse({ error: "Failed to send verification email" }, 502);
    }

    return jsonResponse({ success: true, message: "Verification email sent" }, 200);
  } catch (error: unknown) {
    console.error("Error in send-verification-email function:", error);
    return jsonResponse({ error: "Unable to start restaurant verification" }, 500);
  }
};

serve(handler);
