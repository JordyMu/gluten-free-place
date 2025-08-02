
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

const Spain = () => {
  const restaurants = [
    {
      id: 1,
      name: "Jansana Gluten Free Bakery",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Barcelona",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Specialized gluten-free bakery with excellent trained staff and extensive knowledge of celiac requirements.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+34 932 123 456",
      hours: "8:00 AM - 8:00 PM"
    },
    {
      id: 2,
      name: "chök Sagasta | Pastelería sin gluten",
      image: "photo-1578985545062-69928b1d9587",
      rating: 4.7,
      priceRange: "€€",
      cuisine: "Pastry",
      location: "Madrid",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Premium gluten-free pastry shop with knowledgeable staff specializing in chocolate and desserts.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+34 915 234 567",
      hours: "9:00 AM - 9:00 PM"
    },
    {
      id: 3,
      name: "Chök",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.6,
      priceRange: "€€",
      cuisine: "Chocolate Bar",
      location: "Barcelona",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Artisanal chocolate shop with well-trained staff offering gluten-free chocolate treats and beverages.",
      glutenFreeOptions: "Most items GF",
      crossContamination: "Careful protocols",
      phone: "+34 934 345 678",
      hours: "10:00 AM - 10:00 PM"
    },
    {
      id: 4,
      name: "Messie Sin Gluten Muntaner",
      image: "photo-1565299624946-b28f40a0ca4b",
      rating: 4.8,
      priceRange: "€€€",
      cuisine: "Italian",
      location: "Barcelona",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Italian restaurant with extensively trained staff and excellent knowledge of gluten-free preparation.",
      glutenFreeOptions: "Extensive GF menu",
      crossContamination: "Separate preparation",
      phone: "+34 933 456 789",
      hours: "12:00 PM - 11:00 PM"
    },
    {
      id: 5,
      name: "La Nonna Carmela",
      image: "photo-1544025162-d76694265947",
      rating: 4.7,
      priceRange: "€€",
      cuisine: "Italian",
      location: "Madrid",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Traditional Italian trattoria with staff trained in celiac safety and authentic gluten-free recipes.",
      glutenFreeOptions: "Full GF menu",
      crossContamination: "Dedicated prep area",
      phone: "+34 914 567 890",
      hours: "1:00 PM - 11:30 PM"
    },
    {
      id: 6,
      name: "ARUKU",
      image: "photo-1579952363873-27d3bfad9c0d",
      rating: 4.6,
      priceRange: "€€€",
      cuisine: "Asian Fusion",
      location: "Barcelona",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Modern Asian fusion restaurant with knowledgeable staff trained in gluten-free Asian cuisine.",
      glutenFreeOptions: "Many GF options",
      crossContamination: "Careful handling",
      phone: "+34 932 678 901",
      hours: "7:00 PM - 12:00 AM"
    },
    {
      id: 7,
      name: "Grosso Napoletano Senza Glutine",
      image: "photo-1513104890138-7c749659a591",
      rating: 4.9,
      priceRange: "€€€",
      cuisine: "Pizza",
      location: "Barcelona",
      staffRating: 5.0,
      knowledgeRating: 4.9,
      description: "Authentic Neapolitan pizza with expertly trained staff and dedicated gluten-free kitchen.",
      glutenFreeOptions: "100% GF pizza",
      crossContamination: "Separate kitchen",
      phone: "+34 933 789 012",
      hours: "12:00 PM - 12:00 AM"
    },
    {
      id: 8,
      name: "YUMMY heladería",
      image: "photo-1563805042-7684c019e1cb",
      rating: 4.5,
      priceRange: "€",
      cuisine: "Ice Cream",
      location: "Valencia",
      staffRating: 4.6,
      knowledgeRating: 4.5,
      description: "Artisanal ice cream shop with trained staff offering numerous gluten-free flavors.",
      glutenFreeOptions: "Many GF flavors",
      crossContamination: "Clean scoops protocol",
      phone: "+34 963 890 123",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      id: 9,
      name: "Cøliaki",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Seville",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Specialized celiac bakery with highly trained staff and comprehensive gluten-free knowledge.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+34 954 901 234",
      hours: "8:30 AM - 7:30 PM"
    },
    {
      id: 10,
      name: "La Papita de Leche Take Away",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.4,
      priceRange: "€",
      cuisine: "Fast Food",
      location: "Madrid",
      staffRating: 4.5,
      knowledgeRating: 4.4,
      description: "Quick service restaurant with staff knowledgeable about gluten-free options and preparation.",
      glutenFreeOptions: "Selected GF items",
      crossContamination: "Standard protocols",
      phone: "+34 915 012 345",
      hours: "11:00 AM - 10:00 PM"
    },
    {
      id: 11,
      name: "Restaurante En Ville",
      image: "photo-1517248135467-4c7edcad34c4",
      rating: 4.7,
      priceRange: "€€€",
      cuisine: "French",
      location: "Barcelona",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Elegant French restaurant with well-trained staff offering sophisticated gluten-free cuisine.",
      glutenFreeOptions: "Adapted menu",
      crossContamination: "Careful preparation",
      phone: "+34 934 123 456",
      hours: "7:00 PM - 11:30 PM"
    },
    {
      id: 12,
      name: "Messié Pizza Gluten Free Gràcia",
      image: "photo-1513104890138-7c749659a591",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Pizza",
      location: "Barcelona",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Dedicated gluten-free pizzeria with expertly trained staff in the heart of Gràcia.",
      glutenFreeOptions: "100% GF pizza",
      crossContamination: "Dedicated facility",
      phone: "+34 932 234 567",
      hours: "12:00 PM - 11:30 PM"
    }
  ];

  const topCountries = [
    "Italy", "Spain", "USA", "Canada", "Australia", "UK", 
    "Sweden", "Ireland", "Argentina", "Thailand", "Germany"
  ];

  const stats = {
    totalRestaurants: 50,
    avgRating: 4.7,
    cities: 8,
    dedicatedGF: 25
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              GlutenFree World
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-red-600 transition-colors">Countries</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
                Browse
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuLabel className="text-red-600 font-semibold">Top Countries</DropdownMenuLabel>
                <div className="grid grid-cols-2 gap-1 p-2">
                  {topCountries.map((country) => (
                    <DropdownMenuItem key={country} className="cursor-pointer hover:bg-red-50 text-sm">
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
            <Link to="/#about" className="text-gray-700 hover:text-red-600 transition-colors">About</Link>
            <Link to="/#reviews" className="text-gray-700 hover:text-red-600 transition-colors">Reviews</Link>
            <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-100 text-red-800 border-red-200">
              <MapPin className="h-4 w-4 mr-2" />
              Spain - Gluten Free Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              ¡Bienvenidos a España!
              <br />
              Gluten-Free Paradise
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Discover Spain's incredible gluten-free dining scene with tapas, paella, and traditional dishes 
              adapted for celiac travelers. From Barcelona to Seville, explore the best verified restaurants.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/80 rounded-lg p-4 border border-red-100">
                <div className="text-2xl font-bold text-red-600">{stats.totalRestaurants}+</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-red-100">
                <div className="text-2xl font-bold text-red-600">{stats.avgRating}</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-red-100">
                <div className="text-2xl font-bold text-red-600">{stats.cities}</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-red-100">
                <div className="text-2xl font-bold text-red-600">{stats.dedicatedGF}</div>
                <div className="text-sm text-gray-600">100% GF Places</div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative flex bg-white rounded-full shadow-xl border border-red-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search Spanish restaurants..." 
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-full px-6">
                  Buscar
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
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Top Gluten-Free Restaurants in Spain</h2>
              <p className="text-lg text-gray-600">Verified restaurants with trained staff and celiac knowledge</p>
            </div>
            <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
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
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white border-0">
                    {restaurant.priceRange}
                  </Badge>
                  <div className="absolute bottom-4 right-4">
                    <Heart className="h-6 w-6 text-white hover:text-red-400 cursor-pointer transition-colors" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    {restaurant.name === "Jansana Gluten Free Bakery" ? (
                      <Link to="/spain/jansana-gluten-free-bakery">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">{restaurant.name}</h3>
                      </Link>
                    ) : restaurant.name === "chök Sagasta | Pastelería sin gluten" ? (
                      <Link to="/spain/chok-sagasta-pasteleria">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">{restaurant.name}</h3>
                      </Link>
                    ) : restaurant.name === "Chök" ? (
                      <Link to="/spain/chok-chocolate-bar">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">{restaurant.name}</h3>
                      </Link>
                    ) : restaurant.name === "Messie Sin Gluten Muntaner" ? (
                      <Link to="/spain/messie-sin-gluten-muntaner">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">{restaurant.name}</h3>
                      </Link>
                    ) : restaurant.name === "La Nonna Carmela" ? (
                      <Link to="/spain/la-nonna-carmela">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">{restaurant.name}</h3>
                      </Link>
                    ) : restaurant.name === "ARUKU" ? (
                      <Link to="/spain/aruku">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">{restaurant.name}</h3>
                      </Link>
                    ) : restaurant.name === "Grosso Napoletano Senza Glutine" ? (
                      <Link to="/spain/grosso-napoletano-senza-glutine">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">{restaurant.name}</h3>
                      </Link>
                    ) : (
                      <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{restaurant.name}</h3>
                    )}
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
                        <span className="font-semibold text-red-600">{restaurant.staffRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">GF Knowledge</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-red-600">{restaurant.knowledgeRating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Gluten-Free Options:</span>
                      <Badge variant="outline" className="text-xs border-red-200 text-red-700">
                        {restaurant.glutenFreeOptions}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Cross-Contamination:</span>
                      <span className="text-red-600 font-medium">{restaurant.crossContamination}</span>
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

                  {restaurant.name === "Jansana Gluten Free Bakery" ? (
                    <Link to="/spain/jansana-gluten-free-bakery">
                      <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : restaurant.name === "chök Sagasta | Pastelería sin gluten" ? (
                    <Link to="/spain/chok-sagasta-pasteleria">
                      <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : restaurant.name === "Chök" ? (
                    <Link to="/spain/chok-chocolate-bar">
                      <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
              Load More Restaurants
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning Your Spanish Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of travelers discovering amazing gluten-free experiences across Spain</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Download Spain Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Add Your Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spain;
