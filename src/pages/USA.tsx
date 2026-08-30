import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, Award, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

const openExternalLink = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
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
    },
    {
      name: "Chicago",
      restaurants: [
        {
          name: "🥯 Wheat's End Café – 100% Gluten-Free Brunch",
          locations: "Lakeview, Chicago",
          address: "2873 N Broadway, Chicago, IL 60657",
          phone: "+1 773-770-3527",
          hours: "Tue–Sun: 8:00 AM - 2:00 PM",
          website: "www.wheatsendcafe.com",
          directionsUrl: "https://maps.google.com/?q=Wheat's+End+Cafe+Chicago",
          specialty: "Brunch, bagels, pancakes, baked goods",
          overview: "Chicago's beloved 100% gluten-free café serving creative brunch dishes, house-made bagels, and fresh baked goods in a completely safe environment for celiacs.",
          menuHighlights: [
            "GF Bagels with Lox - House-baked daily",
            "Buttermilk Pancakes - Fluffy and golden",
            "Breakfast Sandwiches - On fresh GF bread",
            "Cinnamon Rolls - Warm and gooey"
          ],
          proTip: "Arrive early on weekends - the brunch line forms fast",
          icon: "🥯",
          featured: true,
          cuisineTypes: ["Brunch", "Bakery", "Café"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 612,
          certificationLevel: "100% Gluten-Free Facility - Celiac Safe",
          userReviews: [
            {
              user: "Rachel S.",
              rating: 5,
              comment: "Finally a place where I can order anything on the menu! The bagels are better than regular ones.",
              date: "1 week ago"
            }
          ]
        },
        {
          name: "🍕 Chicago's Pizza – Dedicated GF Menu",
          locations: "Lincoln Park",
          address: "1919 W Montrose Ave, Chicago, IL 60613",
          phone: "+1 773-271-3930",
          hours: "Daily: 11:00 AM - 10:00 PM",
          website: "www.chicagos-pizza.com",
          directionsUrl: "https://maps.google.com/?q=Chicago's+Pizza+GF",
          specialty: "Deep dish pizza, thin crust, calzones",
          overview: "A Chicago institution offering legendary deep dish and thin crust pizzas with a carefully prepared gluten-free menu using separate prep areas and dedicated ovens.",
          menuHighlights: [
            "GF Deep Dish Pizza - Classic Chicago style",
            "GF Thin Crust - Crispy and delicious",
            "GF Calzones - Stuffed with cheese and toppings",
            "Garden Salad - Fresh with house dressing"
          ],
          proTip: "Call ahead for GF deep dish - it takes longer to prepare",
          icon: "🍕",
          featured: true,
          cuisineTypes: ["Pizza", "Italian", "American"],
          celiacSafe: "trained-staff",
          menuType: "dedicated-menu",
          rating: 4.5,
          reviewCount: 438,
          certificationLevel: "Trained Staff - Separate GF Prep Area",
          userReviews: [
            {
              user: "Mike D.",
              rating: 5,
              comment: "Finally got to try real Chicago deep dish! The GF crust was amazing and staff took cross-contamination seriously.",
              date: "3 weeks ago"
            }
          ]
        },
        {
          name: "🧁 Defloured Bakery – 100% Gluten-Free",
          locations: "Andersonville",
          address: "1477 W Balmoral Ave, Chicago, IL 60640",
          phone: "+1 773-234-5734",
          hours: "Tue–Sun: 8:00 AM - 6:00 PM",
          website: "www.deflouredbakery.com",
          directionsUrl: "https://maps.google.com/?q=Defloured+Bakery+Chicago",
          specialty: "Cakes, cupcakes, brownies, cookies",
          overview: "A charming Andersonville bakery where everything is 100% gluten-free. Their custom cakes and daily-baked treats prove that gluten-free can be absolutely decadent.",
          menuHighlights: [
            "Custom Cakes - Wedding and birthday orders",
            "Brownies - Fudgy and rich",
            "Cupcakes - Rotating seasonal flavors",
            "Cookies - Chocolate chip, snickerdoodle & more"
          ],
          proTip: "Order custom cakes at least a week in advance",
          icon: "🧁",
          featured: true,
          cuisineTypes: ["Bakery", "Desserts"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 521,
          certificationLevel: "100% Gluten-Free Bakery - Certified Safe",
          userReviews: [
            {
              user: "Emily W.",
              rating: 5,
              comment: "The brownies are life-changing. You would never guess they're gluten-free!",
              date: "2 weeks ago"
            }
          ]
        }
      ]
    },
    {
      name: "Portland",
      restaurants: [
        {
          name: "🍩 New Cascadia Traditional – 100% GF Bakery",
          locations: "Southeast Portland",
          address: "2502 SE Division St, Portland, OR 97202",
          phone: "+1 503-546-4901",
          hours: "Daily: 8:00 AM - 3:00 PM",
          website: "www.newcascadiatraditional.com",
          directionsUrl: "https://maps.google.com/?q=New+Cascadia+Traditional+Portland",
          specialty: "Artisan breads, pastries, bagels, pizza crust",
          overview: "Portland's pioneering 100% gluten-free artisan bakery, crafting sourdough breads, pastries, and bagels that rival any traditional bakery. A must-visit for celiacs.",
          menuHighlights: [
            "Sourdough Loaves - Naturally fermented",
            "Bagels - Boiled and baked fresh daily",
            "Seasonal Danishes - Flaky laminated pastry",
            "Sandwich Bread - Soft and versatile"
          ],
          proTip: "Their sourdough sells out fast - get there before noon",
          icon: "🥖",
          featured: true,
          cuisineTypes: ["Bakery", "Artisan Breads"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 587,
          certificationLevel: "100% Gluten-Free Dedicated Facility",
          userReviews: [
            {
              user: "Sarah P.",
              rating: 5,
              comment: "Best gluten-free bread I've ever had. The sourdough is incredible - tangy, chewy, perfect.",
              date: "4 days ago"
            }
          ]
        },
        {
          name: "🍕 Scottie's Pizza Parlor – GF Friendly",
          locations: "Division Street",
          address: "2128 SE Division St, Portland, OR 97202",
          phone: "+1 503-954-2042",
          hours: "Tue–Sun: 12:00 PM - 9:00 PM",
          website: "www.scottiespizzaparlor.com",
          directionsUrl: "https://maps.google.com/?q=Scottie's+Pizza+Parlor+Portland",
          specialty: "NY-style pizza with GF crust options",
          overview: "A beloved Portland pizzeria offering excellent gluten-free crusts with careful cross-contamination protocols. Their NY-style slices have a devoted local following.",
          menuHighlights: [
            "GF NY-Style Pizza - Foldable and crispy",
            "Grandma Slice - Square, thin, garlicky",
            "Seasonal Specials - Local ingredients",
            "House Salad - Simple and fresh"
          ],
          proTip: "Let them know you're celiac - they use fresh pans and cutters",
          icon: "🍕",
          featured: true,
          cuisineTypes: ["Pizza", "American"],
          celiacSafe: "trained-staff",
          menuType: "dedicated-menu",
          rating: 4.6,
          reviewCount: 394,
          certificationLevel: "Celiac-Aware - Separate Prep Protocols",
          userReviews: [
            {
              user: "Tom L.",
              rating: 5,
              comment: "Staff was super careful with my celiac order. The GF crust was honestly one of the best I've had.",
              date: "1 month ago"
            }
          ]
        },
        {
          name: "🌮 Verde Cocina – 100% Gluten-Free Mexican",
          locations: "Multiple Portland locations",
          address: "5246 N Mississippi Ave, Portland, OR 97217",
          phone: "+1 503-477-8107",
          hours: "Daily: 11:00 AM - 9:00 PM",
          website: "www.verdecocinamarket.com",
          directionsUrl: "https://maps.google.com/?q=Verde+Cocina+Portland",
          specialty: "Farm-to-table Mexican, tacos, bowls",
          overview: "A 100% gluten-free Mexican restaurant chain in Portland featuring farm-fresh ingredients, handmade corn tortillas, and creative seasonal dishes in a completely safe kitchen.",
          menuHighlights: [
            "Street Tacos - Handmade corn tortillas",
            "Enchiladas Verde - With roasted tomatillo sauce",
            "Farmer's Market Bowls - Seasonal vegetables",
            "Fresh Margaritas - Naturally gluten-free"
          ],
          proTip: "Everything on the menu is safe - order freely!",
          icon: "🌮",
          featured: true,
          cuisineTypes: ["Mexican", "Farm-to-Table"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 476,
          certificationLevel: "100% Gluten-Free Kitchen",
          userReviews: [
            {
              user: "Maria G.",
              rating: 5,
              comment: "So freeing to eat at a restaurant where EVERYTHING is safe. The tacos are fantastic!",
              date: "2 weeks ago"
            }
          ]
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: "Is the USA a good destination for gluten-free travelers?",
      answer: "Yes! The USA has one of the most developed gluten-free dining scenes in the world. Major cities like New York and Los Angeles have numerous 100% dedicated gluten-free restaurants and bakeries, and FDA labeling laws protect consumers nationwide."
    },
    {
      question: "Are there dedicated gluten-free restaurants in the USA?",
      answer: "Absolutely. New York City alone has several 100% gluten-free restaurants including Risotteria Melotti, Senza Gluten, and Noglu. Los Angeles is home to Erin McKenna's Bakery, a fully gluten-free and vegan bakery."
    },
    {
      question: "How do gluten-free labeling laws work in the USA?",
      answer: "The FDA requires that products labeled 'gluten-free' contain less than 20 parts per million of gluten. Many restaurants also undergo third-party certification such as GFCO (Gluten-Free Certification Organization)."
    },
    {
      question: "Which US city is most celiac-friendly?",
      answer: "New York City leads with the highest concentration of dedicated gluten-free restaurants. Los Angeles, Portland, Chicago, and Austin also have strong gluten-free dining scenes with health-conscious cultures."
    },
    {
      question: "Can I find gluten-free products in US supermarkets?",
      answer: "Yes! Chains like Whole Foods, Trader Joe's, and Sprouts stock extensive gluten-free ranges. Most major supermarkets have dedicated gluten-free sections with clear labeling."
    },
    {
      question: "How do I communicate celiac needs in American restaurants?",
      answer: "English is spoken everywhere, and celiac awareness is high. Simply tell your server you have celiac disease and need strict gluten-free preparation — most staff in major cities are trained on cross-contamination protocols."
    }
  ];

  const totalPlaces = cities.reduce((sum, c) => sum + c.restaurants.length, 0);

  return (
    <>
    <SEOHead
      title="Gluten-Free Options in the USA | Celiac-Safe Dining"
      description="Gluten free options across the USA: verified celiac-safe restaurants, bakeries and cafés in New York City, Los Angeles, Chicago, Portland and more."
      canonical="/usa"
    />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-red-600 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-red-600 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-red-600 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      <section
        className="relative py-12 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url(/images/usa-hero.webp?v=2)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇺🇸</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              {totalPlaces}+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Dedicated Gluten-Free Restaurants in the USA
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining from coast to coast.
              From New York's dedicated Italian kitchens to Chicago's GF deep dish and Portland's artisan bakeries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="#cities">
                <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
                  Explore Cities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <AddRestaurantDialog
                city="USA"
                triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="cities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
              <MapPin className="h-4 w-4 mr-2" />
              Explore by City
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Gluten-Free Cities in the USA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => {
              const avgRating = (city.restaurants.reduce((s, r) => s + (r.rating || 0), 0) / city.restaurants.length).toFixed(1);
              return (
                <Card
                  key={city.name}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                >
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-600 to-red-600">
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold text-sm">{avgRating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center text-red-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold text-sm">{city.restaurants.length} places</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                      <div className="flex flex-wrap gap-1">
                        {city.restaurants.slice(0, 3).map((r) => (
                          <Badge
                            key={r.name}
                            variant="secondary"
                            className="text-xs bg-red-50 text-red-700"
                          >
                            {r.name.replace(/^[^–]+–\s*/, "").split("–")[0].replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "").trim().slice(0, 20)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <a href={`#city-${city.name.replace(/\s+/g, "-").toLowerCase()}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                        Explore {city.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="restaurants" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
              <Star className="h-4 w-4 mr-2" />
              Top Rated
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Gluten-Free Restaurants in the USA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Verified celiac-safe dining spots with dedicated facilities and proven protocols
            </p>
          </div>

          {cities.map((city) => (
            <div key={city.name} id={`city-${city.name.replace(/\s+/g, "-").toLowerCase()}`} className="mb-12 scroll-mt-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-red-600" />
                {city.name}
              </h3>
              <div className="space-y-6">
                {city.restaurants.map((restaurant) => (
                  <Card key={restaurant.name} className="border-2 border-red-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{restaurant.icon}</span>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{restaurant.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(restaurant.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                  />
                                ))}
                              </div>
                              <span className="font-semibold text-sm">{restaurant.rating}</span>
                              <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.menuType === "fully-gluten-free" && (
                            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">100% Gluten-Free</Badge>
                          )}
                          {restaurant.cuisineTypes?.map((c) => (
                            <Badge key={c} variant="secondary" className="bg-red-50 text-red-700">{c}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-red-600" />
                          {restaurant.address}
                        </span>
                        {restaurant.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="h-4 w-4 text-red-600" />
                            {restaurant.phone}
                          </span>
                        )}
                        {restaurant.hours && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-red-600" />
                            {restaurant.hours}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 mb-4">{restaurant.overview}</p>

                      {restaurant.menuHighlights && restaurant.menuHighlights.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-900 mb-2">Menu Highlights:</p>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.menuHighlights.map((item) => (
                              <Badge key={item} variant="outline" className="text-xs border-red-200 text-gray-700">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {restaurant.proTip && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                          <p className="text-sm text-amber-800">
                            <span className="font-semibold">Pro Tip:</span> {restaurant.proTip}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3">
                        {restaurant.certificationLevel && (
                          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            <Shield className="h-3 w-3 mr-1" />
                            {restaurant.certificationLevel}
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        {restaurant.directionsUrl && (
                          <Button
                            onClick={() => openExternalLink(restaurant.directionsUrl)}
                            className="bg-red-700 hover:bg-red-800 text-white"
                          >
                            <MapPin className="h-4 w-4 mr-2" />
                            Get Directions
                          </Button>
                        )}
                        {restaurant.website && (
                          <Button
                            variant="outline"
                            onClick={() => openExternalLink(`https://${restaurant.website}`)}
                            className="border-red-200 text-red-700 hover:bg-red-50"
                          >
                            <Globe className="h-4 w-4 mr-2" />
                            Visit Website
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                <Award className="h-4 w-4 mr-2" />
                About
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in the USA</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Why the USA?</h3>
                <p className="text-gray-600 mb-4">
                  The USA is a world leader in gluten-free dining. With FDA labeling laws, widespread celiac
                  awareness, and dedicated GF restaurants in every major city, gluten-free travelers can explore with confidence.
                </p>
                <p className="text-gray-600">
                  New York City pioneered the dedicated gluten-free restaurant movement, while Los Angeles combines
                  health-conscious culture with innovative GF bakeries and cafes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Look for GFCO-certified products and restaurants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>FDA rules require "gluten-free" labels to mean under 20ppm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Dedicated GF facilities eliminate cross-contamination risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Always mention celiac disease when ordering, not just "gluten-free preference"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-red-600" />
              <h2 className="text-lg font-semibold text-gray-900">Trust & Safety</h2>
            </div>
            <p className="text-gray-600">
              All restaurants are verified by our community of celiac travelers. We prioritize dedicated gluten-free
              facilities and restaurants with proven celiac protocols. Always communicate your dietary needs directly with restaurant staff.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Everything you need to know about gluten-free dining in the USA</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Know a Great GF Spot in the USA?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Help fellow celiac travelers discover safe dining options across America. Submit a restaurant to our growing directory.
          </p>
          <AddRestaurantDialog city="USA" triggerClassName="bg-white text-red-700 hover:bg-red-50 text-lg px-8 py-3" />
        </div>
      </section>
    </div>
    </>
  );
};

export default USA;
