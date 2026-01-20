import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { restaurantName, restaurantCity, restaurantCountry } = await req.json();

    // Validate input
    if (!restaurantName || !restaurantCountry) {
      throw new Error("Missing required fields: restaurantName and restaurantCountry");
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Get Supabase client to fetch reviews
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch existing reviews for this restaurant
    const { data: reviews, error: reviewsError } = await supabase
      .from("reviews")
      .select("rating, comment")
      .eq("restaurant_name", restaurantName)
      .eq("restaurant_country", restaurantCountry)
      .order("created_at", { ascending: false })
      .limit(20);

    if (reviewsError) {
      console.error("Error fetching reviews:", reviewsError);
    }

    let prompt: string;
    
    if (reviews && reviews.length > 0) {
      const reviewTexts = reviews.map((r, i) => `Review ${i + 1} (${r.rating}/5 stars): "${r.comment}"`).join("\n");
      prompt = `Based on these user reviews for ${restaurantName} (a gluten-free restaurant in ${restaurantCity || ""}, ${restaurantCountry}), provide a brief one-sentence summary that captures the overall sentiment about celiac safety and food quality:

${reviewTexts}

Respond with only the summary sentence, focusing on whether reviewers found this place safe for people with celiac disease.`;
    } else {
      // No reviews yet - generate a helpful placeholder
      prompt = `Generate a brief one-sentence placeholder for ${restaurantName}, a gluten-free restaurant in ${restaurantCity || ""}, ${restaurantCountry}. The sentence should indicate that there are no user reviews yet and encourage visitors to be the first to share their experience. Keep it friendly and welcoming.`;
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { 
            role: "system", 
            content: "You are a helpful assistant that summarizes restaurant reviews for people with celiac disease. Keep responses concise, friendly, and focused on safety for celiacs." 
          },
          { role: "user", content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const summary = data.choices?.[0]?.message?.content || "No summary available.";

    return new Response(JSON.stringify({ summary }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating review summary:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        summary: "This restaurant has been reviewed by our community. Check the reviews below to learn about their experience."
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
