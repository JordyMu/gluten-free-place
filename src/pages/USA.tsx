import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const USA = () => {
  const cities = [
    {
      name: "New York City",
      restaurants: [
        {
          name: "🍝 Risotteria Melotti – 100% Gluten-Free Italian",
          locations: "Greenwich Village, Manhattan",
          address: "270 Bleecker St, New York, NY 10014",
          hours: "Mon–Sun: 11:30AM – 10:00PM",
          phone: "+1 212-924-6664",
          website: "www.risotteria.com",
          directionsUrl: "https://maps.google.com/?q=Risotteria+Melotti",
          specialty: "Risotto, GF Pizza, Homemade Pasta",
          overview: "NYC's first 100% gluten-free restaurant, Risotteria has been a pioneer since 2005. Located in Greenwich Village, this certified facility offers authentic Italian cuisine without compromise.",
          menuHighlights: [
            "🍝 Truffle Mushroom Risotto",
            "🍕 GF Pizza Margherita",
            "🍰 Homemade Tiramisu",
            "🥖 Fresh Pasta Dishes"
          ],
          proTip: "Their pizza crust is legendary among NYC celiacs",
          icon: "🍽️",
          featured: true,
          cuisineTypes: ["Italian", "Gluten-Free", "Vegetarian"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 892,
          certificationLevel: "100% Gluten-Free Facility - Certified Safe",
          userReviews: [
            {
              user: "Jessica M.",
              rating: 5,
              comment: "As someone with celiac disease, finding Risotteria was life-changing! Everything is safe to eat, and the food is absolutely delicious.",
              date: "2 weeks ago"
            },
            {
              user: "David K.",
              rating: 5,
              comment: "The pizza here is incredible - you'd never know it's gluten-free. Staff is knowledgeable about celiac and cross-contamination.",
              date: "1 month ago"
            }
          ]
        },
        {
          name: "🍕 Senza Gluten – Italian Comfort Food",
          locations: "SoHo, Manhattan",
          address: "206 Sullivan St, New York, NY 10012",
          phone: "+1 212-334-5365",
          hours: "12:00 PM - 10:30 PM",
          website: "www.senzagluten.com",
          directionsUrl: "https://maps.google.com/?q=Senza+Gluten+NYC",
          specialty: "Pizza, Pasta, Italian Wines",
          overview: "A cozy SoHo gem offering elevated Italian comfort food in a completely gluten-free environment. Their wood-fired pizzas and handmade pasta have won over both celiacs and gluten-eaters alike.",
          menuHighlights: [
            "Margherita Pizza - Classic Neapolitan style with fresh mozzarella",
            "Carbonara - Creamy pasta with guanciale and pecorino",
            "Burrata Salad - Fresh burrata with heirloom tomatoes",
            "Chocolate Lava Cake - Decadent gluten-free dessert"
          ],
          proTip: "Try the carbonara - it's perfectly safe for celiacs",
          icon: "🍕",
          featured: true,
          cuisineTypes: ["Italian", "Pizza", "Pasta"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 645,
          certificationLevel: "NYC Health Dept Certified GF - Dedicated Facility",
          userReviews: [
            {
              user: "Amanda R.",
              rating: 5,
              comment: "Best gluten-free pizza in NYC, hands down! The crust is crispy and flavorful.",
              date: "3 weeks ago"
            },
            {
              user: "Michael T.",
              rating: 5,
              comment: "Fantastic pasta dishes and excellent wine selection. The staff really knows their stuff when it comes to celiac safety.",
              date: "2 months ago"
            }
          ]
        },
        {
          name: "🥐 Noglu – French Bakery & Bistro",
          locations: "Flatiron District",
          address: "32 E 20th St, New York, NY 10003",
          phone: "+1 646-678-5834",
          hours: "8:00 AM - 8:00 PM",
          website: "www.noglu.com",
          directionsUrl: "https://maps.google.com/?q=Noglu+NYC",
          specialty: "French pastries, brunch, sandwiches",
          overview: "From Paris to New York, Noglu brings French gluten-free excellence to Manhattan. Their bakery counter is filled with croissants, baguettes, and pastries that rival traditional versions.",
          menuHighlights: [
            "Almond Croissants - Flaky and buttery",
            "Croque Monsieur - Classic French sandwich",
            "Quiche Lorraine - Traditional recipe, GF execution",
            "French Macarons - Colorful selection"
          ],
          proTip: "Get there early for the best pastry selection",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["French", "Bakery", "Brunch"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.6,
          reviewCount: 534,
          certificationLevel: "Certified Gluten-Free - NYC Permitted Kitchen",
          userReviews: [
            {
              user: "Sophie L.",
              rating: 5,
              comment: "The croissants here are amazing! I'm from France and these are as good as any I've had back home.",
              date: "1 week ago"
            }
          ]
        }
      ]
    },
    {
      name: "Los Angeles",
      restaurants: [
        {
          name: "🧁 Erin McKenna's Bakery – Vegan & GF",
          locations: "Beverly Hills",
          address: "236 S Beverly Dr, Beverly Hills, CA 90212",
          phone: "+1 310-385-1103",
          hours: "10:00 AM - 8:00 PM",
          website: "www.erinmckennasbakery.com",
          directionsUrl: "https://maps.google.com/?q=Erin+McKenna+Bakery+LA",
          specialty: "Cupcakes, cookies, cakes, donuts",
          overview: "Founded by Erin McKenna, this beloved bakery offers 100% gluten-free and vegan treats that taste just as good as traditional versions. A celiac safe haven in LA.",
          menuHighlights: [
            "Vanilla Cupcakes - Moist and fluffy with buttercream",
            "Chocolate Chip Cookies - Chewy and loaded with chocolate",
            "Birthday Cakes - Custom orders available",
            "Cinnamon Sugar Donuts - Fresh daily"
          ],
          proTip: "Try the red velvet cupcake - it's a customer favorite",
          icon: "🧁",
          featured: true,
          cuisineTypes: ["Bakery", "Desserts", "Vegan"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 723,
          certificationLevel: "100% GF & Vegan Facility - Celiac-Safe Certified",
          userReviews: [
            {
              user: "Lauren H.",
              rating: 5,
              comment: "These cupcakes are incredible! I've been gluten-free for years and these are the best I've ever had.",
              date: "5 days ago"
            }
          ]
        }
      ]
    }
  ];

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : i < rating
                ? "fill-yellow-200 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header with Back Button */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back</span>
            </Link>
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold text-gray-900">USA</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600/10 to-red-600/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            <Flag className="h-4 w-4 mr-2" />
            Certified Gluten-Free Restaurants
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            Discover America's Best Gluten-Free Dining
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From coast to coast, discover America's thriving gluten-free scene with dedicated facilities, innovative chefs, and celiac-safe dining experiences.
          </p>
        </div>
      </section>

      {/* Key Notes */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2" />
              Important Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
              <div className="flex items-start space-x-2">
                <Badge className="bg-yellow-200 text-yellow-800">FDA</Badge>
                <span>FDA labeling requirements protect consumers nationwide</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-yellow-600" />
                <span>Download Find Me Gluten Free app for more locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities and Restaurants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {cities.map((city, cityIndex) => (
              <div key={city.name} className={`animate-fade-in`} style={{animationDelay: `${cityIndex * 0.1}s`}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                  {city.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.restaurants.map((restaurant, index) => (
                    <Card key={restaurant.name} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-fade-in ${restaurant.featured ? 'md:col-span-2 lg:col-span-3' : ''}`} style={{animationDelay: `${(cityIndex * 0.1) + (index * 0.05)}s`}}>
                      <CardHeader className="pb-3">
                        <CardTitle className={`${restaurant.featured ? 'text-xl' : 'text-lg'} flex items-start justify-between`}>
                          <span>{restaurant.name}</span>
                          {!restaurant.featured && <span className="text-2xl ml-2">{restaurant.icon}</span>}
                        </CardTitle>
                        
                        {/* Rating and Badges */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {restaurant.rating && (
                            <div className="flex items-center space-x-2">
                              {renderStarRating(restaurant.rating)}
                              <span className="text-xs text-gray-500">({restaurant.reviewCount} reviews)</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-2">
                          {/* Cuisine Type Badges */}
                          {restaurant.cuisineTypes?.map((type, idx) => (
                            <Badge key={idx} variant="outline" className="border-orange-200 bg-orange-50 text-orange-700">
                              {type}
                            </Badge>
                          ))}
                          
                          {/* Celiac Safe Badge */}
                          {restaurant.celiacSafe && (
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              <Shield className="h-3 w-3 mr-1" />
                              Celiac Safe
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Specialty */}
                        {restaurant.specialty && (
                          <div className="flex items-start space-x-2">
                            <Utensils className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-orange-700">{restaurant.specialty}</span>
                          </div>
                        )}
                        
                        {/* Certification Level */}
                        {restaurant.certificationLevel && (
                          <div className="flex items-start space-x-2 bg-blue-50 p-3 rounded-lg">
                            <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-blue-800">{restaurant.certificationLevel}</span>
                          </div>
                        )}
                        
                        {/* Address */}
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{restaurant.address}</span>
                        </div>
                        
                        {/* Hours */}
                        <div className="flex items-start space-x-2">
                          <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{restaurant.hours}</span>
                        </div>
                        
                        {/* Website & Phone */}
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
                        
                        {/* Directions Button */}
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
                        
                        {/* Overview */}
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Overview
                          </h4>
                          <p className="text-sm text-black">{restaurant.overview}</p>
                        </div>
                        
                        {/* Menu Highlights */}
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
                        
                        {/* User Reviews Section */}
                        {restaurant.userReviews && (
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              User Reviews
                            </h4>
                            <div className="space-y-3">
                              {restaurant.userReviews.map((review, idx) => (
                                <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-sm">{review.user}</span>
                                    <div className="flex items-center gap-1">
                                      {renderStarRating(review.rating)}
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-700 mb-1">{review.comment}</p>
                                  <span className="text-xs text-gray-500">{review.date}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Pro Tip */}
                        {restaurant.proTip && (
                          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                            <div className="flex items-start space-x-2">
                              <Heart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="text-xs font-semibold text-purple-800 uppercase tracking-wide">Pro Tip</span>
                                <p className="text-sm text-purple-700 mt-1">{restaurant.proTip}</p>
                              </div>
                            </div>
                          </div>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning Your American Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Explore more gluten-free destinations around the world</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/countries">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore More Countries
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Add a Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default USA;
