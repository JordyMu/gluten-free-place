import { useState, useMemo, useEffect } from "react";
import portLouisHero from "@/assets/port-louis-mauritius.jpg";
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

interface Restaurant {
  name: string;
  slug: string;
  address: string;
  hours: string;
  phone: string;
  website: string;
  directionsUrl: string;
  specialty: string;
  overview: string;
  menuHighlights: string[];
  proTip: string;
  icon: string;
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

const GlutenFreePortLouis = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
  const [venueFilter, setVenueFilter] = useState<string>("all");
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>("");
  const [sortByDistance, setSortByDistance] = useState(false);

  useEffect(() => {
    document.title = "Gluten-Free Restaurants in Port Louis, Mauritius | Celiac-Safe Dining Guide 2026";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Find the best gluten-free restaurants in Port Louis, Mauritius. Verified celiac-safe dining from Caudan Waterfront to Chinatown. Real reviews from GF travelers.");
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in Port Louis | Celiac-Safe Dining Guide");
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants in Port Louis, Mauritius. Browse listings, read real reviews, and find safe dining in the capital.");
    }

    const existingSchema = document.querySelector('script[data-schema="port-louis-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'port-louis-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Port Louis, Mauritius",
      "description": "Find the best gluten-free restaurants in Port Louis, Mauritius.",
      "url": "https://glutenfreeplace.org/gluten-free/mauritius/port-louis",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "Mauritius", "item": "https://glutenfreeplace.org/gluten-free/mauritius" },
          { "@type": "ListItem", "position": 3, "name": "Port Louis", "item": "https://glutenfreeplace.org/gluten-free/mauritius/port-louis" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="port-louis-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchemaEl = document.createElement('script');
    faqSchemaEl.type = 'application/ld+json';
    faqSchemaEl.setAttribute('data-schema', 'port-louis-faq');
    faqSchemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    });
    document.head.appendChild(faqSchemaEl);

