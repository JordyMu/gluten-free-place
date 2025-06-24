
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

const Thailand = () => {
  const restaurants = [
    {
      id: 1,
      name: "Gluten Free Bakery Tama",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.9,
      priceRange: "฿฿",
      cuisine: "Bakery",
      location: "Bangkok",
      staffRating: 5.0,
      knowledgeRating: 4.9,
      description: "Dedicated gluten-free bakery with expertly trained staff and comprehensive celiac knowledge.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+66 2 123 4567",
      hours: "7:00 AM - 7:00 PM"
    },
    {
      id: 2,
      name: "VAN&TABI gluten-free cafe",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.8,
      priceRange: "฿฿",
      cuisine: "Cafe",
      location: "Bangkok",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Specialized gluten-free cafe with well-trained staff offering safe dining for celiacs.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+66 2 234 5678",
      hours: "8:00 AM - 8:00 PM"
    },
    {
      id: 3,
      name: "Street Vegan House",
      image: "photo-1565299624946-b28f40a0ca4b",
      rating: 4.7,
      priceRange: "฿฿",
      cuisine: "Vegan",
      location: "Chiang Mai",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Plant-based restaurant with knowledgeable staff trained in gluten-free vegan cuisine.",
      glutenFreeOptions: "Many GF options",
      crossContamination: "Careful protocols",
      phone: "+66 53 345 6789",
      hours: "11:00 AM - 9:00 PM"
    },
    {
      id: 4,
      name: "Its Good Kitchen",
      image: "photo-1544025162-d76694265947",
      rating: 4.6,
      priceRange: "฿฿",
      cuisine: "International",
      location: "Phuket",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "International kitchen with trained staff offering diverse gluten-free options.",
      glutenFreeOptions: "Extensive GF menu",
      crossContamination: "Separate preparation",
      phone: "+66 76 456 7890",
      hours: "10:00 AM - 10:00 PM"
    },
    {
      id: 5,
      name: "Diver's Inn Steak House",
      image: "photo-1546833999-b9f581a1996d",
      rating: 4.5,
      priceRange: "฿฿฿",
      cuisine: "Steakhouse",
      location: "Koh Tao",
      staffRating: 4.6,
      knowledgeRating: 4.5,
      description: "Premium steakhouse with staff trained in gluten-free preparation methods.",
      glutenFreeOptions: "GF steaks & sides",
      crossContamination: "Clean grill protocols",
      phone: "+66 77 567 8901",
      hours: "5:00 PM - 11:00 PM"
    },
    {
      id: 6,
      name: "Mango",
      image: "photo-1579952363873-27d3bfad9c0d",
      rating: 4.7,
      priceRange: "฿฿",
      cuisine: "Thai",
      location: "Bangkok",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Modern Thai restaurant with knowledgeable staff specializing in gluten-free Thai cuisine.",
      glutenFreeOptions: "Adapted Thai menu",
      crossContamination: "Careful handling",
      phone: "+66 2 678 9012",
      hours: "11:30 AM - 11:00 PM"
    },
    {
      id: 7,
      name: "Malee Kitchen",
      image: "photo-1517248135467-4c7edcad34c4",
      rating: 4.6,
      priceRange: "฿฿",
      cuisine: "Thai",
      location: "Chiang Mai",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Traditional Thai kitchen with trained staff offering authentic gluten-free dishes.",
      glutenFreeOptions: "Traditional GF Thai",
      crossContamination: "Separate woks",
      phone: "+66 53 789 0123",
      hours: "11:00 AM - 9:30 PM"
    },
    {
      id: 8,
      name: "Eightfold",
      image: "photo-1513104890138-7c749659a591",
      rating: 4.8,
      priceRange: "฿฿฿",
      cuisine: "Fine Dining",
      location: "Bangkok",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Upscale restaurant with extensively trained staff and sophisticated gluten-free options.",
      glutenFreeOptions: "Gourmet GF menu",
      crossContamination: "Dedicated prep",
      phone: "+66 2 890 1234",
      hours: "6:00 PM - 12:00 AM"
    }
  ];

  const additionalRestaurants = [
    "SukiShake Café", "Sababa Hummus", "Honeymoon Thai Restaurant", "25 Degrees Burger Bar",
    "SO Samsen", "Nopparat Cuisine and Gallery", "Thipsamai", "La Piccola Maria Pizzeria",
    "Red Chilli Thai Cuisine", "Prego Italian Restaurant", "ZeZe Restaurant", "Goodsouls Kitchen",
    "Bangkok Bold Kitchen", "Theera Healthy Bake Room", "Big Boys' Burger Club", "Ton Ma Yom Restaurant",
    "Kawin's Kitchen", "Grazie Thai Local Food", "Kopitiam by Wilai", "Living Juices & Yoga",
    "Cheese Madness", "Anoma's Restaurant", "He eat my favorite restaurant", "Sunrise Tacos",
    "The Brightside Bistro", "Taste of India", "Molly's Tavern Irish Bar", "Cafe 8.98 at Ao Nang",
    "Butter is Better Diner", "THE HOUSE by Ginger", "Hungry Wolf's Steak House", "Massilia",
    "Joe's Texas BBQ", "The Thai Tapas", "Lon Lon Local Diner", "The Sweet Restaurant",
    "Kurissara Thai Cuisine", "ANNIE Sweetery & Eatery", "Nong Beer Restaurant", "Taj Palace",
    "Happy Allergy Bakery", "Barrab"
  ];

  const topCountries = [
    "Italy", "Spain", "USA", "Canada", "Australia", "UK", 
    "Sweden", "Ireland", "Argentina", "Thailand", "Germany"
  ];

  const stats = {
    totalRestaurants: 50,
    avgRating: 4.7,
    cities: 12,
    dedicatedGF: 15
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <MapPin className="h-4 w-4 mr-2" />
              Thailand - Gluten Free Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600 bg-clip-text text-transparent">
              สวัสดี Thailand!
              <br />
              Gluten-Free Paradise
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Discover Thailand's amazing gluten-free dining scene from street food to fine dining. 
              From Bangkok's bustling markets to Phuket's beach restaurants - explore verified safe options.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/80 rounded-lg p-4 border border-orange-100">
                <div className="text-2xl font-bold text-orange-600">{stats.totalRestaurants}+</div>
                <div className="text-sm text-gray-600">Restaurants</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-orange-100">
                <div className="text-2xl font-bold text-orange-600">{stats.avgRating}</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-orange-100">
                <div className="text-2xl font-bold text-orange-600">{stats.cities}</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-orange-100">
                <div className="text-2xl font-bold text-orange-600">{stats.dedicatedGF}</div>
                <div className="text-sm text-gray-600">100% GF Places</div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative flex bg-white rounded-full shadow-xl border border-orange-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search Thai restaurants..." 
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full px-6">
                  ค้นหา
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
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Top Gluten-Free Restaurants in Thailand</h2>
              <p className="text-lg text-gray-600">Verified restaurants with trained staff and celiac knowledge</p>
            </div>
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
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
                  <Badge className="absolute top-4 left-4 bg-orange-500 text-white border-0">
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
                        <span className="font-semibold text-orange-600">{restaurant.staffRating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">GF Knowledge</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-orange-600">{restaurant.knowledgeRating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Gluten-Free Options:</span>
                      <Badge variant="outline" className="text-xs border-orange-200 text-orange-700">
                        {restaurant.glutenFreeOptions}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Cross-Contamination:</span>
                      <span className="text-orange-600 font-medium">{restaurant.crossContamination}</span>
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

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Restaurants Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">More Great Options</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {additionalRestaurants.map((name, index) => (
                <div key={index} className="bg-white/80 rounded-lg p-4 border border-orange-100 hover:border-orange-200 transition-colors">
                  <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
                  <div className="flex items-center mt-2">
                    <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                    <span className="text-xs text-gray-600">4.{Math.floor(Math.random() * 4) + 4}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
              Load More Restaurants
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning Your Thai Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of travelers discovering amazing gluten-free experiences across Thailand</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Download Thailand Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Add Your Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thailand;
