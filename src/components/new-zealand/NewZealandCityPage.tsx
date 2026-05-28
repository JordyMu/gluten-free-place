import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Award, CheckCircle, Clock, Filter, Globe, MapPin,
  MessageCircle, Navigation, Phone, Search, Shield, Star,
  Utensils, Croissant, ShoppingCart, Package, Trophy,
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
import { SEOHead } from "@/components/SEOHead";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { nzSlug, type NZCity } from "@/data/newZealandCities";

interface FAQItem {
  question: string;
  answer: string;
}

interface NewZealandCityPageProps {
  city: NZCity;
  intro: string;
  emoji: string;
  faqItems: FAQItem[];
}

const getCeliacSafeBadge = (level: string) =>
  level === "dedicated-facility" ? (
    <Badge className="bg-green-100 text-green-800 border-green-300">
      <Shield className="w-3 h-3 mr-1" />
      Dedicated GF Facility
    </Badge>
  ) : (
    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
      <CheckCircle className="w-3 h-3 mr-1" />
      Celiac Protocols
    </Badge>
  );

const getMenuTypeBadge = (type: string) =>
  type === "fully-gluten-free" ? (
    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>
  ) : (
    <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>
  );

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const openExternalLink = (url: string) => {
  if (!url) return;
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalized, "_blank", "noopener,noreferrer");
};

