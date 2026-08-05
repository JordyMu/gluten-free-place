import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Award, CheckCircle, Clock, Filter, Globe, MapPin,
  MessageCircle, Navigation, Phone, Search, Shield, Star, Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

type CeliacSafe = "dedicated-facility" | "protocols-in-place";
type MenuType = "fully-gluten-free" | "mixed-menu";

interface PerthRestaurant {
  slug: string;
  name: string;
  icon?: string;
  specialty?: string;
  rating?: number;
  reviewCount?: number;
  cuisineTypes?: string[];
  celiacSafe?: CeliacSafe;
  menuType?: MenuType;
  overview?: string;
  menuHighlights?: string[];
  proTip?: string;
  address?: string;
  hours?: string;
  phone?: string;
  website?: string;
  directionsUrl?: string;
  featured?: boolean;
}

export const perthRestaurants: PerthRestaurant[] = [
  {
    slug: "baked-gluten-free",
    name: "BAKED Gluten Free",
    icon: "🥖",
    specialty: "Artisan bakery · 100% gluten-free",
    rating: 4.8,
    reviewCount: 198,
    cuisineTypes: ["Bakery", "Cafe"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Specialized gluten-free bakery with highly trained bakers and comprehensive celiac safety protocols. Everything is made fresh daily in a dedicated facility.",
    menuHighlights: [
      "🥖 Fresh bread daily",
      "🥐 Croissants & pastries",
      "🥧 Meat pies",
      "🍰 Cakes & slices",
      "🍪 Cookies & brownies",
    ],
    proTip: "Get there early on weekends — popular items sell out fast.",
    address: "123 Rokeby Rd, Subiaco WA 6008, Australia",
    hours: "Mon–Sat: 7:30AM – 5:30PM",
    phone: "+61 8 9234 5678",
    website: "www.bakedgf.com.au",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=BAKED+Gluten+Free+Subiaco+Perth",
    featured: true,
  },
];

const faqItems = [
  {
    question: "Are there dedicated gluten-free restaurants in Perth?",
    answer:
      "Yes — Perth has several dedicated 100% gluten-free venues including Sebastien Sans Gluten and Noglu, where cross-contamination risk is virtually zero.",
  },
  {
    question: "Is Perth celiac-friendly?",
    answer:
      "Perth is one of Australia's most celiac-aware cities. Coeliac Australia certification is widely recognised, and most cafes clearly label gluten-free menu items.",
  },
  {
    question: "Where should I go for a gluten-free brunch in Perth?",
    answer:
      "Perth has excellent celiac-aware brunch spots across the city — look for dedicated GF bakeries and cafes offering clearly labelled menus.",
  },
  {
    question: "How do I communicate my celiac needs in Perth?",
    answer:
      "English is spoken everywhere. Tell staff you have celiac disease and ask about cross-contamination. Many venues will happily walk you through their GF protocols.",
  },
];

const getCeliacSafeBadge = (level?: CeliacSafe) => {
  if (level === "dedicated-facility") {
    return (
      <Badge className="bg-green-100 text-green-800 border-green-300">
        <Shield className="w-3 h-3 mr-1" />Dedicated GF Facility
      </Badge>
    );
  }
  return (
    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
      <CheckCircle className="w-3 h-3 mr-1" />Celiac Protocols
    </Badge>
  );
};

const getMenuTypeBadge = (type?: MenuType) => {
  if (type === "fully-gluten-free") {
    return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
  }
  return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
};

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const openExternalLink = (url: string) => {
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalized, "_blank", "noopener,noreferrer");
};

