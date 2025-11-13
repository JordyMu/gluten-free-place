import { MapPin, Phone, Clock, Star, Award, ChefHat, Coffee, Utensils, ShieldCheck, Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/countries/Header";
import { HeroSection } from "@/components/countries/HeroSection";

const USA = () => {
  const cities = [
    {
      name: "New York City",
      description: "The Big Apple leads America's gluten-free revolution",
      restaurants: [
        {
          name: "Risotteria Melotti",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
          rating: 4.8,
          reviewCount: 892,
          cuisine: "Italian Gluten-Free",
          address: "270 Bleecker St, New York, NY 10014",
          phone: "+1 212-924-6664",
          hours: "11:30 AM - 10:00 PM",
          celiacSafe: "100% Gluten-Free",
          menuType: "Dedicated GF Facility",
          priceRange: "$$",
          specialties: ["Risotto", "Pasta", "Pizza", "Desserts"],
          overview: "NYC's first 100% gluten-free restaurant, Risotteria has been a pioneer since 2005. Located in Greenwich Village, this certified facility offers authentic Italian cuisine without compromise.",
          menuHighlights: [
            "Truffle Mushroom Risotto - Creamy arborio rice with wild mushrooms",
            "GF Pizza Margherita - Made with their famous rice-flour crust",
            "Homemade Tiramisu - Classic Italian dessert, completely gluten-free",
            "Fresh Pasta Dishes - Daily rotating specials"
          ],
          certifications: ["AIC Certified", "100% Gluten-Free Facility"],
          reviews: [
            {
              author: "Jessica M.",
              rating: 5,
              date: "2 weeks ago",
              text: "As someone with celiac disease, finding Risotteria was life-changing! Everything is safe to eat, and the food is absolutely delicious. The risotto is the best I've had outside of Italy."
            },
            {
              author: "David K.",
              rating: 5,
              date: "1 month ago",
              text: "The pizza here is incredible - you'd never know it's gluten-free. Staff is knowledgeable about celiac and cross-contamination. A must-visit in NYC!"
            }
          ]
        },
        {
          name: "Senza Gluten",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
          rating: 4.7,
          reviewCount: 645,
          cuisine: "Italian Comfort Food",
          address: "206 Sullivan St, New York, NY 10012",
          phone: "+1 212-334-5365",
          hours: "12:00 PM - 10:30 PM",
          celiacSafe: "100% Gluten-Free",
          menuType: "Dedicated GF Kitchen",
          priceRange: "$$-$$$",
          specialties: ["Pizza", "Pasta", "Salads", "Wine"],
          overview: "A cozy SoHo gem offering elevated Italian comfort food in a completely gluten-free environment. Their wood-fired pizzas and handmade pasta have won over both celiacs and gluten-eaters alike.",
          menuHighlights: [
            "Margherita Pizza - Classic Neapolitan style with fresh mozzarella",
            "Carbonara - Creamy pasta with guanciale and pecorino",
            "Burrata Salad - Fresh burrata with heirloom tomatoes",
            "Chocolate Lava Cake - Decadent gluten-free dessert"
          ],
          certifications: ["NYC Health Dept Certified GF", "Dedicated Facility"],
          reviews: [
            {
              author: "Amanda R.",
              rating: 5,
              date: "3 weeks ago",
              text: "Best gluten-free pizza in NYC, hands down! The crust is crispy and flavorful. Love that it's 100% gluten-free so I don't have to worry about cross-contamination."
            },
            {
              author: "Michael T.",
              rating: 5,
              date: "2 months ago",
              text: "Fantastic pasta dishes and excellent wine selection. The staff really knows their stuff when it comes to celiac safety. Highly recommended!"
            }
          ]
        },
        {
          name: "Noglu",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
          rating: 4.6,
          reviewCount: 534,
          cuisine: "French Bakery & Bistro",
          address: "32 E 20th St, New York, NY 10003",
          phone: "+1 646-678-5834",
          hours: "8:00 AM - 8:00 PM",
          celiacSafe: "100% Gluten-Free",
          menuType: "Full GF Menu",
          priceRange: "$$",
          specialties: ["Pastries", "Brunch", "Sandwiches", "Coffee"],
          overview: "From Paris to New York, Noglu brings French gluten-free excellence to Manhattan. Their bakery counter is filled with croissants, baguettes, and pastries that rival traditional versions.",
          menuHighlights: [
            "Almond Croissants - Flaky and buttery, you won't believe they're GF",
            "Croque Monsieur - Classic French sandwich on house-made bread",
            "Quiche Lorraine - Traditional recipe, gluten-free execution",
            "Macarons - Colorful selection of French macarons"
          ],
          certifications: ["Certified Gluten-Free", "NYC Permitted Kitchen"],
          reviews: [
            {
              author: "Sophie L.",
              rating: 5,
              date: "1 week ago",
              text: "The croissants here are amazing! I'm from France and these are as good as any I've had back home. So happy to find authentic French pastries that are safe for celiacs."
            },
            {
              author: "Robert W.",
              rating: 4,
              date: "3 weeks ago",
              text: "Great spot for breakfast or lunch. The bread is excellent and everything is clearly labeled. Staff is friendly and knowledgeable about celiac disease."
            }
          ]
        }
      ]
    },
    {
      name: "Los Angeles",
      description: "California dreaming with innovative gluten-free cuisine",
      restaurants: [
        {
          name: "Erin McKenna's Bakery",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
          rating: 4.7,
          reviewCount: 723,
          cuisine: "Bakery & Desserts",
          address: "236 S Beverly Dr, Beverly Hills, CA 90212",
          phone: "+1 310-385-1103",
          hours: "10:00 AM - 8:00 PM",
          celiacSafe: "100% Gluten-Free & Vegan",
          menuType: "Dedicated GF Bakery",
          priceRange: "$$",
          specialties: ["Cupcakes", "Cookies", "Cakes", "Donuts"],
          overview: "Founded by Erin McKenna, this beloved bakery offers 100% gluten-free and vegan treats that taste just as good as traditional versions. With locations in LA and NYC, it's a celiac safe haven.",
          menuHighlights: [
            "Vanilla Cupcakes - Moist and fluffy with buttercream frosting",
            "Chocolate Chip Cookies - Chewy and loaded with chocolate",
            "Birthday Cakes - Custom orders available",
            "Cinnamon Sugar Donuts - Fresh daily"
          ],
          certifications: ["100% GF & Vegan Facility", "Celiac-Safe Certified"],
          reviews: [
            {
              author: "Lauren H.",
              rating: 5,
              date: "5 days ago",
              text: "These cupcakes are incredible! I've been gluten-free for years and these are the best I've ever had. You'd never know they're vegan too!"
            }
          ]
        }
      ]
    }
  ];

  const getCeliacSafeBadge = (level: string) => {
    const config = {
      "100% Gluten-Free": { color: "bg-green-100 text-green-800 border-green-200", icon: ShieldCheck },
      "100% Gluten-Free & Vegan": { color: "bg-green-100 text-green-800 border-green-200", icon: ShieldCheck },
      "Celiac Friendly": { color: "bg-blue-100 text-blue-800 border-blue-200", icon: ShieldCheck },
      "GF Options": { color: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: ShieldCheck }
    };
    
    const { color, icon: Icon } = config[level] || config["GF Options"];
    
    return (
      <Badge className={`${color} font-medium`}>
        <Icon className="h-3 w-3 mr-1" />
        {level}
      </Badge>
    );
  };

  const getMenuTypeBadge = (type: string) => {
    return (
      <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700">
        <Award className="h-3 w-3 mr-1" />
        {type}
      </Badge>
    );
  };

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
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
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 text-lg px-4 py-2">
            🇺🇸 United States
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
            Gluten-Free USA
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From coast to coast, discover America's thriving gluten-free scene with dedicated facilities, innovative chefs, and celiac-safe dining experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Utensils className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">150+ GF Restaurants</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              <span className="font-semibold">Celiac Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Award className="h-5 w-5 text-purple-600" />
              <span className="font-semibold">Top Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">🌟 Why USA is Great for Celiacs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                Excellent Awareness
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• FDA labeling requirements protect consumers</li>
                <li>• High awareness among restaurants and chefs</li>
                <li>• Many dedicated gluten-free facilities</li>
                <li>• Strong celiac disease advocacy organizations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Coffee className="h-5 w-5 text-blue-600" />
                Practical Tips
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Look for "certified gluten-free" labels</li>
                <li>• Download Find Me Gluten Free app</li>
                <li>• Most major cities have dedicated GF bakeries</li>
                <li>• Many chains offer gluten-free menus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cities and Restaurants */}
      {cities.map((city, cityIndex) => (
        <section key={cityIndex} className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              {city.name}
            </h2>
            <p className="text-xl text-gray-600">{city.description}</p>
          </div>

          <div className="space-y-8">
            {city.restaurants.map((restaurant, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-orange-100">
                <div className="grid md:grid-cols-[400px,1fr] gap-6">
                  {/* Image */}
                  <div className="relative h-[300px] md:h-auto">
                    <img 
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                      <span className="font-bold text-lg">{restaurant.rating}</span>
                      <Star className="inline h-4 w-4 fill-yellow-400 text-yellow-400 ml-1" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {getCeliacSafeBadge(restaurant.celiacSafe)}
                      {getMenuTypeBadge(restaurant.menuType)}
                      <Badge variant="outline" className="border-orange-200 bg-orange-50 text-orange-700">
                        {restaurant.priceRange}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{restaurant.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {renderStarRating(restaurant.rating)}
                      <span className="text-sm text-gray-600">({restaurant.reviewCount} reviews)</span>
                      <Badge variant="outline" className="ml-2">{restaurant.cuisine}</Badge>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{restaurant.overview}</p>

                    {/* Contact Info */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{restaurant.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{restaurant.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{restaurant.hours}</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <ChefHat className="h-4 w-4 text-orange-600" />
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.specialties.map((specialty, i) => (
                          <Badge key={i} variant="secondary" className="bg-orange-100 text-orange-800">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Menu Highlights */}
                    {restaurant.menuHighlights && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Menu Highlights</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {restaurant.menuHighlights.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Certifications */}
                    {restaurant.certifications && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-purple-600" />
                          Certifications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.certifications.map((cert, i) => (
                            <Badge key={i} className="bg-purple-100 text-purple-800 border-purple-200">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Reviews */}
                    {restaurant.reviews && restaurant.reviews.length > 0 && (
                      <div className="border-t pt-4 mt-4">
                        <h4 className="font-semibold mb-3">Recent Reviews</h4>
                        <div className="space-y-3">
                          {restaurant.reviews.map((review, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-sm">{review.author}</span>
                                <div className="flex items-center gap-2">
                                  {renderStarRating(review.rating)}
                                  <span className="text-xs text-gray-500">{review.date}</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-700">{review.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}

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
