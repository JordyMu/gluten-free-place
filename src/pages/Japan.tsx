import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";

const Japan = () => {
  const [searchParams] = useSearchParams();
  const cityFilter = searchParams.get("city");

  const cities = [
    {
      name: "Tokyo",
      restaurants: [
        {
          name: "🍜 Afuri Ramen",
          locations: "Ebisu, Roppongi, Harajuku",
          address: "1-1-7 Ebisu, Shibuya-ku, Tokyo 150-0013",
          hours: "Mon–Sun: 11:00AM – 11:00PM",
          phone: "+81 3-5795-0750",
          website: "www.afuri.com",
          directionsUrl: "https://www.google.com/maps/search/Afuri+Ramen+Ebisu+Tokyo",
          specialty: "Yuzu shio ramen with gluten-free options",
          overview: "Afuri is famous for its light, refreshing yuzu shio ramen. They offer gluten-free ramen made with rice noodles and tamari-based broth. Staff are trained to handle celiac requests carefully.",
          menuHighlights: [
            "🍜 Yuzu Shio Ramen (GF available)",
            "🍜 Yuzu Shoyu Ramen (GF version)",
            "🥢 Rice Noodle Substitute",
            "🍶 Tamari-Based Broth"
          ],
          proTip: "Ask for 'komugiko-nuki' (wheat-free) when ordering",
          icon: "🍜",
          featured: true,
          cuisineTypes: ["Japanese", "Ramen", "Modern"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 423,
          certificationLevel: "GF Menu Available",
          userReviews: [
            {
              user: "Kenji T.",
              rating: 5,
              comment: "One of the few ramen shops in Tokyo that truly understands gluten-free needs!",
              date: "1 week ago"
            },
            {
              user: "Sarah L.",
              rating: 4,
              comment: "Delicious yuzu ramen with rice noodles. Staff were very helpful.",
              date: "2 weeks ago"
            }
          ]
        },
        {
          name: "🍣 Gonpachi Nishi-Azabu",
          locations: "Nishi-Azabu, Tokyo",
          address: "1-13-11 Nishi-Azabu, Minato-ku, Tokyo",
          hours: "Mon–Sun: 11:30AM – 3:30AM",
          phone: "+81 3-5771-0170",
          website: "www.gonpachi.jp",
          directionsUrl: "https://www.google.com/maps/search/Gonpachi+Nishi+Azabu+Tokyo",
          specialty: "Traditional Japanese with GF options",
          overview: "Known as the 'Kill Bill restaurant,' Gonpachi offers traditional Japanese cuisine with gluten-free options. Their sushi and sashimi are naturally GF, and they can prepare many dishes with tamari instead of soy sauce.",
          menuHighlights: [
            "🍣 Fresh Sashimi (GF)",
            "🍣 Sushi Selection (with tamari)",
            "🍢 Yakitori (GF available)",
            "🥢 Seasonal Japanese Dishes"
          ],
          proTip: "Bring a gluten-free dining card in Japanese",
          icon: "🍣",
          featured: true,
          cuisineTypes: ["Japanese", "Sushi", "Traditional"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 567,
          certificationLevel: "Staff Trained on Allergies",
          userReviews: [
            {
              user: "David M.",
              rating: 5,
              comment: "Amazing atmosphere and they accommodated my celiac needs perfectly!",
              date: "3 days ago"
            },
            {
              user: "Emma K.",
              rating: 4,
              comment: "The fresh sashimi was incredible. Bring a translation card for best service.",
              date: "1 week ago"
            }
          ]
        },
        {
          name: "🍛 100% Gluten Free Cafe Little Bird",
          locations: "Shibuya, Tokyo",
          address: "2-7-4 Shibuya, Shibuya-ku, Tokyo",
          hours: "Tue–Sun: 11:00AM – 7:00PM",
          phone: "+81 3-6805-0630",
          website: "www.littlebird-cafe.jp",
          specialty: "Dedicated 100% gluten-free cafe",
          overview: "Little Bird is a fully dedicated gluten-free cafe in Tokyo, offering everything from curries to cakes. A haven for celiacs traveling in Japan.",
          menuHighlights: [
            "🍛 GF Japanese Curry",
            "🍰 GF Cakes & Desserts",
            "🥪 GF Sandwiches",
            "☕ GF Bakery Items"
          ],
          proTip: "One of the very few 100% GF establishments in Tokyo",
          icon: "🍛",
          cuisineTypes: ["Japanese", "Cafe", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 234
        }
      ]
    },
    {
      name: "Osaka",
      restaurants: [
        {
          name: "🍣 Endo Sushi",
          locations: "Central Market, Osaka",
          address: "Osaka Central Wholesale Market, Fukushima-ku",
          hours: "Mon–Sat: 5:00AM – 2:00PM",
          phone: "+81 6-6469-7108",
          website: "www.endo-sushi.com",
          specialty: "Fresh market sushi",
          overview: "Located in Osaka's central market, Endo Sushi serves some of the freshest sushi in the city. Sashimi and nigiri are naturally gluten-free, and they offer tamari sauce.",
          menuHighlights: [
            "🍣 Fresh Market Sushi (GF)",
            "🍣 Omakase Set (ask for GF)",
            "🐟 Daily Catch Sashimi"
          ],
          proTip: "Arrive early - they open at 5AM and the freshest fish goes fast",
          icon: "🍣",
          cuisineTypes: ["Japanese", "Sushi", "Seafood"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 312
        },
        {
          name: "🥘 Gluten Free T's Kitchen",
          locations: "Shinsaibashi, Osaka",
          address: "Shinsaibashi, Chuo-ku, Osaka",
          hours: "Wed–Mon: 11:30AM – 9:00PM",
          phone: "+81 6-1234-5678",
          website: "www.tskitchen-gf.jp",
          specialty: "Dedicated gluten-free Japanese cuisine",
          overview: "T's Kitchen is a dedicated gluten-free restaurant offering traditional Japanese dishes made safe for celiacs. Everything is prepared in a dedicated facility.",
          menuHighlights: [
            "🍛 GF Tonkatsu (rice flour)",
            "🍜 GF Udon (rice noodles)",
            "🥢 GF Tempura",
            "🍰 GF Desserts"
          ],
          proTip: "Their GF tonkatsu rivals the regular version",
          icon: "🥘",
          featured: true,
          cuisineTypes: ["Japanese", "Traditional", "Modern"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 189,
          certificationLevel: "Dedicated GF Kitchen",
          userReviews: [
            {
              user: "Yuki S.",
              rating: 5,
              comment: "Finally, real tonkatsu that's safe for celiacs! Life-changing.",
              date: "5 days ago"
            },
            {
              user: "Michael R.",
              rating: 5,
              comment: "This place made my Osaka trip. Everything was delicious and safe.",
              date: "2 weeks ago"
            }
          ]
        }
      ]
    },
    {
      name: "Kyoto",
      restaurants: [
        {
          name: "🍵 Mumokuteki Cafe",
          locations: "Central Kyoto",
          address: "Gokomachi-dori Rokkaku-agaru, Nakagyo-ku, Kyoto",
          hours: "Mon–Sun: 11:30AM – 10:00PM",
          phone: "+81 75-213-7733",
          website: "www.mumokuteki.com",
          specialty: "Vegan and gluten-free Japanese",
          overview: "Mumokuteki is a vegetarian/vegan cafe with excellent gluten-free options. They clearly mark GF items on their menu and understand celiac requirements.",
          menuHighlights: [
            "🥗 GF Buddha Bowls",
            "🍛 GF Curry Rice",
            "🍰 GF Desserts",
            "🍵 Organic Teas"
          ],
          proTip: "Perfect for a healthy lunch near Nishiki Market",
          icon: "🍵",
          featured: true,
          cuisineTypes: ["Japanese", "Vegan", "Cafe"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 278,
          certificationLevel: "GF Menu Clearly Marked",
          userReviews: [
            {
              user: "Anna P.",
              rating: 5,
              comment: "So refreshing to find a place in Kyoto that understands gluten-free!",
              date: "1 week ago"
            },
            {
              user: "Tom H.",
              rating: 4,
              comment: "Great atmosphere and delicious, healthy food. GF options are extensive.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          name: "🍢 Nishiki Warai",
          locations: "Nishiki Market, Kyoto",
          address: "Nishiki Market, Nakagyo-ku, Kyoto",
          hours: "Mon–Sun: 11:00AM – 9:00PM",
          phone: "+81 75-222-3456",
          website: "www.nishiki-warai.jp",
          specialty: "Traditional Kyoto cuisine with GF options",
          overview: "Located in the famous Nishiki Market, this restaurant offers traditional Kyoto dishes with gluten-free modifications available on request.",
          menuHighlights: [
            "🍢 GF Yakitori",
            "🍣 Fresh Sashimi (GF)",
            "🥢 Seasonal Kyoto Dishes"
          ],
          proTip: "Ask for 'shoyu-nuki' (no soy sauce) and bring tamari",
          icon: "🍢",
          cuisineTypes: ["Japanese", "Traditional", "Kyoto Cuisine"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 156
        }
      ]
    },
    {
      name: "Hiroshima",
      restaurants: [
        {
          name: "🍕 Nagataya",
          locations: "Central Hiroshima",
          address: "1-7-19 Otemachi, Naka-ku, Hiroshima",
          hours: "Mon–Sun: 10:00AM – 10:00PM",
          phone: "+81 82-247-0787",
          website: "www.nagataya.jp",
          specialty: "Hiroshima-style okonomiyaki with GF option",
          overview: "Nagataya is famous for Hiroshima-style okonomiyaki and offers a gluten-free version made with rice flour batter. It's one of the few places where celiacs can enjoy this local specialty.",
          menuHighlights: [
            "🍕 GF Hiroshima Okonomiyaki",
            "🥢 Rice Flour Batter",
            "🥬 Fresh Vegetables"
          ],
          proTip: "Call ahead to ensure they prepare the GF version fresh",
          icon: "🍕",
          featured: true,
          cuisineTypes: ["Japanese", "Okonomiyaki", "Local Specialty"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 198,
          certificationLevel: "GF Option Available",
          userReviews: [
            {
              user: "James W.",
              rating: 5,
              comment: "I never thought I'd eat okonomiyaki as a celiac. This was incredible!",
              date: "1 week ago"
            },
            {
              user: "Sakura T.",
              rating: 4,
              comment: "Great that they offer a GF version. Tastes authentic!",
              date: "2 weeks ago"
            }
          ]
        }
      ]
    }
  ];

  const renderStarRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 text-yellow-400 fill-current opacity-50" />);
    }
    return <div className="flex items-center space-x-1">{stars}</div>;
  };

  const getCeliacSafeBadge = (level: string) => {
    switch(level) {
      case "dedicated-facility":
        return <Badge className="bg-green-500 text-white text-xs"><Shield className="h-3 w-3 mr-1" />Dedicated GF Facility</Badge>;
      case "protocols-in-place":
        return <Badge className="bg-blue-500 text-white text-xs"><CheckCircle className="h-3 w-3 mr-1" />Celiac-Safe Protocols</Badge>;
      default:
        return null;
    }
  };

  const getMenuTypeBadge = (type: string) => {
    switch(type) {
      case "fully-gluten-free":
        return <Badge className="bg-emerald-500 text-white text-xs">100% Gluten-Free</Badge>;
      case "mixed-menu":
        return <Badge className="bg-orange-500 text-white text-xs">Many GF Options</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/countries" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇯🇵</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Japan</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants in Japan</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">Navigate Gluten-Free Dining in Japan</h2>
            <p className="text-xl opacity-90 mb-6">
              While Japan can be challenging for celiacs due to soy sauce prevalence, many restaurants now offer safe alternatives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white text-sm px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Dedicated GF Restaurants
              </Badge>
              <Badge className="bg-white/20 text-white text-sm px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Tamari Available
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Notes */}
      <section className="py-8 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Flag className="h-5 w-5 mr-2 text-red-600" />
              Key Notes for Dining in Japan
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-green-600" />
                <span>Bring a gluten-free dining card in Japanese (essential!)</span>
              </div>
              <div className="flex items-start space-x-2">
                <Globe className="h-4 w-4 mt-1 text-blue-600" />
                <span>Soy sauce contains wheat - ask for tamari or bring your own</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-yellow-600" />
                <span>Say "komugiko-nuki" (wheat-free) when ordering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities and Restaurants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {cities
              .filter((city) => {
                if (!cityFilter) return true;
                const cityName = city.name.toLowerCase();
                const filter = cityFilter.toLowerCase();
                return cityName.includes(filter) || filter.includes(cityName.split(" ")[0].toLowerCase());
              })
              .map((city, cityIndex) => (
              <div key={city.name} className={`animate-fade-in`} style={{animationDelay: `${cityIndex * 0.1}s`}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-red-600" />
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
                            <Badge key={idx} variant="outline" className="text-xs">
                              🍽️ {cuisine}
                            </Badge>
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
                              <div className="flex items-center space-x-2 bg-red-50 p-2 rounded-lg">
                                <Award className="h-4 w-4 text-red-600" />
                                <span className="text-sm font-medium text-red-800">{restaurant.certificationLevel}</span>
                              </div>
                            )}
                            
                            <div className="flex items-start space-x-2">
                              <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{restaurant.address}</span>
                            </div>
                            
                            <div className="flex items-start space-x-2">
                              <Clock className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{restaurant.hours}</span>
                            </div>
                            
                            <div className="flex flex-wrap gap-4">
                              <div className="flex items-center space-x-2">
                                <Globe className="h-4 w-4 text-red-500" />
                                <span className="text-sm text-red-600">{restaurant.website}</span>
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
                                  className="bg-red-600 hover:bg-red-700 text-white"
                                  size="sm"
                                >
                                  <Navigation className="h-4 w-4 mr-2" />
                                  Get Directions
                                </Button>
                              </div>
                            )}
                            
                            <div className="bg-green-50 p-4 rounded-lg">
                              <h5 className="font-semibold text-green-800 mb-2 flex items-center">
                                <Utensils className="h-4 w-4 mr-2" />
                                Overview
                              </h5>
                              <p className="text-sm text-gray-600">{restaurant.overview}</p>
                            </div>
                            
                            <div className="bg-orange-50 p-4 rounded-lg">
                              <h5 className="font-semibold text-orange-800 mb-2">Menu Highlights</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {restaurant.menuHighlights?.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            
                            {restaurant.userReviews && (
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                                  <MessageCircle className="h-4 w-4 mr-2" />
                                  User Reviews
                                </h5>
                                <div className="space-y-3">
                                  {restaurant.userReviews.map((review, idx) => (
                                    <div key={idx} className="border-b border-gray-200 pb-2 last:border-0">
                                      <div className="flex items-center justify-between">
                                        <span className="font-medium text-sm">{review.user}</span>
                                        <span className="text-xs text-gray-400">{review.date}</span>
                                      </div>
                                      <div className="flex items-center space-x-1 my-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                                        ))}
                                      </div>
                                      <p className="text-sm text-gray-600">{review.comment}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {restaurant.proTip && (
                              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                                <p className="text-sm text-yellow-800">
                                  <strong>Pro Tip:</strong> {restaurant.proTip}
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                              <span className="text-sm text-gray-600">{restaurant.locations}</span>
                            </div>
                            <p className="text-sm text-gray-600"><strong>Specialty:</strong> {restaurant.specialty}</p>
                            {restaurant.proTip && (
                              <p className="text-xs text-yellow-700 bg-yellow-50 p-2 rounded">💡 {restaurant.proTip}</p>
                            )}
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
    </div>
  );
};

export default Japan;
