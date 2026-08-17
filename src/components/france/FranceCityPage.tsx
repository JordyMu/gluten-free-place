import { useMemo, useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft, Award, BookOpen, CheckCircle, Clock, Filter, Globe, MapPin, MessageCircle, Navigation, Phone, Search, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { FindNearMeButton } from "@/components/city/FindNearMeButton";
import { RelatedCities } from "@/components/internal-linking/RelatedCities";
import type { Restaurant } from "@/data/capeTownRestaurants";

interface FAQItem {
  question: string;
  answer: string;
}

interface FranceCityPageProps {
  cityName: string;
  citySlug: string;
  emoji: string;
  intro: string;
  restaurants: Restaurant[];
  faqItems: FAQItem[];
  extraSection?: React.ReactNode;
}

const getCeliacSafeBadge = (level: Restaurant["celiacSafe"]) => {
  if (level === "dedicated-facility") {
    return (
      <Badge className="bg-green-100 text-green-800 border-green-300">
        <Shield className="w-3 h-3 mr-1" />
        Dedicated GF Facility
      </Badge>
    );
  }
  return (
    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
      <CheckCircle className="w-3 h-3 mr-1" />
      Celiac Protocols
    </Badge>
  );
};

const getMenuTypeBadge = (type: Restaurant["menuType"]) => {
  if (type === "fully-gluten-free") {
    return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
  }
  return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
};

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const openExternalLink = (url: string) => {
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalizedUrl, "_blank", "noopener,noreferrer");
};

