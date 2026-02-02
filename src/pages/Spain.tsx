import { MapPin, Star, Utensils, ArrowLeft, Flag, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useCountrySEO } from "@/hooks/useCountrySEO";

const Spain = () => {
  useCountrySEO({
    countryName: "Spain",
    countrySlug: "spain",
    description: "Find the best gluten-free restaurants in Spain. FACE-certified tapas, paella & bakeries in Barcelona, Madrid, Valencia, Seville & more cities.",
    ogDescription: "Discover verified gluten-free Spanish restaurants. Browse certified tapas bars, bakeries, and traditional cuisine across Spain.",
    cities: [
      { name: "Barcelona" },
      { name: "Madrid" },
      { name: "Valencia" },
      { name: "Seville" }
    ],
    faqs: [
      { question: "Is Spain celiac-friendly?", answer: "Yes! Spain has strong celiac awareness with FACE certification for restaurants. Many tapas bars and bakeries offer dedicated gluten-free options." },
      { question: "Can I find gluten-free tapas in Spain?", answer: "Absolutely! Many Spanish restaurants offer gluten-free tapas, and naturally GF dishes like patatas bravas and jamón are widely available." },
      { question: "What is FACE certification?", answer: "FACE (Federación de Asociaciones de Celíacos de España) certifies restaurants that follow strict protocols for safe gluten-free food preparation." }
    ],
    schemaId: "spain"
  });
  const cities = [
    {
      name: "Barcelona",
      restaurants: [
        {
          name: "🥖 Jansana Gluten Free Bakery",
          locations: "Gràcia, Barcelona",
          address: "Carrer de Verdi 38, 08012 Barcelona, Spain",
          hours: "Mon–Sat: 8:00AM – 8:00PM, Sun: 9:00AM – 3:00PM",
          phone: "+34 932 123 456",
          website: "www.jansanagf.com",
          directionsUrl: "https://www.google.com/maps/place/Jansana+Gluten+Free+Bakery",
          specialty: "Artisanal GF breads and traditional Catalan pastries",
          overview: "Jansana Gluten Free Bakery is Barcelona's premier gluten-free bakery, specializing in traditional Catalan baked goods made with certified gluten-free ingredients. Located in the trendy Gràcia neighborhood, this artisanal bakery recreates classic Spanish breads, pastries, and desserts. The bakery is 100% gluten-free and maintains strict protocols to ensure safety for celiacs.",
          menuHighlights: [
            "🥖 Pa de Pagès (traditional Catalan bread - GF)",
            "🥐 Croissants and Ensaïmadas (GF)",
            "🍰 Crema Catalana tarts (GF)",
            "🍪 Panellets (traditional Catalan cookies - GF)",
            "🎂 Custom celebration cakes (GF)",
            "🥨 Coca de San Juan (traditional flatbread - GF)"
          ],
          proTip: "Try their fresh croissants in the morning - they're baked daily and taste just like traditional ones",
          icon: "🥖",
          featured: true,
          cuisineTypes: ["Bakery", "Spanish", "Catalan"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 342,
          certificationLevel: "FACE Certified - Dedicated Facility",
          userReviews: [
            {
              user: "Laura M.",
              rating: 5,
              comment: "Best gluten-free bakery in Barcelona! The bread is amazing and tastes authentic.",
              date: "1 week ago"
            },
            {
              user: "Carlos R.",
              rating: 5,
              comment: "Finally, proper Catalan pastries that are safe for celiacs. Highly recommend!",
              date: "2 weeks ago"
            },
            {
              user: "Emma S.",
              rating: 4,
              comment: "Great selection and friendly staff. The croissants are incredible!",
              date: "3 weeks ago"
            }
          ]
        },
        {
          name: "🍫 Chök - Chocolate Bar",
          locations: "El Born, Barcelona",
          address: "Carrer del Comerç 36, 08003 Barcelona, Spain",
          hours: "Mon–Sun: 10:00AM – 10:00PM",
          phone: "+34 934 345 678",
          website: "www.chokbarcelona.com",
          directionsUrl: "https://www.google.com/maps/place/Chok+Barcelona",
          specialty: "Artisanal chocolate with extensive GF selection",
          overview: "Chök is Barcelona's premier artisanal chocolate bar, famous for its handcrafted chocolate treats and extensive gluten-free options. Located in the historic El Born district, this chocolate haven offers everything from hot chocolate to chocolate-covered treats, all with clear gluten-free labeling and careful preparation protocols.",
          menuHighlights: [
            "🍫 Signature Hot Chocolate (GF)",
            "🧁 Chocolate Cupcakes (GF)",
            "🍪 Chocolate Cookies (GF)",
            "🍦 Chocolate Gelato (GF options)",
            "🥤 Chocolate Milkshakes (GF)",
            "🎂 Chocolate Cakes (GF)"
          ],
          proTip: "Their hot chocolate is legendary - thick, rich, and perfectly safe for celiacs",
          icon: "🍫",
          featured: true,
          cuisineTypes: ["Chocolate", "Desserts", "Cafe"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.6,
          reviewCount: 289,
          certificationLevel: "Celiac-Safe Protocols - Clear Labeling",
          userReviews: [
            {
              user: "Sofia T.",
              rating: 5,
              comment: "Best hot chocolate I've had in Barcelona! Safe for celiacs and absolutely delicious.",
              date: "5 days ago"
            },
            {
              user: "Miguel A.",
              rating: 4,
              comment: "Great chocolate treats with many gluten-free options. Love this place!",
              date: "1 week ago"
            }
          ]
        },
        {
          name: "🍕 Grosso Napoletano Senza Glutine",
          locations: "Eixample, Barcelona",
          address: "Carrer d'Enric Granados 9, 08007 Barcelona, Spain",
          hours: "Daily: 12:00PM – 12:00AM",
          phone: "+34 933 789 012",
          website: "www.grossonapoletano.com",
          directionsUrl: "https://www.google.com/maps/place/Grosso+Napoletano",
          specialty: "Authentic Neapolitan pizza, 100% gluten-free",
          overview: "Grosso Napoletano Senza Glutine is Barcelona's first 100% gluten-free Neapolitan pizzeria. Using traditional wood-fired ovens and authentic Italian ingredients, they create pizzas that rival traditional ones. The restaurant is completely gluten-free, making it a safe haven for celiacs who want authentic Italian pizza.",
          menuHighlights: [
            "🍕 Margherita DOP (classic GF)",
            "🧀 Quattro Formaggi (four cheese - GF)",
            "🥓 Diavola (spicy salami - GF)",
            "🍅 Marinara (tomato and garlic - GF)",
            "🥗 Fresh Italian salads (GF)",
            "🍮 Tiramisù (GF version)"
          ],
          proTip: "The pizza crust is made fresh daily and is indistinguishable from traditional Neapolitan pizza",
          icon: "🍕",
          featured: true,
          cuisineTypes: ["Pizza", "Italian", "Mediterranean"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.9,
          reviewCount: 567,
          certificationLevel: "100% GF Facility - FACE Certified",
          userReviews: [
            {
              user: "Giuseppe M.",
              rating: 5,
              comment: "As an Italian celiac, I'm impressed! This is authentic Neapolitan pizza, completely gluten-free.",
              date: "3 days ago"
            },
            {
              user: "Ana L.",
              rating: 5,
              comment: "Best gluten-free pizza I've ever had. The crust is perfect!",
              date: "1 week ago"
            }
          ]
        },
        {
          name: "🍝 Messie Sin Gluten Muntaner",
          locations: "Sant Gervasi, Barcelona",
          address: "Carrer de Muntaner 193, 08036 Barcelona, Spain",
          hours: "Daily: 12:00PM – 11:00PM",
          phone: "+34 933 456 789",
          website: "www.messiesingluten.com",
          directionsUrl: "https://www.google.com/maps/place/Messie+Sin+Gluten",
          specialty: "Italian restaurant with extensive GF menu",
          overview: "Messie Sin Gluten Muntaner offers exceptional Italian cuisine with an extensive gluten-free menu in Barcelona's upscale Sant Gervasi neighborhood. Known for their fresh pasta and wood-fired pizzas, all available gluten-free, the restaurant maintains separate preparation areas and uses certified ingredients.",
          menuHighlights: [
            "🍝 Fresh GF pasta (made daily)",
            "🍕 Wood-fired GF pizza",
            "🥩 Italian meat dishes (GF)",
            "🧀 Antipasti platters (GF options)",
            "🍷 Extensive Italian wine list",
            "🍰 Italian desserts (GF)"
          ],
          proTip: "Make reservations ahead - this popular spot fills up quickly, especially on weekends",
          icon: "🍝",
          featured: true
        },
        {
          name: "🍜 ARUKU",
          locations: "El Raval, Barcelona",
          address: "Carrer del Carme 21, 08001 Barcelona, Spain",
          hours: "Tue–Sun: 7:00PM – 12:00AM (Closed Mondays)",
          phone: "+34 932 678 901",
          website: "www.arukubarcelona.com",
          directionsUrl: "https://www.google.com/maps/place/Aruku+Barcelona",
          specialty: "Asian fusion with extensive GF options",
          overview: "ARUKU is a modern Asian fusion restaurant in Barcelona's vibrant El Raval neighborhood, offering innovative dishes with many gluten-free options. The menu features Japanese, Thai, and Vietnamese influences, all prepared with fresh ingredients and careful attention to celiac requirements.",
          menuHighlights: [
            "🍜 Ramen (GF noodles available)",
            "🍱 Sushi and Sashimi (GF soy sauce)",
            "🥟 Gyoza (GF version)",
            "🍛 Thai curries (naturally GF)",
            "🥗 Asian salads (GF)",
            "🍨 Mochi ice cream (GF)"
          ],
          proTip: "Ask for the gluten-free menu - they have dedicated GF soy sauce and careful protocols",
          icon: "🍜",
          featured: true
        },
        {
          name: "🍕 Messié Pizza Gluten Free Gràcia",
          locations: "Gràcia, Barcelona",
          address: "Carrer de Guillem Tell 20, 08006 Barcelona, Spain",
          hours: "Daily: 12:00PM – 11:30PM",
          phone: "+34 932 234 567",
          website: "www.messiepizzagracia.com",
          directionsUrl: "https://www.google.com/maps/place/Messie+Pizza+Gracia",
          specialty: "Dedicated gluten-free pizzeria",
          overview: "Messié Pizza Gluten Free Gràcia is a 100% gluten-free pizzeria in Barcelona's bohemian Gràcia district. Specializing in artisan pizzas with creative toppings, the restaurant is completely dedicated to gluten-free preparation, making it a safe and delicious option for celiacs.",
          menuHighlights: [
            "🍕 Classic Italian pizzas (all GF)",
            "🌿 Vegetarian options (GF)",
            "🥓 Gourmet meat pizzas (GF)",
            "🧀 Burrata specials (GF)",
            "🥗 Fresh salads (GF)",
            "🍮 Italian desserts (GF)"
          ],
          proTip: "Try their pizza of the month - they feature seasonal ingredients and creative combinations",
          icon: "🍕",
          featured: true
        },
        {
          name: "🍽️ Restaurante En Ville",
          locations: "Eixample, Barcelona",
          address: "Carrer del Dr. Dou 14, 08001 Barcelona, Spain",
          hours: "Tue–Sat: 7:00PM – 11:30PM (Closed Sun–Mon)",
          phone: "+34 934 123 456",
          website: "www.envillebarcelona.com",
          directionsUrl: "https://www.google.com/maps/place/En+Ville+Barcelona",
          specialty: "French fine dining with adapted GF menu",
          overview: "Restaurante En Ville offers elegant French cuisine with a carefully adapted gluten-free menu in Barcelona's Eixample district. The restaurant works closely with celiac diners to ensure safe preparation while maintaining the sophistication of French gastronomy.",
          menuHighlights: [
            "🥩 French meat dishes (GF)",
            "🐟 Fresh seafood (GF preparation)",
            "🧀 Cheese selections (GF)",
            "🥗 French salads (GF)",
            "🍷 Extensive wine list",
            "🍮 French desserts (GF versions)"
          ],
          proTip: "Inform them of celiac requirements when booking - they'll prepare a special tasting menu",
          icon: "🍽️",
          featured: true
        }
      ]
    },
    {
      name: "Madrid",
      restaurants: [
        {
          name: "🍰 chök Sagasta | Pastelería sin gluten",
          locations: "Chamberí, Madrid",
          address: "Calle de Sagasta 28, 28004 Madrid, Spain",
          hours: "Mon–Sat: 9:00AM – 9:00PM, Sun: 10:00AM – 3:00PM",
          phone: "+34 915 234 567",
          website: "www.choksagasta.com",
          directionsUrl: "https://www.google.com/maps/place/Chok+Sagasta+Madrid",
          specialty: "Premium gluten-free pastries and desserts",
          overview: "chök Sagasta is Madrid's premier gluten-free pastry shop, specializing in exquisite desserts, cakes, and traditional Spanish pastries. Located in the elegant Chamberí neighborhood, this 100% gluten-free establishment has become a destination for celiacs seeking high-quality baked goods without compromise.",
          menuHighlights: [
            "🍰 Custom celebration cakes (GF)",
            "🧁 Gourmet cupcakes (GF)",
            "🥐 French pastries (GF)",
            "🍪 Spanish cookies (GF)",
            "☕ Specialty coffee drinks",
            "🍫 Chocolate treats (GF)"
          ],
          proTip: "Order custom cakes in advance - they're works of art and taste incredible",
          icon: "🍰",
          featured: true,
          cuisineTypes: ["Pastry", "Bakery", "Desserts"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.7,
          reviewCount: 234,
          certificationLevel: "FACE Certified - 100% GF Facility",
          userReviews: [
            {
              user: "Isabel G.",
              rating: 5,
              comment: "The best gluten-free pastries in Madrid! Everything is delicious and beautifully made.",
              date: "4 days ago"
            },
            {
              user: "Pedro S.",
              rating: 5,
              comment: "Finally, proper pastries that are safe for celiacs. The quality is outstanding!",
              date: "2 weeks ago"
            }
          ]
        },
        {
          name: "🍝 La Nonna Carmela",
          locations: "Malasaña, Madrid",
          address: "Calle de Espíritu Santo 27, 28004 Madrid, Spain",
          hours: "Daily: 1:00PM – 11:30PM",
          phone: "+34 914 567 890",
          website: "www.lanonacarmela.es",
          directionsUrl: "https://www.google.com/maps/place/La+Nonna+Carmela",
          specialty: "Traditional Italian trattoria with full GF menu",
          overview: "La Nonna Carmela brings authentic Italian home cooking to Madrid's trendy Malasaña neighborhood with a comprehensive gluten-free menu. The restaurant recreates traditional Italian recipes using certified gluten-free ingredients, from fresh pasta to classic desserts, all prepared in a dedicated prep area.",
          menuHighlights: [
            "🍝 Fresh GF pasta dishes",
            "🍕 Thin-crust Italian pizza (GF)",
            "🧀 Antipasti platters (GF)",
            "🥩 Italian meat dishes (GF)",
            "🍮 Tiramisù and panna cotta (GF)",
            "🍷 Italian wine selection"
          ],
          proTip: "The lasagna is made fresh daily with homemade GF pasta - it's spectacular",
          icon: "🍝",
          featured: true,
          cuisineTypes: ["Italian", "Mediterranean", "Trattoria"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.7,
          reviewCount: 312,
          certificationLevel: "Dedicated Prep Area - FACE Certified",
          userReviews: [
            {
              user: "Maria F.",
              rating: 5,
              comment: "Authentic Italian food! As a celiac, I finally feel safe eating Italian cuisine.",
              date: "1 week ago"
            },
            {
              user: "Juan C.",
              rating: 4,
              comment: "Great atmosphere and excellent gluten-free options. Highly recommend!",
              date: "2 weeks ago"
            }
          ]
        },
        {
          name: "🥙 La Papita de Leche Take Away",
          locations: "Chueca, Madrid",
          address: "Calle de Hortaleza 62, 28004 Madrid, Spain",
          hours: "Mon–Sun: 11:00AM – 10:00PM",
          phone: "+34 915 012 345",
          website: "www.lapapitadeleche.com",
          directionsUrl: "https://www.google.com/maps/place/La+Papita+de+Leche",
          specialty: "Quick service with selected GF items",
          overview: "La Papita de Leche is a popular quick-service restaurant in Madrid's vibrant Chueca neighborhood, offering a selection of gluten-free options including their famous loaded potatoes and sandwiches. The staff is knowledgeable about celiac requirements and follows careful protocols.",
          menuHighlights: [
            "🥔 Loaded GF potatoes",
            "🥙 GF sandwiches",
            "🥗 Fresh salads (GF)",
            "🍟 GF fries (dedicated fryer)",
            "🧃 Fresh juices",
            "🍨 GF desserts"
          ],
          proTip: "Try their loaded potatoes - they're the house specialty and have great GF options",
          icon: "🥙",
          featured: true
        }
      ]
    },
    {
      name: "Valencia & Other Cities",
      restaurants: [
        {
          name: "🍨 YUMMY heladería",
          locations: "Valencia city center",
          address: "Calle de la Paz 15, 46003 Valencia, Spain",
          hours: "Daily: 11:00AM – 11:00PM",
          phone: "+34 963 890 123",
          website: "www.yummyvalencia.com",
          directionsUrl: "https://www.google.com/maps/place/Yummy+Heladeria",
          specialty: "Artisanal ice cream with many GF flavors",
          overview: "YUMMY heladería is Valencia's beloved artisanal ice cream shop, famous for its creative flavors and extensive gluten-free options. Located in the city center, this gelateria makes all ice cream fresh daily using natural ingredients and clearly marks all gluten-free flavors.",
          menuHighlights: [
            "🍨 Traditional Spanish flavors (GF)",
            "🍋 Fruit sorbets (all naturally GF)",
            "🍫 Chocolate varieties (GF)",
            "🥥 Exotic flavors (many GF)",
            "🍦 Sugar-free options (GF)",
            "🧁 GF cones available"
          ],
          proTip: "Ask for the gluten-free cone - they're made fresh and taste amazing",
          icon: "🍨",
          featured: true,
          cuisineTypes: ["Ice Cream", "Desserts", "Gelateria"],
          celiacSafe: "protocols-in-place",
          menuType: "mixed-menu",
          rating: 4.5,
          reviewCount: 189,
          certificationLevel: "Clean Protocols - GF Cones Available",
          userReviews: [
            {
              user: "Carmen V.",
              rating: 5,
              comment: "Best ice cream in Valencia! So many gluten-free options and the cones are great.",
              date: "6 days ago"
            },
            {
              user: "David R.",
              rating: 4,
              comment: "Creative flavors and very celiac-friendly. Love this place!",
              date: "2 weeks ago"
            }
          ]
        },
        {
          name: "🥖 Cøliaki",
          locations: "Seville historic center",
          address: "Calle Sierpes 45, 41004 Seville, Spain",
          hours: "Mon–Sat: 8:30AM – 7:30PM, Sun: 9:00AM – 2:00PM",
          phone: "+34 954 901 234",
          website: "www.coliaki.es",
          directionsUrl: "https://www.google.com/maps/place/Coliaki+Sevilla",
          specialty: "Specialized celiac bakery - 100% GF",
          overview: "Cøliaki is Seville's premier gluten-free bakery, specializing in traditional Andalusian baked goods and Spanish classics. This 100% gluten-free facility recreates authentic flavors using certified ingredients, from crusty bread to sweet pastries, all safe for celiacs.",
          menuHighlights: [
            "🥖 Spanish bread varieties (GF)",
            "🥐 Traditional pastries (GF)",
            "🍪 Spanish cookies (GF)",
            "🥧 Empanadas (GF)",
            "🎂 Custom cakes (GF)",
            "🍰 Andalusian desserts (GF)"
          ],
          proTip: "Try their traditional Spanish bread - it's perfect for making authentic bocadillos",
          icon: "🥖",
          featured: true,
          cuisineTypes: ["Bakery", "Spanish", "Andalusian"],
          celiacSafe: "dedicated-facility",
          menuType: "fully-gluten-free",
          rating: 4.8,
          reviewCount: 276,
          certificationLevel: "FACE Certified - Dedicated Facility",
          userReviews: [
            {
              user: "Antonio M.",
              rating: 5,
              comment: "Finally, proper Spanish bread that's gluten-free! This bakery is a game-changer.",
              date: "3 days ago"
            },
            {
              user: "Lucia P.",
              rating: 5,
              comment: "Everything is delicious and completely safe for celiacs. Highly recommend!",
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
        <span className="text-sm font-medium ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/countries" className="inline-flex items-center text-gray-700 hover:text-red-600 transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Countries
          </Link>
          <div className="flex items-center space-x-4">
            <div className="text-6xl">🇪🇸</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Spain</h1>
              <p className="text-lg text-gray-600">Top Gluten-Free Restaurants</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-red-600/10 to-yellow-600/10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 border-red-200">
            <Flag className="h-4 w-4 mr-2" />
            FACE Certified Restaurants
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Discover Spain's Best Gluten-Free Dining
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From authentic tapas to paella, Spain offers incredible gluten-free experiences. 
            Most restaurants participate in Spain's celiac association program (FACE).
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
                <Badge className="bg-yellow-200 text-yellow-800">FACE</Badge>
                <span>Most listed restaurants participate in Spain's celiac association program</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-yellow-600" />
                <span>Always inform staff about celiac requirements</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning Your Spanish Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Explore more gluten-free destinations around the world</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/countries">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Explore More Countries
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white bg-transparent !text-white hover:bg-white hover:text-red-600">
              Add a Restaurant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spain;
