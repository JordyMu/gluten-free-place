import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Award, CheckCircle, Clock, Filter, Globe, MapPin,
  MessageCircle, Navigation, Phone, Search, Shield, Star,
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
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

type CeliacSafe = "dedicated-facility" | "protocols-in-place";
type MenuType = "fully-gluten-free" | "mixed-menu";

interface MelbourneRestaurant {
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
  fullMenu?: {
    category: string;
    note?: string;
    items: { name: string; price?: string; description?: string }[];
  }[];
  proTip?: string;
  address?: string;
  hours?: string;
  phone?: string;
  website?: string;
  directionsUrl?: string;
  featured?: boolean;
  photos?: { url: string; caption?: string }[];
  services?: {
    dineIn?: { available: boolean; note: string };
    takeaway?: { available: boolean; note: string };
    delivery?: { available: boolean; note: string };
  };
}

export const melbourneRestaurants: MelbourneRestaurant[] = [
  {
    slug: "wholegreen-bakery",
    name: "Wholegreen Bakery",
    icon: "🥖",
    specialty: "Artisan bakery · 100% gluten-free",
    rating: 4.9,
    reviewCount: 412,
    cuisineTypes: ["Bakery", "Cafe"],
    celiacSafe: "dedicated-facility",
    menuType: "fully-gluten-free",
    overview:
      "Premium gluten-free bakery with expertly trained staff and comprehensive celiac knowledge. All products are made in a dedicated facility with the highest safety standards.",
    menuHighlights: [
      "🥖 Artisan sourdough loaves & baguettes",
      "🥐 Croissants & danishes",
      "🥧 Sausage rolls, quiches & savoury swirls",
      "🍰 Cakes, tarts & sweet treats",
      "🛒 Pantry pastry sheets & catering platters",
    ],
    fullMenu: [
      {
        category: "Bread",
        note: "All 100% gluten-free sourdough, baked in a dedicated facility.",
        items: [
          { name: "Small Artisan Plain Sourdough Loaf", price: "$11.90" },
          { name: "Small Artisan Seeded Sourdough Loaf", price: "$11.90" },
          { name: "Small Artisan Charcoal & Turmeric Sourdough Loaf", price: "$11.90" },
          { name: "Small Artisan Olive & Rosemary Sourdough Loaf", price: "$11.90" },
          { name: "Small Artisan Fruit & Spice Sourdough Loaf", price: "$11.90" },
          { name: "Sourdough Baguette – Plain", price: "$8.50" },
          { name: "Sourdough Baguette – Seeded", price: "$8.50" },
          { name: "Sourdough Baguette – Olive & Rosemary", price: "$8.50" },
          { name: "Sourdough Baguette – Charcoal & Turmeric", price: "$8.50" },
          { name: "Sourdough Baguette – Fruit & Walnut", price: "$8.50" },
        ],
      },
      {
        category: "Savoury",
        items: [
          { name: "Za'atar, Feta & Tomato Swirl", price: "$11.90" },
          { name: "Sausage Roll", price: "$8.50", description: "House-made, flaky GF pastry" },
          { name: "Mini Sausage Rolls (pack)", price: "$18.90" },
          { name: "Spinach & Feta Roll", price: "$9.50" },
          { name: "Quiche Lorraine", price: "$12.90" },
          { name: "Vegetarian Quiche", price: "$12.90" },
        ],
      },
      {
        category: "Sweet",
        items: [
          { name: "Decadent Chocolate Cake", price: "$10.90 – $99.00" },
          { name: "Almond & Chocolate Croissant Pudding", price: "$8.90" },
          { name: "Lemon & Coconut Cake", price: "$9.50" },
          { name: "Almond Croissant", price: "$7.50" },
          { name: "Plain Butter Croissant", price: "$6.50" },
          { name: "Custard Danish", price: "$7.90" },
          { name: "Cinnamon Scroll", price: "$7.50" },
        ],
      },
      {
        category: "Pantry",
        items: [
          { name: "Sweet Shortcrust Pastry Sheets (1kg)", price: "$18.90" },
          { name: "Savoury Shortcrust Pastry Sheets (1kg)", price: "$18.90" },
          { name: "Puff Pastry Sheets", price: "$21.90" },
        ],
      },
      {
        category: "Catering & Gift Bundles",
        note: "Perfect for events, offices and gifting — order 5 days ahead.",
        items: [
          { name: "Assorted Sourdough Bundle", price: "from $45.00" },
          { name: "Sweet Pastry Platter", price: "from $65.00" },
          { name: "Savoury Party Platter", price: "from $75.00" },
          { name: "Gift Voucher", price: "from $25.00" },
        ],
      },
    ],
    proTip: "Their sourdough is incredible — preorder to avoid missing out.",
    address: "257 Clarence St, Sydney NSW 2000, Australia",
    hours: "Daily: 7:00AM – 6:00PM",
    phone: "+61 3 9123 4567",
    website: "www.wholegreenbakery.com.au",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=257+Clarence+St+Sydney+NSW+2000+Australia",
    featured: true,
    photos: [
      { url: "/images/sydney/wholegreen/vegan-sandwich.webp", caption: "Vegan sandwich with beetroot, roasted peppers & greens on sourdough" },
      { url: "/images/sydney/wholegreen/vegan-curry-pie.webp", caption: "Vegan curry pie with flaky pastry & poppy seeds" },
      { url: "/images/sydney/wholegreen/apple-turnover.webp", caption: "Almond croissants in the bakery display case" },
      { url: "/images/sydney/wholegreen/chicken-pie.webp", caption: "Chicken pie with sesame seeds & flaky crust" },
      { url: "/images/sydney/wholegreen/beetroot-cake.webp", caption: "Chocolate raspberry brownies stacked" },
      { url: "/images/sydney/wholegreen/veggie-frittata.webp", caption: "Roasted vegetable frittata with broccoli, mushroom & herbs" },
      { url: "/images/sydney/wholegreen/chicken-and-leek-pie.webp", caption: "Chicken & leek pie served with tomato relish" },
      { url: "/images/sydney/wholegreen/pain-au-chocolat-2.webp", caption: "Golden pain au chocolat" },
    ],
    services: {
      dineIn: { available: true, note: "Limited indoor seating · communal tables · laptop-friendly during weekday mornings" },
      takeaway: { available: true, note: "Order at the counter · ready in 5–10 min · GF pastries packed separately" },
      delivery: { available: true, note: "Available via third-party delivery partners · GF pastries packed separately" },
    },
  },
  {
    slug: "duke-of-brunswick-hotel",
    name: "The Duke of Brunswick Hotel",
    icon: "🍺",
    specialty: "Pub food with extensive GF menu",
    rating: 4.5,
    reviewCount: 98,
    cuisineTypes: ["Pub", "Australian"],
    celiacSafe: "protocols-in-place",
    menuType: "mixed-menu",
    overview:
      "Traditional pub with well-trained staff offering extensive gluten-free pub classics. Separate fryers and preparation areas ensure safety.",
    menuHighlights: [
      "🍔 GF Burgers",
      "🍟 GF Fish & Chips",
      "🍕 GF Pizzas",
      "🍺 GF Beer selection",
    ],
    proTip: "Thursday nights have GF pizza specials.",
    address: "384 Melbourne Rd, Brunswick VIC 3056, Australia",
    hours: "Daily: 12:00PM – 11:00PM",
    phone: "+61 3 9456 7890",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Duke+of+Brunswick+Hotel+Melbourne",
  },
];

