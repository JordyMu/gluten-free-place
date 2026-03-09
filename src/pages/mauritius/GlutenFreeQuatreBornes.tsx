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
import quatreBornesHero from "@/assets/quatre-bornes-mauritius.jpg";

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

const GlutenFreeQuatreBornes = () => {
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
      question: "Is Quatre Bornes good for gluten-free dining?",
      answer: "Quatre Bornes offers an authentic local dining experience with Indian, Creole, and Middle Eastern restaurants. Many traditional dishes are naturally gluten-free, built around rice, lentils, and grilled meats."
    },
    {
      question: "What is Quatre Bornes known for food-wise?",
      answer: "Quatre Bornes is famous for its vibrant street market and authentic Mauritian home cooking. The town is a melting pot of Indian, Chinese, and Creole culinary traditions with many naturally GF staples."
    },
    {
      question: "Can I find gluten-free street food in Quatre Bornes?",
      answer: "Some street food is naturally GF like grilled items and fresh fruits, but be cautious with popular snacks like dholl puri, samosas, and faratas which contain wheat. Always ask about ingredients."
    },
    {
      question: "Are there supermarkets with GF products in Quatre Bornes?",
      answer: "Yes, Super U and Winners in the area stock imported GF products. Indian grocery stores carry naturally GF flours like rice flour and chickpea flour (besan)."
    },
    {
      question: "How do I get to Quatre Bornes from the coast?",
      answer: "Quatre Bornes is centrally located and easily accessible from both the east and west coasts. It's about 20 minutes from Flic en Flac and 30 minutes from Grand Baie by car."
    }
  ];

  useEffect(() => {
    document.title = "Gluten-Free Restaurants in Quatre Bornes, Mauritius | Celiac-Safe Dining Guide 2026";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", "Find the best gluten-free restaurants in Quatre Bornes, Mauritius. Verified celiac-safe dining with Indian, Creole, and Middle Eastern options.");
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Gluten-Free Restaurants in Quatre Bornes | Celiac-Safe Dining Guide");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Discover verified gluten-free restaurants in Quatre Bornes, Mauritius. Browse listings and find safe dining in this bustling market town.");

    const existingSchema = document.querySelector('script[data-schema="quatre-bornes-gf"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'quatre-bornes-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Quatre Bornes, Mauritius",
      "url": "https://glutenfreeplace.org/gluten-free/mauritius/quatre-bornes",
      "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
        { "@type": "ListItem", "position": 2, "name": "Mauritius", "item": "https://glutenfreeplace.org/gluten-free/mauritius" },
        { "@type": "ListItem", "position": 3, "name": "Quatre Bornes", "item": "https://glutenfreeplace.org/gluten-free/mauritius/quatre-bornes" }
      ]}
    });
    document.head.appendChild(schema);

    const existingFaq = document.querySelector('script[data-schema="quatre-bornes-faq"]');
    if (existingFaq) existingFaq.remove();
    const faqSchemaEl = document.createElement('script');
    faqSchemaEl.type = 'application/ld+json';
    faqSchemaEl.setAttribute('data-schema', 'quatre-bornes-faq');
    faqSchemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": faqItems.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
    });
    document.head.appendChild(faqSchemaEl);

    return () => {
      document.querySelector('script[data-schema="quatre-bornes-gf"]')?.remove();
      document.querySelector('script[data-schema="quatre-bornes-faq"]')?.remove();
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
    const tryGetLocation = (highAccuracy: boolean) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => { setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setSortByDistance(true); setIsLocating(false); },
        (err) => {
          if (highAccuracy && err.code === err.TIMEOUT) { tryGetLocation(false); return; }
          setIsLocating(false);
          switch (err.code) { case err.PERMISSION_DENIED: setLocationError("Location access denied."); break; case err.POSITION_UNAVAILABLE: setLocationError("Location unavailable."); break; case err.TIMEOUT: setLocationError("Location request timed out."); break; default: setLocationError("An unknown error occurred."); }
        },
        { enableHighAccuracy: highAccuracy, timeout: highAccuracy ? 15000 : 30000, maximumAge: 60000 }
      );
    };
    tryGetLocation(true);
  };

  const restaurants: Restaurant[] = [
    {
      name: "ZAYTOON",
      address: "Quatre Bornes, Mauritius",
      hours: "Daily: 11:00AM – 10:00PM",
      phone: "", website: "",
      directionsUrl: "https://www.google.com/maps/search/ZAYTOON+Quatre+Bornes+Mauritius",
      specialty: "Middle Eastern Cuisine",
      overview: "A Middle Eastern restaurant offering many naturally gluten-free dishes. Grilled meats, rice platters, hummus, and fresh salads are safe choices for celiac diners.",
      menuHighlights: ["🥙 Grilled Meat Platters (GF)", "🧆 Hummus & Baba Ganoush (GF)", "🍚 Rice Dishes (GF)", "🥗 Fattoush (without bread, GF)"],
      proTip: "Ask for grilled meats with rice and hummus — skip the pita bread for a delicious GF meal.",
      featured: true,
      cuisineTypes: ["Middle Eastern", "Lebanese", "Mediterranean"],
      celiacSafe: "protocols-in-place", menuType: "mixed-menu",
      rating: 4.2, reviewCount: 134, lat: -20.2631, lng: 57.4781, venueType: "restaurant"
    },
    {
      name: "The Yellow Chilli",
      address: "Tribeca Food Hall, Trianon, Mauritius",
      hours: "Daily: 11:00AM – 10:00PM",
      phone: "", website: "",
      directionsUrl: "https://www.google.com/maps/search/The+Yellow+Chilli+Trianon+Mauritius",
      specialty: "Indian Fine Dining with GF Options",
      overview: "An upscale Indian restaurant in nearby Tribeca Food Hall offering a wide range of naturally gluten-free curries, tandoori meats, and rice dishes.",
      menuHighlights: ["🍛 Tandoori Chicken (GF)", "🍚 Biryani (GF)", "🥘 Dal Makhani (GF)", "🍢 Seekh Kebabs (ask GF)"],
      proTip: "Most curries and tandoori items are naturally GF — just confirm no flour-based thickeners are used.",
      featured: true,
      cuisineTypes: ["Indian", "Fine Dining"],
      celiacSafe: "protocols-in-place", menuType: "mixed-menu",
      rating: 4.3, reviewCount: 145, lat: -20.2500, lng: 57.5000, venueType: "restaurant"
    },
    {
      name: "Smokey Joe",
      address: "Tribeca Mall, Trianon 72261, Mauritius",
      hours: "Daily: 10:00AM – 10:00PM",
      phone: "", website: "",
      directionsUrl: "https://www.google.com/maps/search/Smokey+Joe+Trianon+Mauritius",
      specialty: "Grilled & BBQ with GF Options",
      overview: "A popular grill restaurant in nearby Tribeca Mall. Grilled meats, burgers (without buns), and fresh sides offer good gluten-free options.",
      menuHighlights: ["🥩 Grilled Steaks (GF)", "🍗 BBQ Chicken (GF)", "🥗 Fresh Salads (GF)", "🍟 Fries (ask about shared fryer)"],
      proTip: "Order grilled meat without the bun or sauce for a safe GF meal.",
      featured: false,
      cuisineTypes: ["Grill", "BBQ", "American"],
      celiacSafe: "protocols-in-place", menuType: "mixed-menu",
      rating: 4.1, reviewCount: 98, lat: -20.2505, lng: 57.4998, venueType: "restaurant"
    },
    {
      name: "Café LUX* Riserva",
      address: "Tribeca Mall, Trianon 72261, Mauritius",
      hours: "Daily: 8:00AM – 6:00PM",
      phone: "", website: "www.luxresorts.com",
      directionsUrl: "https://www.google.com/maps/search/Cafe+LUX+Riserva+Trianon+Mauritius",
      specialty: "Specialty Coffee & Light Bites",
      overview: "Part of the LUX* brand, this specialty café offers artisan coffee and light bites. Several items can be prepared gluten-free upon request.",
      menuHighlights: ["☕ Specialty Coffee", "🥗 GF Salads", "🍰 Select GF Treats", "🥤 Fresh Juices"],
      proTip: "Ask about their daily GF options — availability varies but staff are knowledgeable.",
      featured: false,
      cuisineTypes: ["Café", "Coffee", "Light Bites"],
      celiacSafe: "protocols-in-place", menuType: "mixed-menu",
      rating: 4.4, reviewCount: 76, lat: -20.2503, lng: 57.5001, venueType: "cafe"
    },
    {
      name: "Nando's Phoenix",
      address: "Phoenix Commercial Centre, Independance St, Vacoas-Phœnix 73417, Mauritius",
      hours: "Daily: 10:00AM – 10:00PM",
      phone: "", website: "www.nandos.com",
      directionsUrl: "https://www.google.com/maps/search/Nandos+Phoenix+Mauritius",
      specialty: "Flame-Grilled Peri-Peri Chicken",
      overview: "The well-known peri-peri chicken chain with naturally gluten-free grilled chicken. A reliable and familiar choice for celiacs.",
      menuHighlights: ["🍗 Peri-Peri Chicken (GF)", "🌽 Corn on the Cob (GF)", "🥗 Side Salads (GF)", "🍚 Rice (GF)"],
      proTip: "Stick to grilled chicken, rice, corn, and salads — reliably GF. Avoid wraps and rolls.",
      featured: false,
      cuisineTypes: ["Chicken", "Peri-Peri", "Fast Casual"],
      celiacSafe: "protocols-in-place", menuType: "mixed-menu",
      rating: 4.0, reviewCount: 210, lat: -20.2653, lng: 57.4964, venueType: "restaurant"
    },
    {
      name: "Island Babe Healthy Food",
      address: "Nigel Street, Les Flamants Roads, Mauritius",
      hours: "Mon–Sat: 8:00AM – 4:00PM",
      phone: "", website: "",
      directionsUrl: "https://www.google.com/maps/search/Island+Babe+Healthy+Food+Mauritius",
      specialty: "Health-Focused Café",
      overview: "A health-focused eatery offering fresh, nutrient-rich meals with many naturally gluten-free options. Perfect for health-conscious celiac travelers.",
      menuHighlights: ["🥗 Buddha Bowls (GF)", "🥤 Green Smoothies", "🍳 GF Breakfast Bowls", "🥑 Fresh Wraps (GF lettuce wrap)"],
      proTip: "Most of their menu is naturally GF — a rare gem for health-conscious celiacs!",
      featured: true,
      cuisineTypes: ["Healthy", "Organic", "Café"],
      celiacSafe: "protocols-in-place", menuType: "mixed-menu",
      rating: 4.6, reviewCount: 65, lat: -20.2300, lng: 57.4900, venueType: "cafe"
    },
  ];

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
    let filtered = restaurants.filter(r => {
      return (safetyFilter === "all" || r.celiacSafe === safetyFilter) &&
        (venueFilter === "all" || r.venueType === venueFilter) &&
        (menuFilter === "all" || r.menuType === menuFilter) &&
        (searchQuery === "" || r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())));
    });
    if (sortByDistance && userLocation) {
      filtered = filtered.map(r => ({ ...r, distance: calculateDistance(userLocation.lat, userLocation.lng, r.lat, r.lng) })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }
    return filtered;
  }, [safetyFilter, venueFilter, menuFilter, searchQuery, sortByDistance, userLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/mauritius" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />Back to Mauritius
          </Link>
        </div>
      </header>

      <section className="relative text-white py-16">
        <div className="absolute inset-0">
          <img src={quatreBornesHero} alt="Quatre Bornes, Mauritius" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🇲🇺</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Safe Gluten-Free Restaurants in Quatre Bornes</h1>
          <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-3xl mx-auto">Real reviews from gluten-free diners. Verified listings. Zero guesswork.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white/10" onClick={handleFindNearMe} disabled={isLocating}>
              {isLocating ? (<><div className="w-5 h-5 mr-2 border-2 border-rose-600 border-t-transparent rounded-full animate-spin" />Locating...</>) : sortByDistance ? (<><Navigation className="w-5 h-5 mr-2" />Sorted by Distance</>) : (<><Search className="w-5 h-5 mr-2" />Find Gluten-Free Food Near Me</>)}
            </Button>
            <AddRestaurantDialog city="Quatre Bornes" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
          {locationError && <p className="text-rose-100 mt-4 text-sm">{locationError}</p>}
          {sortByDistance && userLocation && (<Button variant="link" className="text-white/80 hover:text-white mt-2" onClick={() => setSortByDistance(false)}>Clear distance sorting</Button>)}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-rose-50 to-orange-50 border-rose-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-rose-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Quatre Bornes</h2>
                  <p className="text-gray-700">
                    Quatre Bornes is a bustling market town in central Mauritius known for its authentic local food scene.
                    With excellent Middle Eastern, Indian, and healthy café options, the town and nearby Trianon and Phoenix
                    offer a solid selection of naturally gluten-free dining. From ZAYTOON's Lebanese platters to Island Babe's
                    health bowls, celiac travelers will find safe and flavourful options throughout this vibrant area.
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
                <div><label className="text-sm font-medium text-gray-700 mb-1 block">Venue Type</label><Select value={venueFilter} onValueChange={setVenueFilter}><SelectTrigger className="bg-white"><SelectValue placeholder="All venues" /></SelectTrigger><SelectContent className="bg-white z-50"><SelectItem value="all">All Venues</SelectItem><SelectItem value="restaurant">🍽️ Restaurant</SelectItem><SelectItem value="cafe">☕ Café</SelectItem></SelectContent></Select></div>
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
              <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-rose-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6"><div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          {restaurant.featured && (<Badge className="bg-rose-100 text-rose-800 border-rose-300"><Award className="w-3 h-3 mr-1" />Featured</Badge>)}
                          <Link to={`/gluten-free/mauritius/quatre-bornes/${restaurant.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="text-xl font-bold text-gray-900 hover:text-rose-600 transition-colors">{restaurant.name}</Link>
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
                      {restaurant.phone && (<div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-400" /><a href={`tel:${restaurant.phone}`} className="hover:text-rose-600">{restaurant.phone}</a></div>)}
                    </div>
                    <p className="text-gray-700 mb-4">{restaurant.overview}</p>
                    <div className="mb-4"><h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4><div className="flex flex-wrap gap-2">{restaurant.menuHighlights.map((item, i) => (<Badge key={i} variant="secondary" className="text-sm">{item}</Badge>))}</div></div>
                    {restaurant.proTip && (<div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4"><div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-amber-600" /><span className="font-medium text-amber-800">Pro Tip:</span><span className="text-amber-700">{restaurant.proTip}</span></div></div>)}
                    <div className="flex gap-3">
                      <Button asChild className="bg-rose-600 hover:bg-rose-700"><a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation className="w-4 h-4 mr-2" />Get Directions</a></Button>
                      {restaurant.website && (<Button variant="outline" asChild><a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer"><Globe className="w-4 h-4 mr-2" />Website</a></Button>)}
                    </div>
                    <div className="mt-6 pt-6 border-t"><RestaurantReviews restaurantName={restaurant.name} restaurantCountry="Mauritius" restaurantCity="Quatre Bornes" /></div>
                  </div></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader><CardTitle className="text-2xl">Frequently Asked Questions</CardTitle><p className="text-gray-600">Everything you need to know about gluten-free dining in Quatre Bornes</p></CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (<AccordionItem key={index} value={`item-${index}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="text-gray-600">{faq.answer}</AccordionContent></AccordionItem>))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-to-r from-rose-500 to-orange-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Know a Great Gluten-Free Spot in Quatre Bornes?</h2>
              <p className="text-rose-100 mb-6">Help fellow celiacs discover safe dining options. Add your favorite restaurant to our directory.</p>
              <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50"><Plus className="w-5 h-5 mr-2" />Add a Restaurant</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default GlutenFreeQuatreBornes;
