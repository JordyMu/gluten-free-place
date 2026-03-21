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
import { SEOHead } from "@/components/SEOHead";

const getCeliacSafeBadge = (level: string) => {
  switch (level) {
    case "dedicated-facility":
      return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="w-3 h-3 mr-1" />Dedicated GF Facility</Badge>;
    case "protocols-in-place":
      return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="w-3 h-3 mr-1" />Careful Handling</Badge>;
    default: return null;
  }
};

const getMenuTypeBadge = (type: string) => {
  switch (type) {
    case "fully-gluten-free":
      return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
    case "mixed-menu":
      return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
    default: return null;
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
, []);

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
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Cairo, Egypt | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants in Cairo, Egypt. Verified celiac-safe dining options. Real reviews from GF travelers."
      canonical="/gluten-free/egypt/cairo"
    />
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
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">Discover celiac-safe dining in Egypt's capital — from Zamalek to Nasr City.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AddRestaurantDialog city="Cairo" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
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
                  <p className="text-gray-700">Cairo's diverse food scene includes dedicated GF restaurants, health-conscious cafés, and luxury hotel dining with celiac-safe options.</p>
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
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Search</label>
                  <Input placeholder="Search restaurants..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /></div>
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label>
                  <Select value={menuFilter} onValueChange={setMenuFilter}>
                    <SelectTrigger className="bg-white"><SelectValue placeholder="All menu types" /></SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Menu Types</SelectItem>
                      <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                      <SelectItem value="mixed-menu">GF Options Available</SelectItem>
                    </SelectContent>
                  </Select></div>
              </div>
              <div className="mt-4 text-sm text-gray-600">Showing {filteredRestaurants.length} of {cairoRestaurants.length} restaurants</div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant) => (
              <Card key={restaurant.slug} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-amber-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {restaurant.featured && <Badge className="bg-amber-100 text-amber-800 border-amber-300"><Award className="w-3 h-3 mr-1" />Featured</Badge>}
                        <Link to={`/gluten-free/egypt/cairo/${restaurant.slug}`} className="text-xl font-bold text-gray-900 hover:text-amber-600 transition-colors">{restaurant.name}</Link>
                      </div>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {renderStarRating(restaurant.rating)}
                        <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm"><Heart className="w-4 h-4" /></Button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {restaurant.cuisineTypes.map((cuisine, i) => <Badge key={i} variant="outline">{cuisine}</Badge>)}
                    {getCeliacSafeBadge(restaurant.celiacSafe)}
                    {getMenuTypeBadge(restaurant.menuType)}
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /><span>{restaurant.address}</span></div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /><span>{restaurant.hours}</span></div>
                    {restaurant.phone && <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-400" /><a href={`tel:${restaurant.phone}`} className="hover:text-amber-600">{restaurant.phone}</a></div>}
                  </div>

                  <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.menuHighlights.map((item, i) => <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>)}
                    </div>
                  </div>

                  {restaurant.proTip && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-amber-600" />
                        <span className="font-medium text-amber-800">Pro Tip:</span>
                        <span className="text-amber-700">{restaurant.proTip}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button asChild className="bg-amber-600 hover:bg-amber-700">
                      <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" />Get Directions</a>
                    </Button>
                    {restaurant.website && (
                      <Button variant="outline" asChild>
                        <a href={restaurant.website.startsWith("http") ? restaurant.website : `https://${restaurant.website}`} target="_blank" rel="noopener noreferrer"><Globe className="w-4 h-4 mr-2" />Website</a>
                      </Button>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <RestaurantReviews restaurantName={restaurant.name} restaurantCountry="Egypt" restaurantCity="Cairo" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader><CardTitle className="text-2xl">Frequently Asked Questions</CardTitle><p className="text-gray-600">Gluten-free dining in Cairo</p></CardHeader>
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

    </>
  );
};

export default GlutenFreeCairo;
