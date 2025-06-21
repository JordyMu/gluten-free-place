import { Search, MapPin, Star, Users, ArrowRight, Globe, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Countries = () => {
  const featuredCountries = [
    {
      id: 1,
      name: "Italy",
      code: "IT",
      image: "photo-1523906834658-6e24ef2386f9",
      places: 342,
      rating: 4.8,
      description: "Home to naturally gluten-free cuisine with amazing risottos and polenta dishes",
      topCities: ["Rome", "Milan", "Florence", "Venice"]
    },
    {
      id: 2,
      name: "Spain",
      code: "ES", 
      image: "photo-1539037116277-4db20889f2d4",
      places: 298,
      rating: 4.7,
      description: "Vibrant culture with excellent gluten-free tapas and paella restaurants",
      topCities: ["Barcelona", "Madrid", "Seville", "Valencia"]
    },
    {
      id: 3,
      name: "France",
      code: "FR", 
      image: "photo-1502602898536-47ad22581b52",
      places: 298,
      rating: 4.7,
      description: "Excellent gluten-free bakeries and restaurants in major cities",
      topCities: ["Paris", "Lyon", "Nice", "Bordeaux"]
    },
    {
      id: 4,
      name: "United States",
      code: "US",
      image: "photo-1485738422979-f5c462d49f74",
      places: 756,
      rating: 4.6,
      description: "Leading in gluten-free awareness with extensive options nationwide",
      topCities: ["New York", "Los Angeles", "San Francisco", "Chicago"]
    },
    {
      id: 5,
      name: "Australia",
      code: "AU",
      image: "photo-1506905925346-21bda4d32df4",
      places: 189,
      rating: 4.9,
      description: "Fantastic gluten-free culture with excellent cafes and restaurants",
      topCities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
    },
    {
      id: 6,
      name: "United Kingdom",
      code: "UK",
      image: "photo-1513635269975-59663e0ac1ad",
      places: 234,
      rating: 4.5,
      description: "Growing gluten-free scene with traditional pubs offering GF options",
      topCities: ["London", "Edinburgh", "Manchester", "Bristol"]
    },
    {
      id: 7,
      name: "Germany",
      code: "DE",
      image: "photo-1467269204594-9661b134dd2b",
      places: 167,
      rating: 4.6,
      description: "Strong gluten-free movement with dedicated stores and restaurants",
      topCities: ["Berlin", "Munich", "Hamburg", "Cologne"]
    }
  ];

  const topCountries = [
    "Italy", "Spain", "USA", "Canada", "Australia", "UK", 
    "Sweden", "Ireland", "Argentina", "Thailand", "Germany"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              GlutenFree World
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-orange-600 transition-colors">Countries</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                Browse
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuLabel className="text-orange-600 font-semibold">Top Countries</DropdownMenuLabel>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {topCountries.map((country) => (
                    <DropdownMenuItem key={country} className="cursor-pointer hover:bg-orange-50 text-sm">
                      {country}
                    </DropdownMenuItem>
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
            <Link to="/#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
            <Link to="/#reviews" className="text-gray-700 hover:text-orange-600 transition-colors">Reviews</Link>
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <Flag className="h-4 w-4 mr-2" />
              Top Rated Countries
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
              Featured Gluten-Free
              <br />
              Destinations
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Discover the world's most gluten-free friendly countries with verified restaurants and local insights
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative flex bg-white rounded-full shadow-xl border border-orange-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search countries..." 
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Countries Grid */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Top-Rated Countries</h2>
            <p className="text-xl text-gray-600">Countries with the best gluten-free dining experiences</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCountries.map((country, index) => (
              <Card key={country.id} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${country.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={country.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-sm">{country.rating}</span>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-500 text-white border-0">
                    {country.code}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{country.name}</h3>
                  <p className="text-gray-600 mb-4">{country.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-orange-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{country.places} places</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">Verified reviews</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Top Cities:</p>
                    <div className="flex flex-wrap gap-1">
                      {country.topCities.map((city) => (
                        <Badge key={city} variant="secondary" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {country.name === "Italy" ? (
                    <Link to="/italy">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        Explore {country.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Explore {country.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See All Countries?</h2>
          <p className="text-xl mb-8 opacity-90">Explore our complete list of 156 countries and territories worldwide</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/all-countries">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                View All 156 Countries
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Add a Place
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countries;
