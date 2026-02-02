import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useCountrySEO } from "@/hooks/useCountrySEO";

const Canada = () => {
  useCountrySEO({
    countryName: "Canada",
    countrySlug: "canada",
    description: "Find the best gluten-free restaurants in Canada. Dedicated bakeries, cafes & restaurants in Toronto, Vancouver, Montreal, Calgary & more.",
    ogDescription: "Discover gluten-free dining across Canada. Browse certified restaurants and dedicated GF bakeries from coast to coast.",
    cities: [
      { name: "Toronto" },
      { name: "Vancouver" },
      { name: "Montreal" },
      { name: "Calgary" }
    ],
    faqs: [
      { question: "Is Canada good for gluten-free dining?", answer: "Yes! Canada has excellent celiac awareness with many dedicated GF bakeries and restaurants, especially in major cities." },
      { question: "What GF bakeries are in Toronto?", answer: "Bunner's Bakeshop is Toronto's premier 100% gluten-free bakery offering amazing pastries, cakes, and fresh bread." },
      { question: "Are there GF options in Canadian chains?", answer: "Many Canadian restaurant chains offer gluten-free menus with clear allergen information." }
    ],
    schemaId: "canada"
  });
  const cities = [
    {
      name: "Toronto",
      restaurants: [
        {
          name: "🥐 Bunner's Bakeshop",
          locations: "Multiple locations",
          address: "3054 Dundas St W, Toronto, ON M6P 1Z7, Canada",
          hours: "Mon–Sun: 9:00AM – 7:00PM",
          phone: "+1 416-533-2417",
          website: "www.bunners.ca",
          directionsUrl: "https://www.google.com/maps",
          specialty: "100% Gluten-Free Bakery",
          overview: "Bunner's is Toronto's premier 100% gluten-free bakery offering amazing pastries, cakes, cookies, and fresh bread daily. All products are made in a dedicated facility, making it completely safe for celiacs.",
          menuHighlights: [
            "🥐 Fresh baked goods daily",
            "🎂 Custom celebration cakes",
            "🍪 Cookies & brownies",
            "🥖 Artisan bread",
            "🧁 Cupcakes & donuts"
          ],
          proTip: "Order custom cakes 48 hours in advance!",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["Bakery", "Cafe"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 456,
          certificationLevel: "Certified Gluten-Free",
          userReviews: [
            {
              user: "Sarah L.",
              rating: 5,
              comment: "Best GF bakery in Toronto!",
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
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇨🇦</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Canada</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-gradient-to-r from-red-600/10 to-red-600/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 border-red-200">
            <Flag className="h-4 w-4 mr-2" />
            Certified Gluten-Free
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Discover Canada's Best Gluten-Free Dining
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Toronto's diverse food scene to Vancouver's health-conscious cafes, Canada offers excellent gluten-free dining.
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
                <p>Many restaurants offer bilingual service</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Always inform staff of celiac disease</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {cities.map((city, cityIndex) => (
              <div key={city.name} className={`animate-fade-in`} style={{animationDelay: `${cityIndex * 0.1}s`}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-red-600" />
                  {city.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.restaurants.map((restaurant, index) => (
                    <Card key={restaurant.name} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-fade-in ${restaurant.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                      <CardHeader className="pb-3">
                        <CardTitle className={`${restaurant.featured ? 'text-xl' : 'text-lg'} flex items-start justify-between`}>
                          <span>{restaurant.name}</span>
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
                        {restaurant.featured ? (
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
                            {restaurant.directionsUrl && (
                              <div className="pt-2">
                                <Button 
                                  onClick={() => window.open(restaurant.directionsUrl, '_blank')}
                                  className="bg-blue-600 hover:bg-blue-700 text-white"
                                  size="sm"
                                >
                                  <Navigation className="h-4 w-4 mr-2" />
                                  Get Directions
                                </Button>
                              </div>
                            )}
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
                        ) : (
                          <>
                            <div className="flex items-start space-x-2">
                              <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{restaurant.locations}</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Utensils className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{restaurant.specialty}</span>
                            </div>
                            {restaurant.proTip && (
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-sm text-blue-700">
                                  <strong>💡 Pro Tip:</strong> {restaurant.proTip}
                                </p>
                              </div>
                            )}
                          </>
                        )}
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

export default Canada;