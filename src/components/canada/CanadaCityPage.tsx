import { useMemo, useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft, Award, CheckCircle, Clock, Filter, Globe, MapPin, MessageCircle, Navigation, Phone, Search, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { RelatedCities } from "@/components/internal-linking/RelatedCities";
import type { Restaurant } from "@/data/capeTownRestaurants";

interface FAQItem {
  question: string;
  answer: string;
}

interface CanadaCityPageProps {
  cityName: string;
  citySlug: string;
  emoji: string;
  intro: string;
  restaurants: Restaurant[];
  faqItems: FAQItem[];
  extraSection?: React.ReactNode;
  heading?: string;
  heroImage?: string;
  compactHero?: boolean;
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

const CanadaCityPage = ({ cityName, citySlug, emoji, intro, restaurants, faqItems, extraSection, heading, heroImage, compactHero }: CanadaCityPageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilters, setMenuFilters] = useState<string[]>([]);
  const [safetyFilters, setSafetyFilters] = useState<string[]>([]);
  const [cuisineFilters, setCuisineFilters] = useState<string[]>([]);

  const toggle = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

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

  const cuisineOptions = useMemo(() => {
    const counts = new Map<string, number>();
    restaurants.forEach((r) => r.cuisineTypes.forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)));
    return Array.from(counts.entries())
      .map(([label, count]) => ({ value: label, label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, [restaurants]);

  const metaDescriptionText = `Find verified gluten-free restaurants in ${cityName}, Canada. Explore celiac-safe places with reviews, menu tips, and directions.`;
  const pageTitle = `Gluten-Free Restaurants in ${cityName}, Canada | Celiac-Safe Guide 2026`;
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Gluten-Free Restaurants in ${cityName}, Canada`,
      description: metaDescriptionText,
      url: `https://glutenfreeplace.org/gluten-free/canada/${citySlug}`,
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

  const filteredRestaurants = useMemo(
    () =>
      restaurants.filter((restaurant) => {
        const matchesSearch =
          searchQuery === "" ||
          restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          restaurant.cuisineTypes.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesMenu = menuFilters.length === 0 || menuFilters.includes(restaurant.menuType);
        const matchesSafety = safetyFilters.length === 0 || safetyFilters.includes(restaurant.celiacSafe);
        const matchesCuisine =
          cuisineFilters.length === 0 || restaurant.cuisineTypes.some((c) => cuisineFilters.includes(c));
        return matchesSearch && matchesMenu && matchesSafety && matchesCuisine;
      }),
    [restaurants, searchQuery, menuFilters, safetyFilters, cuisineFilters]
  );

  return (
    <>
    <SEOHead title={pageTitle} description={metaDescriptionText} canonical={`/gluten-free/canada/${citySlug}`} schemaJson={schemaJson} />
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/canada" className="inline-flex items-center text-red-700 hover:text-red-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Canada
          </Link>
        </div>
      </header>

      <section
        className={`relative text-white bg-gradient-to-r from-red-700 to-red-500 bg-cover bg-center ${compactHero ? "py-8" : "py-14"}`}
        style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className={`mb-4 block ${compactHero ? "text-4xl" : "text-5xl"}`}>{emoji}</span>
          <h1 className={`font-bold mb-4 ${compactHero ? "text-2xl md:text-3xl" : "text-3xl md:text-5xl"}`}>{heading ?? `Gluten-Free Restaurants in ${cityName}`}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Verified celiac-safe spots, practical menu guidance, and trusted dining picks in {cityName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">{restaurants.length} listed restaurants</Badge>
            <AddRestaurantDialog city={cityName} triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
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
              <Card key={restaurant.slug} className={`overflow-hidden ${restaurant.featured ? "ring-2 ring-red-300" : ""}`}>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-2xl">{restaurant.icon}</span>
                      <Link to={`/gluten-free/canada/${citySlug}/${restaurant.slug}`} className="text-xl font-bold text-gray-900 hover:text-red-700 hover:underline transition-colors">
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

                  <p className="text-gray-700 mb-4">{restaurant.overview}</p>



                  {restaurant.menuHighlights && restaurant.menuHighlights.length > 0 && (
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

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{restaurant.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{restaurant.hours}</span>
                    </div>
                    {restaurant.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${restaurant.phone}`} className="hover:text-red-700">{restaurant.phone}</a>
                      </div>
                    )}
                  </div>

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
                  </div>

                  {restaurant.nearby && restaurant.nearby.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Nearby:</h4>
                      <ul className="space-y-1 text-gray-700">
                        {restaurant.nearby.map((item) => (
                          <li key={`${restaurant.slug}-nearby-${item.label}`}>
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
            <aside className="lg:sticky lg:top-4 lg:self-start order-first lg:order-last space-y-4">
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
                    <Input className="pl-9" placeholder="Search by name or cuisine" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 space-y-6">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Kitchen Type</h3>
                    <div className="space-y-2.5">
                      {menuOptions.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox
                            checked={menuFilters.includes(opt.value)}
                            onCheckedChange={() => toggle(opt.value, menuFilters, setMenuFilters)}
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                          <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">{opt.count}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Cuisine</h3>
                    <div className="space-y-2.5">
                      {cuisineOptions.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox
                            checked={cuisineFilters.includes(opt.value)}
                            onCheckedChange={() => toggle(opt.value, cuisineFilters, setCuisineFilters)}
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                          <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">{opt.count}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Badges</h3>
                    <div className="space-y-2.5">
                      {safetyOptions.map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                          <Checkbox
                            checked={safetyFilters.includes(opt.value)}
                            onCheckedChange={() => toggle(opt.value, safetyFilters, setSafetyFilters)}
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                          <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">{opt.count}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {(menuFilters.length > 0 || cuisineFilters.length > 0 || safetyFilters.length > 0) && (
                    <button
                      type="button"
                      onClick={() => {
                        setMenuFilters([]);
                        setCuisineFilters([]);
                        setSafetyFilters([]);
                      }}
                      className="text-sm text-red-700 hover:text-red-800 font-medium"
                    >
                      Clear all filters
                    </button>
                  )}

                  <p className="border-t pt-4 text-sm text-gray-600">Showing {filteredRestaurants.length} of {restaurants.length}</p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        <RelatedCities country="canada" currentCitySlug={citySlug} />

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

export default CanadaCityPage;