const NewZealandCityPage = ({ city, intro, emoji, faqItems }: NewZealandCityPageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [safetyFilter, setSafetyFilter] = useState<string>("all");

  const pageTitle = `Gluten-Free Restaurants in ${city.name}, New Zealand | Celiac-Safe Guide 2026`;
  const description = `Find verified gluten-free restaurants in ${city.name}, New Zealand. Celiac-safe places with reviews, menu tips and directions.`;
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Gluten-Free Restaurants in ${city.name}, New Zealand`,
      description,
      url: `https://glutenfreeplace.org/gluten-free/new-zealand/${city.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  const filtered = useMemo(
    () =>
      city.restaurants.filter((r) => {
        const matchesSearch =
          searchQuery === "" ||
          r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.cuisineTypes.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesMenu = menuFilter === "all" || r.menuType === menuFilter;
        const matchesSafety = safetyFilter === "all" || r.celiacSafe === safetyFilter;
        return matchesSearch && matchesMenu && matchesSafety;
      }),
    [city.restaurants, searchQuery, menuFilter, safetyFilter]
  );

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={description}
        canonical={`/gluten-free/new-zealand/${city.slug}`}
        schemaJson={schemaJson}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/new-zealand" className="inline-flex items-center text-blue-700 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to New Zealand
            </Link>
          </div>
        </header>

        <section className="relative text-white py-14 bg-gradient-to-r from-blue-700 via-white/10 to-green-700">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-5xl mb-4 block">{emoji}</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Gluten-Free Restaurants in {city.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Verified celiac-safe spots, practical menu guidance, and trusted dining picks in {city.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">
                {city.restaurants.length} listed restaurants
              </Badge>
              <AddRestaurantDialog
                city={city.name}
                triggerClassName="border-white bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-blue-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Gluten-Free Dining in {city.name}
                    </h2>
                    <p className="text-gray-700">{intro}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-blue-700" />
              Browse by Category
            </h2>
            <p className="text-gray-600 mb-4">
              Find exactly what you're looking for with our curated category pages.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link to={`/gluten-free/new-zealand/${city.slug}/street-food`}>
                <Card className="border-red-200 bg-red-50/50 hover:shadow-md hover:border-red-400 transition cursor-pointer h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Utensils className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Street Food</div>
                      <div className="text-xs text-gray-600">Markets & food trucks</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={`/gluten-free/new-zealand/${city.slug}/bakeries`}>
                <Card className="border-amber-200 bg-amber-50/50 hover:shadow-md hover:border-amber-400 transition cursor-pointer h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Croissant className="w-6 h-6 text-amber-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Bakeries</div>
                      <div className="text-xs text-gray-600">Fresh bread & pastries</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={`/gluten-free/new-zealand/${city.slug}/grocery-stores`}>
                <Card className="border-emerald-200 bg-emerald-50/50 hover:shadow-md hover:border-emerald-400 transition cursor-pointer h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Grocery Stores</div>
                      <div className="text-xs text-gray-600">Supermarkets & shops</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={`/gluten-free/new-zealand/${city.slug}/gluten-free-products`}>
                <Card className="border-purple-200 bg-purple-50/50 hover:shadow-md hover:border-purple-400 transition cursor-pointer h-full">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Package className="w-6 h-6 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">GF Products</div>
                      <div className="text-xs text-gray-600">Specialty GF items</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          <section className="mb-10">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Best Gluten-Free Restaurants in {city.name}
                    </h2>
                    <p className="text-gray-700">
                      Our editorial top 10 celiac-safe picks across {city.name} — ranked by safety, reviews and quality.
                    </p>
                  </div>
                </div>
                <Button
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  onClick={() => {
                    document.getElementById("verified-restaurants")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View the Top 10
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12" id="verified-restaurants">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Verified Gluten-Free Restaurants in {city.name}
                </h2>
                <div className="grid gap-6">
                  {filtered.map((restaurant) => (
                    <Card
                      key={restaurant.name}
                      className={`overflow-hidden ${restaurant.featured ? "ring-2 ring-blue-300" : ""}`}
                    >
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-2xl">{restaurant.icon}</span>
                            <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                            {restaurant.featured && (
                              <Badge className="bg-amber-100 text-amber-800 border-amber-300">Featured</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{restaurant.specialty}</p>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          {renderStarRating(restaurant.rating)}
                          <span className="text-sm text-gray-500">({restaurant.reviewCount} reviews)</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {restaurant.cuisineTypes.map((cuisine) => (
                            <Badge key={cuisine} variant="outline">{cuisine}</Badge>
                          ))}
                          {getCeliacSafeBadge(restaurant.celiacSafe)}
                          {getMenuTypeBadge(restaurant.menuType)}
                        </div>

                        <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                        {restaurant.menuHighlights.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                            <div className="flex flex-wrap gap-2">
                              {restaurant.menuHighlights.map((item) => (
                                <Badge key={item} variant="secondary" className="text-sm">{item}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {restaurant.proTip && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4 text-amber-700" />
                              <span className="font-medium text-amber-800">Pro Tip:</span>
                              <span className="text-amber-700">{restaurant.proTip}</span>
                            </div>
                          </div>
                        )}

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{restaurant.address}</span>
                          </div>
                          {restaurant.hours && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span>{restaurant.hours}</span>
                            </div>
                          )}
                          {restaurant.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <a href={`tel:${restaurant.phone}`} className="hover:text-blue-700">
                                {restaurant.phone}
                              </a>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button
                            type="button"
                            className="bg-blue-700 hover:bg-blue-800"
                            onClick={() => openExternalLink(restaurant.directionsUrl)}
                          >
                            <Navigation className="w-4 h-4 mr-2" />
                            Get Directions
                          </Button>
                          {restaurant.website && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => openExternalLink(restaurant.website)}
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <aside className="lg:sticky lg:top-4 lg:self-start space-y-4 order-first lg:order-last">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Search className="w-4 h-4 text-blue-700" />
                      Search Restaurants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                      <Input
                        className="pl-9"
                        placeholder="Search by name or cuisine"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Filter className="w-4 h-4 text-blue-700" />
                      Filter by Menu Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={menuFilter} onValueChange={setMenuFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All menu types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Menu Types</SelectItem>
                        <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                        <SelectItem value="mixed-menu">GF Options Available</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Filter className="w-4 h-4 text-blue-700" />
                      Filter by Safety
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select value={safetyFilter} onValueChange={setSafetyFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All safety levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Safety Levels</SelectItem>
                        <SelectItem value="dedicated-facility">Dedicated GF Facility</SelectItem>
                        <SelectItem value="protocols-in-place">Celiac Protocols</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="mt-3 text-sm text-gray-600">
                      Showing {filtered.length} of {city.restaurants.length}
                    </p>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </section>

          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <p className="text-gray-600">Gluten-free dining in {city.name}</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
};

export default NewZealandCityPage;