const GlutenFreePerth = () => {
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

  const pageTitle = "Gluten-Free Options in Perth | Celiac-Safe Dining";
  const metaDescription =
    "Browse verified gluten free options in Perth, Australia. Discover celiac-safe cafes, patisseries and brunch spots with reviews, menu tips and directions.";
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Options in Perth, Australia",
      description: metaDescription,
      url: "https://glutenfreeplace.org/gluten-free/australia/perth",
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
    perthRestaurants.forEach((r) => (r.cuisineTypes || []).forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)));
    return Array.from(counts.entries())
      .map(([label, count]) => ({ value: label, label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, []);

  const menuOptions = useMemo(
    () => [
      { value: "fully-gluten-free", label: "100% Gluten-Free", count: perthRestaurants.filter((r) => r.menuType === "fully-gluten-free").length },
      { value: "mixed-menu", label: "GF Options Available", count: perthRestaurants.filter((r) => r.menuType === "mixed-menu").length },
    ],
    [],
  );

  const safetyOptions = useMemo(
    () => [
      { value: "dedicated-facility", label: "Dedicated GF Facility", count: perthRestaurants.filter((r) => r.celiacSafe === "dedicated-facility").length },
      { value: "protocols-in-place", label: "Celiac Protocols", count: perthRestaurants.filter((r) => r.celiacSafe === "protocols-in-place").length },
    ],
    [],
  );

  const filteredRestaurants = useMemo(
    () =>
      perthRestaurants.filter((r) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          q === "" ||
          r.name.toLowerCase().includes(q) ||
          (r.cuisineTypes || []).some((c) => c.toLowerCase().includes(q));
        const matchesMenu = menuFilters.length === 0 || (!!r.menuType && menuFilters.includes(r.menuType));
        const matchesSafety = safetyFilters.length === 0 || (!!r.celiacSafe && safetyFilters.includes(r.celiacSafe));
        const matchesCuisine =
          cuisineFilters.length === 0 || (r.cuisineTypes || []).some((c) => cuisineFilters.includes(c));
        return matchesSearch && matchesMenu && matchesSafety && matchesCuisine;
      }),
    [searchQuery, menuFilters, safetyFilters, cuisineFilters],
  );

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        canonical="/gluten-free/australia/perth"
        schemaJson={schemaJson}
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/australia" className="inline-flex items-center text-red-700 hover:text-red-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Australia
            </Link>
          </div>
        </header>

        <section
          className="relative text-white py-14 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-5xl mb-4 block">🇦🇺</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Gluten-Free Restaurants in Perth
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Verified celiac-safe spots, practical menu guidance, and trusted dining picks in Perth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">
                {perthRestaurants.length} listed restaurants
              </Badge>
              <AddRestaurantDialog
                city="Perth"
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
                      Gluten-Free Dining in Perth
                    </h2>
                    <p className="text-gray-700">
                      Perth has a thriving celiac-aware dining scene, from dedicated French patisseries in
                      dedicated gluten-free bakeries to celiac-aware cafes and restaurants. Coeliac Australia certification is widely recognised across Perth, and many venues clearly label gluten-free options on their menus.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Browse by Category */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              🍽️ Browse by Category
            </h2>
            <p className="text-gray-600 mb-4">
              Find exactly what you're looking for with our curated category pages.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <Link to="/gluten-free/australia/perth/street-food">
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
              <Link to="/gluten-free/australia/perth/bakeries">
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
              <Link to="/gluten-free/australia/perth/grocery-stores">
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
              <Link to="/gluten-free/australia/perth/gluten-free-products">
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

          {/* Best CTA */}
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Best Gluten-Free Restaurants in Perth
                    </h2>
                    <p className="text-gray-700">
                      Our editorial top 10 celiac-safe picks across Perth — ranked by safety, reviews and quality.
                    </p>
                  </div>
                </div>
                <Link
                  to="/gluten-free/australia/perth/best-gluten-free-restaurants-in-perth"
                  className="md:flex-shrink-0"
                >
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
                </Link>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Verified Gluten-Free Restaurants in Perth
                </h2>
                <div className="grid gap-6">
                  {filteredRestaurants.map((r) => (
                    <Card
                      key={r.slug}
                      className={`overflow-hidden border-2 border-red-200 ${r.featured ? "ring-2 ring-red-300" : ""}`}
                    >
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {r.icon && <span className="text-2xl">{r.icon}</span>}
                            <Link
                              to={`/gluten-free/australia/perth/${r.slug}`}
                              className="text-xl font-bold text-gray-900 hover:text-red-700 hover:underline transition-colors"
                            >
                              {r.name}
                            </Link>
                            {r.featured && (
                              <Badge className="bg-amber-100 text-amber-800 border-amber-300">Featured</Badge>
                            )}
                          </div>
                          {r.specialty && <p className="text-sm text-gray-500">{r.specialty}</p>}
                        </div>

                        {r.rating !== undefined && (
                          <div className="flex items-center gap-2 mb-3">
                            {renderStarRating(r.rating)}
                            {r.reviewCount !== undefined && (
                              <span className="text-sm text-gray-500">({r.reviewCount} reviews)</span>
                            )}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mb-3">
                          {(r.cuisineTypes || []).map((c) => (
                            <Badge key={c} variant="outline">{c}</Badge>
                          ))}
                          {getCeliacSafeBadge(r.celiacSafe)}
                          {getMenuTypeBadge(r.menuType)}
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          {r.address && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span>{r.address}</span>
                            </div>
                          )}
                          {r.hours && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span>{r.hours}</span>
                            </div>
                          )}
                          {r.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <a href={`tel:${r.phone.replace(/\s/g, "")}`} className="hover:text-blue-700">
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
                              {r.menuHighlights.map((m) => (
                                <Badge key={m} variant="secondary" className="text-sm">{m}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {r.proTip && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4 text-amber-700" />
                              <span className="font-medium text-amber-800">Pro Tip:</span>
                              <span className="text-amber-700">{r.proTip}</span>
                            </div>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-3">
                          {r.directionsUrl && (
                            <Button
                              type="button"
                              className="bg-red-700 hover:bg-red-800"
                              onClick={() => openExternalLink(r.directionsUrl!)}
                            >
                              <Navigation className="w-4 h-4 mr-2" />
                              Get Directions
                            </Button>
                          )}
                          {r.website && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => openExternalLink(r.website!)}
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </Button>
                          )}
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
                  <CardHeader className="pb-3">
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
                              <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">
                                {opt.count}
                              </span>
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
                              <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">
                                {opt.count}
                              </span>
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
                              <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">
                                {opt.count}
                              </span>
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

                    <p className="border-t pt-3 text-sm text-gray-600">
                      Showing {filteredRestaurants.length} of {perthRestaurants.length}
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
                <p className="text-gray-600">Gluten-free dining in Perth</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, i) => (
                    <AccordionItem key={faq.question} value={`faq-${i}`}>
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

export default GlutenFreePerth;
