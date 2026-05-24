import { Link } from "react-router-dom";
import { ArrowLeft, Award, CheckCircle, MapPin, Navigation, Shield, Star } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { vancouverRestaurants } from "@/data/vancouverRestaurants";

const openExternalLink = (url: string) => {
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalizedUrl, "_blank", "noopener,noreferrer");
};

const top = [...vancouverRestaurants]
  .sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  })
  .slice(0, 10);

const pageTitle = "Best Gluten-Free Restaurants in Vancouver (2026) | Top Celiac-Safe Picks";
const description =
  "The best gluten-free restaurants in Vancouver for celiacs in 2026 — dedicated GF bakeries, cafés and restaurants ranked by safety, reviews and quality.";

const schemaJson = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Gluten-Free Restaurants in Vancouver",
    description,
    url: "https://glutenfreeplace.org/gluten-free/canada/vancouver/best",
    itemListElement: top.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.name,
      url: `https://glutenfreeplace.org/gluten-free/canada/vancouver/${r.slug}`,
    })),
  },
];

const GlutenFreeVancouverBest = () => (
  <>
    <SEOHead
      title={pageTitle}
      description={description}
      canonical="/gluten-free/canada/vancouver/best"
      schemaJson={schemaJson}
    />
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/canada/vancouver" className="inline-flex items-center text-red-700 hover:text-red-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Vancouver
          </Link>
        </div>
      </header>

      <section className="relative text-white py-14 bg-gradient-to-r from-red-700 to-red-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-5xl mb-4 block">🏆</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Best Gluten-Free Restaurants in Vancouver</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Our top celiac-safe picks across Vancouver — ranked by safety, reviews and quality (updated 2026).
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-10">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-red-700 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">How we rank Vancouver GF restaurants</h2>
                  <p className="text-gray-700">
                    We prioritise dedicated 100% gluten-free venues, then celiac-aware kitchens with strong cross-contamination
                    protocols, traveler reviews and consistent ratings. Every spot below is verified by the Gluten-Free Places team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Gluten-Free Restaurants in Vancouver</h2>
          <div className="grid gap-6">
            {top.map((r, i) => (
              <Card key={r.slug} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-3 flex-wrap">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-700 text-white font-bold text-lg flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-2xl">{r.icon}</span>
                        <Link
                          to={`/gluten-free/canada/vancouver/${r.slug}`}
                          className="text-xl font-bold text-gray-900 hover:text-red-700 transition-colors"
                        >
                          {r.name}
                        </Link>
                      </div>
                      <p className="text-sm text-gray-500">{r.specialty}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-4 h-4 ${idx < Math.floor(r.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="ml-1 font-semibold">{r.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({r.reviewCount} reviews)</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {r.celiacSafe === "dedicated-facility" ? (
                      <Badge className="bg-green-100 text-green-800 border-green-300">
                        <Shield className="w-3 h-3 mr-1" /> Dedicated GF Facility
                      </Badge>
                    ) : (
                      <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                        <CheckCircle className="w-3 h-3 mr-1" /> Celiac Protocols
                      </Badge>
                    )}
                    {r.menuType === "fully-gluten-free" ? (
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>
                    ) : (
                      <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4">{r.overview}</p>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{r.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      type="button"
                      className="bg-red-700 hover:bg-red-800"
                      onClick={() => openExternalLink(r.directionsUrl)}
                    >
                      <Navigation className="w-4 h-4 mr-2" /> Get Directions
                    </Button>
                    <Link to={`/gluten-free/canada/vancouver/${r.slug}`}>
                      <Button type="button" variant="outline">View details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 text-center">
          <Link to="/gluten-free/canada/vancouver" className="text-red-700 hover:text-red-800 font-medium">
            ← See all gluten-free restaurants in Vancouver
          </Link>
        </section>
      </main>
    </div>
  </>
);

export default GlutenFreeVancouverBest;
