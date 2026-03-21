import { useState, useMemo, useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";

import { pretoriaRestaurants, Restaurant } from "@/data/pretoriaRestaurants";
import pretoriaUnionBuildingsBg from "@/assets/pretoria-union-buildings.jpg";
import { SEOHead } from "@/components/SEOHead";

interface RestaurantWithDistance extends Restaurant {
  distance?: number;
}

const GlutenFreePretoria = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
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
  const [venueFilter, setVenueFilter] = useState<string>("all");
  const [menuFilter, setMenuFilter] = useState<string>("all");
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

  const renderStarRating = (rating: number) => {
    return (
      <>
      <SEOHead
        title="Gluten-Free Restaurants in Pretoria | Celiac-Safe Dining Guide 2026"
        description="Find the best gluten-free restaurants in Pretoria, South Africa. Verified celiac-safe dining options in Menlyn, Brooklyn, Lynnwood & more. Real reviews from GF travelers."
        canonical="/gluten-free/south-africa/pretoria"
      />
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
  };

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
      const matchesSafety = safetyFilter === "all" || restaurant.celiacSafe === safetyFilter;
      const matchesVenue = venueFilter === "all" || restaurant.venueType === venueFilter;
      const matchesMenu = menuFilter === "all" || restaurant.menuType === menuFilter;
      const matchesSearch = searchQuery === "" || 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesSafety && matchesVenue && matchesMenu && matchesSearch;
    });
  }, [safetyFilter, venueFilter, menuFilter, searchQuery, userLocation]);

  return (
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
            Find Safe Gluten-Free Restaurants in Pretoria
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

        {/* Browse by Category */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🍽️ Browse by Category
          </h2>
          <p className="text-gray-600 mb-4">
            Find exactly what you're looking for with our curated category pages.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Card 
              className="cursor-pointer hover:shadow-sm transition-shadow border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50"
              onClick={() => setVenueFilter("supermarket")}
            >
              <CardContent className="p-2 flex items-center gap-2">
                <span className="text-lg">🛒</span>
                <div>
                  <h3 className="text-sm font-medium text-green-900">Grocery Stores</h3>
                  <p className="text-green-700 text-[11px]">GF products & supplies</p>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="cursor-pointer hover:shadow-sm transition-shadow border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50"
              onClick={() => setVenueFilter("street-food")}
            >
              <CardContent className="p-2 flex items-center gap-2">
                <span className="text-lg">🌮</span>
                <div>
                  <h3 className="text-sm font-medium text-orange-900">Street Food</h3>
                  <p className="text-orange-700 text-[11px]">Quick bites & markets</p>
                </div>
              </CardContent>
            </Card>
          </div>
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
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Safety Level</label>
                  <Select value={safetyFilter} onValueChange={setSafetyFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Safety Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Safety Levels</SelectItem>
                      <SelectItem value="dedicated-facility">Dedicated GF Facility</SelectItem>
                      <SelectItem value="protocols-in-place">Careful Handling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Venue Type</label>
                  <Select value={venueFilter} onValueChange={setVenueFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Venues" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Venues</SelectItem>
                      <SelectItem value="restaurant">Restaurants</SelectItem>
                      <SelectItem value="cafe">Cafés</SelectItem>
                      <SelectItem value="bakery">Bakeries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label>
                  <Select value={menuFilter} onValueChange={setMenuFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Menu Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Menu Types</SelectItem>
                      <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                      <SelectItem value="mixed-menu">GF Options Available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Restaurant Listings */}
        <section className="mb-12">
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
                    
                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 border-t pt-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{restaurant.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{restaurant.phone}</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
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
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          View Details
                        </Button>
                      </Link>
                    </div>

                    {/* Reviews Section */}
                    <div className="border-t pt-4 mt-2">
                      <RestaurantReviews
                        restaurantName={restaurant.name}
                        restaurantCountry="south-africa"
                        restaurantCity="pretoria"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
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
