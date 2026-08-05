import { useState, useMemo, useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, Search, Filter, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";

import { pretoriaRestaurants, Restaurant } from "@/data/pretoriaRestaurants";
import pretoriaUnionBuildingsBg from "@/assets/pretoria-union-buildings.jpg";
import { SEOHead } from "@/components/SEOHead";
import { CityCategoryNav } from "@/components/city/CityCategoryNav";
import { RelatedCities } from "@/components/internal-linking/RelatedCities";

interface RestaurantWithDistance extends Restaurant {
  distance?: number;
}

const GlutenFreePretoria = () => {
  const [menuFilters, setMenuFilters] = useState<string[]>([]);
  const [safetyFilters, setSafetyFilters] = useState<string[]>([]);
  const [cuisineFilters, setCuisineFilters] = useState<string[]>([]);
  const [showAllCuisines, setShowAllCuisines] = useState(false);
  const [openFilterSections, setOpenFilterSections] = useState({
    kitchen: true,
    cuisine: true,
    badges: true,
  });
  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in Pretoria | Celiac-Safe Dining Guide");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants in Pretoria. Browse by neighborhood, read real reviews, and find safe dining in South Africa's capital.");
    }

    // Add JSON-LD structured data for SEO
    const existingSchema = document.querySelector('script[data-schema="pretoria-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'pretoria-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Pretoria",
      "description": "Find the best gluten-free restaurants in Pretoria, South Africa. Verified celiac-safe dining options.",
      "url": "https://glutenfreeplace.org/gluten-free/south-africa/pretoria",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "South Africa", "item": "https://glutenfreeplace.org/gluten-free/south-africa" },
          { "@type": "ListItem", "position": 3, "name": "Pretoria", "item": "https://glutenfreeplace.org/gluten-free/south-africa/pretoria" }
        ]
      }
    });
    document.head.appendChild(schema);

    // Add FAQ Schema
    const existingFaqSchema = document.querySelector('script[data-schema="pretoria-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'pretoria-faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Pretoria a good destination for gluten-free travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Pretoria (Tshwane) offers a growing selection of GF-friendly restaurants, especially in areas like Menlyn, Brooklyn, and Lynnwood. Many upscale restaurants accommodate dietary requirements well."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas in Pretoria have the most GF-friendly restaurants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Menlyn Maine, Brooklyn, Lynnwood, and Hazelwood have the highest concentration of restaurants catering to gluten-free diets. Centurion also offers good options."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="pretoria-gf"]');
      if (schemaToRemove) schemaToRemove.remove();
      const faqSchemaToRemove = document.querySelector('script[data-schema="pretoria-faq"]');
      if (faqSchemaToRemove) faqSchemaToRemove.remove();
    };
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const faqItems = [
    {
      question: "Is Pretoria a good destination for gluten-free travelers?",
      answer: "Yes! Pretoria (Tshwane) offers a growing selection of GF-friendly restaurants, especially in areas like Menlyn, Brooklyn, and Lynnwood. Many upscale restaurants accommodate dietary requirements well."
    },
    {
      question: "Which areas in Pretoria have the most GF-friendly restaurants?",
      answer: "Menlyn Maine, Brooklyn, Lynnwood, and Hazelwood have the highest concentration of restaurants catering to gluten-free diets. Centurion also offers good options."
    },
    {
      question: "Are there dedicated gluten-free bakeries in Pretoria?",
      answer: "While Pretoria has fewer dedicated GF bakeries than Johannesburg, many cafés like Leafy Greens and Pachas offer excellent GF baked goods. Health stores stock a wide variety of GF products."
    },
    {
      question: "How do I communicate my celiac needs in Pretoria restaurants?",
      answer: "English and Afrikaans are widely spoken. Simply explain you have celiac disease (soeliekte in Afrikaans). Most restaurants in upscale areas have trained staff who understand dietary restrictions."
    },
    {
      question: "What traditional South African foods are naturally gluten-free?",
      answer: "Braai meats (BBQ), pap (maize porridge), chakalaka, bobotie (without bread topping), and most grilled meats are naturally GF. Always confirm marinades and sauces."
    },
    {
      question: "Can I find gluten-free options in Pretoria's shopping malls?",
      answer: "Yes! Major malls like Menlyn Park and Brooklyn Mall have multiple restaurants with GF options. Woolworths and health stores in these malls also stock excellent GF products."
    }
  ];

  const neighborhoods = [
    { name: "Menlyn Maine", count: 3, icon: "🏢" },
    { name: "Brooklyn", count: 2, icon: "🏘️" },
    { name: "Lynnwood", count: 2, icon: "🌳" },
    { name: "Centurion", count: 3, icon: "🏛️" }
  ];

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleFindNearMe = () => {
    setIsLocating(true);
    setLocationError(null);
    
    const tryGeolocation = (highAccuracy: boolean, timeout: number) => {
      return new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: highAccuracy,
          timeout: timeout,
          maximumAge: 300000
        });
      });
    };
    
    tryGeolocation(true, 15000)
      .catch(() => tryGeolocation(false, 30000))
      .then((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setIsLocating(false);
      })
      .catch((error) => {
        console.error("Geolocation error:", error);
        setLocationError("Could not get your location. Please check your browser settings.");
        setIsLocating(false);
      });
  };

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
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="ml-1 font-semibold">{rating}</span>
    </div>
  );

  const toggle = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter(v => v !== value) : [...list, value]);
  };

  const menuOptions = useMemo(() => {
    const counts: Record<string, number> = {};
    pretoriaRestaurants.forEach(r => { counts[r.menuType] = (counts[r.menuType] || 0) + 1; });
    return [
      { value: "fully-gluten-free", label: "100% Gluten-Free", count: counts["fully-gluten-free"] || 0 },
      { value: "mixed-menu", label: "GF Options Available", count: counts["mixed-menu"] || 0 },
    ];
  }, []);

  const safetyOptions = useMemo(() => {
    const counts: Record<string, number> = {};
    pretoriaRestaurants.forEach(r => { counts[r.celiacSafe] = (counts[r.celiacSafe] || 0) + 1; });
    return [
      { value: "dedicated-facility", label: "Dedicated GF Facility", count: counts["dedicated-facility"] || 0 },
      { value: "protocols-in-place", label: "Celiac Protocols", count: counts["protocols-in-place"] || 0 },
    ];
  }, []);

  const cuisineOptions = useMemo(() => {
    const counts: Record<string, number> = {};
    pretoriaRestaurants.forEach(r => r.cuisineTypes.forEach(c => { counts[c] = (counts[c] || 0) + 1; }));
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([label, count]) => ({ value: label, label, count }));
  }, []);

  const filteredRestaurants = useMemo(() => {
    let results: RestaurantWithDistance[] = pretoriaRestaurants.map(r => ({ ...r }));

    if (userLocation) {
      results = results.map(restaurant => ({
        ...restaurant,
        distance: calculateDistance(userLocation.lat, userLocation.lng, restaurant.lat, restaurant.lng)
      }));
      results.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    return results.filter(restaurant => {
      const matchesSafety = safetyFilters.length === 0 || safetyFilters.includes(restaurant.celiacSafe);
      const matchesMenu = menuFilters.length === 0 || menuFilters.includes(restaurant.menuType);
      const matchesCuisine = cuisineFilters.length === 0 || restaurant.cuisineTypes.some(c => cuisineFilters.includes(c));
      const matchesSearch = searchQuery === "" ||
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesSafety && matchesMenu && matchesCuisine && matchesSearch;
    });
  }, [safetyFilters, menuFilters, cuisineFilters, searchQuery, userLocation]);

  return (
    <>
    <SEOHead
      title="Gluten-Free Options in Pretoria | Celiac-Safe Dining"
      description="Browse verified gluten free options in Pretoria: dedicated celiac-safe restaurants, bakeries and cafés with menus, hours and directions."
      canonical="/gluten-free/south-africa/pretoria"
    />
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/south-africa" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to South Africa
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-white py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${pretoriaUnionBuildingsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🏛️</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dedicated Gluten-Free Restaurants in Pretoria
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Real reviews from gluten-free diners. Verified listings. Zero guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="border-white bg-transparent !text-white hover:bg-white/10"
              variant="outline"
              onClick={handleFindNearMe}
              disabled={isLocating}
            >
              <Search className="w-5 h-5 mr-2" />
              {isLocating ? "Finding..." : "Find Gluten-Free Food Near Me"}
            </Button>
            <AddRestaurantDialog 
              city="pretoria" 
              triggerClassName="border-white bg-transparent !text-white hover:bg-white/10"
            />
          </div>
          {locationError && (
            <p className="text-red-300 mt-4 text-sm">{locationError}</p>
          )}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Pretoria</h2>
                  <p className="text-gray-700">
                    Pretoria (Tshwane), South Africa's administrative capital, offers sophisticated dining with growing awareness of gluten-free needs. 
                    The city's upscale suburbs like Menlyn, Brooklyn, and Lynnwood feature restaurants that cater well to dietary requirements. 
                    From fine dining at Kream to health-focused cafés, you'll find plenty of options in the Jacaranda City.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <CityCategoryNav />

        {/* Best Restaurants Banner */}
        <section className="mb-10">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Pretoria</h2>
                  <p className="text-gray-700">Our editorial top 10 celiac-safe picks across Pretoria — ranked by safety, reviews and quality.</p>
                </div>
              </div>
              <Link to="/gluten-free/south-africa/pretoria/best-gluten-free-restaurants-in-pretoria" className="md:flex-shrink-0">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">View the Top 10</Button>
              </Link>
            </CardContent>
          </Card>
        </section>



        {/* Filters */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🍽️ Gluten-Free Restaurants ({filteredRestaurants.length})
          </h2>
          
          <div className="space-y-6">
            {filteredRestaurants.map((restaurant) => (
              <Card key={restaurant.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    {/* Header Row */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{restaurant.icon}</span>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {getCeliacSafeBadge(restaurant.celiacSafe)}
                            {restaurant.distance && (
                              <Badge variant="outline" className="text-purple-600 border-purple-300">
                                <Navigation className="w-3 h-3 mr-1" />
                                {restaurant.distance.toFixed(1)} km
                              </Badge>
                            )}
                          </div>
                          <Link to={`/gluten-free/south-africa/pretoria/${restaurant.slug}`}>
                            <h3 className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors">{restaurant.name}</h3>
                          </Link>
                          <div className="flex items-center gap-2 mt-1">
                            {renderStarRating(restaurant.rating)}
                            <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                        <Heart className="w-5 h-5" />
                      </Button>
                    </div>
                    
                    {/* Tags Row */}
                    <div className="flex flex-wrap gap-2">
                      {getMenuTypeBadge(restaurant.menuType)}
                      {restaurant.cuisineTypes.map((cuisine) => (
                        <Badge key={cuisine} variant="secondary" className="text-xs">
                          {cuisine}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-1.5 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{restaurant.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 shrink-0" />
                        <span>{restaurant.phone}</span>
                      </div>
                    </div>

                    {/* Overview */}
                    <p className="text-gray-700">{restaurant.overview}</p>

                    
                    {/* Menu Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {restaurant.menuHighlights.map((item, idx) => (
                        <span key={idx} className="text-sm bg-purple-50 px-3 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                    
                    {/* Pro Tip */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-amber-800 text-sm">
                        <strong>💡 Pro Tip:</strong> {restaurant.proTip}
                      </p>
                    </div>
                    

                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-red-700 hover:bg-red-800 text-white">
                          <Navigation className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                      </a>
                      <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Globe className="w-4 h-4 mr-2" />
                          Website
                        </Button>
                      </a>
                      <Link to={`/gluten-free/south-africa/pretoria/${restaurant.slug}`}>
                        <Button variant="outline" size="sm">
                          <BookOpen className="w-4 h-4 mr-2" />
                          View Menu
                        </Button>
                      </Link>
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
            </div>
            <aside className="lg:sticky lg:top-4 lg:self-start order-first lg:order-last space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Search className="w-4 h-4 text-red-700" />
                    Search Restaurants
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input className="pl-9" placeholder="Search by name or cuisine" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Filter className="w-4 h-4 text-red-700" />
                    Filter Restaurants
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-2">
                  {/* Kitchen Type */}
                  <div className="border-b last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenFilterSections(s => ({ ...s, kitchen: !s.kitchen }))}
                      className="w-full flex items-center justify-between py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700"
                    >
                      <span>Kitchen Type</span>
                      <span className="text-gray-400">{openFilterSections.kitchen ? '−' : '+'}</span>
                    </button>
                    {openFilterSections.kitchen && (
                      <div className="pb-3 space-y-2">
                        {menuOptions.map((opt) => (
                          <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                            <Checkbox
                              checked={menuFilters.includes(opt.value)}
                              onCheckedChange={() => toggle(opt.value, menuFilters, setMenuFilters)}
                            />
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                            <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{opt.count}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Cuisine */}
                  <div className="border-b last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenFilterSections(s => ({ ...s, cuisine: !s.cuisine }))}
                      className="w-full flex items-center justify-between py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700"
                    >
                      <span>Cuisine</span>
                      <span className="text-gray-400">{openFilterSections.cuisine ? '−' : '+'}</span>
                    </button>
                    {openFilterSections.cuisine && (
                      <div className="pb-3 space-y-2">
                        {(showAllCuisines ? cuisineOptions : cuisineOptions.slice(0, 6)).map((opt) => (
                          <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                            <Checkbox
                              checked={cuisineFilters.includes(opt.value)}
                              onCheckedChange={() => toggle(opt.value, cuisineFilters, setCuisineFilters)}
                            />
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                            <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{opt.count}</span>
                          </label>
                        ))}
                        {cuisineOptions.length > 6 && (
                          <button
                            type="button"
                            onClick={() => setShowAllCuisines(!showAllCuisines)}
                            className="text-sm text-red-700 hover:text-red-800 font-medium"
                          >
                            {showAllCuisines ? 'Show fewer cuisines' : `Show all ${cuisineOptions.length} cuisines`}
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="border-b last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenFilterSections(s => ({ ...s, badges: !s.badges }))}
                      className="w-full flex items-center justify-between py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700"
                    >
                      <span>Badges</span>
                      <span className="text-gray-400">{openFilterSections.badges ? '−' : '+'}</span>
                    </button>
                    {openFilterSections.badges && (
                      <div className="pb-3 space-y-2">
                        {safetyOptions.map((opt) => (
                          <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
                            <Checkbox
                              checked={safetyFilters.includes(opt.value)}
                              onCheckedChange={() => toggle(opt.value, safetyFilters, setSafetyFilters)}
                            />
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">{opt.label}</span>
                            <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5 min-w-[1.5rem] text-center">{opt.count}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 text-sm text-gray-600">
                    Showing {filteredRestaurants.length} of {pretoriaRestaurants.length} restaurants
                  </div>
                  {(menuFilters.length > 0 || safetyFilters.length > 0 || cuisineFilters.length > 0) && (
                    <button
                      type="button"
                      onClick={() => {
                        setMenuFilters([]);
                        setSafetyFilters([]);
                        setCuisineFilters([]);
                      }}
                      className="text-sm text-red-700 hover:text-red-800 font-medium"
                    >
                      Clear filters
                    </button>
                  )}
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <RelatedCities country="south-africa" currentCitySlug="pretoria" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>

    </>
  );
};

export default GlutenFreePretoria;
