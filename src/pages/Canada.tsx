
import { Search, MapPin, Star, Users, ArrowLeft, Clock, Check, ChefHat, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Canada = () => {
  const featuredRestaurants = [
    {
      id: 1,
      name: "Almond Butterfly Bistro",
      image: "photo-1555396273-367ea4eb4db5",
      rating: 4.8,
      reviewCount: 234,
      cuisine: "Canadian Bistro",
      address: "Downtown Toronto",
      description: "Elegant bistro specializing in gluten-free Canadian cuisine with a modern twist.",
      staff: {
        knowledge: "Expert",
        training: "Certified in gluten-free protocols",
        languages: ["English", "French"]
      },
      glutenFreeInfo: {
        dedicatedMenu: true,
        crossContamination: "Separate prep area",
        certification: "Celiac-safe certified"
      }
    },
    {
      id: 2,
      name: "Bunner's Bakeshop",
      image: "photo-1578985545062-69928b1d9587",
      rating: 4.9,
      reviewCount: 456,
      cuisine: "Gluten-Free Bakery",
      address: "Kensington Market, Toronto",
      description: "100% gluten-free bakery offering amazing pastries, cakes, and fresh bread daily.",
      staff: {
        knowledge: "Expert",
        training: "Specialized in gluten-free baking",
        languages: ["English"]
      },
      glutenFreeInfo: {
        dedicatedMenu: true,
        crossContamination: "100% gluten-free facility",
        certification: "Certified gluten-free"
      }
    },
    {
      id: 3,
      name: "Impact Kitchen",
      image: "photo-1414235077428-338989a2e8c0",
      rating: 4.7,
      reviewCount: 189,
      cuisine: "Health Food",
      address: "Vancouver",
      description: "Plant-based restaurant with extensive gluten-free options and superfood bowls.",
      staff: {
        knowledge: "Very good",
        training: "Dietary restriction awareness",
        languages: ["English"]
      },
      glutenFreeInfo: {
        dedicatedMenu: true,
        crossContamination: "Careful protocols",
        certification: "Health-focused kitchen"
      }
    },
    {
      id: 4,
      name: "Terroni",
      image: "photo-1565299624946-b28f40a0ca4b",
      rating: 4.6,
      reviewCount: 312,
      cuisine: "Italian",
      address: "Multiple locations",
      description: "Authentic Italian restaurant chain with excellent gluten-free pasta and pizza options.",
      staff: {
        knowledge: "Good",
        training: "Italian cuisine specialists",
        languages: ["English", "Italian"]
      },
      glutenFreeInfo: {
        dedicatedMenu: true,
        crossContamination: "Separate preparation",
        certification: "GF pasta available"
      }
    },
    {
      id: 5,
      name: "Pho Concept 100% GF",
      image: "photo-1569718212165-3a8278d5f624",
      rating: 4.8,
      reviewCount: 167,
      cuisine: "Vietnamese",
      address: "Montreal",
      description: "Completely gluten-free Vietnamese restaurant specializing in pho and Asian cuisine.",
      staff: {
        knowledge: "Expert",
        training: "100% gluten-free certified",
        languages: ["English", "French", "Vietnamese"]
      },
      glutenFreeInfo: {
        dedicatedMenu: true,
        crossContamination: "100% gluten-free facility",
        certification: "Fully certified GF"
      }
    },
    {
      id: 6,
      name: "Wild Blue Bakery",
      image: "photo-1571115764595-644a1f56a55c",
      rating: 4.7,
      reviewCount: 203,
      cuisine: "Gluten-Free Bakery",
      address: "Calgary",
      description: "Artisan gluten-free bakery creating beautiful cakes, pastries, and daily bread.",
      staff: {
        knowledge: "Expert",
        training: "Master bakers in GF techniques",
        languages: ["English"]
      },
      glutenFreeInfo: {
        dedicatedMenu: true,
        crossContamination: "Dedicated GF facility",
        certification: "Certified safe"
      }
    }
  ];

  const moreRestaurants = [
    "Cantine Panella", "El Pocho Antojitos Bar", "Arepera", "Sprouty", "Le Marquis Signature santé",
    "Crêperie Du Marché", "Tartistry", "Krapow", "Satu Lagi", "Almond Butterfly Gluten Free Bake Shop & Espresso",
    "Tapi Go!", "La Bolo à Lolo", "Vegâteau", "Gluten free by l'Artisan", "Parc Sans Gluten",
    "Sunshine Wholesome Market", "lu & i", "Colombian Street Food", "Ristorante Quattro", "Kupfert & Kim",
    "Boulangerie Le Marquis", "Cock-A-Doodle-Doo Gluten-Free Bakeshop", "Modavie", "Riz Gluten-Free Asian Kitchen",
    "L'artisan délices sans gluten et sans lait", "Gud Daae Gluten Free Sandwiches and Hotcakes", "The Keg Steakhouse & Bar",
    "Aria Sushi", "Siam Centre-Ville", "Anglr", "Jardin Nelson", "Hugs and Sarcasm", "Kyo Bar Japonais",
    "Score on King", "Cookie Stéfanie", "OEB Breakfast Co.", "Arriba Burrito", "Pho Lady", "Pub Quartier Latin",
    "Planta Queen", "Spanel", "Dave's Genuine Deli", "Bazar Café", "Vela", "Ottavio Vsl", "The Bread Essentials",
    "La Cantina", "Scaddabush Italian Kitchen & Bar", "COMMODORE restaurant", "Tumi Dumpling House", "Bloom Sushi",
    "Jack Astor's", "Sushi Momo", "Holder"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/countries" className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🇨🇦</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Canada
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-100 text-red-800 border-red-200">
              <MapPin className="h-4 w-4 mr-2" />
              55+ Verified Locations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Gluten-Free Canada
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              From coast to coast, discover Canada's amazing gluten-free dining scene with verified restaurants and local expertise
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative flex bg-white rounded-full shadow-xl border border-red-100 p-2">
                <div className="flex-1 flex items-center px-4">
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <Input 
                    placeholder="Search restaurants in Canada..." 
                    className="border-0 focus-visible:ring-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-red-100">
                <div className="text-2xl font-bold text-red-600">55+</div>
                <div className="text-sm text-gray-600">GF Restaurants</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-red-100">
                <div className="text-2xl font-bold text-red-600">4.7★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-red-100">
                <div className="text-2xl font-bold text-red-600">15+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Restaurants</h2>
            <p className="text-xl text-gray-600">Top-rated gluten-free dining experiences across Canada</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRestaurants.map((restaurant, index) => (
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
                    🇨🇦
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {restaurant.cuisine}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{restaurant.address}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{restaurant.description}</p>
                  
                  {/* Staff Info */}
                  <div className="mb-4 p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <ChefHat className="h-4 w-4 text-red-600 mr-2" />
                      <span className="font-semibold text-sm text-red-800">Staff Knowledge</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>GF Knowledge:</span>
                        <Badge variant="secondary" className="text-xs bg-red-100 text-red-700">
                          {restaurant.staff.knowledge}
                        </Badge>
                      </div>
                      <div className="text-gray-600">{restaurant.staff.training}</div>
                      <div className="text-gray-600">Languages: {restaurant.staff.languages.join(", ")}</div>
                    </div>
                  </div>

                  {/* Gluten-Free Info */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-semibold text-sm text-green-800">Gluten-Free Details</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center">
                        <Check className="h-3 w-3 text-green-500 mr-1" />
                        <span>Dedicated GF menu</span>
                      </div>
                      <div className="text-gray-600">{restaurant.glutenFreeInfo.crossContamination}</div>
                      <div className="text-gray-600">{restaurant.glutenFreeInfo.certification}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-red-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{restaurant.reviewCount} reviews</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">Open today</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1 border-red-200 text-red-600 hover:bg-red-50 text-sm">
                      <Globe className="h-4 w-4 mr-2" />
                      Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Restaurants */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">More Great Options</h2>
            <p className="text-xl text-gray-600">Additional verified gluten-free restaurants across Canada</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {moreRestaurants.map((restaurant, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-red-100">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm text-gray-900 flex-1 mr-2">{restaurant}</h3>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 ml-1">4.5+</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <Check className="h-3 w-3 text-green-500 mr-1" />
                    <span>GF verified</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning Your Canadian Food Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Get personalized recommendations and insider tips from local gluten-free experts</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Get Local Guide
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

export default Canada;
