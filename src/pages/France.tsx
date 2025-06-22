
import { Search, MapPin, Star, Users, ArrowRight, Globe, Phone, Clock, Heart, Filter } from "lucide-react";
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

const France = () => {
  const restaurants = [
    {
      id: 1,
      name: "Copains",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Paris",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Specialized gluten-free bakery with excellent trained staff and extensive knowledge of celiac requirements.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+33 1 42 123 456",
      hours: "8:00 AM - 7:00 PM"
    },
    {
      id: 2,
      name: "KAPUNKA Cantine Thaï - Montorgueil",
      image: "photo-1579952363873-27d3bfad9c0d",
      rating: 4.7,
      priceRange: "€€",
      cuisine: "Thai",
      location: "Paris",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Authentic Thai restaurant with knowledgeable staff trained in gluten-free Asian cuisine preparation.",
      glutenFreeOptions: "Extensive GF menu",
      crossContamination: "Careful protocols",
      phone: "+33 1 45 234 567",
      hours: "11:30 AM - 10:30 PM"
    },
    {
      id: 3,
      name: "Copains Marais",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Paris",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Located in the historic Marais district, offering artisanal gluten-free baked goods with expert staff.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+33 1 43 345 678",
      hours: "8:00 AM - 7:00 PM"
    },
    {
      id: 4,
      name: "La Sajerie",
      image: "photo-1565299624946-b28f40a0ca4b",
      rating: 4.6,
      priceRange: "€€€",
      cuisine: "French",
      location: "Paris",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Traditional French bistro with well-trained staff offering sophisticated gluten-free adaptations.",
      glutenFreeOptions: "Adapted classics",
      crossContamination: "Careful preparation",
      phone: "+33 1 46 456 789",
      hours: "12:00 PM - 10:00 PM"
    },
    {
      id: 5,
      name: "Le Pont Traversé",
      image: "photo-1517248135467-4c7edcad34c4",
      rating: 4.7,
      priceRange: "€€€",
      cuisine: "French",
      location: "Paris",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Elegant French restaurant with extensively trained staff and excellent celiac knowledge.",
      glutenFreeOptions: "Full GF menu",
      crossContamination: "Separate preparation",
      phone: "+33 1 47 567 890",
      hours: "7:00 PM - 11:00 PM"
    },
    {
      id: 6,
      name: "Tasca",
      image: "photo-1544025162-d76694265947",
      rating: 4.5,
      priceRange: "€€",
      cuisine: "Mediterranean",
      location: "Paris",
      staffRating: 4.6,
      knowledgeRating: 4.5,
      description: "Mediterranean cuisine with knowledgeable staff trained in gluten-free Mediterranean dishes.",
      glutenFreeOptions: "Many GF options",
      crossContamination: "Standard protocols",
      phone: "+33 1 48 678 901",
      hours: "12:00 PM - 11:00 PM"
    },
    {
      id: 7,
      name: "Copains Beaugrenelle",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Paris",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Modern location offering the same quality gluten-free products with expert trained staff.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+33 1 49 789 012",
      hours: "8:00 AM - 8:00 PM"
    },
    {
      id: 8,
      name: "Boulangerie Chambelland",
      image: "photo-1578985545062-69928b1d9587",
      rating: 4.9,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Paris",
      staffRating: 5.0,
      knowledgeRating: 4.9,
      description: "Renowned gluten-free bakery with expertly trained staff and comprehensive celiac knowledge.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+33 1 50 890 123",
      hours: "7:30 AM - 7:30 PM"
    },
    {
      id: 9,
      name: "Su Misura",
      image: "photo-1513104890138-7c749659a591",
      rating: 4.7,
      priceRange: "€€€",
      cuisine: "Italian",
      location: "Paris",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Authentic Italian restaurant with staff trained in traditional gluten-free Italian preparation.",
      glutenFreeOptions: "Full GF menu",
      crossContamination: "Separate preparation",
      phone: "+33 1 51 901 234",
      hours: "12:00 PM - 11:30 PM"
    },
    {
      id: 10,
      name: "La Manufacture du Sans Gluten",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.9,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Paris",
      staffRating: 5.0,
      knowledgeRating: 4.9,
      description: "Specialized gluten-free manufacturing with the most knowledgeable staff in Paris.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+33 1 52 012 345",
      hours: "8:00 AM - 6:00 PM"
    },
    {
      id: 11,
      name: "Cococo",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.6,
      priceRange: "€€",
      cuisine: "Desserts",
      location: "Paris",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Artisanal dessert shop with well-trained staff specializing in gluten-free sweets.",
      glutenFreeOptions: "Many GF desserts",
      crossContamination: "Careful handling",
      phone: "+33 1 53 123 456",
      hours: "10:00 AM - 8:00 PM"
    },
    {
      id: 12,
      name: "Café Mareva Montmartre",
      image: "photo-1502602898536-47ad22581b52",
      rating: 4.5,
      priceRange: "€€",
      cuisine: "Café",
      location: "Paris",
      staffRating: 4.6,
      knowledgeRating: 4.5,
      description: "Charming Montmartre café with trained staff offering gluten-free pastries and beverages.",
      glutenFreeOptions: "Selected GF items",
      crossContamination: "Standard protocols",
      phone: "+33 1 54 234 567",
      hours: "8:00 AM - 6:00 PM"
    }
  ];

  const moreRestaurants = [
    {
      id: 13,
      name: "Kapunka - cantine thaï sans gluten",
      rating: 4.7,
      cuisine: "Thai",
      location: "Paris"
    },
    {
      id: 14,
      name: "Judy, Cantine Qualitarienne",
      rating: 4.6,
      cuisine: "Healthy",
      location: "Paris"
    },
    {
      id: 15,
      name: "Grom",
      rating: 4.5,
      cuisine: "Ice Cream",
      location: "Paris"
    },
    {
      id: 16,
      name: "Thaïsil",
      rating: 4.6,
      cuisine: "Thai",
      location: "Paris"
    },
    {
      id: 17,
      name: "Noglu",
      rating: 4.8,
      cuisine: "Bakery",
      location: "Paris"
    },
    {
      id: 18,
      name: "Little Nonna",
      rating: 4.7,
      cuisine: "Italian",
      location: "Paris"
    },
    {
      id: 19,
      name: "Copains Batignolles",
      rating: 4.8,
      cuisine: "Bakery",
      location: "Paris"
    },
    {
      id: 20,
      name: "Copains Le Studio",
      rating: 4.8,
      cuisine: "Bakery",
      location: "Paris"
    },
    {
      id: 21,
      name: "Riz Riz",
      rating: 4.5,
      cuisine: "Asian",
      location: "Paris"
    },
    {
      id: 22,
      name: "Il Quadrifoglio",
      rating: 4.7,
      cuisine: "Italian",
      location: "Paris"
    },
    {
      id: 23,
      name: "Loulou",
      rating: 4.6,
      cuisine: "French",
      location: "Paris"
    },
    {
      id: 24,
      name: "chez ann",
      rating: 4.5,
      cuisine: "Vietnamese",
      location: "Paris"
    },
    {
      id: 25,
      name: "La Citrouille",
      rating: 4.4,
      cuisine: "French",
      location: "Paris"
    },
    {
      id: 26,
      name: "Le Florimond",
      rating: 4.6,
      cuisine: "French",
      location: "Paris"
    },
    {
      id: 27,
      name: "La Creperie",
      rating: 4.5,
      cuisine: "Crêperie",
      location: "Paris"
    },
    {
      id: 28,
      name: "La Crème de Paris",
      rating: 4.4,
      cuisine: "Ice Cream",
      location: "Paris"
    },
    {
      id: 29,
      name: "Lou Cantou",
      rating: 4.6,
      cuisine: "French",
      location: "Paris"
    },
    {
      id: 30,
      name: "La Crème de Paris Notre-Dame",
      rating: 4.4,
      cuisine: "Ice Cream",
      location: "Paris"
    }
  ];

  const topCountries = [
    "Italy", "Spain", "USA", "Canada", "Australia", "UK", 
    "Sweden", "Ireland", "Argentina", "Thailand", "Germany"
  ];

  const stats = {
    totalRestaurants: 62,
    avgRating: 4.6,
    cities: 1,
    dedicatedGF: 18
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              GlutenFree World
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-blue-600 transition-colors">Countries</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Browse
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuLabel className="text-blue-600 font-semibold">Top Countries</DropdownMenuLabel>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {topCountries.map((country) => (
                    <DropdownMenuItem key={country} className="cursor-pointer hover:bg-blue-50 text-sm">
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
            <Link to="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/#reviews" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</Link>
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              <MapPin className="h-4 w-4 mr-2" />
              France - Gluten Free Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-white to-red-600 bg-clip-text text-transparent">
              Bienvenue en France!
              <br />
              Gluten-Free Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Discover France's sophisticated gluten-free dining scene with artisanal bakeries, traditional bistros, 
              and innovative restaurants. From Parisian cafés to gourmet establishments, explore verified venues.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/80 rounded-lg p-4 border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">{stats.totalRestaurants}+</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">{stats.avgRating}</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">{stats.cities}</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">{stats.dedicatedGF}</div>
                <div className="text-sm text-gray-600">100% GF Places</div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative flex bg-white rounded-full shadow-xl border border-blue-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search French restaurants..." 
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 rounded-full px-6">
                  Chercher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Top Gluten-Free Restaurants in France</h2>
              <p className="text-lg text-gray-600">Verified restaurants with trained staff and celiac knowledge</p>
            </div>
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <Card key={restaurant.id} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${restaurant.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold text-sm">{restaurant.rating}</span>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-500 text-white border-0">
                    {restaurant.priceRange}
                  </Badge>
                  <div className="absolute bottom-4 right-4">
                    <Heart className="h-6 w-6 text-white hover:text-red-400 cursor-pointer transition-colors" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{restaurant.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {restaurant.location}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {restaurant.cuisine}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{restaurant.description}</p>

                  {/* Staff Ratings */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Staff Training</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-blue-600">{restaurant.staffRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">GF Knowledge</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-blue-600">{restaurant.knowledgeRating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Gluten-Free Options:</span>
                      <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                        {restaurant.glutenFreeOptions}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Cross-Contamination:</span>
                      <Badge variant="outline" className="text-xs border-green-200 text-green-700">
                        {restaurant.crossContamination}
                      </Badge>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {restaurant.phone}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {restaurant.hours}
                    </span>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Restaurants Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">More Gluten-Free Options in France</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {moreRestaurants.map((restaurant) => (
                <Card key={restaurant.id} className="hover:shadow-lg transition-shadow border border-blue-100">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{restaurant.name}</h4>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{restaurant.cuisine}</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span>{restaurant.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{restaurant.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Discover More Countries</h2>
          <p className="text-xl mb-8 opacity-90">Explore gluten-free dining options around the world</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/countries">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Browse All Countries
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Add a Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default France;
