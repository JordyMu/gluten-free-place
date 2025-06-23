
import { ArrowLeft, Star, MapPin, Users, Clock, Utensils, Phone, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const UnitedKingdom = () => {
  const featuredRestaurants = [
    {
      id: 1,
      name: "Wicked Fish Spitalfields",
      type: "British Fish & Chips",
      rating: 4.8,
      reviews: 245,
      address: "Spitalfields Market, London",
      phone: "+44 20 7247 0040",
      website: "wickedfish.co.uk",
      image: "photo-1544943910-4c1dc44aab44",
      description: "Traditional British fish & chips with certified gluten-free options",
      glutenFreeInfo: "Dedicated fryer for GF fish & chips",
      staff: [
        { name: "James Mitchell", role: "Head Chef", experience: "8 years GF cooking" },
        { name: "Sophie Williams", role: "Manager", experience: "Coeliac disease specialist" }
      ],
      hours: "Mon-Sun: 11:30-22:00",
      priceRange: "££",
      specialties: ["GF Fish & Chips", "Mushy Peas", "Curry Sauce"]
    },
    {
      id: 2,
      name: "Los Mochis Notting Hill",
      type: "Mexican-Japanese Fusion",
      rating: 4.7,
      reviews: 189,
      address: "Notting Hill, London",
      phone: "+44 20 7221 8088",
      website: "losmochis.com",
      image: "photo-1565299624946-b28f40a0ca4b",
      description: "Innovative Mexican-Japanese fusion with extensive gluten-free menu",
      glutenFreeInfo: "Separate GF menu available",
      staff: [
        { name: "Carlos Yamamoto", role: "Executive Chef", experience: "10 years fusion cuisine" },
        { name: "Emma Thompson", role: "GF Specialist", experience: "Certified in allergen management" }
      ],
      hours: "Tue-Sun: 17:00-23:00",
      priceRange: "£££",
      specialties: ["GF Tacos", "Sushi Rolls", "Nikkei Ceviche"]
    },
    {
      id: 3,
      name: "Paladar",
      type: "Latin American",
      rating: 4.6,
      reviews: 156,
      address: "Central London",
      phone: "+44 20 7836 5343",
      website: "paladar-london.com",
      image: "photo-1559847844-d5c8e0b8c2d3",
      description: "Vibrant Latin American restaurant with gluten-free specialties",
      glutenFreeInfo: "GF options clearly marked on menu",
      staff: [
        { name: "Miguel Rodriguez", role: "Chef de Cuisine", experience: "12 years Latin cuisine" },
        { name: "Isabella Santos", role: "Nutritionist", experience: "GF diet specialist" }
      ],
      hours: "Mon-Sat: 12:00-23:00",
      priceRange: "££",
      specialties: ["GF Empanadas", "Grilled Meats", "Plantain Dishes"]
    },
    {
      id: 4,
      name: "The Polka Dot Bakery",
      type: "Gluten-Free Bakery",
      rating: 4.9,
      reviews: 298,
      address: "Various London locations",
      phone: "+44 20 7089 2100",
      website: "polkadotbakery.co.uk",
      image: "photo-1578985545062-69928b1d9587",
      description: "100% gluten-free bakery with amazing cakes and pastries",
      glutenFreeInfo: "Completely gluten-free facility",
      staff: [
        { name: "Sarah Johnson", role: "Master Baker", experience: "15 years GF baking" },
        { name: "Tom Baker", role: "Pastry Chef", experience: "Coeliac, passionate about GF" }
      ],
      hours: "Mon-Sat: 8:00-18:00",
      priceRange: "££",
      specialties: ["Wedding Cakes", "Cupcakes", "Artisan Bread"]
    },
    {
      id: 5,
      name: "Honest Burgers",
      type: "Gourmet Burgers",
      rating: 4.5,
      reviews: 412,
      address: "Multiple London locations",
      phone: "+44 20 7193 8883",
      website: "honestburgers.co.uk",
      image: "photo-1568901346375-23c9450c58cd",
      description: "British burger chain with excellent gluten-free bun options",
      glutenFreeInfo: "GF buns available at all locations",
      staff: [
        { name: "Mark Stevens", role: "Kitchen Manager", experience: "6 years burger specialist" },
        { name: "Lucy Adams", role: "Allergen Coordinator", experience: "Food safety certified" }
      ],
      hours: "Mon-Sun: 11:00-22:00",
      priceRange: "££",
      specialties: ["GF Beef Burgers", "Sweet Potato Fries", "Rosemary Chips"]
    },
    {
      id: 6,
      name: "Bill's",
      type: "British Brasserie",
      rating: 4.4,
      reviews: 356,
      address: "Nationwide chain",
      phone: "+44 20 7400 4200",
      website: "bills-website.co.uk",
      image: "photo-1551632436-cbf8dd35adfa",
      description: "Popular British restaurant chain with comprehensive GF menu",
      glutenFreeInfo: "Extensive gluten-free menu available",
      staff: [
        { name: "Oliver Smith", role: "Regional Chef", experience: "8 years British cuisine" },
        { name: "Rachel Green", role: "Dietary Specialist", experience: "Allergy awareness expert" }
      ],
      hours: "Mon-Sun: 8:00-23:00",
      priceRange: "££",
      specialties: ["Full English Breakfast", "Fish Cakes", "Seasonal Salads"]
    }
  ];

  const moreRestaurants = [
    "Tacos Padre", "Arepazo Bros AREPA", "Manna Dew", "Libby's", "Los Mochis London City",
    "Wicked Fish Vauxhall", "Niche", "Libby's - Notting Hill", "Borough 22", "Indigo Restaurant",
    "Cotto", "Cream Dream Vegan Pastry Cafe", "Hobson's Fish & Chips Soho", "Ma Ma Boutique Bakery",
    "Queens Arms", "Ugly Dumpling", "Utter Waffle", "Pho", "Hobson's Fish & Chips",
    "Wildwood", "The Port House", "CERU Eastern Mediterranean", "Ask Italian", "Wahaca"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/countries" className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🇬🇧</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              United Kingdom
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-100 text-red-800 border-red-200">
              <MapPin className="h-4 w-4 mr-2" />
              30 Gluten-Free Restaurants
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              United Kingdom's
              <br />
              Gluten-Free Scene
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              From traditional fish & chips to innovative fusion cuisine, discover the UK's growing gluten-free dining culture
            </p>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Restaurants</h2>
            <p className="text-xl text-gray-600">Top-rated gluten-free dining experiences across the UK</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredRestaurants.map((restaurant, index) => (
              <Card key={restaurant.id} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
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
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white border-0">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    GF Certified
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                    <span className="text-red-600 font-semibold">{restaurant.priceRange}</span>
                  </div>
                  <p className="text-red-600 font-medium mb-2">{restaurant.type}</p>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-800 font-medium text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 inline" />
                      {restaurant.glutenFreeInfo}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{restaurant.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{restaurant.hours}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span className="text-sm">{restaurant.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-2" />
                      <span className="text-sm">{restaurant.website}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Staff Expertise
                    </h4>
                    <div className="space-y-2">
                      {restaurant.staff.map((member, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">{member.name}</span>
                            <Badge variant="secondary" className="text-xs">{member.role}</Badge>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{member.experience}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Utensils className="h-4 w-4 mr-2" />
                      GF Specialties
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {restaurant.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-red-200 text-red-700">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">{restaurant.reviews} reviews</span>
                    </div>
                    <Button className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Restaurants */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">More Great Options</h2>
            <p className="text-xl text-gray-600">Additional gluten-free restaurants across the UK</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {moreRestaurants.map((restaurant, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium text-gray-900 text-sm leading-tight group-hover:text-red-600 transition-colors">
                    {restaurant}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning a Trip to the UK?</h2>
          <p className="text-xl mb-8 opacity-90">Discover more gluten-free friendly destinations worldwide</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/countries">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Explore More Countries
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Add a Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnitedKingdom;
