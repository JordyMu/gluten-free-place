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
import grandBaieHero from "@/assets/grand-baie-mauritius.jpg";

import { grandBaieRestaurants, MauritiusCityRestaurant } from "@/data/grandBaieRestaurants";

type Restaurant = MauritiusCityRestaurant;
const GlutenFreeGrandBaie = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");

  useEffect(() => {
    document.title = "Gluten-Free Restaurants in Grand Baie, Mauritius | Celiac-Safe Dining Guide 2026";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Find the best gluten-free restaurants in Grand Baie, Mauritius. Verified celiac-safe dining options from Italian to Thai cuisine. Real reviews from GF travelers.");
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in Grand Baie | Celiac-Safe Dining Guide");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants in Grand Baie, Mauritius. Browse listings, read real reviews, and find safe dining on the northern coast.");
    }

    const existingSchema = document.querySelector('script[data-schema="grand-baie-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'grand-baie-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Grand Baie, Mauritius",
      "description": "Find the best gluten-free restaurants in Grand Baie, Mauritius.",
      "url": "https://glutenfreeplace.org/gluten-free/mauritius/grand-baie",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "Mauritius", "item": "https://glutenfreeplace.org/gluten-free/mauritius" },
          { "@type": "ListItem", "position": 3, "name": "Grand Baie", "item": "https://glutenfreeplace.org/gluten-free/mauritius/grand-baie" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="grand-baie-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchemaEl = document.createElement('script');
    faqSchemaEl.type = 'application/ld+json';
    faqSchemaEl.setAttribute('data-schema', 'grand-baie-faq');
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
      const s1 = document.querySelector('script[data-schema="grand-baie-gf"]');
      if (s1) s1.remove();
      const s2 = document.querySelector('script[data-schema="grand-baie-faq"]');
      if (s2) s2.remove();
    };
  }, []);

  const [venueFilter, setVenueFilter] = useState<string>("all");
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>("");
  const [sortByDistance, setSortByDistance] = useState(false);

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
      name: "Maison des Crêpes",
      address: "Racket Road, Chemin du Grand Bazaar, Grand Baie, Mauritius",
      hours: "Mon–Sat: 11:00AM – 9:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Maison+des+Crêpes+Grand+Baie+Mauritius",
      specialty: "French Crêperie with GF Options",
      overview: "A charming crêperie in Grand Baie offering both savory and sweet crêpes. They can prepare gluten-free buckwheat galettes upon request.",
      menuHighlights: ["🥞 Buckwheat Galettes (GF)", "🧀 Savory Crêpes (GF option)", "🍫 Sweet Crêpes", "🥗 Fresh Salads (GF)"],
      proTip: "Ask specifically for buckwheat (sarrasin) galettes — they're naturally gluten-free!",
      icon: "🥞",
      featured: true,
      cuisineTypes: ["French", "Crêperie"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 89,
      lat: -20.0117,
      lng: 57.5836,
      venueType: "restaurant"
    },
    {
      name: "Luigi's Italian Pizzeria & Pasta Bar",
      address: "Royal Road, B13, Grand Baie, Mauritius",
      hours: "Daily: 11:30AM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Luigi's+Italian+Pizzeria+Grand+Baie+Mauritius",
      specialty: "Italian with GF Pizza & Pasta",
      overview: "Popular Italian eatery in the heart of Grand Baie serving pizza and pasta. They offer gluten-free pizza bases and GF pasta upon request.",
      menuHighlights: ["🍕 GF Pizza Available", "🍝 GF Pasta Options", "🥗 Italian Salads (GF)", "🍰 Tiramisu"],
      proTip: "Order the GF pizza base — it's crispy and delicious. Confirm with staff about separate preparation.",
      icon: "🍕",
      featured: true,
      cuisineTypes: ["Italian", "Pizza", "Pasta"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.2,
      reviewCount: 156,
      lat: -20.0133,
      lng: 57.5818,
      venueType: "restaurant"
    },
    {
      name: "Fynbos Meeting Place",
      address: "Chem. Vingt Pieds, Grand Baie 30513, Mauritius",
      hours: "Mon–Sat: 8:00AM – 4:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Fynbos+Meeting+Place+Grand+Baie+Mauritius",
      specialty: "Healthy Café with GF Options",
      overview: "A health-conscious café offering fresh, wholesome meals with plenty of naturally gluten-free options including bowls, salads, and smoothies.",
      menuHighlights: ["🥗 Fresh Bowls (GF)", "🥤 Smoothies & Juices", "🍳 GF Breakfast Options", "🥑 Avocado Dishes (GF)"],
      proTip: "Great breakfast spot! Their açaí bowls and fresh juices are all naturally GF.",
      icon: "🥗",
      featured: true,
      cuisineTypes: ["Healthy", "Café", "Organic"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 112,
      lat: -20.0089,
      lng: 57.5843,
      venueType: "cafe"
    },
    {
      name: "Pomodoro Pizzeria Trattoria",
      address: "LA CROISETTE, Grand Baie, Mauritius",
      hours: "Daily: 12:00PM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Pomodoro+Pizzeria+Trattoria+Grand+Baie+Mauritius",
      specialty: "Italian Trattoria with GF Options",
      overview: "Located in the popular La Croisette shopping complex, Pomodoro serves authentic Italian cuisine with gluten-free pizza and pasta alternatives.",
      menuHighlights: ["🍕 GF Pizza Base Available", "🍝 GF Pasta", "🥗 Caprese & Green Salads (GF)", "🍖 Grilled Meats (GF)"],
      proTip: "Located in La Croisette mall — great for combining shopping with a safe GF meal.",
      icon: "🍕",
      featured: false,
      cuisineTypes: ["Italian", "Pizza", "Trattoria"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.1,
      reviewCount: 134,
      lat: -20.0102,
      lng: 57.5795,
      venueType: "restaurant"
    },
    {
      name: "Wang Thai",
      address: "1st Floor, Beach House Complex, Coastal Road, Grand Baie, Mauritius",
      hours: "Daily: 12:00PM – 10:30PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Wang+Thai+Grand+Baie+Mauritius",
      specialty: "Thai Cuisine with Natural GF Options",
      overview: "An upscale Thai restaurant with ocean views offering many naturally gluten-free dishes. Thai curries, stir-fries, and rice dishes can be made GF with tamari instead of soy sauce.",
      menuHighlights: ["🍛 Thai Curries (GF)", "🍚 Jasmine Rice Dishes (GF)", "🥘 Tom Yum Soup (GF)", "🦐 Seafood Specials (GF)"],
      proTip: "Ask for tamari instead of regular soy sauce. Most curries and rice dishes are naturally GF.",
      icon: "🍛",
      featured: true,
      cuisineTypes: ["Thai", "Asian", "Seafood"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 201,
      lat: -20.0141,
      lng: 57.5802,
      venueType: "restaurant"
    },
    {
      name: "Mam Gouz",
      address: "Route Cotière, Complexe Dodo La Lodge, Grand Baie, Mauritius",
      hours: "Tue–Sun: 11:00AM – 9:30PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Mam+Gouz+Grand+Baie+Mauritius",
      specialty: "Mauritian Creole Cuisine",
      overview: "Authentic Mauritian Creole restaurant offering traditional island dishes. Many Creole stews, curries, and grilled seafood are naturally gluten-free.",
      menuHighlights: ["🍲 Creole Fish Curry (GF)", "🦐 Grilled Prawns (GF)", "🍚 Rice & Lentils (GF)", "🐙 Octopus Vindaye (GF)"],
      proTip: "Try the octopus vindaye or fish rougaille — both are traditional and naturally GF!",
      icon: "🍲",
      featured: true,
      cuisineTypes: ["Mauritian", "Creole", "Seafood"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 78,
      lat: -20.0125,
      lng: 57.5810,
      venueType: "restaurant"
    },
    {
      name: "LUX* Grand Baie",
      address: "Coastal Road, Grand Baie 30510, Mauritius",
      hours: "Daily: 7:00AM – 10:30PM",
      phone: "",
      website: "www.luxresorts.com",
      directionsUrl: "https://www.google.com/maps/search/LUX+Grand+Baie+Mauritius",
      specialty: "Luxury Resort Dining with Dedicated GF Menu",
      overview: "LUX* Grand Baie resort features multiple restaurants that cater excellently to gluten-free guests. The kitchen team is trained in celiac-safe preparation and offers dedicated GF menus.",
      menuHighlights: ["🍽️ Dedicated GF Menu", "🦞 Fresh Seafood (GF)", "🥗 International Cuisine (GF)", "🍰 GF Desserts Available"],
      proTip: "Inform them at check-in about your dietary needs — they'll prepare a personalized GF dining plan for your stay.",
      icon: "🏨",
      featured: true,
      cuisineTypes: ["International", "Fine Dining", "Resort"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.7,
      reviewCount: 89,
      lat: -20.0098,
      lng: 57.5788,
      venueType: "restaurant"
    },
  ];

  const faqItems = [
    {
      question: "Is Grand Baie a good destination for gluten-free travelers?",
      answer: "Yes! Grand Baie is Mauritius's most popular tourist hub and has the highest concentration of restaurants catering to dietary requirements. Many restaurants along the coastal road and in La Croisette offer GF options."
    },
    {
      question: "Which Grand Baie restaurants offer gluten-free pizza?",
      answer: "Both Luigi's Italian Pizzeria and Pomodoro Pizzeria Trattoria offer gluten-free pizza bases. Always confirm with staff about cross-contamination precautions."
    },
    {
      question: "Are hotel restaurants in Grand Baie celiac-friendly?",
      answer: "Most 4- and 5-star hotels like LUX* Grand Baie are experienced with celiac guests and offer dedicated GF menus. Notify them in advance for the best experience."
    },
    {
      question: "What traditional Mauritian foods can I eat gluten-free in Grand Baie?",
      answer: "Many traditional dishes are naturally GF: fish vindaye, octopus curry, rougaille (tomato stew), dal (lentils), rice dishes, and grilled seafood. Avoid dholl puri wrappers and faratas which contain wheat."
    },
    {
      question: "Where can I find healthy gluten-free breakfast in Grand Baie?",
      answer: "Fynbos Meeting Place is excellent for healthy GF breakfasts with bowls, smoothies, and fresh options. Most hotel restaurants also offer GF breakfast items."
    },
    {
      question: "How do I ask for gluten-free food in Grand Baie restaurants?",
      answer: "English and French are both widely spoken. Say 'sans gluten' in French or simply explain in English. Tourist-facing restaurants in Grand Baie are generally familiar with GF requests."
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/mauritius" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Mauritius
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={grandBaieHero} alt="Grand Baie, Mauritius coastline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🇲🇺</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Safe Gluten-Free Restaurants in Grand Baie
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
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
                  <div className="w-5 h-5 mr-2 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
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
            <AddRestaurantDialog city="Grand Baie" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
          {locationError && <p className="text-blue-100 mt-4 text-sm">{locationError}</p>}
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
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Grand Baie</h2>
                  <p className="text-gray-700">
                    Grand Baie is Mauritius's premier coastal resort town and the island's top tourist destination.
                    With a vibrant mix of Italian trattorias, Thai restaurants, Creole eateries, and luxury resort dining,
                    Grand Baie offers excellent options for gluten-free travelers. From fresh seafood to GF pizza, 
                    you'll find safe and delicious options along the beautiful northern coastline.
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
                  <Input
                    placeholder="Search restaurants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Venue Type</label>
                  <Select value={venueFilter} onValueChange={setVenueFilter}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="All venues" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="all">All Venues</SelectItem>
                      <SelectItem value="restaurant">🍽️ Restaurant</SelectItem>
                      <SelectItem value="cafe">☕ Café</SelectItem>
                      <SelectItem value="bakery">🥐 Bakery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Safety Rating</label>
                  <Select value={safetyFilter} onValueChange={setSafetyFilter}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="All safety levels" />
                    </SelectTrigger>
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
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="All menu types" />
                    </SelectTrigger>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Verified Gluten-Free Restaurants
          </h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-blue-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {restaurant.featured && (
                              <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                                <Award className="w-3 h-3 mr-1" />Featured
                              </Badge>
                            )}
                            <span className="text-xl font-bold text-gray-900">
                              {restaurant.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {renderStarRating(restaurant.rating)}
                            <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                            {restaurant.distance !== undefined && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                <Navigation className="w-3 h-3 mr-1" />
                                {restaurant.distance < 1
                                  ? `${Math.round(restaurant.distance * 1000)}m away`
                                  : `${restaurant.distance.toFixed(1)}km away`}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {restaurant.cuisineTypes.map((cuisine, i) => (
                          <Badge key={i} variant="outline">{cuisine}</Badge>
                        ))}
                        {getCeliacSafeBadge(restaurant.celiacSafe)}
                        {getMenuTypeBadge(restaurant.menuType)}
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
                        {restaurant.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${restaurant.phone}`} className="hover:text-blue-600">{restaurant.phone}</a>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.menuHighlights.map((item, i) => (
                            <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
                          ))}
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
                        <Button asChild className="bg-blue-600 hover:bg-blue-700">
                          <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                            <Navigation className="w-4 h-4 mr-2" />
                            Get Directions
                          </a>
                        </Button>
                        {restaurant.website && (
                          <Button variant="outline" asChild>
                            <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </a>
                          </Button>
                        )}
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <RestaurantReviews
                          restaurantName={restaurant.name}
                          restaurantCountry="Mauritius"
                          restaurantCity="Grand Baie"
                        />
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
              <p className="text-gray-600">Everything you need to know about gluten-free dining in Grand Baie</p>
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
          <Card className="bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Know a Great Gluten-Free Spot in Grand Baie?</h2>
              <p className="text-blue-100 mb-6">
                Help fellow celiacs discover safe dining options. Add your favorite restaurant to our directory.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Plus className="w-5 h-5 mr-2" />
                Add a Restaurant
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default GlutenFreeGrandBaie;
