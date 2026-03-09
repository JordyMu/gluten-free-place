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
import mahebourgHero from "@/assets/mahebourg-mauritius.jpg";
import { mahebourgRestaurants } from "@/data/mahebourgRestaurants";

interface Restaurant {
  name: string;
  address: string;
  hours: string;
  phone: string;
  website: string;
  directionsUrl: string;
  specialty: string;
  overview: string;
  menuHighlights: string[];
  proTip: string;
  featured: boolean;
  cuisineTypes: string[];
  celiacSafe: "dedicated-facility" | "protocols-in-place";
  menuType: "fully-gluten-free" | "mixed-menu";
  rating: number;
  reviewCount: number;
  lat: number;
  lng: number;
  venueType: "bakery" | "restaurant" | "cafe" | "supermarket" | "street-food" | "home-baker" | "gf-products";
  distance?: number;
}

const GlutenFreeMahebourg = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
  const [venueFilter, setVenueFilter] = useState<string>("all");
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>("");
  const [sortByDistance, setSortByDistance] = useState(false);

  const faqItems = [
    {
      question: "Is Mahebourg a good destination for gluten-free travelers?",
      answer: "Mahebourg offers an authentic, less touristy Mauritian experience. The southeast coast is known for fresh seafood and traditional Creole cooking, with many naturally gluten-free dishes based on rice, lentils, and grilled fish."
    },
    {
      question: "What gluten-free food can I find in Mahebourg?",
      answer: "Fresh grilled seafood, Creole fish curries, octopus vindaye, dal with rice, and tropical fruits are all naturally GF and widely available. The nearby resort areas also offer international dining with GF menus."
    },
    {
      question: "Are there resorts near Mahebourg with GF-friendly dining?",
      answer: "Yes! The Bel Ombre area south of Mahebourg has several luxury resorts like Tamassa that offer dedicated GF menus. Notify them in advance for the best celiac-safe experience."
    },
    {
      question: "Is the airport area near Mahebourg celiac-friendly?",
      answer: "L'Escale Mauricienne at the airport terminal offers some GF options for travelers. Panarottis in nearby Rose Belle also has GF pizza options. It's wise to eat before arriving at the airport for more choices."
    },
    {
      question: "How do I communicate GF needs in Mahebourg?",
      answer: "French and Creole are predominantly spoken in Mahebourg, with some English. Say 'sans gluten' in French or 'pa met la farine' in Creole. Local restaurants may be less familiar with celiac disease, so explain clearly."
    }
  ];

  useEffect(() => {
    document.title = "Gluten-Free Restaurants in Mahebourg, Mauritius | Celiac-Safe Dining Guide 2026";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Find the best gluten-free restaurants in Mahebourg, Mauritius. Verified celiac-safe dining on the southeast coast. Fresh seafood and Creole cuisine.");
    const ogT = document.querySelector('meta[property="og:title"]');
    if (ogT) ogT.setAttribute("content", "Gluten-Free Restaurants in Mahebourg | Celiac-Safe Dining Guide");
    const ogD = document.querySelector('meta[property="og:description"]');
    if (ogD) ogD.setAttribute("content", "Discover verified gluten-free restaurants in Mahebourg, Mauritius. Browse listings and find safe dining on the historic southeast coast.");

    const prev = document.querySelector('script[data-schema="mahebourg-gf"]');
    if (prev) prev.remove();
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'mahebourg-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Mahebourg, Mauritius",
      "url": "https://glutenfreeplace.org/gluten-free/mauritius/mahebourg",
      "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
        { "@type": "ListItem", "position": 2, "name": "Mauritius", "item": "https://glutenfreeplace.org/gluten-free/mauritius" },
        { "@type": "ListItem", "position": 3, "name": "Mahebourg", "item": "https://glutenfreeplace.org/gluten-free/mauritius/mahebourg" }
      ]}
    });
    document.head.appendChild(schema);

    const prevFaq = document.querySelector('script[data-schema="mahebourg-faq"]');
    if (prevFaq) prevFaq.remove();
    const faqEl = document.createElement('script');
    faqEl.type = 'application/ld+json';
    faqEl.setAttribute('data-schema', 'mahebourg-faq');
    faqEl.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
    });
    document.head.appendChild(faqEl);

    return () => {
      document.querySelector('script[data-schema="mahebourg-gf"]')?.remove();
      document.querySelector('script[data-schema="mahebourg-faq"]')?.remove();
    };
  }, []);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const handleFindNearMe = () => {
    if (!navigator.geolocation) { setLocationError("Geolocation is not supported by your browser"); return; }
    setIsLocating(true); setLocationError("");
    const tryGet = (hi: boolean) => {
      navigator.geolocation.getCurrentPosition(
        (p) => { setUserLocation({ lat: p.coords.latitude, lng: p.coords.longitude }); setSortByDistance(true); setIsLocating(false); },
        (e) => {
          if (hi && e.code === e.TIMEOUT) { tryGet(false); return; }
          setIsLocating(false);
          switch (e.code) { case e.PERMISSION_DENIED: setLocationError("Location access denied."); break; case e.POSITION_UNAVAILABLE: setLocationError("Location unavailable."); break; case e.TIMEOUT: setLocationError("Location request timed out."); break; default: setLocationError("An unknown error occurred."); }
        },
        { enableHighAccuracy: hi, timeout: hi ? 15000 : 30000, maximumAge: 60000 }
      );
    };
    tryGet(true);
  };

  const restaurants = mahebourgRestaurants;

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
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />))}
      <span className="ml-1 font-semibold">{rating}</span>
    </div>
  );

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants.filter(r =>
      (safetyFilter === "all" || r.celiacSafe === safetyFilter) &&
      (venueFilter === "all" || r.venueType === venueFilter) &&
      (menuFilter === "all" || r.menuType === menuFilter) &&
      (searchQuery === "" || r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())))
    );
    if (sortByDistance && userLocation) {
      filtered = filtered.map(r => ({ ...r, distance: calculateDistance(userLocation.lat, userLocation.lng, r.lat, r.lng) })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }
    return filtered;
  }, [safetyFilter, venueFilter, menuFilter, searchQuery, sortByDistance, userLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/mauritius" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />Back to Mauritius
          </Link>
        </div>
      </header>

      <section className="relative text-white py-16">
        <div className="absolute inset-0">
          <img src={mahebourgHero} alt="Mahebourg, Mauritius waterfront" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🇲🇺</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Safe Gluten-Free Restaurants in Mahebourg</h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">Real reviews from gluten-free diners. Verified listings. Zero guesswork.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white/10" onClick={handleFindNearMe} disabled={isLocating}>
              {isLocating ? (<><div className="w-5 h-5 mr-2 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin" />Locating...</>) : sortByDistance ? (<><Navigation className="w-5 h-5 mr-2" />Sorted by Distance</>) : (<><Search className="w-5 h-5 mr-2" />Find Gluten-Free Food Near Me</>)}
            </Button>
            <AddRestaurantDialog city="Mahebourg" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
          {locationError && <p className="text-cyan-100 mt-4 text-sm">{locationError}</p>}
          {sortByDistance && userLocation && (<Button variant="link" className="text-white/80 hover:text-white mt-2" onClick={() => setSortByDistance(false)}>Clear distance sorting</Button>)}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Mahebourg & Southeast Mauritius</h2>
                  <p className="text-gray-700">
                    Mahebourg and the southeast coast offer an authentic, less touristy side of Mauritius.
                    This historic fishing village and its surrounding areas — including Bel Ombre, Souillac, and the airport region —
                    feature traditional Creole cooking, fresh-off-the-boat seafood, and resort dining.
                    While options are fewer than the north coast, the naturally gluten-free nature of Mauritian seafood
                    and rice-based cuisine means celiac travelers can still dine safely and deliciously.
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
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Search</label><Input placeholder="Search restaurants..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /></div>
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Venue Type</label><Select value={venueFilter} onValueChange={setVenueFilter}><SelectTrigger className="bg-white"><SelectValue placeholder="All venues" /></SelectTrigger><SelectContent className="bg-white z-50"><SelectItem value="all">All Venues</SelectItem><SelectItem value="restaurant">🍽️ Restaurant</SelectItem><SelectItem value="street-food">🍢 Street Food</SelectItem></SelectContent></Select></div>
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Safety Rating</label><Select value={safetyFilter} onValueChange={setSafetyFilter}><SelectTrigger className="bg-white"><SelectValue placeholder="All safety levels" /></SelectTrigger><SelectContent className="bg-white z-50"><SelectItem value="all">All Safety Levels</SelectItem><SelectItem value="dedicated-facility">🛡️ Dedicated GF Facility</SelectItem><SelectItem value="protocols-in-place">✓ Careful Handling</SelectItem></SelectContent></Select></div>
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label><Select value={menuFilter} onValueChange={setMenuFilter}><SelectTrigger className="bg-white"><SelectValue placeholder="All menu types" /></SelectTrigger><SelectContent className="bg-white z-50"><SelectItem value="all">All Menu Types</SelectItem><SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem><SelectItem value="mixed-menu">GF Options Available</SelectItem></SelectContent></Select></div>
              </div>
              <div className="mt-4 text-sm text-gray-600">Showing {filteredRestaurants.length} of {restaurants.length} restaurants</div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-cyan-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6"><div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          {restaurant.featured && (<Badge className="bg-cyan-100 text-cyan-800 border-cyan-300"><Award className="w-3 h-3 mr-1" />Featured</Badge>)}
                          <Link to={`/gluten-free/mauritius/mahebourg/${restaurant.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="text-xl font-bold text-gray-900 hover:text-cyan-600 transition-colors">{restaurant.name}</Link>
                        </div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          {renderStarRating(restaurant.rating)}
                          <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                          {restaurant.distance !== undefined && (<Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200"><Navigation className="w-3 h-3 mr-1" />{restaurant.distance < 1 ? `${Math.round(restaurant.distance * 1000)}m away` : `${restaurant.distance.toFixed(1)}km away`}</Badge>)}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm"><Heart className="w-4 h-4" /></Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {restaurant.cuisineTypes.map((c, i) => (<Badge key={i} variant="outline">{c}</Badge>))}
                      {getCeliacSafeBadge(restaurant.celiacSafe)}
                      {getMenuTypeBadge(restaurant.menuType)}
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /><span>{restaurant.address}</span></div>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /><span>{restaurant.hours}</span></div>
                      {restaurant.phone && (<div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-400" /><a href={`tel:${restaurant.phone}`} className="hover:text-cyan-600">{restaurant.phone}</a></div>)}
                    </div>
                    <p className="text-gray-700 mb-4">{restaurant.overview}</p>
                    <div className="mb-4"><h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4><div className="flex flex-wrap gap-2">{restaurant.menuHighlights.map((item, i) => (<Badge key={i} variant="secondary" className="text-sm">{item}</Badge>))}</div></div>
                    {restaurant.proTip && (<div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4"><div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-amber-600" /><span className="font-medium text-amber-800">Pro Tip:</span><span className="text-amber-700">{restaurant.proTip}</span></div></div>)}
                    <div className="flex gap-3">
                      <Button asChild className="bg-cyan-600 hover:bg-cyan-700"><a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" />Get Directions</a></Button>
                      {restaurant.website && (<Button variant="outline" asChild><a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer"><Globe className="w-4 h-4 mr-2" />Website</a></Button>)}
                    </div>
                    <div className="mt-6 pt-6 border-t"><RestaurantReviews restaurantName={restaurant.name} restaurantCountry="Mauritius" restaurantCity="Mahebourg" /></div>
                  </div></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader><CardTitle className="text-2xl">Frequently Asked Questions</CardTitle><p className="text-gray-600">Everything you need to know about gluten-free dining in Mahebourg</p></CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (<AccordionItem key={index} value={`item-${index}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="text-gray-600">{faq.answer}</AccordionContent></AccordionItem>))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Know a Great Gluten-Free Spot in Mahebourg?</h2>
              <p className="text-cyan-100 mb-6">Help fellow celiacs discover safe dining options. Add your favorite restaurant to our directory.</p>
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50"><Plus className="w-5 h-5 mr-2" />Add a Restaurant</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default GlutenFreeMahebourg;
