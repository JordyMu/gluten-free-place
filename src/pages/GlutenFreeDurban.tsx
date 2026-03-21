import { useState, useMemo, useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, Award, Shield, Search, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { durbanRestaurants, Restaurant } from "@/data/durbanRestaurants";
import durbanBeachfrontBg from "@/assets/durban-beachfront.jpg";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

interface RestaurantWithDistance extends Restaurant {
  distance?: number;
}

const GlutenFreeDurban = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in Durban | Celiac-Safe Dining Guide");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants in Durban. Browse by neighborhood, read real reviews, and find safe dining on KZN's Golden Mile.");
    }

    // Add JSON-LD structured data for SEO
    const existingSchema = document.querySelector('script[data-schema="durban-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'durban-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Durban",
      "description": "Find the best gluten-free restaurants in Durban, South Africa. Verified celiac-safe dining options.",
      "url": "https://glutenfreeplace.org/gluten-free/south-africa/durban",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "South Africa", "item": "https://glutenfreeplace.org/gluten-free/south-africa" },
          { "@type": "ListItem", "position": 3, "name": "Durban", "item": "https://glutenfreeplace.org/gluten-free/south-africa/durban" }
        ]
      }
    });
    document.head.appendChild(schema);

    // Add FAQ Schema
    const existingFaqSchema = document.querySelector('script[data-schema="durban-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'durban-faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Durban a good destination for gluten-free travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Durban's rich Indian cuisine offers many naturally gluten-free options. Areas like Umhlanga and Morningside have excellent restaurants catering to dietary requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Durban unique for gluten-free dining?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Durban is famous for its Indian cuisine, which features many naturally gluten-free dishes using rice, lentils, and fresh spices. Bunny chow can be made GF with rice instead of bread."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="durban-gf"]');
      if (schemaToRemove) schemaToRemove.remove();
      const faqSchemaToRemove = document.querySelector('script[data-schema="durban-faq"]');
      if (faqSchemaToRemove) faqSchemaToRemove.remove();
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
    const R = 6371; // Earth's radius in km
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
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setSortByDistance(true);
          setIsLocating(false);
        },
        (error) => {
          if (highAccuracy && error.code === error.TIMEOUT) {
            tryGetLocation(false);
            return;
          }
          
          setIsLocating(false);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setLocationError("Location access denied. Please enable location in your browser settings.");
              break;
            case error.POSITION_UNAVAILABLE:
              setLocationError("Location information unavailable. Try again or check your device settings.");
              break;
            case error.TIMEOUT:
              setLocationError("Location request timed out. Please try again.");
              break;
            default:
              setLocationError("An unknown error occurred.");
          }
        },
        { 
          enableHighAccuracy: highAccuracy, 
          timeout: highAccuracy ? 15000 : 30000, 
          maximumAge: 60000
        }
      );
    };

    tryGetLocation(true);
  };

  const faqItems = [
    {
      question: "Is Durban a good destination for gluten-free travelers?",
      answer: "Yes! Durban has a diverse food scene with many naturally gluten-free options, especially Indian cuisine which the city is famous for. Umhlanga offers upscale dining with excellent GF accommodations."
    },
    {
      question: "What makes Durban unique for gluten-free dining?",
      answer: "Durban has a large Indian population, making it South Africa's curry capital. Many traditional Indian dishes are naturally gluten-free, including rice-based biryanis, tandoori meats, and most curries."
    },
    {
      question: "Which areas in Durban have the most GF-friendly restaurants?",
      answer: "Umhlanga (especially around Gateway Mall and the beachfront), Morningside, and Glenwood have the highest concentration of restaurants catering to gluten-free diets."
    },
    {
      question: "Are there dedicated gluten-free bakeries in Durban?",
      answer: "While Durban doesn't have as many dedicated GF bakeries as Johannesburg or Cape Town, The Glenwood Bakery and several health stores stock gluten-free products. Some restaurants offer GF baked goods."
    },
    {
      question: "What traditional Durban foods are naturally gluten-free?",
      answer: "Bunny chow (the bread part isn't GF, but you can ask for filling only), curries with rice, biryani, grilled seafood, and braai meats are popular naturally GF options. Always confirm preparation."
    },
    {
      question: "How do I communicate my celiac needs in Durban restaurants?",
      answer: "English is widely spoken. Simply explain you have celiac disease. In Indian restaurants, emphasize no flour-based items like naan or roti. Staff are generally accommodating."
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
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="ml-1 font-semibold">{rating}</span>
    </div>
  );

  const filteredRestaurants = useMemo(() => {
    let filtered: RestaurantWithDistance[] = durbanRestaurants.filter(restaurant => {
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
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Durban | Celiac-Safe Dining 2026"
      description="Find verified gluten-free restaurants in Durban, South Africa."
      canonical="/gluten-free/south-africa/durban"
    />
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/south-africa" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to South Africa
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-white py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${durbanBeachfrontBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🌊</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Safe Gluten-Free Restaurants in Durban
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
            <AddRestaurantDialog city="Durban" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
          {locationError && (
            <p className="text-blue-100 mt-4 text-sm">{locationError}</p>
          )}
          {sortByDistance && userLocation && (
            <Button 
              variant="link" 
              className="text-white/80 hover:text-white mt-2"
              onClick={() => setSortByDistance(false)}
            >
              Clear distance sorting
            </Button>
          )}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Durban</h2>
                  <p className="text-gray-700">
                    Durban, known as South Africa's curry capital, offers unique advantages for gluten-free travelers. 
                    The city's rich Indian heritage means many restaurants serve naturally GF dishes like curries and biryanis. 
                    The beachfront suburb of Umhlanga provides upscale dining with excellent dietary accommodations, 
                    while the warm coastal atmosphere makes for memorable dining experiences.
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
                      <SelectItem value="bakery">🥐 Bakery</SelectItem>
                      <SelectItem value="restaurant">🍽️ Restaurant</SelectItem>
                      <SelectItem value="cafe">☕ Café</SelectItem>
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
                Showing {filteredRestaurants.length} of {durbanRestaurants.length} restaurants
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Restaurant Cards - Single Column Full Width */}
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
                            <Link 
                              to={`/gluten-free/south-africa/durban/${restaurant.slug}`}
                              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                            >
                              {restaurant.name}
                            </Link>
                          </div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {renderStarRating(restaurant.rating)}
                            <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                            {restaurant.distance !== undefined && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                <Navigation className="w-3 h-3 mr-1" />
                                {restaurant.distance < 1 
                                  ? `${Math.round(restaurant.distance * 1000)}m away`
                                  : `${restaurant.distance.toFixed(1)}km away`
                                }
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

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                        <p className="text-sm text-amber-800">
                          <span className="font-semibold">💡 Pro Tip:</span> {restaurant.proTip}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" asChild>
                          <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                            <Navigation className="w-4 h-4 mr-1" />
                            Get Directions
                          </a>
                        </Button>
                        {restaurant.website && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-1" />
                              Website
                            </a>
                          </Button>
                        )}
                        <Link to={`/gluten-free/south-africa/durban/${restaurant.slug}`}>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </Link>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Reviews Section */}
        <section>
          <RestaurantReviews 
            restaurantName="Durban Gluten-Free Restaurants" 
            restaurantCountry="South Africa"
            restaurantCity="Durban"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Helping celiacs find safe dining in Durban 🌊
          </p>
        </div>
      </footer>
    </div>

    </>
  );
};

export default GlutenFreeDurban;
