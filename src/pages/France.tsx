import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const France = () => {
  const cities = [
    {
      name: "Paris",
      restaurants: [
        {
          name: "🥐 Copains",
          locations: "Multiple locations",
          address: "28 Rue Tiquetonne, 75002 Paris, France",
          hours: "Mon–Sat: 8:00AM – 7:00PM",
          phone: "+33 1 42 123 456",
          website: "www.copainsparis.com",
          directionsUrl: "https://www.google.com/maps",
          specialty: "100% Gluten-Free Bakery",
          overview: "Copains is Paris's beloved 100% gluten-free bakery offering artisanal French pastries, breads, and cakes. All products are made in a dedicated facility ensuring complete safety for celiacs. Known for authentic French baking techniques adapted for gluten-free ingredients.",
          menuHighlights: [
            "🥐 French croissants (GF)",
            "🥖 Baguettes",
            "🍰 Pastries & tarts",
            "🍞 Artisan bread",
            "☕ Coffee & tea"
          ],
          proTip: "Arrive early for the best selection - croissants sell out quickly!",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["French", "Bakery", "Patisserie"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 312,
          certificationLevel: "Certified Gluten-Free Facility",
          userReviews: [
            {
              user: "Marie D.",
              rating: 5,
              comment: "Enfin une vraie boulangerie sans gluten! Les croissants sont parfaits!",
              date: "3 days ago"
            },
            {
              user: "Tom B.",
              rating: 5,
              comment: "Best GF bakery in Paris. You can't tell the difference!",
              date: "1 week ago"
            }
          ]
        }
      ]
    }
  ];

  const getCeliacSafeBadge = (level: string) => {
    switch (level) {
      case "dedicated-facility":
        return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="h-3 w-3 mr-1" />Dedicated Facility</Badge>;
      case "protocols-in-place":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="h-3 w-3 mr-1" />Celiac Protocols</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-300"><CheckCircle className="h-3 w-3 mr-1" />GF Options</Badge>;
    }
  };

  const getMenuTypeBadge = (type: string) => {
    return type === "fully-gluten-free" 
      ? <Badge className="bg-green-100 text-green-800 border-green-300">🥖 100% Gluten-Free</Badge>
      : <Badge className="bg-orange-100 text-orange-800 border-orange-300">🥖 Mixed Menu</Badge>;
  };

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`h-4 w-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇫🇷</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">France</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-gradient-to-r from-blue-600/10 to-red-600/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            <Flag className="h-4 w-4 mr-2" />
            Certified Gluten-Free
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            Discover France's Best Gluten-Free Dining
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Parisian patisseries to Mediterranean bistros, France is embracing gluten-free dining with authentic French flair.
          </p>
        </div>
      </section>

      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2" />
              Important Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Look for "sans gluten" on menus</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Always inform staff: "Je suis coeliaque"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {cities.map((city, cityIndex) => (
              <div key={city.name} className={`animate-fade-in`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                  {city.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.restaurants.map((restaurant, index) => (
                    <Card key={restaurant.name} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md ${restaurant.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                      <CardHeader className="pb-3">
                        <CardTitle className={`${restaurant.featured ? 'text-xl' : 'text-lg'}`}>
                          {restaurant.name}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {restaurant.rating && (
                            <div className="flex items-center space-x-2">
                              {renderStarRating(restaurant.rating)}
                              <span className="text-xs text-gray-500">({restaurant.reviewCount} reviews)</span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {restaurant.cuisineTypes?.map((cuisine, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">🍽️ {cuisine}</Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {restaurant.celiacSafe && getCeliacSafeBadge(restaurant.celiacSafe)}
                          {restaurant.menuType && getMenuTypeBadge(restaurant.menuType)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-4">
                          {restaurant.certificationLevel && (
                            <div className="flex items-center space-x-2 bg-blue-50 p-2 rounded-lg">
                              <Award className="h-4 w-4 text-blue-600" />
                              <span className="text-sm font-medium text-blue-800">{restaurant.certificationLevel}</span>
                            </div>
                          )}
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{restaurant.address}</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{restaurant.hours}</span>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2">
                              <Globe className="h-4 w-4 text-blue-500" />
                              <span className="text-sm text-blue-600">{restaurant.website}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-green-600">{restaurant.phone}</span>
                            </div>
                          </div>
                          <div className="pt-2">
                            <Button onClick={() => window.open(restaurant.directionsUrl, '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                              <Navigation className="h-4 w-4 mr-2" />
                              Get Directions
                            </Button>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Overview
                            </h4>
                            <p className="text-sm text-black">{restaurant.overview}</p>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                              <Camera className="h-4 w-4 mr-2" />
                              Menu Highlights
                            </h4>
                            <div className="space-y-1">
                              {restaurant.menuHighlights?.map((item, idx) => (
                                <div key={idx} className="text-sm text-orange-700">{item}</div>
                              ))}
                            </div>
                          </div>
                          {restaurant.userReviews && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                User Reviews
                              </h4>
                              <div className="space-y-3">
                                {restaurant.userReviews.map((review, idx) => (
                                  <div key={idx} className="border-l-4 border-blue-200 pl-3">
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="font-medium text-sm">{review.user}</span>
                                      <span className="text-xs text-gray-500">{review.date}</span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                      {renderStarRating(review.rating)}
                                    </div>
                                    <p className="text-sm text-gray-700">{review.comment}</p>
                                  </div>
                                ))}
                              </div>
                              <Button variant="outline" size="sm" className="mt-3 w-full">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                View All Reviews
                              </Button>
                            </div>
                          )}
                          {restaurant.proTip && (
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm text-blue-700">
                                <strong>💡 Pro Tip:</strong> {restaurant.proTip}
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default France;