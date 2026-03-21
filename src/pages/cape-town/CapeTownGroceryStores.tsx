import { useState, useMemo } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, Search, Filter, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CapeTownMap from "@/components/maps/CapeTownMap";
import tableMountainBg from "@/assets/cape-town-table-mountain.jpg";
import { capeTownRestaurants, Restaurant } from "@/data/capeTownRestaurants";
import { SEOHead } from "@/components/SEOHead";

const CapeTownGroceryStores = () => {
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

  const groceryStores = capeTownRestaurants.filter(
    (r) => r.venueType === "supermarket" || r.venueType === "gf-products"
  );

  const faqItems = [
    {
      question: "What gluten-free products can I find at Cape Town grocery stores?",
      answer: "Cape Town grocery stores stock a wide range of GF products including bread, pasta, flour, snacks, and ready meals. Stores like Off the Gluten Path and Wildsprout specialize in GF products, while major chains like Woolworths and SPAR have dedicated GF sections."
    },
    {
      question: "Which supermarkets have the best gluten-free selection?",
      answer: "Woolworths is known for having the best GF range among mainstream supermarkets. Specialty stores like Off the Gluten Path, Wildsprout, and Real Food Co offer dedicated GF products and are safer choices for celiacs."
    },
    {
      question: "Are there any dedicated gluten-free stores in Cape Town?",
      answer: "Yes! Off the Gluten Path in Woodstock and Sea Point are 100% dedicated gluten-free facilities. They stock everything from fresh baked goods to pantry staples, all guaranteed gluten-free."
    },
    {
      question: "Can I find imported gluten-free products in Cape Town?",
      answer: "Yes, many specialty stores and larger supermarkets stock imported GF products from Europe and the US. Wildsprout and health food stores often have the widest selection of international GF brands."
    },
    {
      question: "What should I look for on labels in South Africa?",
      answer: "Look for the 'Gluten-Free' label or certification. South African regulations require allergen labeling, so wheat, barley, rye, and oats must be listed in ingredients. Be aware that 'wheat-free' doesn't always mean gluten-free."
    }
  ];

  const getCeliacSafeBadge = (level: string) => {
    switch (level) {
      case "dedicated-facility":
        return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="w-3 h-3 mr-1" />Dedicated GF</Badge>;
      case "protocols-in-place":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="w-3 h-3 mr-1" />GF Section</Badge>;
      default:
        return null;
    }
  };

  const renderStarRating = (rating: number) => {
    return (
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

  const filteredStores = useMemo(() => {
    let filtered = groceryStores.filter(store => {
      const matchesSearch = searchQuery === "" || 
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.address.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSearch;
    });

    if (sortByDistance && userLocation) {
      filtered = filtered.map(store => ({
        ...store,
        distance: calculateDistance(userLocation.lat, userLocation.lng, store.lat, store.lng)
      })).sort((a, b) => ((a as any).distance || 0) - ((b as any).distance || 0));
    }

    return filtered;
  }, [searchQuery, sortByDistance, userLocation, groceryStores]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* SEO-Optimized Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/south-africa/cape-town" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cape Town
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-white py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${tableMountainBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🛒</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gluten-Free Grocery Stores in Cape Town
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Find supermarkets and specialty stores with great gluten-free product selections in Cape Town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-green-50"
              onClick={handleFindNearMe}
              disabled={isLocating}
            >
              {isLocating ? (
                <>
                  <div className="w-5 h-5 mr-2 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
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
                  Find Stores Near Me
                </>
              )}
            </Button>
          </div>
          {locationError && (
            <p className="text-green-100 mt-4 text-sm">{locationError}</p>
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
          <div className="mt-6">
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              {groceryStores.length} Stores
            </Badge>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Shopping in Cape Town</h2>
                  <p className="text-gray-700">
                    Cape Town offers excellent options for gluten-free grocery shopping. From dedicated 
                    gluten-free stores like Off the Gluten Path to mainstream supermarkets with extensive 
                    GF sections, you'll find everything you need. Major chains like Woolworths, Pick n Pay, 
                    and SPAR all stock gluten-free products, while specialty health food stores offer 
                    imported and artisan options.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-green-600" />
            Store Map
          </h2>
          <CapeTownMap restaurants={filteredStores} />
        </section>

        {/* Search Filter */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Find Stores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-md">
                <label className="text-sm font-medium text-gray-700 mb-1 block">Search</label>
                <Input 
                  placeholder="Search stores by name or area..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Showing {filteredStores.length} of {groceryStores.length} stores
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Store Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Gluten-Free Grocery Stores
          </h2>
          {filteredStores.length > 0 ? (
            <div className="grid gap-6">
              {filteredStores.map((store, index) => (
                <Card key={index} className={`overflow-hidden ${store.featured ? 'ring-2 ring-green-300' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              {store.featured && (
                                <Badge className="bg-green-100 text-green-800 border-green-300">
                                  <Award className="w-3 h-3 mr-1" />Featured
                                </Badge>
                              )}
                              <Link 
                                to={`/gluten-free/south-africa/cape-town/${store.slug}`}
                                className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors"
                              >
                                {store.name}
                              </Link>
                            </div>
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              {renderStarRating(store.rating)}
                              <span className="text-gray-500 text-sm">({store.reviewCount} reviews)</span>
                              {(store as any).distance !== undefined && (
                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                  <Navigation className="w-3 h-3 mr-1" />
                                  {(store as any).distance < 1 
                                    ? `${Math.round((store as any).distance * 1000)}m away`
                                    : `${(store as any).distance.toFixed(1)}km away`
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
                          <Badge variant="outline" className="bg-green-50 text-green-700">🛒 Grocery</Badge>
                          {getCeliacSafeBadge(store.celiacSafe)}
                          {store.celiacSafetyScore && (
                            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">
                              Safety: {store.celiacSafetyScore}/10
                            </Badge>
                          )}
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{store.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{store.hours}</span>
                          </div>
                          {store.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <a href={`tel:${store.phone}`} className="hover:text-green-600">{store.phone}</a>
                            </div>
                          )}
                          {store.website && (
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-gray-400" />
                              <a href={`https://${store.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600">{store.website}</a>
                            </div>
                          )}
                        </div>

                        <p className="text-gray-700 mb-4">{store.overview}</p>

                        {store.menuHighlights && store.menuHighlights.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">What You'll Find</h4>
                            <div className="flex flex-wrap gap-2">
                              {store.menuHighlights.map((item, i) => (
                                <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {store.proTip && (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                            <p className="text-sm text-green-800">
                              <strong>💡 Pro Tip:</strong> {store.proTip}
                            </p>
                          </div>
                        )}

                        <div className="flex gap-2 flex-wrap">
                          <Button variant="outline" size="sm" asChild>
                            <a href={store.directionsUrl} target="_blank" rel="noopener noreferrer">
                              <MapPin className="w-4 h-4 mr-1" />
                              Get Directions
                            </a>
                          </Button>
                          <Link to={`/gluten-free/south-africa/cape-town/${store.slug}`}>
                            <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="mt-6 pt-6 border-t">
                      <RestaurantReviews
                        restaurantName={store.name}
                        restaurantCity="Cape Town"
                        restaurantCountry="South Africa"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-5xl mb-4">🛒</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  No Stores Found
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try adjusting your search or browse all stores.
                </p>
                <Button className="mt-6" onClick={() => setSearchQuery("")}>
                  Show All Stores
                </Button>
              </CardContent>
            </Card>
          )}
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
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

        {/* CTA Section */}
        <section className="text-center py-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Know a Great Gluten-Free Store?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Help fellow celiacs find safe shopping options in Cape Town. 
            Share your favorite store and help grow our community!
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            Suggest a Store
          </Button>
        </section>
      </main>
    </div>

    </>
  );
};

export default CapeTownGroceryStores;
