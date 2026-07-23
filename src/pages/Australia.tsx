import { useEffect } from "react";
import { MapPin, Star, Utensils, ArrowLeft, ArrowRight, Phone, Clock, Globe, CheckCircle, Navigation, MessageCircle, Camera, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

const Australia = () => {
  const faqItems = [
    {
      question: "Is Australia a good destination for gluten-free travelers?",
      answer: "Yes! Australia is one of the most celiac-friendly countries in the world. Coeliac Australia certification is widely recognised, and dedicated gluten-free bakeries and cafes are common in major cities."
    },
    {
      question: "What does Coeliac Australia certification mean?",
      answer: "Coeliac Australia accreditation means a venue follows strict gluten-free protocols, including ingredient control, staff training and separate preparation areas to prevent cross-contamination."
    },
    {
      question: "Are there dedicated gluten-free bakeries in Australia?",
      answer: "Absolutely! Wholegreen Bakery (Melbourne), BAKED Gluten Free (Perth), Glazed Gluten Free Patisserie (Brisbane) and Sebastien Sans Gluten (Sydney) are all 100% dedicated gluten-free facilities."
    },
    {
      question: "How do I communicate my celiac needs in Australia?",
      answer: "English is spoken everywhere, so simply tell staff you have celiac disease and need gluten-free food. Most venues understand cross-contamination and many menus clearly label GF items."
    },
    {
      question: "Which Australian city is most celiac-friendly?",
      answer: "Melbourne and Sydney lead with the largest number of dedicated GF venues, but Brisbane and Perth also have excellent dedicated bakeries and celiac-aware restaurants."
    },
    {
      question: "Can I find gluten-free products in Australian supermarkets?",
      answer: "Yes — Coles and Woolworths stock extensive gluten-free ranges, and health food stores carry specialty products. Australian labelling laws make allergen information clear and reliable."
    }
  ];

  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Gluten-Free Restaurants in Australia | Celiac-Safe Dining Guide");
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across Australia. Browse by city, read real reviews, and find safe dining nationwide.");

    const existingSchema = document.querySelector('script[data-schema="australia-gf"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'australia-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in Australia",
      description: "Find the best gluten-free restaurants across Australia. Verified celiac-safe dining in Sydney, Melbourne, Brisbane, Perth & more.",
      url: "https://glutenfreeplace.org/australia",
      mainEntity: {
        "@type": "ItemList",
        name: "Top Gluten-Free Cities in Australia",
        numberOfItems: 4,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Sydney" },
          { "@type": "ListItem", position: 2, name: "Melbourne" },
          { "@type": "ListItem", position: 3, name: "Brisbane" },
          { "@type": "ListItem", position: 4, name: "Perth" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="australia-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'australia-faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.querySelector('script[data-schema="australia-gf"]')?.remove();
      document.querySelector('script[data-schema="australia-faq"]')?.remove();
    };
  }, []);

  const cityCards = [
    {
      name: "Sydney",
      image: "photo-1506973035872-a4ec16b8e8d9",
      places: 3,
      rating: 4.7,
      description: "Harbour city with dedicated GF patisseries and beachside cafes",
      highlights: ["Sebastien Sans Gluten", "Noglu", "The Little Kitchen"]
    },
    {
      name: "Melbourne",
      image: "photo-1514395462725-fb4566210144",
      places: 2,
      rating: 4.9,
      description: "Laneway culture with Australia's best dedicated GF bakery",
      highlights: ["Wholegreen Bakery", "Duke of Brunswick"]
    },
    {
      name: "Brisbane",
      image: "photo-1572125675722-238a4f1f4ea2",
      places: 3,
      rating: 4.8,
      description: "Riverside dining with artisan GF patisseries and fresh seafood",
      highlights: ["Glazed GF Patisserie", "Nodo", "Urban Fish Market"]
    },
    {
      name: "Perth",
      image: "photo-1524293581917-878a6d017c71",
      places: 2,
      rating: 4.8,
      description: "Sunny west coast with dedicated GF bakeries and specialty coffee",
      highlights: ["BAKED Gluten Free", "Straight Up Coffee"]
    }
  ];

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
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Australia | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants in Australia. Coeliac Australia certified cafes, bakeries & restaurants in Sydney, Melbourne, Brisbane, Perth."
      canonical="/australia"
    />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-700" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-gray-700 to-green-600 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-700 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-blue-700 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-blue-700 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-blue-700 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-blue-700 via-white/10 to-green-600">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇦🇺</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              Coeliac Australia Certified
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free Australia
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining across Australia — from Sydney's
              waterfront patisseries to Melbourne's laneway bakeries and Perth's sunny cafes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#cities">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Explore Cities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <AddRestaurantDialog
                city="Australia"
                triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="cities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <MapPin className="h-4 w-4 mr-2" />
              Explore by City
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Gluten-Free Cities in Australia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityCards.map((city, index) => (
              <a
                key={city.name}
                href={
                  city.name.toLowerCase() === "sydney"
                    ? "/gluten-free/australia/sydney"
                    : `#city-${city.name.toLowerCase()}`
                }
              >

                <Card
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                      alt={`Gluten-free restaurants in ${city.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold text-sm">{city.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-gray-600 text-sm mb-3">{city.description}</p>
                    <div className="flex items-center text-blue-700 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold text-sm">{city.places} places</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                      <div className="flex flex-wrap gap-1">
                        {city.highlights.map((spot) => (
                          <Badge
                            key={spot}
                            variant="secondary"
                            className="text-xs bg-blue-50 text-blue-700"
                          >
                            {spot}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      Explore {city.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {cities.map((city, cityIndex) => (
              <div key={city.name} id={`city-${city.name.toLowerCase()}`} className="animate-fade-in scroll-mt-24" style={{ animationDelay: `${cityIndex * 0.1}s` }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                  {city.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.restaurants.map((restaurant, index) => (
                    <Card key={restaurant.name} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-red-200 shadow-md animate-fade-in ${restaurant.featured ? 'md:col-span-2 lg:col-span-3 ring-2 ring-red-300' : ''}`} style={{ animationDelay: `${(cityIndex * 0.1) + (index * 0.05)}s` }}>
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
                                  onClick={() => window.open(restaurant.directionsUrl, '_blank', 'noopener,noreferrer')}
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
                        <div className="mt-4 pt-4 border-t border-gray-100 space-y-1 text-sm">
                          <div><span className="font-bold text-gray-900">Bakery:</span></div>
                          <div><span className="font-bold text-gray-900">Coffee Shop:</span></div>
                          <div><span className="font-bold text-gray-900">Grocery store:</span></div>
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

      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                <Award className="h-4 w-4 mr-2" />
                About
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in Australia</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Australia?</h3>
                <p className="text-gray-600 mb-4">
                  Australia is one of the world's most celiac-friendly countries. Coeliac Australia
                  certification is widely recognised, and dedicated gluten-free bakeries and cafes are
                  common across Sydney, Melbourne, Brisbane and Perth.
                </p>
                <p className="text-gray-600">
                  Strict Australian food labelling laws ensure clear allergen information, making it
                  straightforward to dine and shop with confidence nationwide.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Look for Coeliac Australia accreditation for strict GF protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Many cafes use separate GF toasters and preparation areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Always inform staff of celiac disease when ordering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Coles and Woolworths stock extensive gluten-free ranges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">FAQ</Badge>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              {faqItems.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="px-6">
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Australia;
