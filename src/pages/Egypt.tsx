import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { EgyptRestaurantList } from "@/components/egypt/EgyptRestaurantList";
import { SEOHead } from "@/components/SEOHead";

const Egypt = () => {
const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in Egypt | Celiac-Safe Dining Guide");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across Egypt. Browse by city, read real reviews, and find safe dining along the Nile and beyond.");
    }

    const existingSchema = document.querySelector('script[data-schema="egypt-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'egypt-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Egypt",
      "description": "Find the best gluten-free restaurants across Egypt. Verified celiac-safe dining in Cairo, Alexandria, Giza, Sharm El Sheikh, Hurghada & Luxor.",
      "url": "https://glutenfreeplace.org/gluten-free/egypt",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Top Gluten-Free Cities in Egypt",
        "numberOfItems": 6,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Cairo", "url": "https://glutenfreeplace.org/gluten-free/egypt?city=Cairo" },
          { "@type": "ListItem", "position": 2, "name": "Alexandria", "url": "https://glutenfreeplace.org/gluten-free/egypt?city=Alexandria" },
          { "@type": "ListItem", "position": 3, "name": "Giza", "url": "https://glutenfreeplace.org/gluten-free/egypt?city=Giza" },
          { "@type": "ListItem", "position": 4, "name": "Sharm El Sheikh", "url": "https://glutenfreeplace.org/gluten-free/egypt?city=Sharm+El+Sheikh" },
          { "@type": "ListItem", "position": 5, "name": "Hurghada", "url": "https://glutenfreeplace.org/gluten-free/egypt?city=Hurghada" },
          { "@type": "ListItem", "position": 6, "name": "Luxor", "url": "https://glutenfreeplace.org/gluten-free/egypt?city=Luxor" }
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "Countries", "item": "https://glutenfreeplace.org/countries" },
          { "@type": "ListItem", "position": 3, "name": "Egypt", "item": "https://glutenfreeplace.org/gluten-free/egypt" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="egypt-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'egypt-faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Egypt a good destination for gluten-free travelers?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes! Egypt offers many naturally gluten-free dishes such as grilled meats, rice, ful medames (fava beans), and fresh vegetables. Major tourist areas like Cairo and Sharm El Sheikh have international restaurants with GF awareness." }
        },
        {
          "@type": "Question",
          "name": "What traditional Egyptian foods are naturally gluten-free?",
          "acceptedAnswer": { "@type": "Answer", "text": "Many staples are naturally GF including ful medames, koshari (be cautious of pasta), grilled kebabs, rice dishes, stuffed vine leaves (warak enab), and fresh salads like fattoush (without bread). Always confirm preparation methods." }
        },
        {
          "@type": "Question",
          "name": "How do I communicate celiac needs in Egyptian restaurants?",
          "acceptedAnswer": { "@type": "Answer", "text": "In tourist areas, English is widely understood. Learning 'bidun gluten' (without gluten) in Arabic helps. High-end hotels and international restaurants typically understand celiac requirements well." }
        },
        {
          "@type": "Question",
          "name": "Which Egyptian city is most celiac-friendly?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cairo leads with the most international dining options and health-conscious restaurants. Sharm El Sheikh and Hurghada, being major resort destinations, also have hotels with excellent GF buffet options." }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="egypt-gf"]');
      if (schemaToRemove) schemaToRemove.remove();
      const faqSchemaToRemove = document.querySelector('script[data-schema="egypt-faq"]');
      if (faqSchemaToRemove) faqSchemaToRemove.remove();
    };
  }, []);

  const cities = [
    {
      name: "Cairo",
      image: "photo-1572252009286-268acec5ca0a",
      places: 13,
      rating: 4.5,
      description: "Egypt's bustling capital with diverse international dining and growing GF awareness",
      route: "/gluten-free/egypt/cairo",
      highlights: ["The Gluten Free House", "Keto Rockets", "Birdcage"]
    },
    {
      name: "Alexandria",
      image: "photo-1568322503122-d1d246827de2",
      places: 3,
      rating: 4.4,
      description: "Mediterranean coastal city with fresh seafood and naturally GF Greek-influenced cuisine",
      route: "/gluten-free/egypt/alexandria",
      highlights: ["Mohamed Ahmed", "Délices Patisserie", "Royal Jewel"]
    },
    {
      name: "Giza",
      image: "photo-1539650116574-8efeb43e2750",
      places: 5,
      rating: 4.4,
      description: "Home of the Pyramids with tourist-friendly restaurants offering GF options",
      route: "/gluten-free/egypt/giza",
      highlights: ["The Moghul Room", "Dolato Gelateria", "Gourmet"]
    },
    {
      name: "Sharm El Sheikh",
      image: "photo-1548690590-d0b752fcf418",
      places: 7,
      rating: 4.3,
      description: "Premier Red Sea resort with all-inclusive hotels offering excellent GF buffets",
      route: "/gluten-free/egypt/sharm-el-sheikh",
      highlights: ["Hard Rock Cafe", "Akuna Matata", "Xperience Kiroseiz"]
    },
    {
      name: "Hurghada",
      image: "photo-1580674684081-7617fbf3d745",
      places: 12,
      rating: 4.4,
      description: "Popular beach destination where resort dining caters to gluten-free guests",
      route: "/gluten-free/egypt/hurghada",
      highlights: ["Nicole's Greenhouse", "Jaz Aquamarine", "German Bakery"]
    },
    {
      name: "Luxor",
      image: "photo-1568322503122-d1d246827de2",
      places: 7,
      rating: 4.3,
      description: "Ancient city on the Nile with traditional eateries and hotel restaurants with GF menus",
      route: "/gluten-free/egypt/luxor",
      highlights: ["Steigenberger Resort", "Snobs Restaurant", "Café Maratonga"]
    }
  ];

  const faqItems = [
    {
      question: "Is Egypt a good destination for gluten-free travelers?",
      answer: "Yes! Egypt offers many naturally gluten-free dishes such as grilled meats, rice, ful medames (fava beans), and fresh vegetables. Major tourist areas like Cairo and Sharm El Sheikh have international restaurants with growing GF awareness."
    },
    {
      question: "What traditional Egyptian foods are naturally gluten-free?",
      answer: "Many staples are naturally GF including ful medames (stewed fava beans), grilled kebabs and kofta, rice dishes, stuffed vine leaves (warak enab), molokhia soup, and fresh salads. Be cautious with koshari (contains pasta) and aish baladi (Egyptian bread)."
    },
    {
      question: "Are there dedicated gluten-free bakeries in Egypt?",
      answer: "Dedicated GF bakeries are still emerging in Egypt. However, Cairo has health food stores and specialty shops that stock gluten-free products. Many high-end hotels bake GF bread on request for celiac guests."
    },
    {
      question: "How do I communicate my celiac needs in Egyptian restaurants?",
      answer: "In tourist areas, English is widely understood. Learning 'bidun gluten' (بدون جلوتن — without gluten) in Arabic helps greatly. High-end hotels, international restaurants, and resort buffets typically understand celiac requirements well."
    },
    {
      question: "Which Egyptian city is most celiac-friendly?",
      answer: "Cairo leads with the most diverse international dining options and health-conscious restaurants. Sharm El Sheikh and Hurghada, as major resort destinations, also excel with hotels offering dedicated GF buffet stations."
    },
    {
      question: "Can I find gluten-free products in Egyptian supermarkets?",
      answer: "Yes, though selection varies. Cairo's larger supermarkets like Carrefour and Seoudi stock some imported GF products. Health food stores in Zamalek and Maadi neighborhoods have better selections. Stock up before traveling to smaller cities."
    }
  ];

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Egypt | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants across Egypt. Verified celiac-safe dining in Cairo, Alexandria, Giza, Sharm El Sheikh, Hurghada & Luxor. Real reviews from GF travelers."
      canonical="/gluten-free/egypt"
    />
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-amber-600 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-amber-600 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-amber-600 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-amber-600 to-red-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇪🇬</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              94+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free Egypt
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining along the Nile and beyond.
              From Cairo's cosmopolitan restaurants to Red Sea resort buffets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50" asChild>
                <Link to="/gluten-free/egypt/cairo">
                  Start with Cairo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <AddRestaurantDialog
                city="Egypt"
                triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* City Cards Section */}
      <section id="cities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              <MapPin className="h-4 w-4 mr-2" />
              Explore by City
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Gluten-Free Cities in Egypt
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <Card
                key={city.name}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={`Gluten-free restaurants in ${city.name}, Egypt`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                  <div className="flex items-center text-amber-600 mb-3">
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
                          className="text-xs bg-amber-50 text-amber-700"
                        >
                          {spot}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link to={city.route}>
                    <Button className="w-full">
                      Explore {city.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Directory */}
      <EgyptRestaurantList />

      {/* Intro Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Award className="w-12 h-12 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Gluten-Free Dining in Egypt</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Egypt is a wonderful destination for gluten-free travelers! Traditional Egyptian cuisine features many naturally gluten-free staples
                      like ful medames (stewed fava beans), grilled meats and kebabs, rice dishes, and fresh vegetables. The growing international dining
                      scene in Cairo and resort cities means more restaurants understand celiac requirements.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Red Sea resort towns like Sharm El Sheikh and Hurghada excel at catering to dietary needs, with many all-inclusive hotels offering
                      dedicated gluten-free buffet stations. Cairo's cosmopolitan neighborhoods of Zamalek and Maadi feature health-conscious cafés and
                      international restaurants with GF menus. Always be cautious with fried foods and sauces that may contain hidden wheat flour.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Shield className="h-4 w-4 mr-2" />
              Why Trust Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Safe Travels in Egypt
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We understand the challenges of gluten-free travel. Every place is verified by our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Verified</h3>
              <p className="opacity-90">Every restaurant is reviewed by real travelers with gluten sensitivities</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="opacity-90">Detailed cross-contamination information and staff training ratings</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="opacity-90">We highlight dedicated GF facilities and carefully vetted establishments</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              <Star className="h-4 w-4 mr-2" />
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about gluten-free dining in Egypt
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-amber-600">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Gluten-Free Egypt?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of gluten-free travelers who trust our verified restaurant listings.
            Start your safe dining journey along the Nile today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/countries">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 px-8">
                Browse All Countries
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <AddRestaurantDialog
              city="Egypt"
              triggerClassName="border-white bg-transparent !text-white hover:bg-white/10 px-8"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <Globe className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold text-white">Gluten-Free Places</span>
          </Link>
          <p className="mb-4">Your trusted guide to gluten-free dining worldwide</p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/countries" className="hover:text-white transition-colors">Countries</Link>
            <Link to="#" className="hover:text-white transition-colors">About</Link>
            <Link to="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="mt-8 text-xs">© 2025 Gluten-Free Places. All rights reserved.</p>
        </div>
      </footer>
    </div>

    </>
  );
};

export default Egypt;
