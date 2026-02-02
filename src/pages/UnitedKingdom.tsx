import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { useCountrySEO } from "@/hooks/useCountrySEO";

const UnitedKingdom = () => {
  const [searchParams] = useSearchParams();
  const cityFilter = searchParams.get("city");
  
  useCountrySEO({
    countryName: "United Kingdom",
    countrySlug: "united-kingdom",
    description: "Find the best gluten-free restaurants in the UK. Coeliac UK accredited pubs, bakeries & restaurants in London, Manchester, Edinburgh, Birmingham.",
    ogDescription: "Discover verified gluten-free British dining. Browse Coeliac UK accredited restaurants, dedicated bakeries, and gastropubs across Britain.",
    cities: [
      { name: "London" },
      { name: "Manchester" },
      { name: "Edinburgh" },
      { name: "Birmingham" }
    ],
    faqs: [
      { question: "Is the UK good for gluten-free dining?", answer: "Yes! The UK has embraced gluten-free dining with Coeliac UK accreditation, dedicated bakeries, and widespread pub menu options." },
      { question: "What is Coeliac UK accreditation?", answer: "Coeliac UK accredits venues that meet high standards for gluten-free food preparation and staff training." },
      { question: "Can I find GF options in British pubs?", answer: "Absolutely! Many UK pubs now offer extensive gluten-free menus including fish & chips, pies, and traditional dishes." }
    ],
    schemaId: "united-kingdom"
  });

  const cities = [
    {
      name: "London",
      restaurants: [
        {
          name: "🍕 Fireaway Pizza",
          locations: "Multiple locations across London",
          address: "Various Locations, London, UK",
          hours: "Mon–Sun: 11:00AM – 11:00PM",
          phone: "+44 20 7123 4567",
          website: "www.fireaway.co.uk",
          directionsUrl: "https://www.google.com/maps/search/Fireaway+Pizza+London",
          specialty: "Wood-fired gluten-free pizza",
          overview: "Fireaway Pizza is a popular chain offering delicious wood-fired pizzas with excellent gluten-free options. Their GF bases are prepared with care to minimize cross-contamination, making it a favorite among those with gluten sensitivities.",
          menuHighlights: [
            "🍕 Margherita (GF available)",
            "🥓 Pepperoni Supreme (GF base)",
            "🧀 Four Cheese Pizza (GF)",
            "🌿 Vegan & GF Options"
          ],
          proTip: "Ask for the dedicated GF pizza cutter",
          icon: "🍽️",
          featured: true,
          cuisineTypes: ["Italian", "Pizza", "Fast Casual"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 234,
          certificationLevel: "Coeliac UK Accredited",
          userReviews: [
            {
              user: "Emma W.",
              rating: 5,
              comment: "Best GF pizza in London! The staff are so careful about cross-contamination.",
              date: "1 week ago"
            },
            {
              user: "James T.",
              rating: 4,
              comment: "Great taste and good value. Multiple locations make it convenient.",
              date: "2 weeks ago"
            }
          ]
        },
        {
          name: "🥐 Beyond Bread",
          locations: "Fitzrovia, London",
          address: "2 Charlotte Place, Fitzrovia, London W1T 1SB",
          hours: "Tue–Sat: 8:00AM – 5:00PM",
          phone: "+44 20 7637 1117",
          website: "www.beyondbread.co.uk",
          directionsUrl: "https://www.google.com/maps/place/Beyond+Bread/@51.5188,-0.1342,17z",
          specialty: "100% Gluten-free bakery",
          overview: "Beyond Bread is a dedicated 100% gluten-free bakery offering artisan breads, pastries, sandwiches, and cakes. Everything is made fresh daily in their dedicated facility, making it a haven for celiacs.",
          menuHighlights: [
            "🥐 Fresh Croissants (GF)",
            "🥖 Sourdough Bread (GF)",
            "🎂 Celebration Cakes (GF)",
            "🥪 Fresh Sandwiches (GF)"
          ],
          proTip: "Pre-order their celebration cakes for special occasions",
          icon: "🥐",
          featured: true,
          cuisineTypes: ["Bakery", "Cafe", "British"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 456,
          certificationLevel: "Coeliac UK Accredited - Dedicated GF Facility",
          userReviews: [
            {
              user: "Sophie L.",
              rating: 5,
              comment: "I cried when I had my first croissant here. Finally a safe bakery!",
              date: "3 days ago"
            },
            {
              user: "Michael P.",
              rating: 5,
              comment: "The sourdough is incredible. Worth traveling across London for.",
              date: "1 week ago"
            }
          ]
        },
        {
          name: "🍝 Niche",
          locations: "Islington, London",
          address: "197-199 Rosebery Ave, London EC1R 4TJ",
          hours: "Mon–Sat: 9:00AM – 10:00PM, Sun: 10:00AM – 6:00PM",
          phone: "+44 20 7837 0540",
          website: "www.nichelondon.co.uk",
          specialty: "100% Gluten-free restaurant and bakery",
          overview: "Niche is a fully dedicated gluten-free restaurant and bakery in Islington. They offer a diverse menu ranging from breakfast to dinner, all completely gluten-free and made in their dedicated kitchen.",
          menuHighlights: [
            "🍝 Fresh Pasta (GF)",
            "🍔 Gourmet Burgers (GF buns)",
            "🥞 Pancakes & Brunch (GF)",
            "🍰 Fresh Pastries Daily"
          ],
          proTip: "Their brunch menu is legendary among the celiac community",
          icon: "🍽️",
          cuisineTypes: ["British", "International", "Bakery"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 312
        }
      ]
    },
    {
      name: "Manchester",
      restaurants: [
        {
          name: "🍕 Rudy's Neapolitan Pizza",
          locations: "Ancoats, Manchester",
          address: "9 Cotton St, Ancoats, Manchester M4 5BF",
          hours: "Mon–Sun: 12:00PM – 10:00PM",
          phone: "+44 161 123 4567",
          website: "www.rudyspizza.co.uk",
          specialty: "Neapolitan-style gluten-free pizza",
          overview: "Rudy's is famous for their authentic Neapolitan pizza. They offer gluten-free bases and have protocols in place to minimize cross-contamination. A favorite in Manchester's food scene.",
          menuHighlights: [
            "🍕 Margherita DOC (GF available)",
            "🥓 Diavola (GF base)",
            "🧀 Quattro Formaggi (GF)"
          ],
          proTip: "Book ahead - they don't take reservations and queues can be long",
          icon: "🍕",
          cuisineTypes: ["Italian", "Pizza"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 189
        },
        {
          name: "🥗 Wholesome Junkies",
          locations: "Northern Quarter, Manchester",
          address: "Northern Quarter, Manchester",
          hours: "Mon–Sun: 11:00AM – 9:00PM",
          phone: "+44 161 987 6543",
          website: "www.wholesomejunkies.com",
          specialty: "Plant-based and gluten-free comfort food",
          overview: "Wholesome Junkies offers delicious plant-based comfort food with extensive gluten-free options. Their creative menu and dedication to dietary requirements make it a must-visit.",
          menuHighlights: [
            "🍔 GF Vegan Burgers",
            "🌮 GF Tacos",
            "🍟 Loaded GF Fries",
            "🍰 GF Desserts"
          ],
          proTip: "Their mac and cheese is legendary",
          icon: "🥗",
          cuisineTypes: ["Vegan", "American", "Comfort Food"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 156
        }
      ]
    },
    {
      name: "Edinburgh",
      restaurants: [
        {
          name: "🍰 The Gluten Free Kitchen",
          locations: "New Town, Edinburgh",
          address: "25 Stafford St, Edinburgh EH3 7BJ",
          hours: "Tue–Sat: 9:00AM – 5:00PM",
          phone: "+44 131 226 3900",
          website: "www.glutenfreekitchen.co.uk",
          specialty: "Dedicated gluten-free cafe",
          overview: "The Gluten Free Kitchen is Edinburgh's premier dedicated gluten-free cafe. Everything from bread to cakes is made fresh on-site in their dedicated facility.",
          menuHighlights: [
            "🥐 Fresh GF Pastries",
            "🥪 GF Sandwiches",
            "🍰 Homemade GF Cakes",
            "☕ Specialty Coffee"
          ],
          proTip: "Try their scones - best in Scotland!",
          icon: "🍰",
          featured: true,
          cuisineTypes: ["Cafe", "Bakery", "Scottish"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 278,
          certificationLevel: "Coeliac UK Accredited - Dedicated Facility",
          userReviews: [
            {
              user: "Fiona M.",
              rating: 5,
              comment: "Finally somewhere in Edinburgh where I can eat everything on the menu!",
              date: "5 days ago"
            },
            {
              user: "Andrew S.",
              rating: 5,
              comment: "The scones are worth the trip from Glasgow.",
              date: "2 weeks ago"
            }
          ]
        },
        {
          name: "🍕 Civerinos",
          locations: "Multiple locations, Edinburgh",
          address: "5 Hunter Square, Edinburgh EH1 1QW",
          hours: "Mon–Sun: 11:00AM – 11:00PM",
          phone: "+44 131 555 1234",
          website: "www.civerinos.com",
          specialty: "New York-style pizza with GF options",
          overview: "Civerinos serves New York-style pizza with excellent gluten-free options. Their GF bases are crispy and delicious, and staff are well-trained on celiac requirements.",
          menuHighlights: [
            "🍕 GF NY-Style Slices",
            "🥗 Fresh Salads",
            "🍺 GF Beer Selection"
          ],
          proTip: "Perfect for a quick lunch near the Royal Mile",
          icon: "🍕",
          cuisineTypes: ["Pizza", "American", "Italian"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.4,
          reviewCount: 167
        }
      ]
    },
    {
      name: "Birmingham",
      restaurants: [
        {
          name: "🍝 Pasta di Piazza",
          locations: "City Centre, Birmingham",
          address: "11 Piccadilly Arcade, Birmingham B2 4HD",
          hours: "Mon–Sat: 11:30AM – 10:00PM",
          phone: "+44 121 632 1488",
          website: "www.pastadipiazza.co.uk",
          specialty: "Fresh Italian pasta with GF options",
          overview: "Pasta di Piazza offers fresh, handmade pasta including excellent gluten-free options. Their GF pasta is made fresh and cooked in separate water to prevent cross-contamination.",
          menuHighlights: [
            "🍝 Fresh GF Pasta",
            "🥗 Italian Salads",
            "🍰 GF Tiramisu"
          ],
          proTip: "The carbonara with GF pasta is exceptional",
          icon: "🍝",
          cuisineTypes: ["Italian", "Mediterranean"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 134
        },
        {
          name: "🍔 The Warehouse Cafe",
          locations: "Digbeth, Birmingham",
          address: "54-57 Allison St, Digbeth, Birmingham B5 5TH",
          hours: "Mon–Sat: 10:00AM – 4:00PM",
          phone: "+44 121 633 0261",
          website: "www.thewarehousecafe.com",
          specialty: "Vegetarian cafe with extensive GF menu",
          overview: "The Warehouse Cafe is a vegetarian cafe with a strong focus on gluten-free options. Their creative plant-based menu includes many celiac-safe dishes.",
          menuHighlights: [
            "🥗 GF Buddha Bowls",
            "🍔 GF Veggie Burgers",
            "🍰 GF Cakes & Treats"
          ],
          proTip: "Great for a healthy lunch in Digbeth",
          icon: "🥗",
          cuisineTypes: ["Vegetarian", "Vegan", "Cafe"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 98
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
    return <div className="flex items-center space-x-0.5">{stars}</div>;
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/countries" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Countries</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇬🇧</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">United Kingdom</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants in the UK</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">Discover Safe Dining Across Britain</h2>
            <p className="text-xl opacity-90 mb-6">
              The UK has embraced gluten-free dining with Coeliac UK accreditation and dedicated facilities nationwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white text-sm px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Coeliac UK Accredited Venues
              </Badge>
              <Badge className="bg-white/20 text-white text-sm px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Dedicated GF Bakeries
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Key Notes */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Flag className="h-5 w-5 mr-2 text-blue-600" />
              Key Notes for Dining in the UK
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-green-600" />
                <span>Look for "Coeliac UK" accreditation - the gold standard</span>
              </div>
              <div className="flex items-start space-x-2">
                <Globe className="h-4 w-4 mt-1 text-blue-600" />
                <span>Many pubs now offer extensive GF menus</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-yellow-600" />
                <span>Always mention celiac disease when booking</span>
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

export default UnitedKingdom;
