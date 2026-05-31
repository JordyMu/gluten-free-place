import { useState, useMemo, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation,
  Heart, MessageCircle, Award, Shield, Search, Plus, Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";
import { cities } from "@/pages/Italy";

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getExternalLink = (raw?: string) => {
  if (!raw) return undefined;
  return raw.startsWith("http") ? raw : `https://${raw}`;
};

const getCeliacSafeBadge = (level?: string) => {
  if (level === "dedicated-facility")
    return (
      <Badge className="bg-green-100 text-green-800 border-green-300">
        <Shield className="w-3 h-3 mr-1" />Dedicated GF Facility
      </Badge>
    );
  return (
    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
      <CheckCircle className="w-3 h-3 mr-1" />Careful Handling
    </Badge>
  );
};

const getMenuTypeBadge = (type?: string) => {
  if (type === "fully-gluten-free")
    return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
  return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
};

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const ItalyCityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = cities.find((c) => c.slug === slug);

  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const faqItems = useMemo(() => {
    if (!city) return [];
    return [
      {
        question: `Is ${city.name} a good destination for gluten-free travelers?`,
        answer: `Yes! ${city.name} has a strong celiac-aware dining scene with dedicated gluten-free pizzerias, trattorias, bakeries and gelaterias. Italy has high celiac awareness nationwide, and many restaurants are AIC-certified.`,
      },
      {
        question: `Are there any 100% gluten-free restaurants in ${city.name}?`,
        answer: `Yes — several venues listed below are completely dedicated gluten-free facilities, meaning zero cross-contamination risk for celiacs.`,
      },
      {
        question: `How do I communicate my celiac needs in ${city.name}?`,
        answer: `Italian restaurants are generally well-informed about celiac disease (celiachia). Saying "sono celiaco/a" is widely understood. Look for the AIC (Associazione Italiana Celiachia) logo for certified-safe venues.`,
      },
      {
        question: `What traditional Italian foods are naturally gluten-free?`,
        answer: `Many Italian dishes are naturally GF: risotto, polenta, grilled meats and fish, fresh salads, prosciutto, most cheeses, and gelato made without cones. Always confirm preparation methods.`,
      },
    ];
  }, [city]);

  const filteredRestaurants = useMemo(() => {
    if (!city) return [];
    return city.restaurants.filter((r) => {
      const matchesSafety = safetyFilter === "all" || r.celiacSafe === safetyFilter;
      const matchesMenu = menuFilter === "all" || r.menuType === menuFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        q === "" ||
        r.name.toLowerCase().includes(q) ||
        (r.cuisineTypes || []).some((c) => c.toLowerCase().includes(q));
      return matchesSafety && matchesMenu && matchesSearch;
    });
  }, [city, safetyFilter, menuFilter, searchQuery]);

  if (!city) return <Navigate to="/italy" replace />;

  return (
    <>
      <SEOHead
        title={`Gluten-Free Restaurants in ${city.name} | Celiac-Safe Dining 2026`}
        description={`Find verified gluten-free restaurants in ${city.name}, Italy. Hours, phone numbers, websites and celiac-safe ratings.`}
        canonical={`/gluten-free/italy/${city.slug}`}
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/italy" className="inline-flex items-center text-orange-600 hover:text-orange-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Italy
            </Link>
            <UserMenuSafe />
          </div>
        </header>

        {/* Hero */}
        <section
          className="relative text-white py-16"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=1600&q=80)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-6xl mb-4 block">🇮🇹</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Safe Gluten-Free Restaurants in {city.name}
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Real reviews from gluten-free diners. Verified listings. Zero guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent !text-white hover:bg-white/10"
                onClick={() => {
                  document.getElementById("restaurants")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Search className="w-5 h-5 mr-2" />
                Browse {city.restaurants.length} Restaurants
              </Button>
              <AddRestaurantDialog
                city={city.name}
                triggerClassName="border-white bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          {/* Intro */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Gluten-Free Dining in {city.name}
                    </h2>
                    <p className="text-gray-700">{city.description}. Italy is one of the most celiac-aware countries in the world, and {city.name} offers an impressive variety of dedicated GF pizzerias, trattorias, bakeries and gelaterias. Our verified listings include opening hours, contact details and community reviews to help you dine with confidence.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {(city.slug === "rome" || city.slug === "florence") && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                🍽️ Browse by Category
              </h2>
              <p className="text-gray-600 mb-4">
                Find exactly what you're looking for with our curated category pages.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Link to={`/gluten-free/italy/${city.slug}/street-food`}>
                  <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
                    <CardContent className="p-2 flex items-center gap-2">
                      <span className="text-lg">🍢</span>
                      <div>
                        <h3 className="text-sm font-medium text-orange-900">Street Food</h3>
                        <p className="text-orange-700 text-[11px]">Markets & food trucks</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <Link to={`/gluten-free/italy/${city.slug}/bakeries`}>
                  <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
                    <CardContent className="p-2 flex items-center gap-2">
                      <span className="text-lg">🥐</span>
                      <div>
                        <h3 className="text-sm font-medium text-amber-900">Bakeries</h3>
                        <p className="text-amber-700 text-[11px]">Fresh bread & pastries</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <Link to={`/gluten-free/italy/${city.slug}/grocery-stores`}>
                  <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
                    <CardContent className="p-2 flex items-center gap-2">
                      <span className="text-lg">🛒</span>
                      <div>
                        <h3 className="text-sm font-medium text-green-900">Grocery Stores</h3>
                        <p className="text-green-700 text-[11px]">Supermarkets & shops</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <Link to={`/gluten-free/italy/${city.slug}/gluten-free-products`}>
                  <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50">
                    <CardContent className="p-2 flex items-center gap-2">
                      <span className="text-lg">🛍️</span>
                      <div>
                        <h3 className="text-sm font-medium text-violet-900">GF Products</h3>
                        <p className="text-violet-700 text-[11px]">Specialty GF items</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </section>
          )}

          {(city.slug === "rome" || city.slug === "florence") && (
            <section className="mb-8">
              <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
                <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-1">
                        Best Gluten-Free Restaurants in {city.name}
                      </h2>
                      <p className="text-gray-700">
                        Our editorial top 10 celiac-safe picks across {city.name} — ranked by safety, reviews and quality.
                      </p>
                    </div>
                  </div>
                  <Link to={`/gluten-free/italy/${city.slug}/best-gluten-free-restaurants-in-${city.slug}`}>
                    <Button className="bg-orange-600 hover:bg-orange-700 whitespace-nowrap">
                      View the Top 10
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Filters */}
          <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Verified Gluten-Free Restaurants in {city.name}
            </h2>
            <div className="grid gap-6">
              {filteredRestaurants.map((r, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              {r.icon && <span className="text-2xl">{r.icon}</span>}
                              <Link
                                to={`/gluten-free/italy/${city.slug}/${r.name
                                  .toLowerCase()
                                  .normalize("NFD")
                                  .replace(/[\u0300-\u036f]/g, "")
                                  .replace(/[^a-z0-9]+/g, "-")
                                  .replace(/^-+|-+$/g, "")}`}
                                className="text-xl font-bold text-gray-900 hover:text-orange-600 hover:underline"
                              >
                                {r.name}
                              </Link>
                            </div>
                            {r.rating !== undefined && (
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                {renderStarRating(r.rating)}
                                {r.reviewCount !== undefined && (
                                  <span className="text-gray-500 text-sm">({r.reviewCount} reviews)</span>
                                )}
                              </div>
                            )}
                          </div>
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {(r.cuisineTypes || []).map((c, i) => (
                            <Badge key={i} variant="outline">{c}</Badge>
                          ))}
                          {getCeliacSafeBadge(r.celiacSafe)}
                          {getMenuTypeBadge(r.menuType)}
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{r.address}</span>
                          </div>
                          {r.hours && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span>{r.hours}</span>
                            </div>
                          )}
                          {r.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <a href={`tel:${r.phone.replace(/\s/g, "")}`} className="hover:text-orange-600">
                                {r.phone}
                              </a>
                            </div>
                          )}
                        </div>

                        {r.overview && <p className="text-gray-700 mb-4">{r.overview}</p>}

                        {r.menuHighlights && r.menuHighlights.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                            <div className="flex flex-wrap gap-2">
                              {r.menuHighlights.map((m, i) => (
                                <Badge key={i} variant="secondary" className="text-sm">{m}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {r.proTip && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4 text-amber-600" />
                              <span className="font-medium text-amber-800">Pro Tip:</span>
                              <span className="text-amber-700">{r.proTip}</span>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-3 flex-wrap">
                          {r.directionsUrl && (
                            <Button
                              onClick={() => openExternalLink(r.directionsUrl!)}
                              className="bg-orange-600 hover:bg-orange-700"
                            >
                              <Navigation className="w-4 h-4 mr-2" />
                              Get Directions
                            </Button>
                          )}
                          {r.website && (
                            <Button
                              variant="outline"
                              onClick={() => openExternalLink(getExternalLink(r.website)!)}
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </Button>
                          )}
                        </div>

                        <div className="mt-6 pt-6 border-t">
                          <RestaurantReviews
                            restaurantName={r.name}
                            restaurantCountry="Italy"
                            restaurantCity={city.name}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            </div>
            <aside className="lg:sticky lg:top-4 lg:self-start order-first lg:order-last space-y-4">
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-gray-900">Search Restaurants</h3>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search by name or cuisine"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Filter className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Filter by Menu Type</h3>
                  </div>
                  <Select value={menuFilter} onValueChange={setMenuFilter}>
                    <SelectTrigger className="bg-white"><SelectValue placeholder="All Menu Types" /></SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Menu Types</SelectItem>
                      <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                      <SelectItem value="mixed-menu">GF Options Available</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Filter className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Filter by Safety</h3>
                  </div>
                  <Select value={safetyFilter} onValueChange={setSafetyFilter}>
                    <SelectTrigger className="bg-white"><SelectValue placeholder="All Safety Levels" /></SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Safety Levels</SelectItem>
                      <SelectItem value="dedicated-facility">🛡️ Dedicated GF Facility</SelectItem>
                      <SelectItem value="protocols-in-place">✓ Careful Handling</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="mt-4 text-sm text-gray-500">
                    Showing {filteredRestaurants.length} of {city.restaurants.length}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

          {/* FAQ */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <p className="text-gray-600">Everything you need to know about gluten-free dining in {city.name}</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <section>
            <Card className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Know a Great Gluten-Free Spot in {city.name}?</h2>
                <p className="text-orange-100 mb-6">
                  Help fellow celiacs discover safe dining options. Add your favorite restaurant to our directory.
                </p>
                <AddRestaurantDialog city={city.name} />
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
};

// Lazy import wrapper to keep header clean
import { UserMenu } from "@/components/layout/UserMenu";
const UserMenuSafe = () => <UserMenu />;

export default ItalyCityPage;
