import { useState, useMemo, useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, Search, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { cairoRestaurants } from "@/data/egyptRestaurants";
import type { EgyptRestaurant } from "@/data/egyptRestaurants";

const menuTypeBadge = (type: string) => {
  switch (type) {
    case "Fully GF":
      return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
    case "Mixed Menu":
      return <Badge className="bg-violet-100 text-violet-800 border-violet-300">Mixed Menu</Badge>;
    case "GF Options":
      return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
    default:
      return null;
  }
};

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const GlutenFreeCairo = () => {
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [sortByDistance, setSortByDistance] = useState(false);

  useEffect(() => {
    document.title = "Gluten-Free Restaurants in Cairo | Celiac-Safe Dining Guide 2026";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Find the best gluten-free restaurants in Cairo, Egypt. Verified celiac-safe dining options in Zamalek, Nasr City, Maadi & more.");
    }
  }, []);

  const handleFindNearMe = () => {
    if (!navigator.geolocation) { setLocationError("Geolocation not supported"); return; }
    setIsLocating(true); setLocationError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => { setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setSortByDistance(true); setIsLocating(false); },
      () => { setIsLocating(false); setLocationError("Could not get location."); },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  };

  const filteredRestaurants = useMemo(() => {
    return cairoRestaurants.filter(r => {
      const matchesMenu = menuFilter === "all" || r.menuType === menuFilter;
      const matchesSearch = searchQuery === "" ||
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesMenu && matchesSearch;
    });
  }, [menuFilter, searchQuery]);

  const faqItems = [
    { question: "Is Cairo good for gluten-free travelers?", answer: "Yes! Cairo has many naturally GF options like grilled meats, rice, ful medames, and a growing number of health-conscious restaurants in Zamalek and Maadi." },
    { question: "What traditional Cairo foods are gluten-free?", answer: "Grilled kebabs, kofta, ful medames (fava beans), rice dishes, and fresh salads are naturally GF. Be cautious with koshari (contains pasta) and aish baladi (bread)." },
    { question: "Are there dedicated GF restaurants in Cairo?", answer: "The Gluten Free House and Keto Rockets offer fully GF menus. Many hotel restaurants like Cairo Marriott and Conrad Cairo also have dedicated GF options." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/egypt" className="inline-flex items-center text-amber-600 hover:text-amber-700">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Egypt
          </Link>
        </div>
      </header>

      <section className="relative text-white py-16 bg-gradient-to-r from-amber-700 to-red-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🏛️</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gluten-Free Restaurants in Cairo</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Discover celiac-safe dining in Egypt's capital — from Zamalek to Nasr City.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white/10" onClick={handleFindNearMe} disabled={isLocating}>
              {isLocating ? "Locating..." : sortByDistance ? (<><Navigation className="w-5 h-5 mr-2" />Sorted by Distance</>) : (<><Search className="w-5 h-5 mr-2" />Find Near Me</>)}
            </Button>
            <AddRestaurantDialog city="Cairo" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
          {locationError && <p className="text-amber-100 mt-4 text-sm">{locationError}</p>}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Cairo</h2>
                  <p className="text-gray-700">
                    Cairo's diverse food scene includes dedicated GF restaurants, health-conscious cafés, and luxury hotel dining with celiac-safe options. The Gluten Free House and Keto Rockets offer fully GF menus, while international hotels in Zamalek provide excellent GF accommodation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <Card>
            <CardHeader><CardTitle className="flex items-center gap-2"><Filter className="w-5 h-5" />Filter Restaurants</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Search</label>
                  <Input placeholder="Search restaurants..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label>
                  <Select value={menuFilter} onValueChange={setMenuFilter}>
                    <SelectTrigger className="bg-white"><SelectValue placeholder="All menu types" /></SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Menu Types</SelectItem>
                      <SelectItem value="Fully GF">100% Gluten-Free</SelectItem>
                      <SelectItem value="Mixed Menu">Mixed Menu</SelectItem>
                      <SelectItem value="GF Options">GF Options Available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">Showing {filteredRestaurants.length} of {cairoRestaurants.length} restaurants</div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-2xl">{restaurant.emoji}</span>
                          <span className="text-xl font-bold text-gray-900">{restaurant.name}</span>
                        </div>
                        <p className="text-sm text-gray-500 ml-9">{restaurant.subtitle}</p>
                        <div className="flex items-center gap-2 mt-2 ml-9 flex-wrap">
                          {renderStarRating(restaurant.rating)}
                          <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm"><Heart className="w-4 h-4" /></Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3 ml-9">
                      {restaurant.cuisineTypes.map((cuisine, i) => (
                        <Badge key={i} variant="outline">{cuisine}</Badge>
                      ))}
                      {menuTypeBadge(restaurant.menuType)}
                    </div>

                    {restaurant.certification && (
                      <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2 mb-3 ml-9 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="text-sm text-emerald-800">{restaurant.certification}</span>
                      </div>
                    )}

                    <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 mb-4 ml-9 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                      <span className="text-sm text-blue-800">{restaurant.celiacInfo}</span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4 ml-9">
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /><span>{restaurant.address}, Egypt</span></div>
                      {restaurant.hours && <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /><span>{restaurant.hours}</span></div>}
                      {restaurant.phone && <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-400" /><a href={`tel:${restaurant.phone}`} className="hover:text-amber-600">{restaurant.phone}</a></div>}
                      {restaurant.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-gray-400" />
                          <a href={restaurant.website.startsWith("http") ? restaurant.website : `https://${restaurant.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            {restaurant.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3 ml-9">
                      <Button asChild className="bg-amber-600 hover:bg-amber-700">
                        <a href={restaurant.mapUrl} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" />Get Directions</a>
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t ml-9">
                      <RestaurantReviews restaurantName={restaurant.name} restaurantCountry="Egypt" restaurantCity="Cairo" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <p className="text-gray-600">Gluten-free dining in Cairo</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-to-r from-amber-500 to-red-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Know a Great Gluten-Free Spot in Cairo?</h2>
              <p className="text-amber-100 mb-6">Help fellow celiacs discover safe dining options.</p>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50"><Plus className="w-5 h-5 mr-2" />Add a Restaurant</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default GlutenFreeCairo;
