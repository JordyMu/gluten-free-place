import { useState, useMemo, useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, Search, Plus, Filter, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import johannesburgBg from "@/assets/johannesburg-skyline.jpg";
import { johannesburgRestaurants } from "@/data/johannesburgRestaurants";
import { Restaurant } from "@/data/capeTownRestaurants";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";
import { CityCategoryNav } from "@/components/city/CityCategoryNav";
import { RelatedCities } from "@/components/internal-linking/RelatedCities";

interface RestaurantWithDistance extends Restaurant {
  distance?: number;
}

const GlutenFreeJohannesburg = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in Johannesburg | Celiac-Safe Dining Guide");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants in Johannesburg. Browse by neighborhood, read real reviews, and find safe dining in South Africa's largest city.");
    }

    // Add JSON-LD structured data for SEO
    const existingSchema = document.querySelector('script[data-schema="johannesburg-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'johannesburg-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Johannesburg",
      "description": "Find the best gluten-free restaurants in Johannesburg, South Africa. Verified celiac-safe dining options.",
      "url": "https://glutenfreeplace.org/gluten-free/south-africa/johannesburg",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "South Africa", "item": "https://glutenfreeplace.org/gluten-free/south-africa" },
          { "@type": "ListItem", "position": 3, "name": "Johannesburg", "item": "https://glutenfreeplace.org/gluten-free/south-africa/johannesburg" }
        ]
      }
    });
    document.head.appendChild(schema);

    // Add FAQ Schema
    const existingFaqSchema = document.querySelector('script[data-schema="johannesburg-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'johannesburg-faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Johannesburg a good destination for gluten-free travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Johannesburg offers the most diverse gluten-free dining options in South Africa. Areas like Sandton, Rosebank, and Parkhurst have many restaurants that cater to celiac needs."
          }
        },
        {
          "@type": "Question",
          "name": "Which Johannesburg neighborhoods have the most GF-friendly restaurants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sandton, Rosebank, Parkhurst, and Melrose Arch have the highest concentration of celiac-friendly restaurants. These upscale areas feature many health-conscious cafés and international cuisine."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="johannesburg-gf"]');
      if (schemaToRemove) schemaToRemove.remove();
      const faqSchemaToRemove = document.querySelector('script[data-schema="johannesburg-faq"]');
      if (faqSchemaToRemove) faqSchemaToRemove.remove();
    };
  }, []);
  const [menuFilters, setMenuFilters] = useState<string[]>([]);
  const [safetyFilters, setSafetyFilters] = useState<string[]>([]);
  const [cuisineFilters, setCuisineFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>("");
  const [sortByDistance, setSortByDistance] = useState(false);
  const [showAllCuisines, setShowAllCuisines] = useState(false);
  const [openFilterSections, setOpenFilterSections] = useState({
    kitchen: true,
    cuisine: true,
    badges: true,
  });

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
      question: "Is Johannesburg a good destination for gluten-free travelers?",
      answer: "Yes! Johannesburg has a growing gluten-free scene with dedicated bakeries like Crumble and many restaurants offering GF options, especially in upscale areas like Sandton, Rosebank, and Parkhurst."
    },
    {
      question: "Are there any 100% gluten-free restaurants in Johannesburg?",
      answer: "Yes, Crumble Gluten Free Bakery in Chartwell is a completely dedicated gluten-free facility. They offer breads, pastries, cakes, and more with zero cross-contamination risk."
    },
    {
      question: "Which neighborhoods in Johannesburg have the most GF-friendly restaurants?",
      answer: "Sandton, Rosebank, Melrose Arch, and Parkhurst have the highest concentration of restaurants with gluten-free options. These affluent areas cater well to dietary requirements."
    },
    {
      question: "How do I communicate my celiac needs in Johannesburg restaurants?",
      answer: "English is the primary language in Johannesburg restaurants. Simply explain you have celiac disease and need gluten-free food. Most upscale restaurants have trained staff who understand dietary restrictions."
    },
    {
      question: "Can I find gluten-free bread and baked goods in Johannesburg?",
      answer: "Absolutely! Crumble is the go-to bakery for fresh GF breads and pastries. Many supermarkets like Woolworths also stock excellent GF products. Health stores like Dischem and Wellness Warehouse have wide selections."
    },
    {
      question: "What traditional South African foods are naturally gluten-free?",
      answer: "Many traditional dishes are naturally GF including braai (BBQ meats), pap (maize porridge), chakalaka, and bobotie (without breadcrumb topping). Always confirm preparation methods."
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

  const toggle = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const menuOptions = useMemo(
    () => [
      { value: "fully-gluten-free", label: "100% Gluten-Free", count: johannesburgRestaurants.filter((r) => r.menuType === "fully-gluten-free").length },
      { value: "mixed-menu", label: "GF Options Available", count: johannesburgRestaurants.filter((r) => r.menuType === "mixed-menu").length },
    ],
    []
  );

  const safetyOptions = useMemo(
    () => [
      { value: "dedicated-facility", label: "Dedicated GF Facility", count: johannesburgRestaurants.filter((r) => r.celiacSafe === "dedicated-facility").length },
      { value: "protocols-in-place", label: "Celiac Protocols", count: johannesburgRestaurants.filter((r) => r.celiacSafe === "protocols-in-place").length },
    ],
    []
  );

  const cuisineOptions = useMemo(() => {
    const counts = new Map<string, number>();
    johannesburgRestaurants.forEach((r) => r.cuisineTypes.forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)));
    return Array.from(counts.entries())
      .map(([label, count]) => ({ value: label, label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, []);

  const filteredRestaurants = useMemo((): RestaurantWithDistance[] => {
    let filtered = johannesburgRestaurants.filter((restaurant) => {
      const matchesSearch =
        searchQuery === "" ||
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisineTypes.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesMenu = menuFilters.length === 0 || menuFilters.includes(restaurant.menuType);
      const matchesSafety = safetyFilters.length === 0 || safetyFilters.includes(restaurant.celiacSafe);
      const matchesCuisine =
        cuisineFilters.length === 0 || restaurant.cuisineTypes.some((c) => cuisineFilters.includes(c));
      return matchesSearch && matchesMenu && matchesSafety && matchesCuisine;
    });

    if (sortByDistance && userLocation) {
      return filtered.map(restaurant => ({
        ...restaurant,
        distance: calculateDistance(userLocation.lat, userLocation.lng, restaurant.lat, restaurant.lng)
      })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    return filtered;
  }, [menuFilters, safetyFilters, cuisineFilters, searchQuery, sortByDistance, userLocation]);

  return (
    <>
    <SEOHead
      title="Gluten-Free Options in Johannesburg | Celiac-Safe Dining"
      description="Browse verified gluten free options in Johannesburg: dedicated celiac-safe restaurants, bakeries and cafés with menus, hours and directions."
      canonical="/gluten-free/south-africa/johannesburg"
    />
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/south-africa" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to South Africa
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-white py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${johannesburgBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🇿🇦</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dedicated Gluten-Free Restaurants in Johannesburg
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
                  <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
            <AddRestaurantDialog city="Johannesburg" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10" />
          </div>
          {locationError && (
            <p className="text-orange-100 mt-4 text-sm">{locationError}</p>
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
          <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Johannesburg</h2>
                  <p className="text-gray-700">
                    Johannesburg, South Africa's largest city, offers a sophisticated dining scene with growing awareness of gluten-free needs. 
                    From dedicated bakeries like Crumble to upscale restaurants in Sandton and Rosebank, you'll find plenty of safe options. 
                    The city's diverse culinary landscape includes many naturally gluten-free cuisines, and health-conscious cafés are increasingly common.
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
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">Best Gluten-Free Restaurants in Johannesburg</h2>
                  <p className="text-gray-700">Our editorial top 10 celiac-safe picks across Johannesburg — ranked by safety, reviews and quality.</p>
                </div>
              </div>
              <Link to="/gluten-free/south-africa/johannesburg/best-gluten-free-restaurants-in-johannesburg" className="md:flex-shrink-0">
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
            Verified Gluten-Free Restaurants
          </h2>
          <div className="grid gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={restaurant.slug} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-orange-300' : ''}`}>
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
                            <Link 
                              to={`/gluten-free/south-africa/johannesburg/${restaurant.slug}`}
                              className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors"
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
                            <a href={`tel:${restaurant.phone}`} className="hover:text-orange-600">{restaurant.phone}</a>
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

                      <div className="flex flex-wrap gap-3">
                        <Link to={`/gluten-free/south-africa/johannesburg/${restaurant.slug}`}>
                          <Button className="bg-orange-600 hover:bg-orange-700">
                            View Details
                          </Button>
                        </Link>
                        <Button asChild variant="outline">
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
                          restaurantCountry="South Africa"
                          restaurantCity="Johannesburg"
                        />
                      </div>
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
                    Showing {filteredRestaurants.length} of {johannesburgRestaurants.length} restaurants
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
          <RelatedCities country="south-africa" currentCitySlug="johannesburg" />
        </section>

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

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Helping celiacs find safe dining in Johannesburg 🇿🇦
          </p>
        </div>
      </footer>
    </div>

    </>
  );
};

export default GlutenFreeJohannesburg;
