import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
const Australia = () => {
  
  const cities = [
    {
      name: "Sydney",
      restaurants: [
        {
          name: "🥐 Sebastien Sans Gluten",
          locations: "CBD",
          address: "123 George St, Sydney NSW 2000, Australia",
          hours: "Mon–Sun: 8:00AM – 7:00PM",
          phone: "+61 2 9234 5678",
          website: "www.sebastiensansgluten.com.au",
          directionsUrl: "https://www.google.com/maps",
          specialty: "French patisserie",
          overview: "French patisserie with highly trained staff specializing in traditional gluten-free pastries. All items are prepared in a dedicated gluten-free facility ensuring complete safety for celiacs. Known for authentic French techniques and beautiful presentation.",
          menuHighlights: [
            "🥐 Croissants (Gluten-Free)",
            "🥖 Baguettes",
            "🍰 French Cakes & Tarts",
            "☕ Specialty Coffee",
            "🎂 Custom celebration cakes"
          ],
          proTip: "Arrive early for the best selection of fresh croissants",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["French", "Patisserie", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 245,
          certificationLevel: "Coeliac Australia Certified",
          userReviews: [
            {
              user: "Emma K.",
              rating: 5,
              comment: "The best gluten-free croissants I've ever had! Can't believe they're GF.",
              date: "1 week ago"
            },
            {
              user: "David M.",
              rating: 5,
              comment: "Amazing quality and the staff really understand celiac disease.",
              date: "2 weeks ago"
            },
            {
              user: "Sophie L.",
              rating: 4,
              comment: "Beautiful pastries and safe for celiacs. Prices are a bit high but worth it.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          name: "🍽️ Noglu",
          locations: "Waterloo",
          address: "45 Waterloo Rd, Sydney NSW 2017, Australia",
          hours: "Daily: 8:00AM – 9:00PM",
          phone: "+61 2 9678 9012",
          website: "www.noglu.com.au",
          specialty: "French cuisine - 100% GF",
          overview: "French restaurant with extensively trained staff and excellent gluten-free expertise. A dedicated gluten-free establishment offering authentic French dining experience.",
          menuHighlights: [
            "🍝 French Onion Soup",
            "🥩 Steak Frites",
            "🐟 Pan-seared Salmon",
            "🍷 Extensive wine list"
          ],
          proTip: "Book ahead for dinner service - very popular",
          icon: "🍽️",
          featured: false
        },
        {
          name: "☕ The Little Kitchen Cafe",
          locations: "Bondi",
          address: "78 Campbell Parade, Bondi NSW 2026, Australia",
          hours: "Daily: 7:00AM – 4:00PM",
          phone: "+61 2 9901 2345",
          specialty: "Breakfast & brunch",
          overview: "Cozy cafe with friendly staff knowledgeable about gluten-free breakfast and lunch options. Beachside location perfect for a relaxed meal.",
          menuHighlights: [
            "🥞 GF Pancakes",
            "🍳 Breakfast bowls",
            "🥑 Avocado toast (GF)",
            "🥗 Fresh salads"
          ],
          proTip: "Try the banana bread - it's incredible",
          icon: "☕",
          featured: false
        }
      ]
    },
    {
      name: "Melbourne",
      restaurants: [
        {
          name: "🥖 Wholegreen Bakery",
          locations: "Multiple locations",
          address: "234 Brunswick St, Melbourne VIC 3065, Australia",
          hours: "Daily: 7:00AM – 6:00PM",
          phone: "+61 3 9123 4567",
          website: "www.wholegreenbakery.com.au",
          directionsUrl: "https://www.google.com/maps",
          specialty: "Artisan bakery - 100% GF",
          overview: "Premium gluten-free bakery with expertly trained staff and comprehensive celiac knowledge. All products are made in a dedicated facility with the highest safety standards.",
          menuHighlights: [
            "🥖 Sourdough loaves",
            "🥐 Pastries & croissants",
            "🍞 Sandwich bread",
            "🥧 Pies & sausage rolls",
            "🍪 Cookies & slices"
          ],
          proTip: "Their sourdough is incredible - preorder to avoid missing out",
          icon: "🥖",
          featured: true,
          cuisineTypes: ["Bakery", "Cafe"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 412,
          certificationLevel: "Coeliac Australia Certified",
          userReviews: [
            {
              user: "Jessica R.",
              rating: 5,
              comment: "Finally, proper bread! This bakery has changed my life as a celiac.",
              date: "5 days ago"
            },
            {
              user: "Michael T.",
              rating: 5,
              comment: "Everything here is amazing. Staff are knowledgeable and friendly.",
              date: "1 week ago"
            },
            {
              user: "Amy P.",
              rating: 5,
              comment: "Best GF bakery in Australia. The pies are to die for!",
              date: "2 weeks ago"
            }
          ]
        },
        {
          name: "🍺 The Duke of Brunswick Hotel",
          locations: "Brunswick",
          address: "384 Sydney Rd, Brunswick VIC 3056, Australia",
          hours: "Daily: 12:00PM – 11:00PM",
          phone: "+61 3 9456 7890",
          specialty: "Pub food with extensive GF menu",
          overview: "Traditional pub with well-trained staff offering extensive gluten-free pub classics. Separate fryers and preparation areas ensure safety.",
          menuHighlights: [
            "🍔 GF Burgers",
            "🍟 GF Fish & Chips",
            "🍕 GF Pizzas",
            "🍺 GF Beer selection"
          ],
          proTip: "Thursday nights have GF pizza specials",
          icon: "🍺",
          featured: false
        }
      ]
    },
    {
      name: "Brisbane",
      restaurants: [
        {
          name: "🥐 Glazed Gluten Free Patisserie",
          locations: "South Bank",
          address: "56 Grey St, South Brisbane QLD 4101, Australia",
          hours: "Mon–Sat: 8:00AM – 6:00PM",
          phone: "+61 7 3012 3456",
          website: "www.glazedgf.com.au",
          directionsUrl: "https://www.google.com/maps",
          specialty: "Artisan patisserie - 100% GF",
          overview: "Dedicated gluten-free patisserie with expertly trained pastry chefs and comprehensive celiac knowledge. Creates beautiful French-style pastries that are completely safe for celiacs.",
          menuHighlights: [
            "🥐 French pastries",
            "🍰 Custom cakes",
            "🧁 Cupcakes & tarts",
            "🍪 Cookies & macarons",
            "☕ Specialty coffee"
          ],
          proTip: "Order custom cakes 48 hours in advance - they're stunning",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["Patisserie", "Bakery", "French"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 187,
          certificationLevel: "Coeliac Australia Certified",
          userReviews: [
            {
              user: "Rachel B.",
              rating: 5,
              comment: "The most beautiful GF pastries! Perfect for special occasions.",
              date: "3 days ago"
            },
            {
              user: "James W.",
              rating: 5,
              comment: "Finally a place where I can have proper French pastries safely.",
              date: "1 week ago"
            },
            {
              user: "Laura S.",
              rating: 5,
              comment: "Incredible quality and attention to detail. Worth every penny.",
              date: "2 weeks ago"
            }
          ]
        },
        {
          name: "🐟 Urban Fish Market",
          locations: "CBD",
          address: "234 George St, Brisbane QLD 4000, Australia",
          hours: "Daily: 11:00AM – 10:00PM",
          phone: "+61 7 3345 6789",
          specialty: "Fresh seafood with GF options",
          overview: "Fresh seafood restaurant with knowledgeable staff trained in gluten-free preparation techniques. Separate preparation areas for all GF dishes.",
          menuHighlights: [
            "🐟 Grilled fish (GF)",
            "🦐 Seafood platters",
            "🥗 Fresh salads",
            "🍋 Lemon pepper calamari (GF)"
          ],
          proTip: "Ask for the daily catch - always fresh and delicious",
          icon: "🐟",
          featured: false
        },
        {
          name: "🍽️ Nodo South Bank",
          locations: "South Bank",
          address: "89 Grey St, South Brisbane QLD 4101, Australia",
          hours: "Daily: 7:00AM – 10:00PM",
          phone: "+61 7 3123 4567",
          specialty: "Modern Australian cuisine",
          overview: "Contemporary Australian restaurant with well-trained staff offering innovative gluten-free dishes. Beautiful riverside location.",
          menuHighlights: [
            "🍳 GF breakfast menu",
            "🥗 Modern Australian dishes",
            "🍔 Gourmet burgers (GF buns)",
            "☕ Specialty coffee"
          ],
          proTip: "Weekend brunch is amazing - book ahead",
          icon: "🍽️",
          featured: false
        }
      ]
    },
    {
      name: "Perth",
      restaurants: [
        {
          name: "🥖 BAKED Gluten Free",
          locations: "Subiaco",
          address: "123 Rokeby Rd, Subiaco WA 6008, Australia",
          hours: "Mon–Sat: 7:30AM – 5:30PM",
          phone: "+61 8 9234 5678",
          website: "www.bakedgf.com.au",
          directionsUrl: "https://www.google.com/maps",
          specialty: "Artisan bakery - 100% GF",
          overview: "Specialized gluten-free bakery with highly trained bakers and comprehensive celiac safety protocols. Everything is made fresh daily in a dedicated facility.",
          menuHighlights: [
            "🥖 Fresh bread daily",
            "🥐 Croissants & pastries",
            "🥧 Meat pies",
            "🍰 Cakes & slices",
            "🍪 Cookies & brownies"
          ],
          proTip: "Get there early on weekends - popular items sell out fast",
          icon: "🥖",
          featured: true,
          cuisineTypes: ["Bakery", "Cafe"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 198,
          certificationLevel: "Coeliac Australia Certified",
          userReviews: [
            {
              user: "Sarah F.",
              rating: 5,
              comment: "Best GF bakery in Perth! Everything is delicious.",
              date: "1 week ago"
            },
            {
              user: "Tom H.",
              rating: 5,
              comment: "Finally proper bread and pies. Staff are lovely and knowledgeable.",
              date: "2 weeks ago"
            },
            {
              user: "Kate M.",
              rating: 4,
              comment: "Great selection and quality. A bit pricey but worth it for celiacs.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          name: "☕ Straight Up Coffee and Food",
          locations: "Northbridge",
          address: "67 Lake St, Northbridge WA 6003, Australia",
          hours: "Mon–Fri: 6:30AM – 4:00PM, Sat–Sun: 7:00AM – 4:00PM",
          phone: "+61 8 9567 8901",
          specialty: "Specialty coffee & GF menu",
          overview: "Specialty coffee shop with trained baristas knowledgeable about gluten-free options. Great breakfast and lunch menu.",
          menuHighlights: [
            "☕ Specialty coffee",
            "🥞 GF pancakes",
            "🥗 Fresh salads",
            "🥪 GF sandwiches"
          ],
          proTip: "Their cold brew is excellent in summer",
          icon: "☕",
          featured: false
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇦🇺</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Australia</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600/10 to-green-600/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            <Flag className="h-4 w-4 mr-2" />
            Coeliac Australia Certified
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Discover Australia's Best Gluten-Free Dining
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Sydney's waterfront to Melbourne's laneways, Australia offers world-class gluten-free dining. 
            Many establishments are Coeliac Australia certified for maximum safety.
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
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Look for Coeliac Australia accreditation - ensures strict GF protocols</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Many cafes use separate GF toasters and preparation areas</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Always inform staff of celiac disease when ordering</p>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Book ahead for popular GF restaurants, especially on weekends</p>
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
                          {restaurant.cuisineTypes?.map((cuisine, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              🍽️ {cuisine}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-2">
                          {/* Celiac Safe Badge */}
                          {restaurant.celiacSafe && getCeliacSafeBadge(restaurant.celiacSafe)}
                          
                          {/* Menu Type Badge */}
                          {restaurant.menuType && getMenuTypeBadge(restaurant.menuType)}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-3">
                        {restaurant.featured ? (
                          <div className="space-y-4">
                            {/* Certification Level */}
                            {restaurant.certificationLevel && (
                              <div className="flex items-center space-x-2 bg-blue-50 p-2 rounded-lg">
                                <Award className="h-4 w-4 text-blue-600" />
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
                            
                            {/* Pro Tip */}
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
    </>
  );
};

export default Australia;