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
import { gizaRestaurants } from "@/data/egyptRestaurants";
import type { EgyptRestaurant } from "@/data/egyptRestaurants";
import { SEOHead } from "@/components/SEOHead";

const getCeliacSafeBadge = (level: string) => { switch (level) { case "dedicated-facility": return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="w-3 h-3 mr-1" />Dedicated GF</Badge>; case "protocols-in-place": return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="w-3 h-3 mr-1" />Careful Handling</Badge>; default: return null; }};
const getMenuTypeBadge = (type: string) => { switch (type) { case "fully-gluten-free": return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% GF</Badge>; case "mixed-menu": return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options</Badge>; default: return null; }};
const renderStarRating = (rating: number) => (<div className="flex items-center gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />))}<span className="ml-1 font-semibold">{rating}</span></div>);

const renderCard = (r: EgyptRestaurant, citySlug: string, cityName: string, accentColor: string) => (
  <Card key={r.slug} className={`overflow-hidden ${r.featured ? `ring-2 ring-${accentColor}-300` : ''}`}>
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-3"><div>
        <div className="flex items-center gap-2 mb-1 flex-wrap">{r.featured && <Badge className={`bg-${accentColor}-100 text-${accentColor}-800 border-${accentColor}-300`}><Award className="w-3 h-3 mr-1" />Featured</Badge>}<Link to={`/gluten-free/egypt/${citySlug}/${r.slug}`} className={`text-xl font-bold text-gray-900 hover:text-${accentColor}-600 transition-colors`}>{r.name}</Link></div>
        <div className="flex items-center gap-2 mb-2 flex-wrap">{renderStarRating(r.rating)}<span className="text-gray-500 text-sm">({r.reviewCount} reviews)</span></div>
      </div><Button variant="ghost" size="sm"><Heart className="w-4 h-4" /></Button></div>
      <div className="flex flex-wrap gap-2 mb-3">{r.cuisineTypes.map((c, i) => <Badge key={i} variant="outline">{c}</Badge>)}{getCeliacSafeBadge(r.celiacSafe)}{getMenuTypeBadge(r.menuType)}</div>
      <div className="space-y-2 text-sm text-gray-600 mb-4"><div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /><span>{r.address}</span></div><div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /><span>{r.hours}</span></div></div>
      <p className="text-gray-700 mb-4">{r.overview}</p>
      <div className="mb-4"><h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4><div className="flex flex-wrap gap-2">{r.menuHighlights.map((item, i) => <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>)}</div></div>
      {r.proTip && (<div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4"><div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-amber-600" /><span className="font-medium text-amber-800">Pro Tip:</span><span className="text-amber-700">{r.proTip}</span></div></div>)}
      <div className="flex gap-3"><Button asChild className={`bg-${accentColor}-600 hover:bg-${accentColor}-700`}><a href={r.directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" />Get Directions</a></Button></div>
      <div className="mt-6 pt-6 border-t"><RestaurantReviews restaurantName={r.name} restaurantCountry="Egypt" restaurantCity={cityName} /></div>
    </CardContent>
  </Card>
);

const GlutenFreeGiza = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filtered = useMemo(() => gizaRestaurants.filter(r => searchQuery === "" || r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))), [searchQuery]);
  const faqItems = [
    { question: "Can I find gluten-free food near the Pyramids?", answer: "Yes! The Moghul Room, Dolato Gelateria at the Grand Egyptian Museum, and Alfredo Restaurant all offer GF options near the Pyramids." },
    { question: "Is Gad restaurant safe for celiacs?", answer: "Gad offers grilled meats and rice that are naturally GF, but be cautious of their bread-based items." },
  ];
  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Giza, Egypt | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants in Giza, Egypt. Verified celiac-safe dining near the pyramids."
      canonical="/gluten-free/egypt/giza"
    />
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <header className="bg-white shadow-sm border-b"><div className="container mx-auto px-4 py-4"><Link to="/gluten-free/egypt" className="inline-flex items-center text-yellow-700 hover:text-yellow-800"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Egypt</Link></div></header>
      <section className="relative text-white py-16 bg-gradient-to-r from-yellow-700 to-amber-600"><div className="absolute inset-0 bg-black/20" /><div className="container mx-auto px-4 text-center relative z-10"><span className="text-6xl mb-4 block">🏜️</span><h1 className="text-4xl md:text-5xl font-bold mb-4">Gluten-Free Restaurants in Giza</h1><p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">Dine gluten-free near the Pyramids and across the Giza Governorate.</p><AddRestaurantDialog city="Giza" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" /></div></section>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12"><Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200"><CardContent className="p-6"><div className="flex items-start gap-4"><Award className="w-8 h-8 text-yellow-600 flex-shrink-0" /><div><h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Giza</h2><p className="text-gray-700">Home to the Great Pyramids, Giza offers tourist-friendly restaurants with GF options.</p></div></div></CardContent></Card></section>
        <section className="mb-8"><Card><CardHeader><CardTitle className="flex items-center gap-2"><Filter className="w-5 h-5" />Filter</CardTitle></CardHeader><CardContent><Input placeholder="Search restaurants..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /><div className="mt-4 text-sm text-gray-600">Showing {filtered.length} of {gizaRestaurants.length}</div></CardContent></Card></section>
        <section className="mb-12"><h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2><div className="grid gap-6">{filtered.map(r => renderCard(r, "giza", "Giza", "yellow"))}</div></section>
        <section className="mb-12"><Card><CardHeader><CardTitle className="text-2xl">FAQ</CardTitle></CardHeader><CardContent><Accordion type="single" collapsible className="w-full">{faqItems.map((f, i) => (<AccordionItem key={i} value={`item-${i}`}><AccordionTrigger className="text-left">{f.question}</AccordionTrigger><AccordionContent className="text-gray-600">{f.answer}</AccordionContent></AccordionItem>))}</Accordion></CardContent></Card></section>
        <section><Card className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white border-0"><CardContent className="p-8 text-center"><h2 className="text-2xl font-bold mb-4">Know a Great GF Spot in Giza?</h2><p className="text-yellow-100 mb-6">Help fellow celiacs.</p><Button size="lg" className="bg-white text-yellow-600 hover:bg-yellow-50"><Plus className="w-5 h-5 mr-2" />Add a Restaurant</Button></CardContent></Card></section>
      </main>
    </div>

    </>
  );
};
export default GlutenFreeGiza;