const faqItems = [
  {
    question: "Are there dedicated gluten-free restaurants in Melbourne?",
    answer:
      "Yes — Melbourne has several dedicated 100% gluten-free venues including Sebastien Sans Gluten and Noglu, where cross-contamination risk is virtually zero.",
  },
  {
    question: "Is Melbourne celiac-friendly?",
    answer:
      "Melbourne is one of Australia's most celiac-aware cities. Coeliac Australia certification is widely recognised, and most cafes clearly label gluten-free menu items.",
  },
  {
    question: "Where should I go for a gluten-free brunch in Melbourne?",
    answer:
      "Melbourne has excellent celiac-aware brunch spots across the city — look for dedicated GF bakeries and cafes offering clearly labelled menus.",
  },
  {
    question: "How do I communicate my celiac needs in Melbourne?",
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

const GlutenFreeMelbourne = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilter, setMenuFilter] = useState("all");
  const [safetyFilter, setSafetyFilter] = useState("all");

  const pageTitle = "Gluten-Free Restaurants in Melbourne | Celiac-Safe Guide 2026";
  const metaDescription =
    "Find verified gluten-free restaurants in Melbourne, Australia. Explore celiac-safe cafes, patisseries and brunch spots with reviews, menu tips and directions.";
  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in Melbourne, Australia",
      description: metaDescription,
      url: "https://glutenfreeplace.org/gluten-free/australia/melbourne",
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
      melbourneRestaurants.filter((r) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch =
          q === "" ||
          r.name.toLowerCase().includes(q) ||
          (r.cuisineTypes || []).some((c) => c.toLowerCase().includes(q));
        const matchesMenu = menuFilter === "all" || r.menuType === menuFilter;
        const matchesSafety = safetyFilter === "all" || r.celiacSafe === safetyFilter;
        return matchesSearch && matchesMenu && matchesSafety;
      }),
    [searchQuery, menuFilter, safetyFilter],
  );

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        canonical="/gluten-free/australia/melbourne"
        schemaJson={schemaJson}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/australia" className="inline-flex items-center text-blue-700 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Australia
            </Link>
          </div>
        </header>

        <section
          className="relative text-white py-14 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1600&q=80)",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-5xl mb-4 block">🇦🇺</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Gluten-Free Restaurants in Melbourne
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Verified celiac-safe spots, practical menu guidance, and trusted dining picks in Melbourne.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge className="bg-white/20 border-white/40 text-white px-4 py-2">
                {melbourneRestaurants.length} listed restaurants
              </Badge>
              <AddRestaurantDialog
                city="Melbourne"
                triggerClassName="border-white bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-blue-50 to-yellow-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-blue-700 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Gluten-Free Dining in Melbourne
                    </h2>
                    <p className="text-gray-700">
                      Melbourne has a thriving celiac-aware dining scene, from dedicated French patisseries in
                      dedicated gluten-free bakeries to celiac-aware cafes and restaurants. Coeliac Australia certification is widely recognised across Melbourne, and many venues clearly label gluten-free options on their menus.
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
              <Link to="/gluten-free/australia/melbourne/street-food">
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
              <Link to="/gluten-free/australia/melbourne/bakeries">
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
              <Link to="/gluten-free/australia/melbourne/grocery-stores">
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
              <Link to="/gluten-free/australia/melbourne/gluten-free-products">
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
                  <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Best Gluten-Free Restaurants in Melbourne
                    </h2>
                    <p className="text-gray-700">
                      Our editorial top 10 celiac-safe picks across Melbourne — ranked by safety, reviews and quality.
                    </p>
                  </div>
                </div>
                <Link
                  to="/gluten-free/australia/melbourne/best-gluten-free-restaurants-in-melbourne"
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
                  Verified Gluten-Free Restaurants in Melbourne
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
                              to={`/gluten-free/australia/melbourne/${r.slug}`}
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
                      <SelectTrigger><SelectValue placeholder="All menu types" /></SelectTrigger>
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
                      <SelectTrigger><SelectValue placeholder="All safety levels" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Safety Levels</SelectItem>
                        <SelectItem value="dedicated-facility">Dedicated GF Facility</SelectItem>
                        <SelectItem value="protocols-in-place">Celiac Protocols</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="mt-3 text-sm text-gray-600">
                      Showing {filteredRestaurants.length} of {melbourneRestaurants.length}
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
                <p className="text-gray-600">Gluten-free dining in Melbourne</p>
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

export default GlutenFreeMelbourne;
