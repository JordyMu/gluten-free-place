import { useEffect, useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, Star, ArrowLeft, Globe, Shield, CheckCircle, Clock, Phone, ExternalLink, Navigation, Trophy, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";
import { spainRestaurants, slugifyRestaurant, type SpainRestaurant } from "@/pages/Spain";

const restaurantPath = (name: string) => `/spain/restaurant/${slugifyRestaurant(name)}`;

const CITY_META: Record<string, { name: string; image: string; tagline: string }> = {
  barcelona: {
    name: "Barcelona",
    image: "photo-1583422409516-2895a77efded",
    tagline: "Catalonia's capital — dedicated GF pizzerias, bakeries, brunch spots and tapas bars.",
  },
  madrid: {
    name: "Madrid",
    image: "photo-1543783207-ec64e4d95325",
    tagline: "Spain's vibrant capital with FACE-certified trattorias, pastry shops and tabernas.",
  },
  valencia: {
    name: "Valencia",
    image: "photo-1599930113854-d6d7fd521f10",
    tagline: "Mediterranean city famous for naturally GF paella, artisan gelato and beach cafés.",
  },
  seville: {
    name: "Seville",
    image: "photo-1559682468-a6a29e7d9517",
    tagline: "Andalusian gem with dedicated celiac bakeries and tapas-friendly kitchens.",
  },
};

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getExternalLink = (raw?: string) => {
  if (!raw) return undefined;
  return raw.startsWith("http") ? raw : `https://${raw}`;
};

const celiacBadge = (level: SpainRestaurant["celiacSafe"]) =>
  level === "dedicated-facility" ? (
    <Badge className="bg-green-100 text-green-800 border-green-300 text-xs">
      <Shield className="w-3 h-3 mr-1" />Dedicated GF Facility
    </Badge>
  ) : (
    <Badge className="bg-blue-100 text-blue-800 border-blue-300 text-xs">
      <CheckCircle className="w-3 h-3 mr-1" />Celiac Protocols
    </Badge>
  );

const menuTypeBadge = (type: SpainRestaurant["menuType"]) =>
  type === "fully-gluten-free" ? (
    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">🥖 Fully Gluten-Free</Badge>
  ) : (
    <Badge className="bg-violet-100 text-violet-800 border-violet-200 text-xs">🍽️ Mixed Menu</Badge>
  );

const SpainCityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? CITY_META[slug.toLowerCase()] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const restaurants = useMemo(() => {
    if (!meta) return [];
    return spainRestaurants
      .filter((r) => r.city.toLowerCase() === meta.name.toLowerCase())
      .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
  }, [meta]);

  if (!meta) return <Navigate to="/spain" replace />;

  return (
    <>
      <SEOHead
        title={`Gluten-Free Restaurants in ${meta.name} | Celiac-Safe Dining Guide`}
        description={`Discover FACE-certified gluten-free restaurants in ${meta.name}, Spain — dedicated GF venues, bakeries and celiac-aware kitchens with verified safety information.`}
        canonical={`/spain/${slug}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                Gluten-Free Places
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</Link>
              <Link to="/spain" className="text-gray-700 hover:text-red-600 transition-colors">Spain</Link>
              <Link to="/countries" className="text-gray-700 hover:text-red-600 transition-colors">Countries</Link>
              <UserMenu />
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <img
            src={`https://images.unsplash.com/${meta.image}?auto=format&fit=crop&w=1600&q=80`}
            alt={`Gluten-free dining in ${meta.name}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Link to="/spain" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Spain
            </Link>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              {restaurants.length} Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free Restaurants in {meta.name}
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              {meta.tagline}
            </p>
            <AddRestaurantDialog
              city={meta.name}
              triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10"
            />
          </div>
        </section>

        {/* Browse by Category + Best Restaurants (Barcelona) */}
        {slug?.toLowerCase() === "barcelona" && (
          <section className="py-10">
            <div className="container mx-auto px-4 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🍽️ Browse by Category
                </h2>
                <p className="text-gray-600 mb-4">
                  Find exactly what you're looking for with our curated category pages.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
                    <CardContent className="p-2 flex items-center gap-2">
                      <span className="text-lg">🍢</span>
                      <div>
                        <h3 className="text-sm font-medium text-orange-900">Street Food</h3>
                        <p className="text-orange-700 text-[11px]">Markets & food trucks</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
                    <CardContent className="p-2 flex items-center gap-2">
                      <span className="text-lg">🥐</span>
                      <div>
                        <h3 className="text-sm font-medium text-amber-900">Bakeries</h3>
                        <p className="text-amber-700 text-[11px]">Fresh bread & pastries</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
                    <CardContent className="p-2 flex items-center gap-2">
                      <span className="text-lg">🛒</span>
                      <div>
                        <h3 className="text-sm font-medium text-green-900">Grocery Stores</h3>
                        <p className="text-green-700 text-[11px]">Supermarkets & shops</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50">
                    <CardContent className="p-2 flex items-center gap-2">
                      <span className="text-lg">🛍️</span>
                      <div>
                        <h3 className="text-sm font-medium text-violet-900">GF Products</h3>
                        <p className="text-violet-700 text-[11px]">Specialty GF items</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Barcelona</h2>
                      <p className="text-gray-700">Our editorial top 10 celiac-safe picks across Barcelona — ranked by safety, reviews and quality.</p>
                    </div>
                  </div>
                  <a href="#all-restaurants" className="md:flex-shrink-0">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Restaurants */}
        <section id="all-restaurants" className="py-16">

          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                <MapPin className="h-4 w-4 mr-2" />
                Verified Listings
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                All Gluten-Free Restaurants in {meta.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sorted by rating and reviews. Every venue is verified for celiac safety.
              </p>
            </div>

            {restaurants.length === 0 ? (
              <p className="text-center text-gray-500">No restaurants listed yet. Check back soon.</p>
            ) : (
              <div className="max-w-3xl mx-auto space-y-5">
                {restaurants.map((r, index) => (
                  <Card key={r.name} className="hover:shadow-xl transition-all duration-200 border border-gray-100 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                          <span className="text-2xl">{r.icon}</span>
                          <Link to={restaurantPath(r.name)} className="hover:text-red-600 transition-colors underline-offset-4 hover:underline">
                            {r.name}
                          </Link>
                          {index < 3 && (
                            <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs ml-1">
                              Top {index + 1}
                            </Badge>
                          )}
                        </h3>
                        <p className="text-gray-600 mt-1">{r.specialty}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {celiacBadge(r.celiacSafe)}
                        {menuTypeBadge(r.menuType)}
                        {r.cuisineTypes.map((c) => (
                          <Badge key={c} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                            {c}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(r.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-gray-900">{r.rating}</span>
                        <span className="text-sm text-gray-500">({r.reviewCount} reviews)</span>
                      </div>

                      <div className="space-y-1.5 text-sm text-gray-700 mb-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                          <span>{r.address}</span>
                        </div>
                        {r.hours && (
                          <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                            <span>{r.hours}</span>
                          </div>
                        )}
                        {r.phone && (
                          <div className="flex items-start gap-2">
                            <Phone className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                            <span>{r.phone}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Link to={restaurantPath(r.name)}>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                          >
                            View Details
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openExternalLink(r.directionsUrl)}
                        >
                          <Navigation className="w-4 h-4 mr-1" />
                          Directions
                        </Button>
                        {r.website && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => openExternalLink(getExternalLink(r.website)!)}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Website
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SpainCityPage;
