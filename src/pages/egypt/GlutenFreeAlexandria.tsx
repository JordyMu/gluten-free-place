import { useState, useMemo, useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { alexandriaRestaurants } from "@/data/egyptRestaurants";
import type { EgyptRestaurant } from "@/data/egyptRestaurants";

const getCeliacSafeBadge = (level: string) => {
  switch (level) {
    case "dedicated-facility": return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="w-3 h-3 mr-1" />Dedicated GF Facility</Badge>;
    case "protocols-in-place": return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="w-3 h-3 mr-1" />Careful Handling</Badge>;
    default: return null;
  }
};
const getMenuTypeBadge = (type: string) => {
  switch (type) {
    case "fully-gluten-free": return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
    case "mixed-menu": return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
    default: return null;
  }
};
const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />))}<span className="ml-1 font-semibold">{rating}</span></div>
);

const renderRestaurantCard = (restaurant: EgyptRestaurant, citySlug: string, cityName: string) => (
  <Card key={restaurant.slug} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-blue-300' : ''}`}>
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {restaurant.featured && <Badge className="bg-blue-100 text-blue-800 border-blue-300"><Award className="w-3 h-3 mr-1" />Featured</Badge>}
            <Link to={`/gluten-free/egypt/${citySlug}/${restaurant.slug}`} className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{restaurant.name}</Link>
          </div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">{renderStarRating(restaurant.rating)}<span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span></div>
        </div>
        <Button variant="ghost" size="sm"><Heart className="w-4 h-4" /></Button>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">{restaurant.cuisineTypes.map((c, i) => <Badge key={i} variant="outline">{c}</Badge>)}{getCeliacSafeBadge(restaurant.celiacSafe)}{getMenuTypeBadge(restaurant.menuType)}</div>
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /><span>{restaurant.address}</span></div>
        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /><span>{restaurant.hours}</span></div>
      </div>
      <p className="text-gray-700 mb-4">{restaurant.overview}</p>
      <div className="mb-4"><h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4><div className="flex flex-wrap gap-2">{restaurant.menuHighlights.map((item, i) => <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>)}</div></div>
      {restaurant.proTip && (<div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4"><div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-amber-600" /><span className="font-medium text-amber-800">Pro Tip:</span><span className="text-amber-700">{restaurant.proTip}</span></div></div>)}
      <div className="flex gap-3">
        <Button asChild className="bg-blue-600 hover:bg-blue-700"><a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" />Get Directions</a></Button>
      </div>
      <div className="mt-6 pt-6 border-t"><RestaurantReviews restaurantName={restaurant.name} restaurantCountry="Egypt" restaurantCity={cityName} /></div>
    </CardContent>
  </Card>
);

const GlutenFreeAlexandria = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => { document.title = "Gluten-Free Restaurants in Alexandria | Celiac-Safe Dining Guide 2026"; }, []);
  const filtered = useMemo(() => alexandriaRestaurants.filter(r => searchQuery === "" || r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))), [searchQuery]);
  const faqItems = [
    { question: "Is Alexandria good for gluten-free dining?", answer: "Alexandria's Mediterranean cuisine includes naturally GF options like grilled seafood, rice, and fresh salads." },
    { question: "What should I try in Alexandria?", answer: "Mohamed Ahmed Restaurant is famous for ful medames (naturally GF). Fresh grilled seafood along the corniche is also excellent." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm border-b"><div className="container mx-auto px-4 py-4"><Link to="/gluten-free/egypt" className="inline-flex items-center text-blue-600 hover:text-blue-700"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Egypt</Link></div></header>
      <section className="relative text-white py-16 bg-gradient-to-r from-blue-700 to-cyan-600"><div className="absolute inset-0 bg-black/20" /><div className="container mx-auto px-4 text-center relative z-10"><span className="text-6xl mb-4 block">🌊</span><h1 className="text-4xl md:text-5xl font-bold mb-4">Gluten-Free Restaurants in Alexandria</h1><p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Mediterranean coastal dining with naturally gluten-free seafood and traditional Egyptian cuisine.</p><AddRestaurantDialog city="Alexandria" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" /></div></section>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12"><Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200"><CardContent className="p-6"><div className="flex items-start gap-4"><Award className="w-8 h-8 text-blue-600 flex-shrink-0" /><div><h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Alexandria</h2><p className="text-gray-700">Alexandria's Mediterranean heritage means plenty of naturally GF seafood, grilled meats, and fresh produce.</p></div></div></CardContent></Card></section>
        <section className="mb-8"><Card><CardHeader><CardTitle className="flex items-center gap-2"><Filter className="w-5 h-5" />Filter</CardTitle></CardHeader><CardContent><Input placeholder="Search restaurants..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /><div className="mt-4 text-sm text-gray-600">Showing {filtered.length} of {alexandriaRestaurants.length} restaurants</div></CardContent></Card></section>
        <section className="mb-12"><h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2><div className="grid gap-6">{filtered.map(r => renderRestaurantCard(r, "alexandria", "Alexandria"))}</div></section>
        <section className="mb-12"><Card><CardHeader><CardTitle className="text-2xl">Frequently Asked Questions</CardTitle></CardHeader><CardContent><Accordion type="single" collapsible className="w-full">{faqItems.map((faq, i) => (<AccordionItem key={i} value={`item-${i}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="text-gray-600">{faq.answer}</AccordionContent></AccordionItem>))}</Accordion></CardContent></Card></section>
        <section><Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0"><CardContent className="p-8 text-center"><h2 className="text-2xl font-bold mb-4">Know a Great GF Spot in Alexandria?</h2><p className="text-blue-100 mb-6">Help fellow celiacs discover safe dining options.</p><Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50"><Plus className="w-5 h-5 mr-2" />Add a Restaurant</Button></CardContent></Card></section>
      </main>
    </div>
  );
};
export default GlutenFreeAlexandria;