const FranceCityPage = ({ cityName, citySlug, emoji, intro, restaurants, faqItems, extraSection }: FranceCityPageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilters, setMenuFilters] = useState<string[]>([]);
  const [safetyFilters, setSafetyFilters] = useState<string[]>([]);
  const [cuisineFilters, setCuisineFilters] = useState<string[]>([]);
  const [showAllCuisines, setShowAllCuisines] = useState(false);
  const [openFilterSections, setOpenFilterSections] = useState({ kitchen: true, cuisine: true, badges: true });

  const toggle = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const metaDescriptionText = `Browse verified gluten free options in ${cityName}, France: celiac-safe restaurants, bakeries and cafés with reviews, menu tips and directions.`;
  const pageTitle = `Gluten-Free Options in ${cityName}, France | Celiac-Safe Dining`;
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Gluten-Free Options in ${cityName}, France`,
      description: metaDescriptionText,
      url: `https://glutenfreeplace.org/gluten-free/france/${citySlug}`,
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

  const cuisineOptions = useMemo(() => {
    const counts = new Map<string, number>();
    restaurants.forEach((r) => (r.cuisineTypes || []).forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)));
    return Array.from(counts.entries())
      .map(([label, count]) => ({ value: label, label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, [restaurants]);

  const menuOptions = useMemo(
    () => [
      { value: "fully-gluten-free", label: "100% Gluten-Free", count: restaurants.filter((r) => r.menuType === "fully-gluten-free").length },
      { value: "mixed-menu", label: "GF Options Available", count: restaurants.filter((r) => r.menuType === "mixed-menu").length },
    ],
    [restaurants]
  );

  const safetyOptions = useMemo(
    () => [
      { value: "dedicated-facility", label: "Dedicated GF Facility", count: restaurants.filter((r) => r.celiacSafe === "dedicated-facility").length },
      { value: "protocols-in-place", label: "Celiac Protocols", count: restaurants.filter((r) => r.celiacSafe === "protocols-in-place").length },
    ],
    [restaurants]
  );

  const filteredRestaurants = useMemo(
    () =>
      restaurants.filter((restaurant) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          q === "" ||
          restaurant.name.toLowerCase().includes(q) ||
          (restaurant.cuisineTypes || []).some((c) => c.toLowerCase().includes(q));
        const matchesMenu = menuFilters.length === 0 || (!!restaurant.menuType && menuFilters.includes(restaurant.menuType));
        const matchesSafety = safetyFilters.length === 0 || (!!restaurant.celiacSafe && safetyFilters.includes(restaurant.celiacSafe));
        const matchesCuisine = cuisineFilters.length === 0 || (restaurant.cuisineTypes || []).some((c) => cuisineFilters.includes(c));
        return matchesSearch && matchesMenu && matchesSafety && matchesCuisine;
      }),
    [restaurants, searchQuery, menuFilters, safetyFilters, cuisineFilters]
  );

  return (
    <>
    <SEOHead title={pageTitle} description={metaDescriptionText} canonical={`/gluten-free/france/${citySlug}`} schemaJson={schemaJson} />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/france" className="inline-flex items-center text-blue-700 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to France
          </Link>
        </div>
      </header>

      <section
        className="relative text-white py-14 bg-cover bg-center"
        style={{
          backgroundImage:
            citySlug === "paris"
              ? "url('/images/paris-hero.webp')"
              : undefined,
          backgroundColor: citySlug === "paris" ? undefined : undefined,
        }}
      >
        <div
          className={`absolute inset-0 ${
            citySlug === "paris"
              ? "bg-black/50"
              : "bg-gradient-to-r from-blue-700 via-white/10 to-red-600"
          }`}
        />
        {citySlug !== "paris" && <div className="absolute inset-0 bg-black/30" />}
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-5xl mb-4 block">{emoji}</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Dedicated Gluten-free Restaurants in {cityName}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Verified celiac-safe spots, practical menu guidance, and trusted dining picks in {cityName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <FindNearMeButton city={cityName} className="border-white bg-transparent !text-white hover:bg-white/10" />
            <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">{restaurants.length} listed restaurants</Badge>
            <AddRestaurantDialog city={cityName} triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-10">
          <Card className="bg-gradient-to-r from-blue-50 to-red-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-blue-700 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in {cityName}</h2>
                  <p className="text-gray-700">{intro}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {extraSection}



        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants in {cityName}</h2>
              <div className="grid gap-6">
                {filteredRestaurants.map((restaurant) => (
                  <Card key={restaurant.slug} className={`overflow-hidden border-2 border-red-200 ${restaurant.featured ? "ring-2 ring-red-300" : ""}`}>
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-2xl">{restaurant.icon}</span>
                          <Link to={`/gluten-free/france/${citySlug}/${restaurant.slug}`} className="text-xl font-bold text-gray-900 hover:text-blue-700 hover:underline transition-colors">
                            {restaurant.name}
                          </Link>
                          {restaurant.featured && <Badge className="bg-amber-100 text-amber-800 border-amber-300">Featured</Badge>}
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
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{restaurant.address}</span>
                        </div>
                        {restaurant.hours && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{restaurant.hours}</span>
                            {restaurant.temporarilyClosed && (
                              <span className="text-red-600 font-semibold">Closed today</span>
                            )}
                          </div>
                        )}
                        {restaurant.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${restaurant.phone}`} className="hover:text-blue-700">{restaurant.phone}</a>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                      {restaurant.menuHighlights.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.menuHighlights.map((item) => (
                              <Badge key={`${restaurant.slug}-${item}`} variant="secondary" className="text-sm">{item}</Badge>
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
                          size="sm"
                          className="bg-red-700 hover:bg-red-800 text-white"
                          onClick={() => openExternalLink(restaurant.directionsUrl)}
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                        {restaurant.website && (
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            className="border-red-700 text-red-700 hover:bg-red-50"
                            onClick={() => openExternalLink(restaurant.website)}
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            Website
                          </Button>
                        )}
                        <Link to={`/gluten-free/france/${citySlug}/${restaurant.slug}`}>
                          <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            className="border-red-700 text-red-700 hover:bg-red-50"
                          >
                            <BookOpen className="w-4 h-4 mr-2" />
                            View Menu
                          </Button>
                        </Link>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-1 text-sm">
                        <div><span className="font-bold text-gray-900">Bakery:</span></div>
                        <div><span className="font-bold text-gray-900">Coffee Shop:</span></div>
                        <div><span className="font-bold text-gray-900">Grocery store:</span></div>
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
                    <Search className="w-4 h-4 text-red-700" />
                    Search Restaurants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input className="pl-9" placeholder="Search by name or cuisine" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Filter className="w-4 h-4 text-red-700" />
                    Filter Restaurants
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-2">
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
                            <Checkbox checked={menuFilters.includes(opt.value)} onCheckedChange={() => toggle(opt.value, menuFilters, setMenuFilters)} />
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                            <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{opt.count}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

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
                            <Checkbox checked={cuisineFilters.includes(opt.value)} onCheckedChange={() => toggle(opt.value, cuisineFilters, setCuisineFilters)} />
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1 truncate">{opt.label}</span>
                            <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{opt.count}</span>
                          </label>
                        ))}
                        {cuisineOptions.length > 6 && (
                          <button type="button" onClick={() => setShowAllCuisines(!showAllCuisines)} className="text-sm text-red-700 hover:text-red-800 font-medium pt-1">
                            {showAllCuisines ? "Show less" : `Show all ${cuisineOptions.length} cuisines`}
                          </button>
                        )}
                      </div>
                    )}
                  </div>

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
                            <Checkbox checked={safetyFilters.includes(opt.value)} onCheckedChange={() => toggle(opt.value, safetyFilters, setSafetyFilters)} />
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                            <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{opt.count}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 pt-2">Showing {filteredRestaurants.length} of {restaurants.length}</p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        <RelatedCities country="france" currentCitySlug={citySlug} />

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <p className="text-gray-600">Gluten-free dining in {cityName}</p>
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

export default FranceCityPage;
