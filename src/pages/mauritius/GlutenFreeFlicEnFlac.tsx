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
import flicEnFlacHero from "@/assets/flic-en-flac-mauritius.jpg";

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

const GlutenFreeFlicEnFlac = () => {
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
      question: "Is Flic en Flac a good destination for gluten-free travelers?",
      answer: "Yes! Flic en Flac is one of Mauritius's most popular west coast beach towns with a growing number of restaurants that cater to dietary needs. The area is tourist-friendly and many restaurants understand GF requests."
    },
    {
      question: "What types of gluten-free food can I find in Flic en Flac?",
      answer: "You'll find a great variety — from Creole seafood curries and grilled fish to Italian options with GF pasta. The coastal location means fresh seafood is abundant and naturally gluten-free."
    },
    {
      question: "Are there gluten-free options near the beach in Flic en Flac?",
      answer: "Yes! Several restaurants along the Coastal Road and near the main beach serve naturally GF dishes like grilled seafood, rice-based meals, and fresh salads. Salt & Lemon and Zub Express are both close to the beach."
    },
    {
      question: "Can I find gluten-free groceries in Flic en Flac?",
      answer: "The local Super U and smaller shops stock some GF products. For a wider selection, the larger supermarkets in nearby Quatre Bornes or Port Louis carry more imported GF items."
    },
    {
      question: "What nearby areas have more GF restaurant options?",
      answer: "The nearby towns of Black River, Tamarin, La Gaulette, and Chamarel all have restaurants with GF options. These are within a short drive and expand your dining choices significantly."
    },
    {
      question: "How do I communicate gluten-free needs in Flic en Flac?",
      answer: "English and French are widely spoken. Say 'sans gluten' in French or explain in English. Most tourist-facing restaurants understand celiac/gluten-free requests."
    }
  ];

  useEffect(() => {
    document.title = "Gluten-Free Restaurants in Flic en Flac, Mauritius | Celiac-Safe Dining Guide 2026";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Find the best gluten-free restaurants in Flic en Flac, Mauritius. Verified celiac-safe dining from beachfront eateries to Creole cuisine. Real reviews from GF travelers.");
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Gluten-Free Restaurants in Flic en Flac | Celiac-Safe Dining Guide");

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants in Flic en Flac, Mauritius. Browse listings, read real reviews, and find safe dining on the west coast.");

    const existingSchema = document.querySelector('script[data-schema="flic-en-flac-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'flic-en-flac-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Flic en Flac, Mauritius",
      "description": "Find the best gluten-free restaurants in Flic en Flac, Mauritius.",
      "url": "https://glutenfreeplace.org/gluten-free/mauritius/flic-en-flac",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "Mauritius", "item": "https://glutenfreeplace.org/gluten-free/mauritius" },
          { "@type": "ListItem", "position": 3, "name": "Flic en Flac", "item": "https://glutenfreeplace.org/gluten-free/mauritius/flic-en-flac" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="flic-en-flac-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchemaEl = document.createElement('script');
    faqSchemaEl.type = 'application/ld+json';
    faqSchemaEl.setAttribute('data-schema', 'flic-en-flac-faq');
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
      const s1 = document.querySelector('script[data-schema="flic-en-flac-gf"]');
      if (s1) s1.remove();
      const s2 = document.querySelector('script[data-schema="flic-en-flac-faq"]');
      if (s2) s2.remove();
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
    setIsLocating(true);
    setLocationError("");
    const tryGetLocation = (highAccuracy: boolean) => {
      navigator.geolocation.getCurrentPosition(
        (position) => { setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude }); setSortByDistance(true); setIsLocating(false); },
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
      name: "Zub Express",
      address: "286 Coastal Rd, Flic en Flac, Mauritius",
      hours: "Daily: 10:00AM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Zub+Express+Flic+en+Flac+Mauritius",
      specialty: "Quick Bites with GF Options",
      overview: "A popular quick-service restaurant on the Coastal Road offering a variety of meals. Several items can be prepared gluten-free, and the staff are accommodating to dietary requests.",
      menuHighlights: ["🍗 Grilled Chicken (GF)", "🍚 Rice Dishes (GF)", "🥗 Fresh Salads (GF)", "🍟 Fries (ask about fryer)"],
      proTip: "Stick to grilled items and rice for the safest GF options. Convenient location right on the main road.",
      icon: "🍗",
      featured: false,
      cuisineTypes: ["Quick Service", "Mauritian", "International"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.0,
      reviewCount: 112,
      lat: -20.2958,
      lng: 57.3714,
      venueType: "restaurant"
    },
    {
      name: "Salt & Lemon Restaurant",
      address: "Verger Avenue, Flic en Flac 90502, Mauritius",
      hours: "Tue–Sun: 12:00PM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Salt+Lemon+Restaurant+Flic+en+Flac+Mauritius",
      specialty: "Mediterranean-Mauritian Fusion",
      overview: "A stylish restaurant blending Mediterranean and Mauritian flavors. Many dishes feature fresh seafood and local ingredients that are naturally gluten-free. The chef is knowledgeable about celiac needs.",
      menuHighlights: ["🦐 Grilled Prawns (GF)", "🐟 Fresh Fish of the Day (GF)", "🥗 Mediterranean Salads (GF)", "🍚 Risotto (GF)"],
      proTip: "The grilled seafood platters are a highlight — fresh, flavorful, and naturally GF!",
      icon: "🦐",
      featured: true,
      cuisineTypes: ["Mediterranean", "Mauritian", "Seafood"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 167,
      lat: -20.2962,
      lng: 57.3688,
      venueType: "restaurant"
    },
    {
      name: "Ocean Vagabond",
      address: "La Gaulette, Mauritius",
      hours: "Daily: 9:00AM – 9:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Ocean+Vagabond+La+Gaulette+Mauritius",
      specialty: "Beachside Café & Restaurant",
      overview: "A laid-back beachside café in nearby La Gaulette known for fresh, healthy food. Their menu features many naturally gluten-free options including fresh bowls, grilled seafood, and salads.",
      menuHighlights: ["🥗 Poké Bowls (GF)", "🐟 Grilled Fish (GF)", "🥑 Healthy Bowls (GF)", "🥤 Fresh Smoothies"],
      proTip: "A relaxed spot perfect for lunch — the poké bowls with rice are a safe and delicious GF choice.",
      icon: "🏖️",
      featured: true,
      cuisineTypes: ["Healthy", "Café", "Seafood"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 203,
      lat: -20.3833,
      lng: 57.3500,
      venueType: "cafe"
    },
    {
      name: "Enso Restaurant & Lounge Bar",
      address: "1st Floor, Supermarket Centre, La Gaulette 91102, Mauritius",
      hours: "Wed–Mon: 12:00PM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Enso+Restaurant+Lounge+Bar+La+Gaulette+Mauritius",
      specialty: "Asian Fusion with GF Options",
      overview: "An Asian fusion restaurant in La Gaulette offering creative dishes with many naturally GF options. Thai curries, sushi (with tamari), and rice noodle dishes are good choices for celiacs.",
      menuHighlights: ["🍛 Thai Green Curry (GF)", "🍜 Rice Noodles (GF)", "🍣 Sushi (ask for tamari)", "🥘 Wok Dishes (GF option)"],
      proTip: "Ask for tamari instead of soy sauce and rice noodles instead of wheat noodles for safe GF meals.",
      icon: "🍛",
      featured: true,
      cuisineTypes: ["Asian Fusion", "Thai", "Japanese"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 91,
      lat: -20.3831,
      lng: 57.3503,
      venueType: "restaurant"
    },
    {
      name: "Vanilla Village",
      address: "Route Royale, Black River, Mauritius",
      hours: "Daily: 11:00AM – 9:30PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Vanilla+Village+Black+River+Mauritius",
      specialty: "Traditional Mauritian Cuisine",
      overview: "A charming restaurant in Black River celebrating traditional Mauritian cuisine. Many dishes are rice and seafood-based, offering naturally gluten-free options in a beautiful garden setting.",
      menuHighlights: ["🍲 Mauritian Curry (GF)", "🦐 Seafood Platter (GF)", "🍚 Rice & Lentils (GF)", "🥥 Coconut-based Dishes (GF)"],
      proTip: "The garden setting is lovely — try their traditional fish curry with rice for an authentic GF experience.",
      icon: "🌿",
      featured: false,
      cuisineTypes: ["Mauritian", "Traditional", "Creole"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.2,
      reviewCount: 134,
      lat: -20.3478,
      lng: 57.3708,
      venueType: "restaurant"
    },
    {
      name: "La Flamme Kreol",
      address: "La Mivoie, Royal Road, Grande Riviere Noire, Mauritius",
      hours: "Tue–Sun: 12:00PM – 9:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/La+Flamme+Kreol+Grande+Riviere+Noire+Mauritius",
      specialty: "Authentic Creole Home Cooking",
      overview: "A beloved local Creole restaurant serving authentic home-style Mauritian cooking. Traditional curries, grilled meats, and seafood dishes are prepared with local spices and are naturally gluten-free.",
      menuHighlights: ["🐙 Octopus Curry (GF)", "🍲 Fish Rougaille (GF)", "🍚 Creole Rice (GF)", "🍖 Grilled Meats (GF)"],
      proTip: "One of the most authentic Creole dining experiences — the octopus curry is a must-try and naturally GF!",
      icon: "🔥",
      featured: true,
      cuisineTypes: ["Creole", "Mauritian", "Home Cooking"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.6,
      reviewCount: 87,
      lat: -20.3550,
      lng: 57.3650,
      venueType: "restaurant"
    },
    {
      name: "Il Padrino Italian Restaurant",
      address: "34 L'Estuaire La Balise Marina, Black River 90605, Mauritius",
      hours: "Daily: 12:00PM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Il+Padrino+Italian+Restaurant+Black+River+Mauritius",
      specialty: "Italian with GF Pasta & Pizza",
      overview: "An upscale Italian restaurant at the scenic La Balise Marina in Black River. They offer gluten-free pasta and pizza options and the waterfront setting is stunning for sunset dining.",
      menuHighlights: ["🍕 GF Pizza Available", "🍝 GF Pasta Options", "🦐 Seafood Risotto (GF)", "🥗 Italian Salads (GF)"],
      proTip: "Request GF pizza or pasta when ordering. The marina sunset views make this a special dining experience.",
      icon: "🍕",
      featured: true,
      cuisineTypes: ["Italian", "Pizza", "Seafood"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 156,
      lat: -20.3500,
      lng: 57.3720,
      venueType: "restaurant"
    },
    {
      name: "Happy Rajah",
      address: "A3, Tamarin, Mauritius",
      hours: "Daily: 11:30AM – 10:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Happy+Rajah+Tamarin+Mauritius",
      specialty: "Indian Cuisine with GF Options",
      overview: "An Indian restaurant in nearby Tamarin offering a wide range of naturally gluten-free curries, tandoori dishes, and rice-based meals. A great option for spice lovers.",
      menuHighlights: ["🍛 Tandoori Chicken (GF)", "🍚 Biryani (GF)", "🥘 Dal & Curries (GF)", "🍢 Kebabs (GF)"],
      proTip: "Most curries and tandoori items are naturally GF — confirm no flour thickeners are used.",
      icon: "🍛",
      featured: false,
      cuisineTypes: ["Indian", "Tandoori", "Curry"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.1,
      reviewCount: 98,
      lat: -20.3256,
      lng: 57.3731,
      venueType: "restaurant"
    },
    {
      name: "Wapalapam Island Eatery",
      address: "Centre Commercial de L'Harmonie, Le Morne Brabant 91202, Mauritius",
      hours: "Mon–Sat: 11:00AM – 8:00PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Wapalapam+Island+Eatery+Le+Morne+Mauritius",
      specialty: "Island-Style Healthy Eats",
      overview: "A casual island-style eatery near Le Morne serving fresh, healthy food with many naturally gluten-free options. Great for a quick meal after beach or hiking activities.",
      menuHighlights: ["🥗 Fresh Bowls (GF)", "🐟 Grilled Fish (GF)", "🥑 Tropical Salads (GF)", "🥤 Fresh Juices"],
      proTip: "Perfect pit-stop after visiting Le Morne — their fresh bowls are healthy, filling, and GF!",
      icon: "🏝️",
      featured: false,
      cuisineTypes: ["Healthy", "Island", "Casual"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.2,
      reviewCount: 67,
      lat: -20.4500,
      lng: 57.3200,
      venueType: "cafe"
    },
    {
      name: "Lakaz Chamarel",
      address: "Chamarel, Mauritius",
      hours: "Daily: 12:00PM – 3:00PM, 7:00PM – 9:30PM",
      phone: "",
      website: "",
      directionsUrl: "https://www.google.com/maps/search/Lakaz+Chamarel+Mauritius",
      specialty: "Boutique Hotel Restaurant",
      overview: "A boutique hotel restaurant in the scenic Chamarel highlands offering refined Mauritian-French cuisine. The kitchen is experienced with dietary requirements and creates beautiful GF dishes.",
      menuHighlights: ["🍽️ Tasting Menu (GF option)", "🐟 Fresh Seafood (GF)", "🥗 Garden Salads (GF)", "🍰 GF Desserts Available"],
      proTip: "Inform them in advance of celiac needs — they'll craft a special GF tasting menu with local ingredients.",
      icon: "🏡",
      featured: false,
      cuisineTypes: ["French-Mauritian", "Fine Dining", "Boutique"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 74,
      lat: -20.4167,
      lng: 57.3833,
      venueType: "restaurant"
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
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/mauritius" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Mauritius
          </Link>
        </div>
      </header>

      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={flicEnFlacHero} alt="Flic en Flac, Mauritius beachfront" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🇲🇺</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Safe Gluten-Free Restaurants in Flic en Flac
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto">
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
                <><div className="w-5 h-5 mr-2 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />Locating...</>
              ) : sortByDistance ? (
                <><Navigation className="w-5 h-5 mr-2" />Sorted by Distance</>
              ) : (
                <><Search className="w-5 h-5 mr-2" />Find Gluten-Free Food Near Me</>
              )}
            </Button>
            <AddRestaurantDialog city="Flic en Flac" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
          {locationError && <p className="text-teal-100 mt-4 text-sm">{locationError}</p>}
          {sortByDistance && userLocation && (
            <Button variant="link" className="text-white/80 hover:text-white mt-2" onClick={() => setSortByDistance(false)}>Clear distance sorting</Button>
          )}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-teal-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Flic en Flac & West Coast</h2>
                  <p className="text-gray-700">
                    Flic en Flac and the surrounding west coast — including Black River, Tamarin, La Gaulette, and Chamarel —
                    offer a wonderful mix of beachside cafés, Creole home cooking, and international cuisine. The region's
                    abundance of fresh seafood and traditional rice-based dishes means naturally gluten-free options are plentiful.
                    From sunset dining at La Balise Marina to authentic octopus curry at local eateries, this is a paradise
                    for celiac travelers who love coastal vibes and authentic flavors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Filter className="w-5 h-5" />Filter Restaurants</CardTitle>
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
              <div className="mt-4 text-sm text-gray-600">Showing {filteredRestaurants.length} of {restaurants.length} restaurants</div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verified Gluten-Free Restaurants</h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-teal-300' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {restaurant.featured && (
                              <Badge className="bg-teal-100 text-teal-800 border-teal-300"><Award className="w-3 h-3 mr-1" />Featured</Badge>
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
                          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-400" /><a href={`tel:${restaurant.phone}`} className="hover:text-teal-600">{restaurant.phone}</a></div>
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
                        <Button asChild className="bg-teal-600 hover:bg-teal-700">
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
                        <RestaurantReviews restaurantName={restaurant.name} restaurantCountry="Mauritius" restaurantCity="Flic en Flac" />
                      </div>
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
              <p className="text-gray-600">Everything you need to know about gluten-free dining in Flic en Flac</p>
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
          <Card className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Know a Great Gluten-Free Spot in Flic en Flac?</h2>
              <p className="text-teal-100 mb-6">Help fellow celiacs discover safe dining options. Add your favorite restaurant to our directory.</p>
              <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50">
                <Plus className="w-5 h-5 mr-2" />Add a Restaurant
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default GlutenFreeFlicEnFlac;
