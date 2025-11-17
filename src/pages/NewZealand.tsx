import { ArrowLeft, MapPin, Clock, Globe, Phone, Star, CheckCircle, Camera, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cities = [
  {
    name: "Auckland",
    restaurants: [
      {
        name: "Kiwi Gluten Free Kitchen",
        featured: true,
        rating: 4.9,
        reviewCount: 221,
        cuisineTypes: ["New Zealand", "Pacific Rim"],
        celiacSafe: "100% Dedicated",
        menuType: "100% Gluten-Free",
        address: "123 Queen Street, Auckland CBD, Auckland 1010, New Zealand",
        hours: "Mon-Sun: 8:00 AM - 9:00 PM",
        website: "www.kiwigfkitchen.co.nz",
        phone: "+64 9 123 4567",
        directions: "https://maps.google.com/?q=Kiwi+Gluten+Free+Kitchen+Auckland",
        overview: "New Zealand's premier 100% gluten-free restaurant celebrating local ingredients and Pacific flavors. Every dish showcases the best of Kiwi cuisine in a completely celiac-safe environment.",
        menuHighlights: ["Lamb Roast", "Green-Lipped Mussels", "Pavlova", "Fish & Chips", "Hangi-style Meat"],
        reviews: [
          { author: "Sophie T.", text: "The pavlova is absolutely divine! Best gluten-free dessert I've ever had.", rating: 5 },
          { author: "Michael B.", text: "Fresh, local ingredients and perfect execution. The lamb is outstanding!", rating: 5 }
        ],
        proTip: "Don't miss their gluten-free fish & chips - made with locally caught fish and served with housemade tartare sauce!"
      }
    ]
  }
];

const getCeliacSafeBadge = (level: string) => {
  if (level === "100% Dedicated") {
    return <Badge className="bg-green-100 text-green-800 border-green-300">100% Dedicated GF</Badge>;
  }
  return <Badge variant="secondary">{level}</Badge>;
};

const getMenuTypeBadge = (type: string) => {
  if (type === "100% Gluten-Free") {
    return <Badge className="bg-blue-100 text-blue-800 border-blue-300">100% GF Menu</Badge>;
  }
  return <Badge variant="outline">{type}</Badge>;
};

const renderStarRating = (rating: number) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

const NewZealand = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇳🇿</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">New Zealand</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-green-100 text-green-800">Celiac-Friendly</Badge>
              <Badge className="bg-blue-100 text-blue-800">Verified Safe</Badge>
              <Badge className="bg-purple-100 text-purple-800">Local Favorites</Badge>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Explore New Zealand's finest gluten-free dining destinations. From fresh seafood to traditional Kiwi classics,
              these certified celiac-safe restaurants showcase the best of Pacific cuisine with complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {cities.map((city) => (
            <div key={city.name} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">{city.name}</h2>
              <div className="grid gap-8">
                {city.restaurants.map((restaurant) => (
                  <Card key={restaurant.name} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              {renderStarRating(restaurant.rating)}
                              <span className="font-semibold ml-1">{restaurant.rating}</span>
                              <span className="text-gray-500">({restaurant.reviewCount} reviews)</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {restaurant.cuisineTypes.map((type) => (
                            <Badge key={type} variant="secondary">{type}</Badge>
                          ))}
                          {getCeliacSafeBadge(restaurant.celiacSafe)}
                          {getMenuTypeBadge(restaurant.menuType)}
                        </div>

                        {restaurant.featured && (
                          <>
                            <Button className="w-full sm:w-auto" asChild>
                              <a href={restaurant.directions} target="_blank" rel="noopener noreferrer">
                                <MapPin className="h-4 w-4 mr-2" />
                                Get Directions
                              </a>
                            </Button>

                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span>{restaurant.address}</span>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span>{restaurant.hours}</span>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Globe className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                  {restaurant.website}
                                </a>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <a href={`tel:${restaurant.phone}`} className="text-blue-600 hover:underline">
                                  {restaurant.phone}
                                </a>
                              </div>
                            </div>

                            <div className="bg-green-50 rounded-lg p-4 space-y-2">
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <h4 className="font-semibold text-gray-900">Overview</h4>
                              </div>
                              <p className="text-gray-700 text-sm leading-relaxed">{restaurant.overview}</p>
                            </div>

                            <div className="bg-orange-50 rounded-lg p-4 space-y-2">
                              <div className="flex items-center space-x-2">
                                <Camera className="h-5 w-5 text-orange-600" />
                                <h4 className="font-semibold text-gray-900">Menu Highlights</h4>
                              </div>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {restaurant.menuHighlights.map((item) => (
                                  <li key={item} className="text-sm text-gray-700 flex items-center">
                                    <span className="mr-2">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                              <div className="flex items-center space-x-2">
                                <MessageCircle className="h-5 w-5 text-gray-600" />
                                <h4 className="font-semibold text-gray-900">User Reviews</h4>
                              </div>
                              <div className="space-y-3">
                                {restaurant.reviews.map((review, idx) => (
                                  <div key={idx} className="bg-white rounded p-3 space-y-1">
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-sm">{review.author}</span>
                                      {renderStarRating(review.rating)}
                                    </div>
                                    <p className="text-sm text-gray-600">{review.text}</p>
                                  </div>
                                ))}
                              </div>
                              <Button variant="outline" size="sm" className="w-full">View All Reviews</Button>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                              <p className="text-sm text-gray-700">
                                <span className="font-semibold">Pro Tip:</span> {restaurant.proTip}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewZealand;