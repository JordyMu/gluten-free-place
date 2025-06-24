
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

const Sweden = () => {
  const restaurants = [
    {
      id: 1,
      name: "Malvas glutenfria hantverksbageri",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.9,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Stockholm",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Artisanal gluten-free bakery with expert staff specializing in traditional Swedish pastries and breads.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+46 8 123 456",
      hours: "7:00 AM - 6:00 PM"
    },
    {
      id: 2,
      name: "Happy Atelier",
      image: "photo-1578985545062-69928b1d9587",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Café",
      location: "Gothenburg",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Cozy café with well-trained staff offering excellent gluten-free options and Swedish fika culture.",
      glutenFreeOptions: "Extensive GF menu",
      crossContamination: "Careful protocols",
      phone: "+46 31 234 567",
      hours: "8:00 AM - 5:00 PM"
    },
    {
      id: 3,
      name: "Göteborgs glutenfria bageri",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.7,
      priceRange: "€€",
      cuisine: "Bakery",
      location: "Gothenburg",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Dedicated gluten-free bakery in Gothenburg with knowledgeable staff and traditional Swedish baked goods.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+46 31 345 678",
      hours: "7:30 AM - 6:00 PM"
    },
    {
      id: 4,
      name: "Holy Greens",
      image: "photo-1565299624946-b28f40a0ca4b",
      rating: 4.6,
      priceRange: "€€",
      cuisine: "Healthy",
      location: "Stockholm",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Health-focused restaurant chain with trained staff offering fresh salads and gluten-free options.",
      glutenFreeOptions: "Many GF options",
      crossContamination: "Clear labeling",
      phone: "+46 8 456 789",
      hours: "11:00 AM - 9:00 PM"
    },
    {
      id: 5,
      name: "Meatballs for the People",
      image: "photo-1544025162-d76694265947",
      rating: 4.8,
      priceRange: "€€€",
      cuisine: "Swedish",
      location: "Stockholm",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Traditional Swedish restaurant with staff trained in gluten-free preparations of classic meatballs.",
      glutenFreeOptions: "GF meatballs",
      crossContamination: "Separate prep area",
      phone: "+46 8 567 890",
      hours: "12:00 PM - 10:00 PM"
    },
    {
      id: 6,
      name: "Kopps",
      image: "photo-1517248135467-4c7edcad34c4",
      rating: 4.7,
      priceRange: "€€€",
      cuisine: "Vegetarian",
      location: "Stockholm",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Upscale vegetarian restaurant with knowledgeable staff offering creative gluten-free dishes.",
      glutenFreeOptions: "Adapted menu",
      crossContamination: "Careful handling",
      phone: "+46 8 678 901",
      hours: "5:00 PM - 11:00 PM"
    },
    {
      id: 7,
      name: "Bastard Burgers",
      image: "photo-1568901346375-23c9450c58cd",
      rating: 4.5,
      priceRange: "€€",
      cuisine: "Burgers",
      location: "Multiple Cities",
      staffRating: 4.6,
      knowledgeRating: 4.5,
      description: "Popular burger chain with trained staff offering gluten-free buns and dedicated preparation.",
      glutenFreeOptions: "GF buns available",
      crossContamination: "Standard protocols",
      phone: "+46 8 789 012",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      id: 8,
      name: "BodyBuddy Café & Bakery",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.6,
      priceRange: "€€",
      cuisine: "Health Café",
      location: "Stockholm",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Health-conscious café with staff knowledgeable about gluten-free nutrition and baking.",
      glutenFreeOptions: "Many GF options",
      crossContamination: "Clean protocols",
      phone: "+46 8 890 123",
      hours: "7:00 AM - 7:00 PM"
    },
    {
      id: 9,
      name: "Pazzi",
      image: "photo-1513104890138-7c749659a591",
      rating: 4.7,
      priceRange: "€€€",
      cuisine: "Italian",
      location: "Stockholm",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Italian restaurant with well-trained staff offering authentic gluten-free pasta and pizza.",
      glutenFreeOptions: "GF pasta & pizza",
      crossContamination: "Separate preparation",
      phone: "+46 8 901 234",
      hours: "4:00 PM - 11:00 PM"
    },
    {
      id: 10,
      name: "STHLM TAPAS Vasastan",
      image: "photo-1544025162-d76694265947",
      rating: 4.6,
      priceRange: "€€€",
      cuisine: "Spanish",
      location: "Stockholm",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Spanish tapas restaurant with knowledgeable staff offering gluten-free versions of classic tapas.",
      glutenFreeOptions: "Selected GF tapas",
      crossContamination: "Careful protocols",
      phone: "+46 8 012 345",
      hours: "5:00 PM - 12:00 AM"
    },
    {
      id: 11,
      name: "Vapiano",
      image: "photo-1513104890138-7c749659a591",
      rating: 4.4,
      priceRange: "€€",
      cuisine: "Italian",
      location: "Stockholm",
      staffRating: 4.5,
      knowledgeRating: 4.4,
      description: "Italian chain restaurant with staff trained in gluten-free pasta preparation and ingredients.",
      glutenFreeOptions: "GF pasta available",
      crossContamination: "Standard protocols",
      phone: "+46 8 123 456",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      id: 12,
      name: "Fern & Fika",
      image: "photo-1578985545062-69928b1d9587",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Café",
      location: "Stockholm",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Charming fika café with expertly trained staff specializing in gluten-free Swedish pastries.",
      glutenFreeOptions: "Extensive GF pastries",
      crossContamination: "Dedicated prep area",
      phone: "+46 8 234 567",
      hours: "8:00 AM - 6:00 PM"
    }
  ];

  const compactRestaurants = [
    "Café Så Gott", "Gullegårdens Glutenfria Bageri", "Kullagårdens Glutenfria Stenugnsbageri",
    "Pepstop", "Sweet Harmony gluten-free AB", "Glutenfritt i Malmö", "Martells Glutenfria",
    "Hey Lucie! - glutenfritt & veganskt", "Strandluckan", "Tårtbiten", "Puta Madre",
    "Atmosfär", "The Liffey", "Barrels", "Under Kastanjen", "Deg", "Un Poco",
    "Brunchoteket", "Olivia Avenyn", "Ristorante Paganini", "Restaurang Kryp In",
    "Nivå", "Coffee Break", "Beans & Tales Café", "Bord 27", "Downtown Camper",
    "TRIBOWL STHLM", "Santa Salsa", "Restaurang Nu", "Ristorante da Peppe",
    "Bistro Bestick", "BASTA", "Grändens mat", "Hasselsson"
  ];

  const topCountries = [
    "Italy", "Spain", "USA", "Canada", "Australia", "UK", 
    "Sweden", "Ireland", "Argentina", "Thailand", "Germany"
  ];

  const stats = {
    totalRestaurants: 48,
    avgRating: 4.6,
    cities: 6,
    dedicatedGF: 22
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-yellow-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              <MapPin className="h-4 w-4 mr-2" />
              Sweden - Gluten Free Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Välkommen till Sverige!
              <br />
              Glutenfritt Paradise
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Discover Sweden's exceptional gluten-free dining scene with traditional fika culture, 
              innovative cuisine, and dedicated bakeries. From Stockholm to Gothenburg, explore verified restaurants.
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
                    placeholder="Search Swedish restaurants..." 
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 rounded-full px-6">
                  Sök
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
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Top Gluten-Free Restaurants in Sweden</h2>
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
                    <Heart className="h-6 w-6 text-white hover:text-blue-400 cursor-pointer transition-colors" />
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
                      <span className="text-blue-600 font-medium">{restaurant.crossContamination}</span>
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

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Compact Restaurant List */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">More Gluten-Free Restaurants in Sweden</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {compactRestaurants.map((restaurant, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 border border-blue-100">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">{restaurant}</h4>
                        <div className="flex items-center mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                          <span className="text-xs text-gray-600">4.5+</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 text-xs px-2 py-1">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              Load More Restaurants
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning Your Swedish Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of travelers discovering amazing gluten-free experiences across Sweden</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Download Sweden Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Add Your Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sweden;