    return () => {
      const s1 = document.querySelector('script[data-schema="port-louis-gf"]');
      if (s1) s1.remove();
      const s2 = document.querySelector('script[data-schema="port-louis-faq"]');
      if (s2) s2.remove();
    };
  }, []);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleFindNearMe = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }
    setIsLocating(true);
    setLocationError("");

    const tryGetLocation = (highAccuracy: boolean) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
          setSortByDistance(true);
          setIsLocating(false);
        },
        (error) => {
          if (highAccuracy && error.code === error.TIMEOUT) { tryGetLocation(false); return; }
          setIsLocating(false);
          switch (error.code) {
            case error.PERMISSION_DENIED: setLocationError("Location access denied."); break;
            case error.POSITION_UNAVAILABLE: setLocationError("Location unavailable."); break;
            case error.TIMEOUT: setLocationError("Location request timed out."); break;
            default: setLocationError("An unknown error occurred.");
          }
        },
        { enableHighAccuracy: highAccuracy, timeout: highAccuracy ? 15000 : 30000, maximumAge: 60000 }
      );
    };
    tryGetLocation(true);
  };

  const restaurants: Restaurant[] = [
    {
      name: "Escale Créole",
      address: "B46 Bois Cheri Rd, Moka, Mauritius",
      hours: "Tue–Sun: 11:30AM – 3:00PM, 6:30PM – 9:30PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Escale+Creole+Moka+Mauritius",
      specialty: "Authentic Creole Cuisine",
      overview: "A beloved Mauritian restaurant serving traditional Creole cuisine in a charming colonial-style setting. Many dishes are naturally gluten-free, prepared with local spices and fresh ingredients.",
      menuHighlights: ["🍲 Creole Fish Curry (GF)", "🐙 Octopus Vindaye (GF)", "🍚 Dal & Rice (GF)", "🥘 Rougaille (GF)"],
      proTip: "Their fish vindaye and octopus curry are legendary — both naturally gluten-free!",
      icon: "🍲",
      featured: true,
      cuisineTypes: ["Mauritian", "Creole", "Traditional"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 187,
      lat: -20.2167,
      lng: 57.4833,
      venueType: "restaurant"
    },
    {
      name: "The Yellow Chilli",
      address: "Tribeca Food Hall, Trianon, Mauritius",
      hours: "Daily: 11:00AM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/The+Yellow+Chilli+Trianon+Mauritius",
      specialty: "Indian Fine Dining with GF Options",
      overview: "An upscale Indian restaurant in the Tribeca Food Hall offering a wide range of naturally gluten-free dishes. Indian curries, tandoori meats, and rice dishes are excellent GF options.",
      menuHighlights: ["🍛 Tandoori Chicken (GF)", "🍚 Biryani (GF)", "🥘 Dal Makhani (GF)", "🍢 Seekh Kebabs (ask GF)"],
      proTip: "Most curries and tandoori items are naturally GF — just confirm no flour-based thickeners are used.",
      icon: "🍛",
      featured: true,
      cuisineTypes: ["Indian", "Fine Dining"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 145,
      lat: -20.2500,
      lng: 57.5000,
      venueType: "restaurant"
    },
    {
      name: "Smokey Joe",
      address: "Tribeca Mall, Trianon 72261, Mauritius",
      hours: "Daily: 10:00AM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Smokey+Joe+Trianon+Mauritius",
      specialty: "Grilled & BBQ with GF Options",
      overview: "A popular grill restaurant in Tribeca Mall. Grilled meats, burgers (without buns), and fresh sides offer good gluten-free options for meat lovers.",
      menuHighlights: ["🥩 Grilled Steaks (GF)", "🍗 BBQ Chicken (GF)", "🥗 Fresh Salads (GF)", "🍟 Fries (ask about shared fryer)"],
      proTip: "Order any grilled meat without the bun or sauce for a safe GF meal. Ask about shared fryers for fries.",
      icon: "🥩",
      featured: false,
      cuisineTypes: ["Grill", "BBQ", "American"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.1,
      reviewCount: 98,
      lat: -20.2505,
      lng: 57.4998,
      venueType: "restaurant"
    },
    {
      name: "Café LUX* Riserva",
      address: "Tribeca Mall, Trianon 72261, Mauritius",
      hours: "Daily: 8:00AM – 6:00PM",
      phone: "",
      website: "www.luxresorts.com",
      directionsUrl: "https://www.google.com/maps/search/Cafe+LUX+Riserva+Trianon+Mauritius",
      specialty: "Specialty Coffee & Light Bites",
      overview: "Part of the LUX* brand, this specialty café offers artisan coffee and light bites. Several items on the menu can be prepared gluten-free upon request.",
      menuHighlights: ["☕ Specialty Coffee", "🥗 GF Salads", "🍰 Select GF Treats", "🥤 Fresh Juices"],
      proTip: "Ask about their daily GF options — availability varies but staff are knowledgeable about ingredients.",
      icon: "☕",
      featured: false,
      cuisineTypes: ["Café", "Coffee", "Light Bites"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 76,
      lat: -20.2503,
      lng: 57.5001,
      venueType: "cafe"
    },
    {
      name: "Nando's Phoenix",
      address: "Phoenix Commercial Centre, Independance St, Vacoas-Phœnix 73417, Mauritius",
      hours: "Daily: 10:00AM – 10:00PM",
      phone: "",
      website: "www.nandos.com",
      directionsUrl: "https://www.google.com/maps/search/Nandos+Phoenix+Mauritius",
      specialty: "Flame-Grilled Chicken",
      overview: "The well-known peri-peri chicken chain with naturally gluten-free grilled chicken options. A reliable choice for celiacs who know the Nando's menu.",
      menuHighlights: ["🍗 Peri-Peri Chicken (GF)", "🌽 Corn on the Cob (GF)", "🥗 Side Salads (GF)", "🍚 Rice (GF)"],
      proTip: "Stick to grilled chicken, rice, corn, and salads — these are reliably GF. Avoid wraps and rolls.",
      icon: "🍗",
      featured: false,
      cuisineTypes: ["Chicken", "Peri-Peri", "Fast Casual"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.0,
      reviewCount: 210,
      lat: -20.2653,
      lng: 57.4964,
      venueType: "restaurant"
    },
    {
      name: "ZAYTOON",
      address: "Quatre Bornes, Mauritius",
      hours: "Daily: 11:00AM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/ZAYTOON+Quatre+Bornes+Mauritius",
      specialty: "Middle Eastern Cuisine with GF Options",
      overview: "A Middle Eastern restaurant offering many naturally gluten-free dishes. Grilled meats, rice platters, hummus, and fresh salads are safe choices for celiac diners.",
      menuHighlights: ["🥙 Grilled Meat Platters (GF)", "🧆 Hummus & Baba Ganoush (GF)", "🍚 Rice Dishes (GF)", "🥗 Fattoush (without bread, GF)"],
      proTip: "Ask for grilled meats with rice and hummus — skip the pita bread for a delicious GF meal.",
      icon: "🥙",
      featured: true,
      cuisineTypes: ["Middle Eastern", "Lebanese", "Mediterranean"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.2,
      reviewCount: 134,
      lat: -20.2631,
      lng: 57.4781,
      venueType: "restaurant"
    },
    {
      name: "Island Babe Healthy Food",
      address: "Nigel Street, Les Flamants Roads, Mauritius",
      hours: "Mon–Sat: 8:00AM – 4:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Island+Babe+Healthy+Food+Mauritius",
      specialty: "Health-Focused Café",
      overview: "A health-focused eatery offering fresh, nutrient-rich meals with many naturally gluten-free options. Perfect for health-conscious celiac travelers.",
      menuHighlights: ["🥗 Buddha Bowls (GF)", "🥤 Green Smoothies", "🍳 GF Breakfast Bowls", "🥑 Fresh Wraps (GF lettuce wrap)"],
      proTip: "Most of their menu is naturally GF — a rare gem for health-conscious celiacs!",
      icon: "🥗",
      featured: true,
      cuisineTypes: ["Healthy", "Organic", "Café"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.6,
      reviewCount: 65,
      lat: -20.2300,
      lng: 57.4900,
      venueType: "cafe"
    },
  ];

  const faqItems = [
    {
      question: "Is Port Louis a good destination for gluten-free travelers?",
      answer: "Yes! As the capital and largest city, Port Louis offers the most diverse dining scene in Mauritius. From traditional Creole restaurants to Indian fine dining and international chains, there are plenty of naturally GF options."
    },
    {
      question: "What areas in Port Louis have the most GF-friendly restaurants?",
      answer: "The Caudan Waterfront, Tribeca Mall in Trianon, and the Quatre Bornes area have the highest concentration of restaurants with gluten-free options. The Central Market is also great for naturally GF street food."
    },
    {
      question: "Is street food safe for celiacs in Port Louis?",
      answer: "Street food requires caution. While many items like grilled meats and fresh fruits are naturally GF, popular snacks like dholl puri and samosas contain wheat. Always ask about ingredients and be cautious of cross-contamination."
    },
    {
      question: "What traditional Mauritian foods can I eat gluten-free in Port Louis?",
      answer: "Many traditional dishes are naturally GF: fish vindaye, octopus curry, rougaille (tomato stew), dal with rice, grilled seafood, and fresh tropical fruits. Avoid dholl puri wrappers and faratas which contain wheat flour."
    },
    {
      question: "Can I find gluten-free products in Port Louis supermarkets?",
      answer: "Yes! Major supermarkets like Super U, Intermart, and Winners stock imported gluten-free products. Indian grocery stores also carry naturally GF flours like rice flour and chickpea flour (besan)."
    },
    {
      question: "How do I communicate gluten-free needs in Port Louis?",
      answer: "English and French are both widely spoken. Say 'sans gluten' in French or explain in English. In Creole areas, 'pa met la farine' (don't add flour) can be helpful. Most restaurant staff in tourist areas understand GF requests."
    }
  ];

  const getCeliacSafeBadge = (level: string) => {
    switch (level) {
      case "dedicated-facility":
        return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="w-3 h-3 mr-1" />Dedicated GF Facility</Badge>;
      case "protocols-in-place":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="w-3 h-3 mr-1" />Careful Handling</Badge>;
      default:
        return null;
    }
  };

  const getMenuTypeBadge = (type: string) => {
    switch (type) {
      case "fully-gluten-free":
        return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
      case "mixed-menu":
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

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants.filter(restaurant => {
      const matchesSafety = safetyFilter === "all" || restaurant.celiacSafe === safetyFilter;
      const matchesVenue = venueFilter === "all" || restaurant.venueType === venueFilter;
      const matchesMenu = menuFilter === "all" || restaurant.menuType === menuFilter;
      const matchesSearch = searchQuery === "" ||
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSafety && matchesVenue && matchesMenu && matchesSearch;
    });

    if (sortByDistance && userLocation) {
      filtered = filtered.map(restaurant => ({
        ...restaurant,
        distance: calculateDistance(userLocation.lat, userLocation.lng, restaurant.lat, restaurant.lng)
      })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    return filtered;
  }, [safetyFilter, venueFilter, menuFilter, searchQuery, sortByDistance, userLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/mauritius" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Mauritius
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={portLouisHero} alt="Port Louis, Mauritius skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🇲🇺</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Safe Gluten-Free Restaurants in Port Louis
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Real reviews from gluten-free diners. Verified listings. Zero guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent !text-white hover:bg-white/10"
              onClick={handleFindNearMe}
              disabled={isLocating}
            >
              {isLocating ? (
                <>
                  <div className="w-5 h-5 mr-2 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
                  Locating...
                </>
              ) : sortByDistance ? (
                <>
                  <Navigation className="w-5 h-5 mr-2" />
                  Sorted by Distance
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Find Gluten-Free Food Near Me
                </>
              )}
            </Button>
            <AddRestaurantDialog city="Port Louis" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
          {locationError && <p className="text-orange-100 mt-4 text-sm">{locationError}</p>}
          {sortByDistance && userLocation && (
            <Button variant="link" className="text-white/80 hover:text-white mt-2" onClick={() => setSortByDistance(false)}>
              Clear distance sorting
            </Button>
          )}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Port Louis</h2>
                  <p className="text-gray-700">
                    Port Louis is Mauritius's vibrant capital city, offering the island's most diverse dining scene.
                    From traditional Creole restaurants near the Central Market to upscale Indian fine dining,
                    the capital blends multicultural flavors with plenty of naturally gluten-free options.
                    Whether you're exploring the Caudan Waterfront or the bustling Tribeca Mall,
                    you'll find safe and delicious options throughout the greater Port Louis area.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter Restaurants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Search</label>
                  <Input placeholder="Search restaurants..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Venue Type</label>
                  <Select value={venueFilter} onValueChange={setVenueFilter}>
                    <SelectTrigger className="bg-white"><SelectValue placeholder="All venues" /></SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Venues</SelectItem>
                      <SelectItem value="restaurant">🍽️ Restaurant</SelectItem>
                      <SelectItem value="cafe">☕ Café</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Safety Rating</label>
                  <Select value={safetyFilter} onValueChange={setSafetyFilter}>
                    <SelectTrigger className="bg-white"><SelectValue placeholder="All safety levels" /></SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Safety Levels</SelectItem>
                      <SelectItem value="dedicated-facility">🛡️ Dedicated GF Facility</SelectItem>
                      <SelectItem value="protocols-in-place">✓ Careful Handling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label>
                  <Select value={menuFilter} onValueChange={setMenuFilter}>
                    <SelectTrigger className="bg-white"><SelectValue placeholder="All menu types" /></SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Menu Types</SelectItem>
                      <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                      <SelectItem value="mixed-menu">GF Options Available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Showing {filteredRestaurants.length} of {restaurants.length} restaurants
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Restaurant Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-orange-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {restaurant.featured && (
                              <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                                <Award className="w-3 h-3 mr-1" />Featured
                              </Badge>
                            )}
                            <span className="text-xl font-bold text-gray-900">{restaurant.name}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {renderStarRating(restaurant.rating)}
                            <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                            {restaurant.distance !== undefined && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                <Navigation className="w-3 h-3 mr-1" />
                                {restaurant.distance < 1 ? `${Math.round(restaurant.distance * 1000)}m away` : `${restaurant.distance.toFixed(1)}km away`}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm"><Heart className="w-4 h-4" /></Button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {restaurant.cuisineTypes.map((cuisine, i) => (<Badge key={i} variant="outline">{cuisine}</Badge>))}
                        {getCeliacSafeBadge(restaurant.celiacSafe)}
                        {getMenuTypeBadge(restaurant.menuType)}
                      </div>

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /><span>{restaurant.address}</span></div>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /><span>{restaurant.hours}</span></div>
                        {restaurant.phone && (
                          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-400" /><a href={`tel:${restaurant.phone}`} className="hover:text-orange-600">{restaurant.phone}</a></div>
                        )}
                      </div>

                      <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.menuHighlights.map((item, i) => (<Badge key={i} variant="secondary" className="text-sm">{item}</Badge>))}
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
                        <Button asChild className="bg-orange-600 hover:bg-orange-700">
                          <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                            <Navigation className="w-4 h-4 mr-2" />Get Directions
                          </a>
                        </Button>
                        {restaurant.website && (
                          <Button variant="outline" asChild>
                            <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" />Website
                            </a>
                          </Button>
                        )}
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <RestaurantReviews restaurantName={restaurant.name} restaurantCountry="Mauritius" restaurantCity="Port Louis" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <p className="text-gray-600">Everything you need to know about gluten-free dining in Port Louis</p>
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

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Know a Great Gluten-Free Spot in Port Louis?</h2>
              <p className="text-orange-100 mb-6">Help fellow celiacs discover safe dining options. Add your favorite restaurant to our directory.</p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Plus className="w-5 h-5 mr-2" />Add a Restaurant
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default GlutenFreePortLouis;
