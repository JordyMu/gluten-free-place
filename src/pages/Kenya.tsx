import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { KenyaRestaurantList } from "@/components/kenya/KenyaRestaurantList";
import { nairobiRestaurants } from "@/data/nairobiRestaurants";
import { mombasaRestaurants } from "@/data/mombasaRestaurants";
import { kisumuRestaurants } from "@/data/kisumuRestaurants";
import { nakuruRestaurants } from "@/data/nakuruRestaurants";
import { SEOHead } from "@/components/SEOHead";

const Kenya = () => {
  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in Kenya | Celiac-Safe Dining Guide");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across Kenya. Browse by city, read real reviews, and find safe dining throughout East Africa.");
    }

    const existingSchema = document.querySelector('script[data-schema="kenya-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'kenya-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Kenya",
      "description": "Find the best gluten-free restaurants across Kenya. Verified celiac-safe dining in Nairobi, Mombasa, Nakuru & more.",
      "url": "https://glutenfreeplace.org/gluten-free/kenya",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Top Gluten-Free Cities in Kenya",
        "numberOfItems": 4,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Nairobi", "url": "https://glutenfreeplace.org/gluten-free/kenya/nairobi" },
          { "@type": "ListItem", "position": 2, "name": "Mombasa", "url": "https://glutenfreeplace.org/gluten-free/kenya/mombasa" },
          { "@type": "ListItem", "position": 3, "name": "Kisumu", "url": "https://glutenfreeplace.org/gluten-free/kenya/kisumu" },
          { "@type": "ListItem", "position": 4, "name": "Nakuru", "url": "https://glutenfreeplace.org/gluten-free/kenya/nakuru" }
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "Countries", "item": "https://glutenfreeplace.org/countries" },
          { "@type": "ListItem", "position": 3, "name": "Kenya", "item": "https://glutenfreeplace.org/gluten-free/kenya" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="kenya-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'kenya-faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    });
    document.head.appendChild(faqSchema);

    return () => {
      const s1 = document.querySelector('script[data-schema="kenya-gf"]');
      if (s1) s1.remove();
      const s2 = document.querySelector('script[data-schema="kenya-faq"]');
      if (s2) s2.remove();
    };
  }, []);

  const cities = [
    {
      name: "Nairobi",
      image: "photo-1611348524140-53c9a25263d6",
      places: nairobiRestaurants.length,
      rating: 4.6,
      description: "Kenya's capital with a growing health-food scene and diverse international dining",
      route: "/gluten-free/kenya/nairobi",
      highlights: ["About Thyme", "Talisman", "Hemingways"],
    },
    {
      name: "Mombasa",
      image: "photo-1590523741831-ab7e8b8f9c7f",
      places: mombasaRestaurants.length,
      rating: 4.5,
      description: "Coastal city with fresh seafood and Swahili cuisine offering natural GF options",
      route: "/gluten-free/kenya/mombasa",
      highlights: ["Salty Squid", "Tribearth", "Kilifi Boatyard"],
    },
    {
      name: "Kisumu",
      image: "photo-1489392191049-fc10c97e64b6",
      places: kisumuRestaurants.length,
      rating: 4.2,
      description: "Lakeside city on Lake Victoria with fresh fish and traditional Luo dishes",
      route: "/gluten-free/kenya/kisumu",
      highlights: ["Dunga Hill Camp", "Acacia Premier", "Kisumu Yacht Club"],
    },
    {
      name: "Nakuru",
      image: "photo-1516426122078-c23e76801",
      places: nakuruRestaurants.length,
      rating: 4.3,
      description: "Rift Valley hub near flamingo lakes with charming local eateries and safari lodges",
      route: "/gluten-free/kenya/nakuru",
      highlights: ["Camp Carnelley's", "Lake Nakuru Lodge", "Kerio View"],
    },
  ];

  const faqItems = [
    {
      question: "Is Kenya a good destination for gluten-free travelers?",
      answer: "Yes! Many traditional Kenyan dishes are naturally gluten-free, including nyama choma (grilled meat), ugali (made from maize), sukuma wiki, and fresh seafood along the coast. Nairobi's international dining scene also offers dedicated GF options."
    },
    {
      question: "What traditional Kenyan foods are naturally gluten-free?",
      answer: "Nyama choma (grilled meat), ugali (maize flour porridge), sukuma wiki (collard greens), mukimo (mashed peas and potatoes), fresh tropical fruits, and most coastal seafood dishes are naturally gluten-free."
    },
    {
      question: "How do I communicate gluten-free needs in Kenya?",
      answer: "English is an official language in Kenya, so communicating dietary needs is straightforward. In local restaurants, you can say 'sina unga wa ngano' (I don't eat wheat flour) in Swahili. International restaurants in Nairobi typically understand celiac/gluten-free requests."
    },
    {
      question: "Can I find gluten-free products in Kenyan supermarkets?",
      answer: "Major supermarkets like Carrefour, Naivas, and Chandarana in Nairobi stock some gluten-free products. Health food stores in upscale areas like Westlands and Karen offer a wider selection of imported GF items."
    },
    {
      question: "Which Kenyan city is most celiac-friendly?",
      answer: "Nairobi leads the way with its cosmopolitan dining scene, featuring health-conscious cafés in Westlands and Karen. Mombasa's coastal cuisine relies heavily on rice, coconut, and fresh fish — many dishes are naturally free from gluten."
    },
    {
      question: "Are safari lodges in Kenya gluten-free friendly?",
      answer: "Many luxury safari lodges and camps accommodate dietary requirements including gluten-free. Lodges like JW Marriott Masai Mara, Loisaba Tented Camp, and Manyatta Camp are known for catering to special diets when informed in advance."
    }
  ];

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Kenya | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants across Kenya. Verified celiac-safe dining in Nairobi, Mombasa, Nakuru & more. Real reviews from GF travelers."
      canonical="/gluten-free/kenya"
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
      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-green-700 to-red-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇰🇪</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              47+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free Kenya
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining across Kenya.
              From Nairobi's international restaurants to Mombasa's fresh coastal cuisine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <Link to="/gluten-free/kenya/nairobi">
                  Start with Nairobi
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <AddRestaurantDialog
                city="Kenya"
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
              Top Gluten-Free Cities in Kenya
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
                style={{ animationDelay: `${index * 0.1}s` }}
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
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
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
      <KenyaRestaurantList />

      {/* Intro Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-red-50 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Award className="w-12 h-12 text-green-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Gluten-Free Dining in Kenya</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Kenya offers a surprisingly celiac-friendly culinary landscape. Many traditional Kenyan staples are naturally
                      gluten-free — from <strong>nyama choma</strong> (grilled meat) and <strong>ugali</strong> (maize porridge) to fresh
                      tropical fruits and coastal seafood dishes. The country's diverse food heritage means there's always something safe to eat.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Nairobi</strong> leads the way with its cosmopolitan dining scene, featuring health-conscious cafés in
                      Westlands and Karen that cater to dietary needs. <strong>Mombasa's</strong> coastal cuisine relies heavily on
                      rice, coconut, and fresh fish — many dishes are naturally free from gluten. Safari lodges across the country
                      increasingly accommodate gluten-free guests when informed in advance.
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
              Explore all gluten-free restaurants across Kenya on our interactive map
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
      <section className="py-16 bg-gradient-to-r from-green-700 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Shield className="h-4 w-4 mr-2" />
              Why Trust Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Safe Travels in Kenya
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
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              <Star className="h-4 w-4 mr-2" />
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about gluten-free dining in Kenya
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
      <section className="py-20 bg-gradient-to-r from-green-700 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Gluten-Free Kenya?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of gluten-free travelers who trust our verified restaurant listings.
            Start your safe dining journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8" disabled>
              Start with Nairobi
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <AddRestaurantDialog
              city="Kenya"
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

export default Kenya;
