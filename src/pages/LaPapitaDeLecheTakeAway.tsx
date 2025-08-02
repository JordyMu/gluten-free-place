import { ArrowLeft, MapPin, Clock, Globe, Phone, Star, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "María L.",
    rating: 5,
    date: "1 week ago",
    comment: "Great fast food option with gluten-free choices! Staff is knowledgeable about allergies."
  },
  {
    id: 2,
    name: "Carlos P.",
    rating: 4,
    date: "2 weeks ago",
    comment: "Good gluten-free burger options. Quick service and affordable prices."
  },
  {
    id: 3,
    name: "Elena R.",
    rating: 4,
    date: "1 month ago",
    comment: "Nice to have a fast food place that understands celiac needs. Clean preparation."
  }
];

const menuHighlights = [
  { icon: "🍔", name: "Gluten-Free Burgers" },
  { icon: "🍟", name: "Safe French Fries" },
  { icon: "🌯", name: "GF Wraps" },
  { icon: "🥗", name: "Fresh Salads" },
  { icon: "🍗", name: "Grilled Chicken (GF)" }
];

const LaPapitaDeLecheTakeAway = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
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
              <div className="aspect-video bg-gradient-to-r from-red-400 to-orange-500 flex items-center justify-center">
                <div className="text-6xl">🍔</div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">🍔 La Papita de Leche Take Away</CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                        <span className="ml-2 font-semibold">4.4</span>
                        <span className="text-gray-500 ml-1">(156 reviews)</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">🍔 Fast Food</Badge>
                      <Badge variant="outline">🇪🇸 Spanish</Badge>
                      <Badge variant="outline">🥗 Healthy Options</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                        ⚠️ Standard Protocols
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        ✅ Selected GF Items
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span>Calle de Alcalá 92, Madrid, Spain</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span>Mon-Sun: 11:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <a href="https://www.lapapitadeleche.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      www.lapapitadeleche.es
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <span>+34 915 012 345</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Calle+de+Alcalá+92,+Madrid,+Spain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white">
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
                  La Papita de Leche Take Away is a quick service restaurant in Madrid with staff knowledgeable about gluten-free options and preparation. While not a dedicated gluten-free facility, they maintain standard protocols to minimize cross-contamination. The restaurant offers selected gluten-free items including burgers, wraps, and salads, making it a convenient option for celiacs looking for fast, affordable meals in the city center.
                </p>
              </CardContent>
            </Card>

            {/* Menu Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🍔 Menu Highlights
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
                    <p className="text-amber-700">Always inform the staff about your celiac condition when ordering to ensure proper handling of your meal.</p>
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

export default LaPapitaDeLecheTakeAway;