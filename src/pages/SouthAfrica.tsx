import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SouthAfricaRestaurantList } from "@/components/south-africa/SouthAfricaRestaurantList";
import { SEOHead } from "@/components/SEOHead";

const SouthAfrica = () => {
  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in South Africa | Celiac-Safe Dining Guide");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across South Africa. Browse by city, read real reviews, and find safe dining throughout the Rainbow Nation.");
    }

    // Add JSON-LD structured data for SEO
    const existingSchema = document.querySelector('script[data-schema="south-africa-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'south-africa-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in South Africa",
      "description": "Find the best gluten-free restaurants across South Africa. Verified celiac-safe dining in Cape Town, Johannesburg, Pretoria, Durban & more.",
      "url": "https://glutenfreeplace.org/gluten-free/south-africa",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Top Gluten-Free Cities in South Africa",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Cape Town",
            "url": "https://glutenfreeplace.org/gluten-free/south-africa/cape-town"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Johannesburg",
            "url": "https://glutenfreeplace.org/gluten-free/south-africa/johannesburg"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Pretoria",
            "url": "https://glutenfreeplace.org/gluten-free/south-africa/pretoria"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Durban",
            "url": "https://glutenfreeplace.org/gluten-free/south-africa/durban"
          }
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "Countries", "item": "https://glutenfreeplace.org/countries" },
          { "@type": "ListItem", "position": 3, "name": "South Africa", "item": "https://glutenfreeplace.org/gluten-free/south-africa" }
        ]
      }
    });
    document.head.appendChild(schema);

    // Add FAQ Schema
    const existingFaqSchema = document.querySelector('script[data-schema="south-africa-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'south-africa-faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is South Africa a good destination for gluten-free travelers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! South Africa is becoming increasingly celiac-friendly, especially in major cities like Cape Town and Johannesburg. You'll find dedicated gluten-free bakeries, health-conscious cafés, and many restaurants that cater to dietary requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What traditional South African foods are naturally gluten-free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many traditional dishes are naturally GF including braai (BBQ meats), pap (maize porridge), chakalaka, boerewors (ask about fillers), and fresh seafood. Indian cuisine in Durban offers rice-based dishes that are often naturally gluten-free."
          }
        },
        {
          "@type": "Question",
          "name": "Are there dedicated gluten-free bakeries in South Africa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Off the Gluten Path in Cape Town (with two locations) is a 100% dedicated gluten-free bakery. Several health food stores and specialty bakeries across the country also offer GF products."
          }
        },
        {
          "@type": "Question",
          "name": "Which South African city is most celiac-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cape Town leads the way with dedicated GF bakeries and health-conscious cafés. Johannesburg offers the most diversity, while Durban's Indian cuisine provides many naturally GF options."
          }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    // Cleanup on unmount
    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="south-africa-gf"]');
      if (schemaToRemove) schemaToRemove.remove();
      const faqSchemaToRemove = document.querySelector('script[data-schema="south-africa-faq"]');
      if (faqSchemaToRemove) faqSchemaToRemove.remove();
    };
  }, []);
  const cities = [
    {
      name: "Cape Town",
      image: "photo-1580060839134-75a5edca2e99",
      places: 18,
      rating: 4.7,
      description: "Mother City with dedicated GF bakeries and stunning waterfront dining",
      route: "/gluten-free/south-africa/cape-town",
      highlights: ["Off the Gluten Path", "Tashas", "GOLD Restaurant"]
    },
    {
      name: "Johannesburg",
      image: "photo-1577948000111-9c970dfe3743",
      places: 24,
      rating: 4.5,
      description: "South Africa's largest city with diverse gluten-free options",
      route: "/gluten-free/south-africa/johannesburg",
      highlights: ["The Whippet", "Salvation Café", "Yamitsuki"]
    },
    {
      name: "Pretoria",
      image: "photo-1625047509248-ec889cbff17f",
      places: 12,
      rating: 4.4,
      description: "Administrative capital with cozy cafés and family restaurants",
      route: "/gluten-free/south-africa/pretoria",
      highlights: ["Cafe 41", "Ground Coffee", "Coobs"]
    },
    {
      name: "Durban",
      image: "photo-1576485290814-1c72aa4bbb8e",
      places: 15,
      rating: 4.6,
      description: "Coastal city famous for Indian cuisine with natural GF options",
      route: "/gluten-free/south-africa/durban",
      highlights: ["Unity Brasserie", "Casa Bella", "Café 1999"]
    },
    {
      name: "Stellenbosch",
      image: "photo-1591373032196-47bae63b7baf",
      places: 8,
      rating: 4.5,
      description: "Winelands gem with farm-to-table dining and celiac-aware restaurants",
      route: "/gluten-free/south-africa/cape-town/stellenbosch",
      highlights: ["Winelands Bistro", "Harvest Table", "Farm Kitchen"]
    },
    {
      name: "Port Elizabeth",
      image: "photo-1580060839134-75a5edca2e99",
      places: 6,
      rating: 4.3,
      description: "Friendly city on the Sunshine Coast with emerging GF dining options",
      route: "#",
      highlights: ["Coming Soon"]
    },
    {
      name: "Bloemfontein",
      image: "photo-1577948000111-9c970dfe3743",
      places: 5,
      rating: 4.2,
      description: "The City of Roses with growing gluten-free awareness",
      route: "#",
      highlights: ["Coming Soon"]
    },
    {
      name: "George",
      image: "photo-1506905925346-21bda4d32df4",
      places: 4,
      rating: 4.3,
      description: "Garden Route hub with charming cafés and health-conscious eateries",
      route: "#",
      highlights: ["Coming Soon"]
    }
  ];

  const faqItems = [
    {
      question: "Is South Africa a good destination for gluten-free travelers?",
      answer: "Absolutely! South Africa is becoming increasingly celiac-friendly, especially in major cities like Cape Town and Johannesburg. You'll find dedicated gluten-free bakeries, health-conscious cafés, and many restaurants that cater to dietary requirements."
    },
    {
      question: "What traditional South African foods are naturally gluten-free?",
      answer: "Many traditional dishes are naturally GF including braai (BBQ meats), pap (maize porridge), chakalaka, boerewors (ask about fillers), and fresh seafood. Indian cuisine in Durban offers rice-based dishes that are often naturally gluten-free."
    },
    {
      question: "Are there dedicated gluten-free bakeries in South Africa?",
      answer: "Yes! Off the Gluten Path in Cape Town (with two locations) is a 100% dedicated gluten-free bakery. Several health food stores and specialty bakeries across the country also offer GF products."
    },
    {
      question: "How do I communicate my celiac needs in South African restaurants?",
      answer: "English is widely spoken in South Africa, making it easy to communicate dietary needs. Simply mention you have celiac disease and need gluten-free food. Upscale restaurants typically have trained staff who understand cross-contamination."
    },
    {
      question: "Which South African city is most celiac-friendly?",
      answer: "Cape Town leads the way with dedicated GF bakeries and health-conscious cafés. Johannesburg offers the most diversity, while Durban's Indian cuisine provides many naturally GF options."
    },
    {
      question: "Can I find gluten-free products in South African supermarkets?",
      answer: "Yes! Major supermarket chains like Woolworths, Pick n Pay, and Checkers stock gluten-free products. Woolworths has an excellent selection of their own-brand GF items. Health food stores carry even more variety."
    }
  ];

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in South Africa | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants across South Africa. Verified celiac-safe dining in Cape Town, Johannesburg, Pretoria, Durban & more. Real reviews from GF travelers."
      canonical="/gluten-free/south-africa"
    />
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-orange-600 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-orange-600 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-orange-600 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-green-600 to-orange-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇿🇦</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              69+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free South Africa
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining across the Rainbow Nation. 
              From Cape Town's dedicated bakeries to Durban's natural GF cuisine.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gluten-free/south-africa/cape-town">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                  Start with Cape Town
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <AddRestaurantDialog 
                city="South Africa" 
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
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <MapPin className="h-4 w-4 mr-2" />
              Explore by City
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Gluten-Free Cities in South Africa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Card 
                key={city.name} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={`Gluten-free restaurants in ${city.name}`}
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
                  <div className="flex items-center text-green-600 mb-3">
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
                          className="text-xs bg-orange-50 text-orange-700"
                        >
                          {spot}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {city.route !== "#" ? (
                    <Link to={city.route}>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                        Explore {city.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full opacity-60">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Directory */}
      <SouthAfricaRestaurantList />

      {/* Intro Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Award className="w-12 h-12 text-green-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Gluten-Free Dining in South Africa</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      South Africa is a fantastic destination for gluten-free travelers! The country's major cities offer an impressive variety of dining options, 
                      from dedicated gluten-free bakeries to restaurants with careful cross-contamination protocols.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Cape Town leads the way with 100% gluten-free establishments like Off the Gluten Path, while Johannesburg offers the most diverse options. 
                      Durban's rich Indian cuisine provides many naturally gluten-free dishes, and traditional South African braai (BBQ) culture means plenty of 
                      naturally safe grilled meats and sides made from maize.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <MapPin className="h-4 w-4 mr-2" />
              Interactive Map
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Find Restaurants Near You
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore all gluten-free restaurants across South Africa on our interactive map
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center border-2 border-dashed border-green-300">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-green-700 font-medium text-lg">Interactive Map Coming Soon</p>
              <p className="text-green-600 text-sm">Select a city above to view detailed restaurant maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Shield className="h-4 w-4 mr-2" />
              Why Trust Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Safe Travels in South Africa
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We understand the challenges of gluten-free travel. Every place is verified by our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Verified</h3>
              <p className="opacity-90">Every restaurant is reviewed by real travelers with gluten sensitivities</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="opacity-90">Detailed cross-contamination information and staff training ratings</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
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
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              <Star className="h-4 w-4 mr-2" />
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about gluten-free dining in South Africa
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
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-600">
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Gluten-Free South Africa?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of gluten-free travelers who trust our verified restaurant listings. 
            Start your safe dining journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gluten-free/south-africa/cape-town">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8">
                Start with Cape Town
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <AddRestaurantDialog 
              city="South Africa" 
              triggerClassName="border-white bg-transparent !text-white hover:bg-white/10 px-8" 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <Globe className="h-6 w-6 text-orange-500" />
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

export default SouthAfrica;
