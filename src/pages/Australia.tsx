
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

const Australia = () => {
  const restaurants = [
    {
      id: 1,
      name: "Wholegreen Bakery",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.9,
      priceRange: "AU$€",
      cuisine: "Bakery",
      location: "Melbourne",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Premium gluten-free bakery with expertly trained staff and comprehensive celiac knowledge.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+61 3 9123 4567",
      hours: "7:00 AM - 6:00 PM"
    },
    {
      id: 2,
      name: "Sebastien Sans Gluten",
      image: "photo-1578985545062-69928b1d9587",
      rating: 4.8,
      priceRange: "AU$€€",
      cuisine: "French Patisserie",
      location: "Sydney",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "French patisserie with highly trained staff specializing in traditional gluten-free pastries.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+61 2 9234 5678",
      hours: "8:00 AM - 7:00 PM"
    },
    {
      id: 3,
      name: "Urban Fish Market",
      image: "photo-1544025162-d76694265947",
      rating: 4.7,
      priceRange: "AU$€€€",
      cuisine: "Seafood",
      location: "Brisbane",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Fresh seafood restaurant with knowledgeable staff trained in gluten-free preparation techniques.",
      glutenFreeOptions: "Extensive GF menu",
      crossContamination: "Separate preparation",
      phone: "+61 7 3345 6789",
      hours: "11:00 AM - 10:00 PM"
    },
    {
      id: 4,
      name: "The Duke of Brunswick Hotel",
      image: "photo-1517248135467-4c7edcad34c4",
      rating: 4.6,
      priceRange: "AU$€€",
      cuisine: "Pub Food",
      location: "Melbourne",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Traditional pub with well-trained staff offering extensive gluten-free pub classics.",
      glutenFreeOptions: "Full GF menu",
      crossContamination: "Careful protocols",
      phone: "+61 3 9456 7890",
      hours: "12:00 PM - 11:00 PM"
    },
    {
      id: 5,
      name: "Straight Up Coffee and Food",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.7,
      priceRange: "AU$€",
      cuisine: "Cafe",
      location: "Perth",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Specialty coffee shop with trained baristas knowledgeable about gluten-free options.",
      glutenFreeOptions: "Many GF options",
      crossContamination: "Clean protocols",
      phone: "+61 8 9567 8901",
      hours: "6:30 AM - 4:00 PM"
    },
    {
      id: 6,
      name: "Noglu",
      image: "photo-1565299624946-b28f40a0ca4b",
      rating: 4.8,
      priceRange: "AU$€€",
      cuisine: "French",
      location: "Sydney",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "French restaurant with extensively trained staff and excellent gluten-free expertise.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+61 2 9678 9012",
      hours: "8:00 AM - 9:00 PM"
    },
    {
      id: 7,
      name: "Seedling Cafe",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.6,
      priceRange: "AU$€",
      cuisine: "Healthy Cafe",
      location: "Adelaide",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Health-focused cafe with knowledgeable staff specializing in gluten-free wholesome meals.",
      glutenFreeOptions: "Many GF options",
      crossContamination: "Careful handling",
      phone: "+61 8 8789 0123",
      hours: "7:00 AM - 5:00 PM"
    },
    {
      id: 8,
      name: "Wafu Kitchen",
      image: "photo-1579952363873-27d3bfad9c0d",
      rating: 4.7,
      priceRange: "AU$€€",
      cuisine: "Japanese",
      location: "Melbourne",
      staffRating: 4.8,
      knowledgeRating: 4.7,
      description: "Authentic Japanese restaurant with staff trained in gluten-free Japanese cuisine preparation.",
      glutenFreeOptions: "Extensive GF menu",
      crossContamination: "Separate preparation",
      phone: "+61 3 9890 1234",
      hours: "5:00 PM - 10:00 PM"
    },
    {
      id: 9,
      name: "Samuel Pepy's Cafe",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.5,
      priceRange: "AU$€",
      cuisine: "Cafe",
      location: "Sydney",
      staffRating: 4.6,
      knowledgeRating: 4.5,
      description: "Cozy cafe with friendly staff knowledgeable about gluten-free breakfast and lunch options.",
      glutenFreeOptions: "Selected GF items",
      crossContamination: "Standard protocols",
      phone: "+61 2 9901 2345",
      hours: "7:00 AM - 4:00 PM"
    },
    {
      id: 10,
      name: "Glazed Gluten Free Patisserie",
      image: "photo-1578985545062-69928b1d9587",
      rating: 4.9,
      priceRange: "AU$€€",
      cuisine: "Patisserie",
      location: "Brisbane",
      staffRating: 5.0,
      knowledgeRating: 4.9,
      description: "Dedicated gluten-free patisserie with expertly trained pastry chefs and comprehensive celiac knowledge.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+61 7 3012 3456",
      hours: "8:00 AM - 6:00 PM"
    },
    {
      id: 11,
      name: "Nodo South Bank",
      image: "photo-1551024506-0bccd828d307",
      rating: 4.6,
      priceRange: "AU$€€",
      cuisine: "Modern Australian",
      location: "Brisbane",
      staffRating: 4.7,
      knowledgeRating: 4.6,
      description: "Contemporary Australian restaurant with well-trained staff offering innovative gluten-free dishes.",
      glutenFreeOptions: "Extensive GF menu",
      crossContamination: "Careful preparation",
      phone: "+61 7 3123 4567",
      hours: "7:00 AM - 10:00 PM"
    },
    {
      id: 12,
      name: "BAKED Gluten Free",
      image: "photo-1555507036-ab794f575c75",
      rating: 4.8,
      priceRange: "AU$€",
      cuisine: "Bakery",
      location: "Perth",
      staffRating: 4.9,
      knowledgeRating: 4.8,
      description: "Specialized gluten-free bakery with highly trained bakers and comprehensive celiac safety protocols.",
      glutenFreeOptions: "100% Gluten-Free",
      crossContamination: "Dedicated facility",
      phone: "+61 8 9234 5678",
      hours: "7:30 AM - 5:30 PM"
    }
  ];

  const additionalRestaurants = [
    "15cenchi Japanese cheesecake The Galeries", "Kudo", "Dough Street", "Eat Cannoli",
    "Meantime On Beaumont", "Shimbashi Japanese Soba & Sake Bar Restaurant", "Coastal Berry Juice Bar",
    "Regretless - Low Carb Pleasure", "Bodega Underground", "La Chiva Taqueria", "15cenchi Japanese Cheesecake",
    "Darringtons", "ONDA Bar & Eatery", "La Bodega Restaurant/Bar", "Hudsons Bakery", "Nutie",
    "IL RISO", "Truly Free Cafe & Bakehouse", "Nodo", "Gluten Free Patisserie", "Buderim Cookie Co",
    "Panna Artisan Bakery & Patisserie", "Queenies", "Chinese Cuisine (Noodle Asia) Restaurant and Takeaway",
    "Trezona Gluten Free Bakery Cafe", "Comeco Foods Cafe", "Mano Wraps", "Hotel Nacional",
    "Kombi Cafe & Smoothie Bar", "Mr Potato", "Ed's Hastings", "Davies St. Food Co.", "KEEP TONE",
    "Wholegreen Bakery - Pop-up", "Lucky Fish", "All Things Sweet Bakery", "A25 Pizzeria", "Restaurant 317"
  ];

  const topCountries = [
    "Italy", "Spain", "USA", "Canada", "Australia", "UK", 
    "Sweden", "Ireland", "Argentina", "Thailand", "Germany"
  ];

  const stats = {
    totalRestaurants: 50,
    avgRating: 4.7,
    cities: 6,
    dedicatedGF: 28
  };

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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <MapPin className="h-4 w-4 mr-2" />
              Australia - Gluten Free Guide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
              G'day Australia!
              <br />
              Gluten-Free Down Under
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Discover Australia's incredible gluten-free dining scene with fresh seafood, artisanal bakeries, 
              and multicultural cuisine. From Sydney to Perth, explore the best verified restaurants.
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
                    placeholder="Search Australian restaurants..." 
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

      {/* Restaurants Grid */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Top Gluten-Free Restaurants in Australia</h2>
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
                      <span className="text-gray-500">Cross Contamination:</span>
                      <Badge variant="outline" className="text-xs border-orange-200 text-orange-700">
                        {restaurant.crossContamination}
                      </Badge>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1 mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-2" />
                      <span>{restaurant.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-2" />
                      <span>{restaurant.hours}</span>
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
        </div>
      </section>

      {/* Additional Restaurants */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">More Great Options</h2>
            <p className="text-xl text-gray-600">Additional verified gluten-free restaurants across Australia</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalRestaurants.map((restaurant, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <h4 className="font-semibold text-sm text-gray-900 mb-2">{restaurant}</h4>
                <div className="flex items-center justify-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                  <span className="text-xs text-gray-600">4.5+</span>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              View All 50+ Restaurants
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Australia?</h2>
          <p className="text-xl mb-8 opacity-90">Download our mobile app for real-time updates and exclusive deals</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Download App
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              View Map
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Australia;
