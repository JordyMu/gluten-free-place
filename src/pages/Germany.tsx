
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

const Germany = () => {
  const restaurants = [
    {
      id: 1,
      name: "Isabella Glutenfreie Pâtisserie",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.9,
      priceRange: "€€",
      cuisine: "Pastry",
      location: "Berlin",
      staffRating: 4.9,
      knowledgeRating: 4.9,
      description: "Specialized gluten-free patisserie with exceptional trained staff and comprehensive celiac knowledge.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+49 30 123 4567",
      hours: "8:00 AM - 7:00 PM"
    },
    {
      id: 2,
      name: "BROTGEFUEHLE - glutenfreie, vegane BIO-Backmanufaktur",
      image: "photo-1509440159596-0249088772ff",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Munich",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Organic gluten-free vegan bakery with highly trained staff specializing in safe baking practices.",
      glutenFreeOptions: "100% GF & Vegan",
      crossContamination: "Dedicated facility",
      phone: "+49 89 234 5678",
      hours: "7:30 AM - 6:30 PM"
    },
    {
      id: 3,
      name: "Ginko - das glutenfreie Restaurant",
      image: "photo-1517248135467-4c7edcad34c4",
      rating: 4.8,
      priceRange: "€€€",
      cuisine: "German",
      location: "Hamburg",
      staffRating: 4.8,
      knowledgeRating: 4.8,
      description: "Fully gluten-free restaurant with expertly trained staff offering traditional German cuisine.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+49 40 345 6789",
      hours: "5:00 PM - 11:00 PM"
    },
    {
      id: 4,
      name: "Backbrüder - Glutenfreie Bäckerei & Café",
      image: "photo-1509440159596-0249088772ff",
      rating: 4.7,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Berlin",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Dedicated gluten-free bakery and café with well-trained staff and extensive GF knowledge.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+49 30 456 7890",
      hours: "7:00 AM - 7:00 PM"
    },
    {
      id: 5,
      name: "SENZO glutenfrei",
      image: "photo-1517248135467-4c7edcad34c4",
      rating: 4.7,
      priceRange: "€€",
      cuisine: "International",
      location: "Cologne",
      staffRating: 4.7,
      knowledgeRating: 4.7,
      description: "Modern gluten-free restaurant with knowledgeable staff offering international cuisine.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+49 221 567 8901",
      hours: "11:00 AM - 10:00 PM"
    },
    {
      id: 6,
      name: "Palmtreeclub",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.6,
      priceRange: "€€€",
      cuisine: "Modern European",
      location: "Berlin",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Trendy restaurant with trained staff offering creative gluten-free interpretations of European dishes.",
      glutenFreeOptions: "Extensive GF menu",
      crossContamination: "Careful protocols",
      phone: "+49 30 678 9012",
      hours: "6:00 PM - 12:00 AM"
    },
    {
      id: 7,
      name: "Casa del Nonno",
      image: "photo-1544025162-d76694265947",
      rating: 4.6,
      priceRange: "€€€",
      cuisine: "Italian",
      location: "Munich",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Authentic Italian restaurant with staff trained in gluten-free pasta and pizza preparation.",
      glutenFreeOptions: "Full GF menu",
      crossContamination: "Separate prep area",
      phone: "+49 89 789 0123",
      hours: "12:00 PM - 11:00 PM"
    },
    {
      id: 8,
      name: "Das Metta",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.5,
      priceRange: "€€",
      cuisine: "Vegetarian",
      location: "Berlin",
      staffRating: 4.6,
      knowledgeRating: 4.5,
      description: "Vegetarian restaurant with knowledgeable staff offering numerous gluten-free plant-based options.",
      glutenFreeOptions: "Many GF options",
      crossContamination: "Careful handling",
      phone: "+49 30 890 1234",
      hours: "12:00 PM - 10:00 PM"
    },
    {
      id: 9,
      name: "Sinless Cakes Cafe",
      image: "photo-1563805042-7684c019e1cb",
      rating: 4.5,
      priceRange: "€€",
      cuisine: "Desserts",
      location: "Hamburg",
      staffRating: 4.6,
      knowledgeRating: 4.5,
      description: "Specialized cake café with trained staff offering guilt-free gluten-free desserts.",
      glutenFreeOptions: "All GF desserts",
      crossContamination: "Clean protocols",
      phone: "+49 40 901 2345",
      hours: "9:00 AM - 8:00 PM"
    },
    {
      id: 10,
      name: "Trattoria Senza",
      image: "photo-1544025162-d76694265947",
      rating: 4.4,
      priceRange: "€€",
      cuisine: "Italian",
      location: "Frankfurt",
      staffRating: 4.5,
      knowledgeRating: 4.4,
      description: "Italian trattoria with staff knowledgeable about gluten-free preparation and authentic recipes.",
      glutenFreeOptions: "GF pasta & pizza",
      crossContamination: "Standard protocols",
      phone: "+49 69 012 3456",
      hours: "11:30 AM - 10:30 PM"
    },
    {
      id: 11,
      name: "AERA",
      image: "photo-1517248135467-4c7edcad34c4",
      rating: 4.4,
      priceRange: "€€€",
      cuisine: "Fine Dining",
      location: "Berlin",
      staffRating: 4.5,
      knowledgeRating: 4.4,
      description: "Upscale restaurant with well-trained staff offering sophisticated gluten-free cuisine.",
      glutenFreeOptions: "Adapted tasting menu",
      crossContamination: "Careful preparation",
      phone: "+49 30 123 4567",
      hours: "7:00 PM - 11:00 PM"
    },
    {
      id: 12,
      name: "Hard Rock Cafe",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.3,
      priceRange: "€€",
      cuisine: "American",
      location: "Berlin",
      staffRating: 4.4,
      knowledgeRating: 4.3,
      description: "International chain with staff trained in gluten-free menu options and preparation.",
      glutenFreeOptions: "GF burger menu",
      crossContamination: "Standard protocols",
      phone: "+49 30 234 5678",
      hours: "11:00 AM - 1:00 AM"
    }
  ];

  const topCountries = [
    "Italy", "Spain", "USA", "Canada", "Australia", "UK", 
    "Sweden", "Ireland", "Argentina", "Thailand", "Germany"
  ];

  const stats = {
    totalRestaurants: 48,
    avgRating: 4.6,
    cities: 12,
    dedicatedGF: 22
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-yellow-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-yellow-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
              GlutenFree World
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-yellow-600 transition-colors">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-yellow-600 transition-colors">Countries</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-yellow-600 transition-colors cursor-pointer">
                Browse
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuLabel className="text-yellow-600 font-semibold">Top Countries</DropdownMenuLabel>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {topCountries.map((country) => (
                    <DropdownMenuItem key={country} className="cursor-pointer hover:bg-yellow-50 text-sm">
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
            <Link to="/#about" className="text-gray-700 hover:text-yellow-600 transition-colors">About</Link>
            <Link to="/#reviews" className="text-gray-700 hover:text-yellow-600 transition-colors">Reviews</Link>
            <Button variant="outline" className="border-yellow-200 text-yellow-600 hover:bg-yellow-50">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-red-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
              <MapPin className="h-4 w-4 mr-2" />
              Germany - Gluten Free Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-red-500 to-black bg-clip-text text-transparent">
              Willkommen in Deutschland!
              <br />
              Glutenfrei Paradies
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Discover Germany's excellent gluten-free scene with dedicated bakeries, traditional German dishes 
              adapted for celiac travelers, and world-class restaurants. From Berlin to Munich, explore verified dining options.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/80 rounded-lg p-4 border border-yellow-100">
                <div className="text-2xl font-bold text-yellow-600">{stats.totalRestaurants}+</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-yellow-100">
                <div className="text-2xl font-bold text-yellow-600">{stats.avgRating}</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-yellow-100">
                <div className="text-2xl font-bold text-yellow-600">{stats.cities}</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-yellow-100">
                <div className="text-2xl font-bold text-yellow-600">{stats.dedicatedGF}</div>
                <div className="text-sm text-gray-600">100% GF Places</div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative flex bg-white rounded-full shadow-xl border border-yellow-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search German restaurants..." 
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 rounded-full px-6">
                  Suchen
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
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Top Gluten-Free Restaurants in Germany</h2>
              <p className="text-lg text-gray-600">Verified restaurants with trained staff and celiac knowledge</p>
            </div>
            <Button variant="outline" className="border-yellow-200 text-yellow-600 hover:bg-yellow-50">
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
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-white border-0">
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
                        <span className="font-semibold text-yellow-600">{restaurant.staffRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">GF Knowledge</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-yellow-600">{restaurant.knowledgeRating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Gluten-Free Options:</span>
                      <Badge variant="outline" className="text-xs border-yellow-200 text-yellow-700">
                        {restaurant.glutenFreeOptions}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Cross-Contamination:</span>
                      <span className="text-yellow-600 font-medium">{restaurant.crossContamination}</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1 mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-2" />
                      {restaurant.phone}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-2" />
                      {restaurant.hours}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-yellow-200 text-yellow-600 hover:bg-yellow-50">
              Load More Restaurants
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning Your German Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of travelers discovering amazing gluten-free experiences across Germany</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              Download Germany Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600">
              Add Your Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Germany;
