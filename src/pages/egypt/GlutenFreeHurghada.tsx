import { useState, useMemo, useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, Award, Shield, Search, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { hurghadaRestaurants } from "@/data/egyptRestaurants";

const menuTypeBadge = (type: string) => {
  switch (type) {
    case "Fully GF": return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
    case "Mixed Menu": return <Badge className="bg-violet-100 text-violet-800 border-violet-300">Mixed Menu</Badge>;
    case "GF Options": return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
    default: return null;
  }
};

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const GlutenFreeHurghada = () => {
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Gluten-Free Restaurants in Hurghada | Red Sea Celiac-Safe Dining 2026";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Find gluten-free restaurants in Hurghada & El Gouna, Egypt. Resort buffets, beach dining, and celiac-safe options on the Red Sea.");
  }, []);

  const filteredRestaurants = useMemo(() => {
    return hurghadaRestaurants.filter(r => {
      const matchesMenu = menuFilter === "all" || r.menuType === menuFilter;
      const matchesSearch = searchQuery === "" || r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesMenu && matchesSearch;
    });
  }, [menuFilter, searchQuery]);

  const faqItems = [
    { question: "Is Hurghada celiac-friendly?", answer: "Very much so! As a major beach resort, Hurghada's hotels excel at dietary accommodation. Nicole's Greenhouse is especially recommended, and resorts like Jaz Aquamarine have dedicated GF buffet stations." },
    { question: "What about El Gouna?", answer: "El Gouna has excellent options including German Bakery El Gouna (GF bread), Sheraton Miramar, and Cook's Club. The upscale resort town is very aware of dietary needs." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/egypt" className="inline-flex items-center text-orange-600 hover:text-orange-700"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Egypt</Link>
        </div>
      </header>

      <section className="relative text-white py-16 bg-gradient-to-r from-orange-600 to-red-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🤿</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gluten-Free in Hurghada & El Gouna</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">Beach resort dining with dedicated GF stations and celiac-aware staff.</p>
          <AddRestaurantDialog city="Hurghada" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Hurghada</h2>
                  <p className="text-gray-700">Hurghada and El Gouna offer excellent GF dining through resort buffets, health cafés like Nicole's Greenhouse, and fresh seafood. Most all-inclusive hotels label GF items and can prepare custom meals.</p>
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
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Search</label><Input placeholder="Search restaurants..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /></div>
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label>
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
              <div className="mt-4 text-sm text-gray-600">Showing {filteredRestaurants.length} of {hurghadaRestaurants.length} restaurants</div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1"><span className="text-2xl">{restaurant.emoji}</span><span className="text-xl font-bold text-gray-900">{restaurant.name}</span></div>
                      <p className="text-sm text-gray-500 ml-9">{restaurant.subtitle}</p>
                      <div className="flex items-center gap-2 mt-2 ml-9">{renderStarRating(restaurant.rating)}<span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span></div>
                    </div>
                    <Button variant="ghost" size="sm"><Heart className="w-4 h-4" /></Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3 ml-9">
                    {restaurant.cuisineTypes.map((c, i) => <Badge key={i} variant="outline">{c}</Badge>)}
                    {menuTypeBadge(restaurant.menuType)}
                  </div>
                  {restaurant.certification && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2 mb-3 ml-9 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-emerald-600 shrink-0" /><span className="text-sm text-emerald-800">{restaurant.certification}</span>
                    </div>
                  )}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 mb-4 ml-9 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" /><span className="text-sm text-blue-800">{restaurant.celiacInfo}</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-4 ml-9">
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /><span>{restaurant.address}, Egypt</span></div>
                    {restaurant.hours && <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /><span>{restaurant.hours}</span></div>}
                  </div>
                  <div className="flex gap-3 ml-9">
                    <Button asChild className="bg-orange-600 hover:bg-orange-700"><a href={restaurant.mapUrl} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" />Get Directions</a></Button>
                  </div>
                  <div className="mt-6 pt-6 border-t ml-9"><RestaurantReviews restaurantName={restaurant.name} restaurantCountry="Egypt" restaurantCity="Hurghada" /></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card><CardHeader><CardTitle className="text-2xl">Frequently Asked Questions</CardTitle></CardHeader>
            <CardContent><Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, i) => (<AccordionItem key={i} value={`item-${i}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="text-gray-600">{faq.answer}</AccordionContent></AccordionItem>))}
            </Accordion></CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Know a Great GF Spot in Hurghada?</h2>
              <p className="text-orange-100 mb-6">Help fellow celiacs discover safe dining options.</p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50"><Plus className="w-5 h-5 mr-2" />Add a Restaurant</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default GlutenFreeHurghada;
