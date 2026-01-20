import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface VerificationRequest {
  restaurantName: string;
  restaurantSlug: string;
  restaurantCity: string;
  restaurantCountry: string;
  ownerEmail: string;
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

    const { restaurantName, restaurantSlug, restaurantCity, restaurantCountry, ownerEmail }: VerificationRequest = await req.json();

    // Generate a 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Create the claim record
    const { error: claimError } = await supabaseClient
      .from("restaurant_claims")
      .insert({
        user_id: user.id,
        restaurant_name: restaurantName,
        restaurant_slug: restaurantSlug,
        restaurant_city: restaurantCity,
        restaurant_country: restaurantCountry,
        verification_code: verificationCode,
      });

    if (claimError) {
      console.error("Error creating claim:", claimError);
      return new Response(JSON.stringify({ error: "Failed to create claim" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Send verification email
    const emailResponse = await resend.emails.send({
      from: "Gluten Free Finder <onboarding@resend.dev>",
      to: [ownerEmail],
      subject: `Verify ownership of ${restaurantName}`,
      html: `
        <h1>Restaurant Ownership Verification</h1>
        <p>Hello,</p>
        <p>Someone has requested to claim ownership of <strong>${restaurantName}</strong> on Gluten Free Finder.</p>
        <p>If this was you, please use the following verification code:</p>
        <h2 style="background: #f0f0f0; padding: 20px; text-align: center; font-size: 32px; letter-spacing: 5px;">${verificationCode}</h2>
        <p>If you did not request this, please ignore this email.</p>
        <p>Best regards,<br>Gluten Free Finder Team</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Verification email sent" }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-verification-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
