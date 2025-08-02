import { ArrowLeft, Star, MapPin, Clock, Phone, Globe, Award, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const MessieSinGlutenMuntaner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/spain" className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Spain</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🇪🇸</span>
            <span className="text-xl font-bold text-gray-900">Spain</span>
          </div>
        </div>
      </header>

      {/* Restaurant Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Restaurant Header */}
          <Card className="mb-8 overflow-hidden border-0 shadow-xl">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=1200&q=80"
                alt="Messie Sin Gluten Muntaner"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl font-bold mb-2">🍝 Messie Sin Gluten Muntaner</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span className="ml-2 font-semibold">4.8</span>
                    <span className="ml-1 text-sm opacity-90">(267 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">🇮🇹 Italian</Badge>
                  <Badge variant="secondary">🍝 Mediterranean</Badge>
                  <Badge variant="secondary">🌱 Vegetarian</Badge>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <Check className="h-3 w-3 mr-1" />
                    Dedicated Facility
                  </Badge>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    ✨ 100% Gluten-Free
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-purple-600 font-medium">AIC Certified - Dedicated Kitchen</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-red-500" />
                    <span>Carrer de Muntaner 9, Barcelona, Spain</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Mon-Sun: 12:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-purple-500" />
                    <span>www.messiesingluten.com</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-green-500" />
                    <span>+34 933 456 789</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Overview Section */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Check className="h-5 w-5 text-green-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Messie Sin Gluten Muntaner in Barcelona is a certified gluten-free Italian restaurant offering a full Italian menu that's safe for celiacs. Known for its 
                gluten-free pasta, pizza, tiramisu, and even gluten-free beer, it has become a top choice for locals and travelers with 
                celiac disease. The restaurant provides separate preparation areas to avoid cross-contamination and proudly displays 
                its celiac-safe certification. Expert staff ensures every dish meets the highest gluten-free standards while maintaining authentic Italian flavors.
              </p>
            </CardContent>
          </Card>

          {/* Menu Highlights */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-xl mr-2">🍽️</span>
                <h2 className="text-xl font-bold text-gray-900">Menu Highlights</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-lg mr-2">🍝</span>
                  <span className="font-medium">Gluten-Free Pasta Carbonara</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🍕</span>
                  <span className="font-medium">Neapolitan Pizza (GF available)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🍰</span>
                  <span className="font-medium">Tiramisu (Gluten-Free Version)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🍺</span>
                  <span className="font-medium">Gluten-Free Italian Beer</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🥗</span>
                  <span className="font-medium">Vegetarian, Vegan, and Dairy-Free Options available</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Reviews */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">User Reviews</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Maria L.</span>
                    <span className="text-sm text-gray-500">2 weeks ago</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-2 font-semibold">5</span>
                  </div>
                  <p className="text-gray-700">Amazing authentic Italian food! As a celiac, I felt completely safe here. The gluten-free pasta was incredible.</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Carlos R.</span>
                    <span className="text-sm text-gray-500">1 month ago</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-2 font-semibold">5</span>
                  </div>
                  <p className="text-gray-700">Best gluten-free pizza in Barcelona! Staff is very knowledgeable about celiac disease.</p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Andrea K.</span>
                    <span className="text-sm text-gray-500">3 weeks ago</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-gray-300" />
                    <span className="ml-2 font-semibold">4</span>
                  </div>
                  <p className="text-gray-700">Great atmosphere and delicious food. The tiramisu was perfect! Highly recommended for celiacs.</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  View All Reviews
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pro Tip */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardContent className="p-6">
              <div className="flex items-center">
                <span className="text-2xl mr-3">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-800 mb-1">Pro Tip:</h3>
                  <p className="text-yellow-700">Their gluten-free tiramisu is celiac-safe and absolutely delicious!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MessieSinGlutenMuntaner;