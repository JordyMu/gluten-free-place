import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Clock, Globe, Phone, Award, Wine, Navigation, Heart, Search, Filter, Trophy, BookOpen } from "lucide-react";
import { stellenboschRestaurants } from "@/data/stellenboschRestaurants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { SEOHead } from "@/components/SEOHead";
import { CityCategoryNav } from "@/components/city/CityCategoryNav";
import { RelatedCities } from "@/components/internal-linking/RelatedCities";


const faqItems = [
  {
    question: "Is Stellenbosch good for gluten-free travellers?",
    answer:
      "Yes. Stellenbosch's wine estate restaurants are used to dietary requests and several kitchens have dedicated gluten-free preparation areas. Booking ahead and mentioning celiac disease gets the best results.",
  },
  {
    question: "Are South African wines gluten-free?",
    answer:
      "Almost all wines are naturally gluten-free. A few producers historically used wheat-based fining agents, so confirm with the estate if you are highly sensitive.",
  },
  {
    question: "Where can I buy gluten-free bread in Stellenbosch?",
    answer:
      "Schoon de Companje on Church Street bakes gluten-free breads and pastries, and larger supermarkets in town stock gluten-free ranges.",
  },
  {
    question: "How far is Stellenbosch from Cape Town?",
    answer:
      "About 50km — roughly a 45 minute drive. Many visitors base themselves in Cape Town and make a day trip through the Winelands.",
  },
];

const GlutenFreeStellenbosch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuFilters, setMenuFilters] = useState<string[]>([]);
  const [cuisineFilters, setCuisineFilters] = useState<string[]>([]);
  const [openFilterSections, setOpenFilterSections] = useState({ kitchen: true, cuisine: true });

  const toggle = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const menuOptions = useMemo(() => {
    const counts: Record<string, number> = {};
    stellenboschRestaurants.forEach((r) => {
      counts[r.menuType] = (counts[r.menuType] || 0) + 1;
    });
    return Object.entries(counts).map(([label, count]) => ({ value: label, label, count }));
  }, []);

  const cuisineOptions = useMemo(() => {
    const counts: Record<string, number> = {};
    stellenboschRestaurants.forEach((r) => {
      counts[r.cuisine] = (counts[r.cuisine] || 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([label, count]) => ({ value: label, label, count }));
  }, []);

  const filteredRestaurants = useMemo(() => {
    return stellenboschRestaurants.filter((r) => {
      const matchesMenu = menuFilters.length === 0 || menuFilters.includes(r.menuType);
      const matchesCuisine = cuisineFilters.length === 0 || cuisineFilters.includes(r.cuisine);
      const matchesSearch =
        searchQuery === "" ||
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesMenu && matchesCuisine && matchesSearch;
    });
  }, [menuFilters, cuisineFilters, searchQuery]);

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

  return (
    <>
      <SEOHead
        title="Gluten-Free Options in Stellenbosch | Celiac-Safe Dining"
        description="Browse verified gluten free options in Stellenbosch: wine estate restaurants, bakeries and cafés with menus, hours and directions."
        canonical="/gluten-free/south-africa/cape-town/stellenbosch"
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link
              to="/gluten-free/south-africa/cape-town"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cape Town
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="relative text-white py-16"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.45)), url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=70)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-6xl mb-4 block">🍇</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dedicated Gluten-Free Restaurants in Stellenbosch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Real reviews from gluten-free diners. Verified listings. Zero guesswork.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">🍷 300+ Wine Estates</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🏛️ Historic Oak-Lined Streets</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🍽️ 5 GF Restaurants</span>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8">
          {/* Introduction */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Wine className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Stellenbosch</h2>
                    <p className="text-gray-700">
                      Just 50km from Cape Town, Stellenbosch is South Africa's second-oldest town and the heart of the
                      Cape Winelands. Historic Cape Dutch architecture meets a vibrant food scene, and many wine estate
                      restaurants have embraced gluten-free dining — making it a wonderful destination for celiacs who
                      love fine wine and food.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <CityCategoryNav basePath="/gluten-free/south-africa/cape-town" />

          {/* Best Restaurants Banner */}
          <section className="mb-10">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Best Gluten-Free Restaurants in Cape Town
                    </h2>
                    <p className="text-gray-700">
                      Our editorial top celiac-safe picks across Cape Town and the Winelands — ranked by safety, reviews
                      and quality.
                    </p>
                  </div>
                </div>
                <Link
                  to="/gluten-free/south-africa/cape-town/best-gluten-free-restaurants-in-cape-town"
                  className="md:flex-shrink-0"
                >
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
                </Link>
              </CardContent>
            </Card>
          </section>

          {/* Wine tips */}
          <section className="mb-10">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h2 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Wine Region Tips for Celiacs
                </h2>
                <ul className="space-y-2 text-amber-800">
                  <li>✓ Call ahead to wine estates - many can arrange gluten-free platters for tastings</li>
                  <li>✓ Most wines are naturally gluten-free, but always confirm no wheat-based fining agents were used</li>
                  <li>✓ Designate a driver or book a wine tour - Uber is limited outside central Stellenbosch</li>
                  <li>✓ Weekend bookings are essential, especially for top restaurants</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Listings + Filters */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2>
                <div className="grid gap-6">
                  {filteredRestaurants.map((restaurant, index) => (
                    <Card key={index} className={`overflow-hidden ${restaurant.featured ? "ring-2 ring-blue-300" : ""}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              {restaurant.featured && (
                                <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                                  <Award className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                              <h3 className="text-xl font-bold text-gray-900 hover:text-red-600 hover:underline hover:overline transition-colors cursor-default">
                                {restaurant.name}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              {renderStarRating(restaurant.rating)}
                              <span className="text-gray-500 text-sm">({restaurant.reviews} reviews)</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline">{restaurant.cuisine}</Badge>
                          <Badge className="bg-amber-100 text-amber-800 border-amber-300">{restaurant.menuType}</Badge>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{restaurant.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{restaurant.hours}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${restaurant.phone}`} className="hover:text-blue-600">
                              {restaurant.phone}
                            </a>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">{restaurant.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.specialties.map((item, i) => (
                              <Badge key={i} variant="secondary" className="text-sm">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-1">Celiac Safety</h4>
                          <p className="text-sm text-gray-600">{restaurant.celiacInfo}</p>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                          <p className="text-sm text-amber-800">
                            <span className="font-semibold">💡 Pro Tip:</span> {restaurant.proTip}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" className="bg-red-700 hover:bg-red-800 text-white" asChild>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                restaurant.name + " " + restaurant.address
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Navigation className="w-4 h-4 mr-1" />
                              Get Directions
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-1" />
                              Website
                            </a>
                          </Button>
                          <Link to={`/gluten-free/south-africa/cape-town/stellenbosch/${restaurant.slug}`}>
                            <Button size="sm" variant="outline">
                              <BookOpen className="w-4 h-4 mr-1" />
                              View Menu
                            </Button>
                          </Link>
                        </div>
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
                          {cuisineOptions.map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                              <Checkbox
                                checked={cuisineFilters.includes(opt.value)}
                                onCheckedChange={() => toggle(opt.value, cuisineFilters, setCuisineFilters)}
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

                    <div className="pt-2 text-sm text-gray-600">
                      Showing {filteredRestaurants.length} of {stellenboschRestaurants.length} restaurants
                    </div>
                    {(menuFilters.length > 0 || cuisineFilters.length > 0) && (
                      <button
                        type="button"
                        onClick={() => {
                          setMenuFilters([]);
                          setCuisineFilters([]);
                        }}
                        className="text-sm text-red-700 hover:text-red-800 font-medium"
                      >
                        Clear filters
                      </button>
                    )}
                  </CardContent>
                </Card>
              </aside>
            </div>
          </section>

          <section className="mb-12">
            <RelatedCities country="south-africa" currentCitySlug="cape-town" />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          <section>
            <RestaurantReviews
              restaurantName="Stellenbosch Gluten-Free Restaurants"
              restaurantCountry="South Africa"
              restaurantCity="Stellenbosch"
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default GlutenFreeStellenbosch;
