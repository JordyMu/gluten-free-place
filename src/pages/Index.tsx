import { useState, useRef, useEffect, lazy, Suspense } from "react";
import { Search, MapPin, Star, Users, ArrowRight, Globe, Utensils, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { usePageSEO } from "@/hooks/usePageSEO";

// Lazy load heavy components not needed for initial paint
const Card = lazy(() => import("@/components/ui/card").then(m => ({ default: m.Card })));
const CardContent = lazy(() => import("@/components/ui/card").then(m => ({ default: m.CardContent })));
const UserMenu = lazy(() => import("@/components/layout/UserMenu").then(m => ({ default: m.UserMenu })));
const DropdownMenu = lazy(() => import("@/components/ui/dropdown-menu").then(m => ({ default: m.DropdownMenu })));
const DropdownMenuContent = lazy(() => import("@/components/ui/dropdown-menu").then(m => ({ default: m.DropdownMenuContent })));
const DropdownMenuItem = lazy(() => import("@/components/ui/dropdown-menu").then(m => ({ default: m.DropdownMenuItem })));
const DropdownMenuTrigger = lazy(() => import("@/components/ui/dropdown-menu").then(m => ({ default: m.DropdownMenuTrigger })));
const DropdownMenuSeparator = lazy(() => import("@/components/ui/dropdown-menu").then(m => ({ default: m.DropdownMenuSeparator })));
const DropdownMenuLabel = lazy(() => import("@/components/ui/dropdown-menu").then(m => ({ default: m.DropdownMenuLabel })));

const searchableDestinations = [
  { name: "Italy", route: "/italy" },
  { name: "Spain", route: "/spain" },
  { name: "USA", route: "/usa" },
  { name: "Canada", route: "/canada" },
  { name: "Australia", route: "/australia" },
  { name: "United Kingdom", route: "/united-kingdom" },
  { name: "UK", route: "/united-kingdom" },
  { name: "Sweden", route: "/sweden" },
  { name: "Ireland", route: "/ireland" },
  { name: "Argentina", route: "/argentina" },
  { name: "Thailand", route: "/thailand" },
  { name: "Germany", route: "/germany" },
  { name: "France", route: "/france" },
  { name: "Japan", route: "/japan" },
  { name: "New Zealand", route: "/new-zealand" },
  { name: "South Africa", route: "/gluten-free/south-africa" },
  { name: "Cape Town", route: "/gluten-free-cape-town" },
  { name: "Johannesburg", route: "/gluten-free-johannesburg" },
  { name: "Durban", route: "/gluten-free-durban" },
  { name: "Pretoria", route: "/gluten-free-pretoria" },
  { name: "Stellenbosch", route: "/gluten-free-stellenbosch" },
  { name: "Franschhoek", route: "/gluten-free-franschhoek" },
  { name: "Nigeria", route: "/nigeria" },
  { name: "Kenya", route: "/kenya" },
  { name: "Morocco", route: "/morocco" },
  { name: "Egypt", route: "/gluten-free/egypt" },
  { name: "Mauritius", route: "/gluten-free/mauritius" },
  { name: "Botswana", route: "/gluten-free/botswana" },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filteredResults = searchQuery.length > 0
    ? searchableDestinations.filter(d =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearch = () => {
    if (filteredResults.length > 0) {
      navigate(filteredResults[0].route);
      setSearchQuery("");
      setShowResults(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  usePageSEO({
    title: "GlutenFreePlace | Find Gluten-Free Restaurants Near You",
    description: "Find gluten-free restaurants near you. Verified celiac-safe dining in Italy, Spain, USA, UK, Japan & 150+ countries. Real reviews from GF travelers.",
    canonicalPath: "/",
    keywords: "gluten-free restaurants, celiac safe dining, gluten-free travel, GF restaurants, celiac disease, gluten-free food",
  });
  const destinations = [
    {
      id: 1,
      name: "Rome, Italy",
      image: "photo-1515542622106-78bda8ba0e5b",
      places: 142,
      rating: 4.8,
      description: "Ancient city with amazing gluten-free pasta and pizza options",
      topCities: ["Rome", "Milan", "Florence", "Venice"]
    },
    {
      id: 2,
      name: "Barcelona, Spain", 
      image: "photo-1539037116277-4db20889f2d4",
      places: 98,
      rating: 4.7,
      description: "Vibrant culture with excellent gluten-free tapas and paella",
      topCities: ["Barcelona", "Madrid", "Seville", "Valencia"]
    },
    {
      id: 3,
      name: "Cape Town, South Africa",
      image: "photo-1580060839134-75a5edca2e99",
      places: 45,
      rating: 4.8,
      description: "Stunning city with dedicated gluten-free bakeries and restaurants",
      topCities: ["Cape Town", "Johannesburg", "Durban", "Pretoria"]
    },
    {
      id: 4,
      name: "Sydney, Australia",
      image: "photo-1506905925346-21bda4d32df4",
      places: 87,
      rating: 4.9,
      description: "Harbor city with fantastic gluten-free cafes and restaurants",
      topCities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
    },
    {
      id: 5,
      name: "London, UK",
      image: "photo-1513635269975-59663e0ac1ad",
      places: 156,
      rating: 4.5,
      description: "Historic city embracing the gluten-free revolution",
      topCities: ["London", "Manchester", "Edinburgh", "Birmingham"]
    },
    {
      id: 6,
      name: "Tokyo, Japan",
      image: "photo-1540959733332-eab4deabeeaf",
      places: 73,
      rating: 4.4,
      description: "Discover amazing gluten-free ramen and traditional dishes",
      topCities: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Cape Town, South Africa",
      rating: 5,
      comment: "This platform saved my African safari! Found amazing gluten-free restaurants in Cape Town and Johannesburg.",
      avatar: "photo-1494790108755-2616b612b786"
    },
    {
      id: 2,
      name: "Marco Rodriguez",
      location: "Barcelona, Spain", 
      rating: 5,
      comment: "As someone with celiac disease, I never thought I could enjoy traveling. This changed everything!",
      avatar: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      id: 3,
      name: "Emma Chen",
      location: "Sydney, Australia",
      rating: 5,
      comment: "The reviews are so detailed and helpful. I felt confident trying new places for the first time in years.",
      avatar: "photo-1438761681033-6461ffad8d80"
    }
  ];

  const topCountries = [
    { name: "Italy", route: "/italy" },
    { name: "Spain", route: "/spain" },
    { name: "USA", route: "/usa" },
    { name: "Canada", route: "/canada" },
    { name: "Australia", route: "/australia" },
    { name: "UK", route: "/united-kingdom" },
    { name: "Sweden", route: "/sweden" },
    { name: "Ireland", route: "/ireland" },
    { name: "Argentina", route: "/argentina" },
    { name: "Thailand", route: "/thailand" },
    { name: "Germany", route: "/germany" },
    { name: "France", route: "/france" },
    { name: "Japan", route: "/japan" },
    { name: "New Zealand", route: "/new-zealand" },
    { name: "South Africa", route: "/gluten-free/south-africa" },
  ];

  const topCities = [
    { name: "Rome", country: "Italy", path: "/italy" },
    { name: "Milan", country: "Italy", path: "/italy" },
    { name: "Florence", country: "Italy", path: "/italy" },
    { name: "Venice", country: "Italy", path: "/italy" },
    { name: "Barcelona", country: "Spain", path: "/spain" },
    { name: "Madrid", country: "Spain", path: "/spain" },
    { name: "New York", country: "USA", path: "/usa" },
    { name: "Los Angeles", country: "USA", path: "/usa" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-orange-600 transition-colors">Countries</Link>
            <Suspense fallback={<span className="text-gray-700">Browse</span>}>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                  Browse
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
                  <DropdownMenuLabel className="text-orange-600 font-semibold">Top Countries</DropdownMenuLabel>
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {topCountries.map((country) => (
                      <Link key={country.name} to={country.route}>
                        <DropdownMenuItem className="cursor-pointer hover:bg-orange-50 text-sm">
                          {country.name}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </div>
                  <DropdownMenuSeparator />
                  <Link to="/all-countries">
                    <DropdownMenuItem className="cursor-pointer hover:bg-blue-50 text-blue-600 font-medium">
                      View All 156 Countries
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </Suspense>
            <Link to="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
            <Link to="#reviews" className="text-gray-700 hover:text-orange-600 transition-colors">Reviews</Link>
            <Suspense fallback={null}>
              <UserMenu />
            </Suspense>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <Utensils className="h-4 w-4 mr-2" />
              Trusted by 50,000+ Travelers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
              Discover Amazing
              <br />
              Gluten-Free Places
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Find safe, delicious gluten-free restaurants and cafes around the world. 
              Travel with confidence and never worry about your next meal again.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8 relative" ref={searchRef}>
              <div className="relative flex bg-white rounded-full shadow-xl border border-orange-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search countries or cities..." 
                    className="border-0 focus-visible:ring-0"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowResults(true);
                    }}
                    onFocus={() => setShowResults(true)}
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-6"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>
              {showResults && filteredResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-orange-100 overflow-hidden z-50">
                  {filteredResults.map((result) => (
                    <Link
                      key={result.name}
                      to={result.route}
                      className="flex items-center px-5 py-3 hover:bg-orange-50 transition-colors"
                      onClick={() => { setSearchQuery(""); setShowResults(false); }}
                    >
                      <MapPin className="h-4 w-4 text-orange-500 mr-3" />
                      <span className="text-gray-800">{result.name}</span>
                    </Link>
                  ))}
                </div>
              )}
              {showResults && searchQuery.length > 0 && filteredResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-orange-100 p-4 text-gray-500 text-sm z-50">
                  No destinations found for "{searchQuery}"
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />2,847 Places</span>
              <span className="flex items-center"><Users className="h-4 w-4 mr-1" />156 Countries</span>
              <span className="flex items-center"><Star className="h-4 w-4 mr-1 text-yellow-500" />4.8 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Globe className="h-4 w-4 mr-2" />
              Featured Destinations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Popular Gluten-Free Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the world's most gluten-free friendly cities with verified restaurants and local insights
            </p>
          </div>
          
          <Suspense fallback={<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{[1,2,3,4,5,6].map(i => <div key={i} className="h-96 bg-gray-100 rounded-lg animate-pulse" />)}</div>}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={destination.id} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${destination.image}?auto=format&fit=crop&w=400&q=70`}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={192}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-sm">{destination.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-orange-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{destination.places} places</span>
                    </div>
                    {destination.topCities && (
                      <div className="flex items-center text-blue-600">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">Verified reviews</span>
                      </div>
                    )}
                  </div>

                  {destination.topCities && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Top Cities:</p>
                      <div className="flex flex-wrap gap-1">
                        {destination.topCities.map((city) => {
                          const countryPath = destination.name.includes("Italy") ? "/italy" :
                            destination.name.includes("Spain") ? "/spain" :
                            destination.name.includes("South Africa") ? "/gluten-free/south-africa" :
                            destination.name.includes("Australia") ? "/australia" :
                            destination.name.includes("UK") ? "/united-kingdom" :
                            destination.name.includes("Japan") ? "/japan" : "#";
                          const cityParam = countryPath !== "#" ? `${countryPath}?city=${encodeURIComponent(city)}` : "#";
                          return (
                            <Link key={city} to={cityParam}>
                              <Badge 
                                variant="secondary" 
                                className="text-xs cursor-pointer hover:bg-orange-100 hover:text-orange-700 transition-colors"
                              >
                                {city}
                              </Badge>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {destination.name === "Rome, Italy" ? (
                    <Link to="/italy">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        Explore Italy
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : destination.name === "Barcelona, Spain" ? (
                    <Link to="/spain">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        Explore Spain
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : destination.name === "New York, USA" ? (
                    <Link to="/usa">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        Explore USA
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : destination.name === "Sydney, Australia" ? (
                    <Link to="/australia">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        Explore Australia
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : destination.name === "London, UK" ? (
                    <Link to="/united-kingdom">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        Explore UK
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : destination.name === "Tokyo, Japan" ? (
                    <Link to="/japan">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        Explore Japan
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Explore
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          </Suspense>
        </div>
      </section>

      {/* Trust Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Shield className="h-4 w-4 mr-2" />
              Why Trust Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Safe Travels, Guaranteed
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We understand the challenges of gluten-free travel. Every place is verified by our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Verified</h3>
              <p className="opacity-90">Every restaurant is reviewed by real travelers with gluten sensitivities</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="opacity-90">Detailed cross-contamination information and staff training ratings</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="opacity-90">Only the best gluten-free experiences make it to our platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <Star className="h-4 w-4 mr-2" />
              Traveler Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of travelers who've discovered amazing gluten-free experiences around the world
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.id} className={`border-0 shadow-lg`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 opacity-90">Join our community and start discovering amazing gluten-free places today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Get Started Free
            </Button>
            <Link to="/all-countries">
              <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white hover:text-orange-600">
                View All Countries
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
