import { ArrowLeft, MapPin, Clock, Globe, Phone, Star, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Carmen S.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Amazing gluten-free bakery! As a celiac, I felt completely safe here. The bread is incredible."
  },
  {
    id: 2,
    name: "David R.",
    rating: 5,
    date: "1 month ago",
    comment: "Best gluten-free croissants in Seville! Staff is very knowledgeable about celiac disease."
  },
  {
    id: 3,
    name: "Ana M.",
    rating: 4,
    date: "3 weeks ago",
    comment: "Great variety of gluten-free products. The cakes are delicious!"
  }
];

const menuHighlights = [
  { icon: "🥐", name: "Gluten-Free Croissants" },
  { icon: "🍞", name: "Artisan Bread (GF)" },
  { icon: "🧁", name: "Cupcakes & Muffins" },
  { icon: "🎂", name: "Custom Cakes (GF)" },
  { icon: "🥧", name: "Tarts & Pastries" }
];

const Coliaki = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/spain" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ArrowLeft className="h-5 w-5" />
            Back to Spain
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">🇪🇸</span>
          <h1 className="text-2xl font-bold text-gray-800">Spain</h1>
          <span className="text-gray-500">Top Gluten-Free Restaurants</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Restaurant Card */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                <div className="text-6xl">🧁</div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">🧁 Cøliaki</CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 font-semibold">4.8</span>
                        <span className="text-gray-500 ml-1">(248 reviews)</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">🍰 Bakery</Badge>
                      <Badge variant="outline">🥖 Mediterranean</Badge>
                      <Badge variant="outline">🌱 Vegetarian</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        ✅ Dedicated Facility
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                        🛡️ 100% Gluten-Free
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* AIC Certified */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-blue-600">AIC Certified - Dedicated Kitchen</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span>Calle de la Constitución 15, Seville, Spain</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span>Mon-Sun: 8:30 AM – 7:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <a href="https://www.coliaki.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      www.coliaki.es
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <span>+34 954 901 234</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Calle+de+la+Constitución+15,+Seville,+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ✅ Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Cøliaki in Seville is a specialized celiac bakery offering a 100% gluten-free environment with highly trained staff and comprehensive knowledge of celiac requirements. Known for its artisan gluten-free bread, croissants, and custom cakes, it has become a top choice for locals and travelers with dietary restrictions. The bakery provides separate preparation areas to avoid cross-contamination and proudly displays its celiac-safe certification.
                </p>
              </CardContent>
            </Card>

            {/* Menu Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🍰 Menu Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {menuHighlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  💬 User Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{review.name}</span>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-1 text-sm font-medium">{review.rating}</span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  💬 View All Reviews
                </Button>
              </CardContent>
            </Card>

            {/* Pro Tip */}
            <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Pro Tip:</h3>
                    <p className="text-amber-700">Their gluten-free croissants are baked fresh every morning - arrive early for the best selection!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coliaki;