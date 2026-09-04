import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Award, BookOpen, CheckCircle, Clock, Croissant, Filter, Globe,
  MapPin, MessageCircle, Navigation, Package, Phone, Search, Shield, ShoppingCart,
  Star, Trophy, Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SEOHead } from "@/components/SEOHead";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { FindNearMeButton } from "@/components/city/FindNearMeButton";
import { nzSlug, type NZRestaurant, type NZCity } from "@/data/newZealandCities";

interface FAQItem {
  question: string;
  answer: string;
}

interface NewZealandCityPageProps {
  city: NZCity;
  intro: string;
  emoji: string;
  faqItems: FAQItem[];
  hideOverview?: boolean;
  heroImage?: string;
}

const getCeliacSafeBadge = (level: NZRestaurant["celiacSafe"]) =>
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

const getMenuTypeBadge = (type: NZRestaurant["menuType"]) =>
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

const NewZealandCityPage = ({ city, intro, emoji, faqItems, hideOverview }: NewZealandCityPageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilters, setMenuFilters] = useState<string[]>([]);
  const [safetyFilters, setSafetyFilters] = useState<string[]>([]);
  const [cuisineFilters, setCuisineFilters] = useState<string[]>([]);
  const [showAllCuisines, setShowAllCuisines] = useState(false);
  const [openFilterSections, setOpenFilterSections] = useState({
    kitchen: true,
    cuisine: true,
    badges: true,
  });

  const toggle = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const menuOptions = useMemo(
    () => [
      { value: "fully-gluten-free", label: "100% Gluten-Free", count: city.restaurants.filter((r) => r.menuType === "fully-gluten-free").length },
      { value: "mixed-menu", label: "GF Options Available", count: city.restaurants.filter((r) => r.menuType === "mixed-menu").length },
    ],
    [city.restaurants]
  );

  const safetyOptions = useMemo(
    () => [
      { value: "dedicated-facility", label: "Dedicated GF Facility", count: city.restaurants.filter((r) => r.celiacSafe === "dedicated-facility").length },
      { value: "protocols-in-place", label: "Celiac Protocols", count: city.restaurants.filter((r) => r.celiacSafe === "protocols-in-place").length },
    ],
    [city.restaurants]
  );

  const cuisineOptions = useMemo(() => {
    const counts = new Map<string, number>();
    city.restaurants.forEach((r) => r.cuisineTypes.forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)));
    return Array.from(counts.entries())
      .map(([label, count]) => ({ value: label, label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, [city.restaurants]);

  const pageTitle = `Gluten-Free Options in ${city.name}, New Zealand | Celiac-Safe Dining`;
  const description = `Browse verified gluten free options in ${city.name}, New Zealand: celiac-safe restaurants, bakeries and cafés with reviews, menu tips and directions.`;
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
        const matchesMenu = menuFilters.length === 0 || menuFilters.includes(r.menuType);
        const matchesSafety = safetyFilters.length === 0 || safetyFilters.includes(r.celiacSafe);
        const matchesCuisine = cuisineFilters.length === 0 || r.cuisineTypes.some((c) => cuisineFilters.includes(c));
        return matchesSearch && matchesMenu && matchesSafety && matchesCuisine;
      }),
    [city.restaurants, searchQuery, menuFilters, safetyFilters, cuisineFilters]
  );

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={description}
        canonical={`/gluten-free/new-zealand/${city.slug}`}
        schemaJson={schemaJson}
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/new-zealand" className="inline-flex items-center text-red-700 hover:text-red-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to New Zealand
            </Link>
          </div>
        </header>

        <section
          className={`relative text-white py-14 ${heroImage ? "" : "bg-gradient-to-r from-red-700 to-red-500"}`}
          style={heroImage ? { backgroundImage: `url('${heroImage}')`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-5xl mb-4 block">{emoji}</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Gluten-Free Restaurants in {city.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Verified celiac-safe spots, practical menu guidance, and trusted dining picks in {city.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <FindNearMeButton city={city.name} />
              <AddRestaurantDialog
                city={city.name}
                triggerClassName="border-white bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-red-700 flex-shrink-0" />
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
              <Utensils className="w-6 h-6 text-red-700" />
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
                <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white md:flex-shrink-0">
                  <Link to={`/gluten-free/new-zealand/${city.slug}/best-gluten-free-restaurants-in-${city.slug}`}>
                    View the Top 10
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12" id="verified-restaurants">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Verified Gluten-Free Restaurants in {city.name}
                </h2>
                <div className="grid gap-6">
                  {filtered.map((restaurant) => (
                    <Card
                      key={restaurant.name}
                      className={`overflow-hidden ${restaurant.featured ? "ring-2 ring-red-300" : ""}`}
                    >
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-2xl">{restaurant.icon}</span>
                            <Link
                              to={`/gluten-free/new-zealand/${city.slug}/${nzSlug(restaurant.name)}`}
                              className="text-xl font-bold text-gray-900 hover:text-red-700 hover:underline transition-colors"
                            >
                              {restaurant.name}
                            </Link>
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

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                            <span>{restaurant.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                            <span>{restaurant.hours}</span>
                          </div>
                          {restaurant.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                              <a href={`tel:${restaurant.phone}`} className="hover:text-red-700">
                                {restaurant.phone}
                              </a>
                            </div>
                          )}
                        </div>

                        {!hideOverview && <p className="text-gray-700 mb-4">{restaurant.overview}</p>}

                        {restaurant.menuHighlights && restaurant.menuHighlights.length > 0 && (
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

                        <div className="flex flex-wrap gap-3">
                          <Button
                            type="button"
                            className="bg-red-700 hover:bg-red-800"
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
                          <Link to={`/gluten-free/new-zealand/${city.slug}/${nzSlug(restaurant.name)}`}>
                            <Button type="button" variant="outline">
                              <BookOpen className="w-4 h-4 mr-2" />
                              View Menu
                            </Button>
                          </Link>
                        </div>

                        {restaurant.nearby && restaurant.nearby.length > 0 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Nearby:</h4>
                            <ul className="space-y-1 text-gray-700">
                              {restaurant.nearby.map((item) => (
                                <li key={`${restaurant.name}-nearby-${item.label}`}>
                                  <span className="font-bold">{item.label}:</span>{" "}
                                  {item.href ? (
                                    <Link to={item.href} className="text-red-700 hover:underline">
                                      {item.name}
                                    </Link>
                                  ) : (
                                    item.name
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <aside className="md:sticky md:top-4 md:self-start order-first md:order-last space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Search className="w-4 h-4 text-red-700" />
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
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Filter className="w-4 h-4 text-red-700" />
                      Filter Restaurants
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0 space-y-2">
                    {/* Kitchen Type */}
                    <div className="border-b last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenFilterSections((s) => ({ ...s, kitchen: !s.kitchen }))}
                        className="w-full flex items-center justify-between py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700"
                      >
                        <span>Kitchen Type</span>
                        <span className="text-gray-400">{openFilterSections.kitchen ? "−" : "+"}</span>
                      </button>
                      {openFilterSections.kitchen && (
                        <div className="pb-3 space-y-2">
                          {menuOptions.map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                              <Checkbox
                                checked={menuFilters.includes(opt.value)}
                                onCheckedChange={() => toggle(opt.value, menuFilters, setMenuFilters)}
                              />
                              <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                              <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{opt.count}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Cuisine */}
                    <div className="border-b last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenFilterSections((s) => ({ ...s, cuisine: !s.cuisine }))}
                        className="w-full flex items-center justify-between py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700"
                      >
                        <span>Cuisine</span>
                        <span className="text-gray-400">{openFilterSections.cuisine ? "−" : "+"}</span>
                      </button>
                      {openFilterSections.cuisine && (
                        <div className="pb-3 space-y-2">
                          {(showAllCuisines ? cuisineOptions : cuisineOptions.slice(0, 6)).map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                              <Checkbox
                                checked={cuisineFilters.includes(opt.value)}
                                onCheckedChange={() => toggle(opt.value, cuisineFilters, setCuisineFilters)}
                              />
                              <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1 truncate">{opt.label}</span>
                              <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{opt.count}</span>
                            </label>
                          ))}
                          {cuisineOptions.length > 6 && (
                            <button
                              type="button"
                              onClick={() => setShowAllCuisines(!showAllCuisines)}
                              className="text-sm text-red-700 hover:text-red-800 font-medium pt-1"
                            >
                              {showAllCuisines ? "Show less" : `Show all ${cuisineOptions.length} cuisines`}
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Badges */}
                    <div className="border-b last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenFilterSections((s) => ({ ...s, badges: !s.badges }))}
                        className="w-full flex items-center justify-between py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700"
                      >
                        <span>Badges</span>
                        <span className="text-gray-400">{openFilterSections.badges ? "−" : "+"}</span>
                      </button>
                      {openFilterSections.badges && (
                        <div className="pb-3 space-y-2">
                          {safetyOptions.map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                              <Checkbox
                                checked={safetyFilters.includes(opt.value)}
                                onCheckedChange={() => toggle(opt.value, safetyFilters, setSafetyFilters)}
                              />
                              <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                              <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{opt.count}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {(menuFilters.length > 0 || cuisineFilters.length > 0 || safetyFilters.length > 0) && (
                      <button
                        type="button"
                        onClick={() => {
                          setMenuFilters([]);
                          setCuisineFilters([]);
                          setSafetyFilters([]);
                        }}
                        className="text-sm text-red-700 hover:text-red-800 font-medium pt-2"
                      >
                        Clear all filters
                      </button>
                    )}

                    <p className="border-t pt-3 text-sm text-gray-600">Showing {filtered.length} of {city.restaurants.length}</p>
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
