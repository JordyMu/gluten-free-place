import { ArrowLeft, MapPin, Star, Clock, Phone, Globe, Heart, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const RestauranteEnVille = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophie D.",
      rating: 5,
      date: "1 week ago",
      comment: "Exquisite French cuisine with excellent gluten-free options! Staff is very knowledgeable about celiac needs."
    },
    {
      id: 2,
      name: "Laurent M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Outstanding restaurant! The gluten-free menu adaptations are perfectly executed. Highly recommended."
    },
    {
      id: 3,
      name: "Isabella C.",
      rating: 4,
      date: "3 weeks ago",
      comment: "Beautiful ambiance and delicious gluten-free French dishes. A bit pricey but worth it for special occasions."
    }
  ];

  const menuHighlights = [
    { icon: "🥩", name: "Gluten-Free Coq au Vin" },
    { icon: "🐟", name: "Bouillabaisse (GF adapted)" },
    { icon: "🧀", name: "Cheese Selection (GF crackers)" },
    { icon: "🍮", name: "Crème Brûlée (GF)" },
    { icon: "🥗", name: "Salade Niçoise" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/spain" className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Countries</span>
          </Link>
        </div>
      </header>

      {/* Country Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <img src="https://images.unsplash.com/photo-1555507036-ab794f575c75?auto=format&fit=crop&w=100&h=100&q=80" alt="Spain flag" className="w-12 h-8 rounded object-cover" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Spain</h1>
              <p className="text-gray-600">Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </section>

      {/* City */}
      <section className="pb-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold">Barcelona (Barcelona)</h3>
          </div>
        </div>
      </section>

      {/* Main Restaurant Details */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg">🇫🇷</span>
                    <h4 className="text-xl font-bold text-gray-900">Restaurante En Ville</h4>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-1 font-semibold">4.7</span>
                      <span className="text-sm text-gray-500 ml-1">(189 reviews)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-gray-100 text-gray-700 border-gray-300">French</Badge>
                    <Badge className="bg-gray-100 text-gray-700 border-gray-300">Fine Dining</Badge>
                    <Badge className="bg-gray-100 text-gray-700 border-gray-300">Elegant</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                      <Shield className="h-3 w-3 mr-1" />
                      Careful Preparation
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Adapted Menu
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>Carrer de València 227, Barcelona, Spain</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Mon-Sat: 7:00 PM – 11:30 PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-600">www.enville-barcelona.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">+34 934 123 456</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2 ml-4">
                  <Button 
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Carrer+de+València+227,+Barcelona,+Spain', '_blank')}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Overview and Menu */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2 text-green-700 mb-4">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Overview</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Restaurante En Ville is an elegant French restaurant in Barcelona with well-trained staff offering sophisticated gluten-free cuisine. The restaurant provides an adapted menu with careful preparation to accommodate celiac guests. Known for its refined atmosphere and authentic French dishes, the kitchen takes special care to modify traditional recipes while maintaining their original flavors. Staff is knowledgeable about gluten-free preparation and cross-contamination prevention.
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center space-x-2 text-orange-600 mb-4">
                <span className="text-lg">🍽️</span>
                <span className="font-semibold">Menu Highlights</span>
              </div>
              <div className="space-y-2">
                {menuHighlights.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 text-gray-700 mb-6">
              <span className="text-lg">💬</span>
              <span className="font-semibold">User Reviews</span>
            </div>
            
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-semibold text-sm">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-sm font-medium ml-1">{review.rating}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 ml-13">{review.comment}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <Star className="h-4 w-4 mr-2" />
                View All Reviews
              </Button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 text-blue-700">
                <span className="text-lg">💡</span>
                <span className="font-semibold">Pro Tip:</span>
                <span>Make a reservation and mention your celiac requirements in advance for the best gluten-free dining experience.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestauranteEnVille;