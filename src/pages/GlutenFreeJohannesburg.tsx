import { useState, useMemo } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, Search, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import JohannesburgMap from "@/components/maps/JohannesburgMap";
import johannesburgBg from "@/assets/johannesburg-skyline.jpg";

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

const GlutenFreeJohannesburg = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
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

  const restaurants: Restaurant[] = [
    {
      name: "Crumble Gluten Free Bakery",
      address: "Cedar Rd, Broadacres AH, Chartwell, 2055",
      hours: "Tue–Fri: 8:00AM – 4:00PM, Sat: 8:00AM – 2:00PM",
      phone: "+27 11 465 0404",
      website: "www.crumble.co.za",
      directionsUrl: "https://www.google.com/maps/search/Crumble+Gluten+Free+Bakery+Chartwell+Johannesburg",
      specialty: "100% Gluten-Free Bakery",
      overview: "Crumble is Johannesburg's premier dedicated gluten-free bakery offering a wide range of breads, pastries, and baked goods. Everything is made in a 100% gluten-free facility.",
      menuHighlights: ["🥖 Fresh Breads (GF)", "🥐 Pastries & Croissants (GF)", "🍰 Cakes & Cupcakes (GF)", "🍪 Cookies & Treats (GF)"],
      proTip: "Call ahead to order specialty items!",
      icon: "🥐",
      featured: true,
      cuisineTypes: ["Bakery", "Gluten-Free"],
      celiacSafe: "dedicated-facility",
      menuType: "fully-gluten-free",
      rating: 4.8,
      reviewCount: 178,
      lat: -26.0285,
      lng: 28.0176,
      venueType: "bakery"
    },
    {
      name: "Tashas Sandton",
      address: "Shop U32A, Sandton City, Sandton, 2196",
      hours: "Daily: 7:00AM – 9:00PM",
      phone: "+27 11 783 8686",
      website: "www.tashas.co.za",
      directionsUrl: "https://www.google.com/maps/search/Tashas+Sandton+City",
      specialty: "Upscale Café with GF Options",
      overview: "Tashas is an upscale café chain known for its stylish ambiance and extensive menu with clearly marked gluten-free options.",
      menuHighlights: ["🥗 Salads with GF Options", "🍳 All-Day Breakfast (GF options)", "🥩 Grilled Proteins (GF)", "🍰 GF Desserts Available"],
      proTip: "Ask for the gluten-free menu - staff are well-trained!",
      icon: "🍽️",
      featured: true,
      cuisineTypes: ["Café", "International", "Healthy"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 287,
      lat: -26.1076,
      lng: 28.0567,
      venueType: "cafe"
    },
    {
      name: "Vovo Telo Melrose Arch",
      address: "Shop 54, The High Street, Melrose Arch, 2196",
      hours: "Daily: 6:30AM – 6:00PM",
      phone: "+27 11 684 1656",
      website: "www.vovotelo.co.za",
      directionsUrl: "https://www.google.com/maps/search/Vovo+Telo+Melrose+Arch",
      specialty: "Artisan Bakery Café",
      overview: "Vovo Telo offers artisan baked goods with gluten-free bread options available. Their café serves breakfast and lunch with GF accommodations.",
      menuHighlights: ["🥖 GF Bread Available", "🥗 Salads (GF)", "🍳 Breakfast (GF options)", "☕ Specialty Coffee"],
      proTip: "Ask for GF bread for sandwiches!",
      icon: "🥖",
      featured: false,
      cuisineTypes: ["Bakery", "Café"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 156,
      lat: -26.1320,
      lng: 28.0697,
      venueType: "cafe"
    },
    {
      name: "Marble Restaurant",
      address: "Trumpet on Keyes, Keyes Ave, Rosebank, 2196",
      hours: "Mon–Sat: 12:00PM – 10:00PM",
      phone: "+27 10 594 5550",
      website: "www.marble.restaurant",
      directionsUrl: "https://www.google.com/maps/search/Marble+Restaurant+Rosebank+Johannesburg",
      specialty: "Fine Dining with Open Fire",
      overview: "Marble is an award-winning restaurant known for its open-fire cooking. Many dishes are naturally gluten-free with excellent dietary accommodations.",
      menuHighlights: ["🥩 Open-Fire Grilled Meats (GF)", "🥗 Fresh Salads (GF)", "🍷 Premium Wine Selection", "🍰 GF Desserts"],
      proTip: "Mention dietary requirements when booking!",
      icon: "🥩",
      featured: true,
      cuisineTypes: ["Fine Dining", "Grill", "South African"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.7,
      reviewCount: 312,
      lat: -26.1469,
      lng: 28.0417,
      venueType: "restaurant"
    },
    {
      name: "The Grillhouse Rosebank",
      address: "The Firs, Cnr Oxford Rd & Biermann Ave, Rosebank, 2196",
      hours: "Mon–Sun: 12:00PM – 10:00PM",
      phone: "+27 11 880 3945",
      website: "www.thegrillhouse.co.za",
      directionsUrl: "https://www.google.com/maps/search/The+Grillhouse+Rosebank",
      specialty: "Premium Steakhouse",
      overview: "The Grillhouse offers premium steaks and grilled meats with gluten-free accommodations for sauces and sides.",
      menuHighlights: ["🥩 Premium Steaks (GF)", "🥗 Fresh Sides (GF)", "🍷 Extensive Wine List", "🍰 GF Dessert Options"],
      proTip: "Ask about GF sauce options!",
      icon: "🥩",
      featured: true,
      cuisineTypes: ["Steakhouse", "Grill"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.6,
      reviewCount: 267,
      lat: -26.1461,
      lng: 28.0444,
      venueType: "restaurant"
    },
    {
      name: "Greenside Café",
      address: "Greenway, 24 Gleneagles Rd, Greenside, 2193",
      hours: "Daily: 7:00AM – 5:00PM",
      phone: "+27 11 646 7222",
      website: "www.greensidecafe.co.za",
      directionsUrl: "https://www.google.com/maps/search/Greenside+Cafe+Johannesburg",
      specialty: "Health-Focused Café",
      overview: "Greenside Café offers healthy, wholesome food with extensive gluten-free options in a relaxed neighborhood setting.",
      menuHighlights: ["🥗 Healthy Salads (GF)", "🍳 Breakfast (GF options)", "🥤 Fresh Juices", "🍰 GF Baked Goods"],
      proTip: "Great for a healthy brunch!",
      icon: "🥗",
      featured: false,
      cuisineTypes: ["Café", "Healthy"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 145,
      lat: -26.1611,
      lng: 28.0081,
      venueType: "cafe"
    },
    {
      name: "Yamato Sushi",
      address: "Nelson Mandela Square, Sandton, 2196",
      hours: "Daily: 11:30AM – 10:00PM",
      phone: "+27 11 784 8181",
      website: "www.yamatosushi.co.za",
      directionsUrl: "https://www.google.com/maps/search/Yamato+Sushi+Nelson+Mandela+Square",
      specialty: "Japanese Cuisine",
      overview: "Yamato offers authentic Japanese cuisine with sashimi and rice-based dishes that are naturally gluten-free. GF soy sauce available.",
      menuHighlights: ["🍣 Sashimi (GF)", "🍚 Rice Bowls (GF)", "🥢 GF Soy Sauce Available", "🍱 Japanese Set Meals"],
      proTip: "Request tamari instead of regular soy sauce!",
      icon: "🍣",
      featured: false,
      cuisineTypes: ["Japanese", "Sushi"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 198,
      lat: -26.1074,
      lng: 28.0534,
      venueType: "restaurant"
    },
    {
      name: "Wok Box Parkhurst",
      address: "4th Ave, Parkhurst, 2193",
      hours: "Daily: 11:00AM – 9:00PM",
      phone: "+27 11 447 7771",
      website: "www.wokbox.co.za",
      directionsUrl: "https://www.google.com/maps/search/Wok+Box+Parkhurst+Johannesburg",
      specialty: "Asian Stir-Fry",
      overview: "Wok Box offers customizable stir-fry dishes with rice noodle and rice options that can be made gluten-free.",
      menuHighlights: ["🍜 Rice Noodles (GF)", "🍚 Rice Base (GF)", "🥡 Custom Stir-Fry", "🌶️ Asian Flavors"],
      proTip: "Choose rice or rice noodles for GF!",
      icon: "🥡",
      featured: false,
      cuisineTypes: ["Asian", "Stir-Fry"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.2,
      reviewCount: 134,
      lat: -26.1389,
      lng: 28.0139,
      venueType: "restaurant"
    }
  ];

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
            Find Safe Gluten-Free Restaurants in Johannesburg
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
            <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white/10">
              <Plus className="w-5 h-5 mr-2" />
              Add a Restaurant
            </Button>
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

        {/* Neighborhoods Quick Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🏙️ Explore Popular Neighborhoods
          </h2>
          <p className="text-gray-600 mb-4">
            Johannesburg's best gluten-free dining is concentrated in these vibrant neighborhoods.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
              <CardContent className="p-2 flex items-center gap-2">
                <span className="text-lg">🏢</span>
                <div>
                  <h3 className="text-sm font-medium text-purple-900">Sandton</h3>
                  <p className="text-purple-700 text-[11px]">Upscale dining hub</p>
                </div>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
              <CardContent className="p-2 flex items-center gap-2">
                <span className="text-lg">🎨</span>
                <div>
                  <h3 className="text-sm font-medium text-amber-900">Rosebank</h3>
                  <p className="text-amber-700 text-[11px]">Arts & fine dining</p>
                </div>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardContent className="p-2 flex items-center gap-2">
                <span className="text-lg">🌿</span>
                <div>
                  <h3 className="text-sm font-medium text-green-900">Parkhurst</h3>
                  <p className="text-green-700 text-[11px]">Trendy café strip</p>
                </div>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-sm transition-shadow border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <CardContent className="p-2 flex items-center gap-2">
                <span className="text-lg">✨</span>
                <div>
                  <h3 className="text-sm font-medium text-blue-900">Melrose Arch</h3>
                  <p className="text-blue-700 text-[11px]">Modern precinct</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Category Quick Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🍽️ Browse by Category
          </h2>
          <p className="text-gray-600 mb-4">
            Find exactly what you're looking for with our curated category pages.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <Card 
              className="cursor-pointer hover:shadow-sm transition-shadow border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50"
              onClick={() => setVenueFilter("restaurant")}
            >
              <CardContent className="p-2 flex items-center gap-2">
                <span className="text-lg">🍽️</span>
                <div>
                  <h3 className="text-sm font-medium text-orange-900">Restaurants</h3>
                  <p className="text-orange-700 text-[11px]">Fine dining & casual</p>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="cursor-pointer hover:shadow-sm transition-shadow border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50"
              onClick={() => setVenueFilter("bakery")}
            >
              <CardContent className="p-2 flex items-center gap-2">
                <span className="text-lg">🥐</span>
                <div>
                  <h3 className="text-sm font-medium text-amber-900">Bakeries</h3>
                  <p className="text-amber-700 text-[11px]">Fresh bread & pastries</p>
                </div>
              </CardContent>
            </Card>
            <Card 
              className="cursor-pointer hover:shadow-sm transition-shadow border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50"
              onClick={() => setVenueFilter("cafe")}
            >
              <CardContent className="p-2 flex items-center gap-2">
                <span className="text-lg">☕</span>
                <div>
                  <h3 className="text-sm font-medium text-green-900">Cafés</h3>
                  <p className="text-green-700 text-[11px]">Coffee & light meals</p>
                </div>
              </CardContent>
            </Card>
          </div>
          {venueFilter !== "all" && (
            <Button 
              variant="ghost" 
              className="mt-2 text-orange-600"
              onClick={() => setVenueFilter("all")}
            >
              Clear filter
            </Button>
          )}
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 Restaurant Map</h2>
          <JohannesburgMap restaurants={filteredRestaurants} />
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
                      <SelectItem value="bakery">Bakery</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="cafe">Café</SelectItem>
                      <SelectItem value="supermarket">Supermarket</SelectItem>
                      <SelectItem value="street-food">Street Food</SelectItem>
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
                      <SelectItem value="mixed-menu">GF Options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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

                      <div className="flex gap-3">
                        <Button asChild className="bg-orange-600 hover:bg-orange-700">
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
  );
};

export default GlutenFreeJohannesburg;
