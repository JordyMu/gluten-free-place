import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, MapPin, Star, Clock, Phone, Globe, Navigation, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";
import { cities } from "@/pages/Italy";

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getExternalLink = (raw?: string) => {
  if (!raw) return undefined;
  if (raw.startsWith("http")) return raw;
  return `https://${raw}`;
};

const ItalyCityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = cities.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!city) return <Navigate to="/italy" replace />;

  const avgRating = city.restaurants.length
    ? Number((city.restaurants.reduce((s, r) => s + (r.rating || 0), 0) / city.restaurants.length).toFixed(1))
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Gluten-Free Restaurants in ${city.name}, Italy | Celiac-Safe Guide`}
        description={`${city.restaurants.length} verified gluten-free restaurants in ${city.name}, Italy. Hours, phone numbers, websites and celiac-safe ratings.`}
        canonicalUrl={`https://glutenfreeplaces.com/gluten-free/italy/${city.slug}`}
      />

      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/italy" className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium">
            <ArrowLeft className="h-4 w-4" />
            Back to Italy
          </Link>
          <UserMenu />
        </div>
      </header>

      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=1600&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {city.emoji} {city.name}, Italy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gluten-Free Restaurants in {city.name}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">{city.description}</p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {city.restaurants.length} places
            </div>
            {avgRating > 0 && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {avgRating} avg rating
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6">
            {city.restaurants.map((r, i) => (
              <Card key={i} className="overflow-hidden shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{r.icon || "🍽️"}</span>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{r.name}</h2>
                        {r.specialty && <p className="text-sm text-gray-600 mt-1">{r.specialty}</p>}
                      </div>
                    </div>
                    {r.rating && (
                      <div className="flex items-center gap-1 bg-green-50 text-green-800 px-3 py-1 rounded-full">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{r.rating}</span>
                        {r.reviewCount && <span className="text-xs text-gray-500">({r.reviewCount})</span>}
                      </div>
                    )}
                  </div>

                  {r.overview && <p className="text-gray-700 mb-4 leading-relaxed">{r.overview}</p>}

                  <div className="grid sm:grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-start gap-2 text-gray-700">
                      <MapPin className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>{r.address}</span>
                    </div>
                    {r.hours && (
                      <div className="flex items-start gap-2 text-gray-700">
                        <Clock className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                        <span>{r.hours}</span>
                      </div>
                    )}
                    {r.phone && (
                      <div className="flex items-start gap-2 text-gray-700">
                        <Phone className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                        <a href={`tel:${r.phone.replace(/\s/g, "")}`} className="hover:text-green-700">
                          {r.phone}
                        </a>
                      </div>
                    )}
                    {r.website && (
                      <div className="flex items-start gap-2 text-gray-700">
                        <Globe className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                        <button
                          onClick={() => openExternalLink(getExternalLink(r.website)!)}
                          className="hover:text-green-700 text-left break-all"
                        >
                          {r.website}
                        </button>
                      </div>
                    )}
                  </div>

                  {r.menuHighlights && r.menuHighlights.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Menu Highlights</p>
                      <div className="flex flex-wrap gap-2">
                        {r.menuHighlights.map((m) => (
                          <Badge key={m} variant="secondary" className="bg-green-50 text-green-700">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {m}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {r.proTip && (
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded mb-4">
                      <p className="text-sm text-amber-900">
                        <span className="font-semibold">💡 Pro Tip:</span> {r.proTip}
                      </p>
                    </div>
                  )}

                  {r.directionsUrl && (
                    <Button
                      onClick={() => openExternalLink(r.directionsUrl!)}
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <AddRestaurantDialog city={city.name} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItalyCityPage;
