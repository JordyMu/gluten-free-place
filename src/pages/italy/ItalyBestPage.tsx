import { Link, Navigate } from "react-router-dom";
import { ArrowLeft, Award, CheckCircle, MapPin, Navigation, Shield, Star } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cities } from "@/pages/Italy";

const openExternalLink = (url: string) => {
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalizedUrl, "_blank", "noopener,noreferrer");
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

interface Props {
  citySlug: string;
}

const ItalyBestPage = ({ citySlug }: Props) => {
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return <Navigate to="/italy" replace />;

  const top = [...city.restaurants]
    .sort((a, b) => {
      const ra = a.rating ?? 0;
      const rb = b.rating ?? 0;
      if (rb !== ra) return rb - ra;
      return (b.reviewCount ?? 0) - (a.reviewCount ?? 0);
    })
    .slice(0, 10);

  const description = `The best gluten-free restaurants in ${city.name} for celiacs in 2026 — dedicated GF venues, trattorias and bakeries ranked by safety, reviews and quality.`;

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Best Gluten-Free Restaurants in ${city.name}`,
      description,
      url: `https://glutenfreeplace.org/gluten-free/italy/${city.slug}/best`,
      itemListElement: top.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: r.name,
        url: `https://glutenfreeplace.org/gluten-free/italy/${city.slug}/${slugify(r.name)}`,
      })),
    },
  ];

  return (
    <>
      <SEOHead
        title={`Best Gluten-Free Restaurants in ${city.name} (2026) | Top 10 Celiac-Safe Picks`}
        description={description}
        canonical={`/gluten-free/italy/${city.slug}/best`}
        schemaJson={schemaJson}
      />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to={`/gluten-free/italy/${city.slug}`} className="inline-flex items-center text-orange-600 hover:text-orange-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {city.name}
            </Link>
          </div>
        </header>

        <section
          className="relative text-white py-14 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-5xl mb-4 block">🏆</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Best Gluten-Free Restaurants in {city.name}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Our top 10 celiac-safe picks across {city.name} — ranked by safety, reviews and quality (updated 2026).
            </p>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-orange-50 to-green-50 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">How we rank {city.name} GF restaurants</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Top 10 Gluten-Free Restaurants in {city.name}</h2>
            <div className="grid gap-6">
              {top.map((r, i) => {
                const rSlug = slugify(r.name);
                return (
                  <Card key={rSlug} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-3 flex-wrap">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white font-bold text-lg flex-shrink-0">
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {r.icon && <span className="text-2xl">{r.icon}</span>}
                            <Link
                              to={`/gluten-free/italy/${city.slug}/${rSlug}`}
                              className="text-xl font-bold text-gray-900 hover:text-orange-600 hover:underline transition-colors"
                            >
                              {r.name}
                            </Link>
                          </div>
                          {r.specialty && <p className="text-sm text-gray-500">{r.specialty}</p>}
                        </div>
                      </div>

                      {r.rating !== undefined && (
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                className={`w-4 h-4 ${idx < Math.floor(r.rating!) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                            <span className="ml-1 font-semibold">{r.rating}</span>
                          </div>
                          {r.reviewCount !== undefined && (
                            <span className="text-sm text-gray-500">({r.reviewCount} reviews)</span>
                          )}
                        </div>
                      )}

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

                      {r.overview && <p className="text-gray-700 mb-4">{r.overview}</p>}

                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{r.address}</span>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {r.directionsUrl && (
                          <Button
                            type="button"
                            className="bg-orange-600 hover:bg-orange-700"
                            onClick={() => openExternalLink(r.directionsUrl!)}
                          >
                            <Navigation className="w-4 h-4 mr-2" /> Get Directions
                          </Button>
                        )}
                        <Link to={`/gluten-free/italy/${city.slug}/${rSlug}`}>
                          <Button type="button" variant="outline">View details</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="mb-12 text-center">
            <Link to={`/gluten-free/italy/${city.slug}`} className="text-orange-600 hover:text-orange-700 font-medium">
              ← See all gluten-free restaurants in {city.name}
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default ItalyBestPage;
