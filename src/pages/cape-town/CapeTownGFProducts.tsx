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

const CapeTownGFProducts = () => {
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

  const gfProductStores = capeTownRestaurants.filter(
    (r) => r.venueType === "gf-products"
  );

  const faqItems = [
    {
      question: "What are gluten-free product stores in Cape Town?",
      answer: "These are specialty shops and stores that focus on selling gluten-free products — from baked goods and snacks to pantry staples and ready meals. Unlike restaurants, these stores let you stock up on GF essentials for home cooking or travel."
    },
    {
      question: "Are the products in these stores certified gluten-free?",
      answer: "Most specialty GF product stores stock certified gluten-free items. Look for official certifications on packaging. Staff at dedicated stores like Off the Gluten Path can help you identify safe products."
    },
    {
      question: "Can I find international gluten-free brands in Cape Town?",
      answer: "Yes! Many GF product stores stock imported brands from Europe, the US, and Australia alongside excellent local South African GF brands. Health food stores tend to have the widest international selection."
    },
    {
      question: "What's the difference between GF product stores and grocery stores?",
      answer: "GF product stores are typically smaller specialty shops dedicated to or heavily focused on gluten-free products. Grocery stores (supermarkets) are larger general stores that have GF sections. Both are great options depending on your needs."
    },
    {
      question: "Do these stores offer online ordering or delivery?",
      answer: "Some GF product stores offer online ordering and delivery. Check individual store websites for availability. Off the Gluten Path, for example, offers online ordering for collection or delivery in the Cape Town area."
    }
  ];

  const getCeliacSafeBadge = (level: string) => {
    switch (level) {
      case "dedicated-facility":
        return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="w-3 h-3 mr-1" />Dedicated GF</Badge>;
      case "protocols-in-place":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="w-3 h-3 mr-1" />GF Focused</Badge>;
      default:
        return null;
    }
  };

  const renderStarRating = (rating: number) => {
    return (
      <>
      <SEOHead
        title="Gluten-Free Products in Cape Town | GlutenFreePlace"
        description="Discover where to buy gluten-free products in Cape Town, South Africa."
        canonical="/gluten-free/south-africa/cape-town/gluten-free-products"
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

  const filteredStores = useMemo(() => {
    let filtered = gfProductStores.filter(store => {
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
  }, [searchQuery, sortByDistance, userLocation, gfProductStores]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/gluten-free/south-africa/cape-town" className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cape Town
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-white py-16"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(91, 33, 182, 0.6), rgba(91, 33, 182, 0.4)), url(${tableMountainBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-6xl mb-4 block">🛍️</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gluten-Free Products in Cape Town
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Discover stores specializing in gluten-free products — from baked goods to pantry staples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-violet-600 hover:bg-violet-50"
              onClick={handleFindNearMe}
              disabled={isLocating}
            >
              {isLocating ? (
                <>
                  <div className="w-5 h-5 mr-2 border-2 border-violet-600 border-t-transparent rounded-full animate-spin" />
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
            <p className="text-violet-100 mt-4 text-sm">{locationError}</p>
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
              {gfProductStores.length} Stores
            </Badge>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-violet-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Product Stores in Cape Town</h2>
                  <p className="text-gray-700">
                    Cape Town has a growing number of specialty stores focused on gluten-free products. 
                    Whether you're looking for fresh GF baked goods, pantry staples, snacks, or ready meals, 
                    these stores cater specifically to the gluten-free community. Many are run by people 
                    who understand celiac disease and can help you find safe products with confidence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
                Showing {filteredStores.length} of {gfProductStores.length} stores
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Store Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Gluten-Free Product Stores
          </h2>
          {filteredStores.length > 0 ? (
            <div className="grid gap-6">
              {filteredStores.map((store, index) => (
                <Card key={index} className={`overflow-hidden ${store.featured ? 'ring-2 ring-violet-300' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {store.photos && store.photos.length > 0 && (
                        <div className="w-full lg:w-48 flex-shrink-0">
                          <img 
                            src={typeof store.photos[0] === 'string' ? store.photos[0] : store.photos[0].url} 
                            alt={store.name} 
                            className="w-full h-48 lg:h-full object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              {store.featured && (
                                <Badge className="bg-violet-100 text-violet-800 border-violet-300">
                                  <Award className="w-3 h-3 mr-1" />Featured
                                </Badge>
                              )}
                              <Link 
                                to={`/gluten-free/south-africa/cape-town/${store.slug}`}
                                className="text-xl font-bold text-gray-900 hover:text-violet-600 transition-colors"
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
                          <Badge variant="outline" className="bg-violet-50 text-violet-700">🛍️ GF Products</Badge>
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
                              <a href={`tel:${store.phone}`} className="hover:text-violet-600">{store.phone}</a>
                            </div>
                          )}
                          {store.website && (
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-gray-400" />
                              <a href={`https://${store.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-violet-600">{store.website}</a>
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
                          <div className="bg-violet-50 border border-violet-200 rounded-lg p-3 mb-4">
                            <p className="text-sm text-violet-800">
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
                            <Button variant="outline" size="sm" className="text-violet-600 border-violet-600 hover:bg-violet-50">
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
                <div className="text-5xl mb-4">🛍️</div>
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
        <section className="text-center py-12 bg-gradient-to-r from-violet-100 to-purple-100 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Know a Great GF Product Store?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Help fellow celiacs find safe gluten-free products in Cape Town. 
            Share your favorite store and help grow our community!
          </p>
          <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
            Suggest a Store
          </Button>
        </section>
      </main>
    </div>

    </>
  );
};

export default CapeTownGFProducts;
