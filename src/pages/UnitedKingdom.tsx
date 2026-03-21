import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { UKRestaurantList } from "@/components/uk/UKRestaurantList";
import { SEOHead } from "@/components/SEOHead";

const UnitedKingdom = () => {
,
          { "@type": "ListItem", "position": 2, "name": "Edinburgh", "url": "https://glutenfreeplace.org/gluten-free/united-kingdom/edinburgh" },
          { "@type": "ListItem", "position": 3, "name": "Manchester", "url": "https://glutenfreeplace.org/gluten-free/united-kingdom/manchester" },
          { "@type": "ListItem", "position": 4, "name": "Birmingham", "url": "https://glutenfreeplace.org/gluten-free/united-kingdom/birmingham" },
        ]
      }
    });
    document.head.appendChild(schema);

    return () => {
      document.querySelector('script[data-schema="uk-gf"]')?.remove();
    };
  }, []);

  const cities = [
    { name: "London", image: "photo-1513635269975-59663e0ac1ad", places: 30, rating: 4.7, description: "World-class GF bakeries, fish & chip shops with dedicated fryers, and fine dining", route: "/gluten-free/united-kingdom/london", highlights: ["Libby's", "Wicked Fish", "Los Mochis"] },
    { name: "Edinburgh", image: "photo-1506377585622-bedcbb027afc", places: 6, rating: 4.7, description: "Dedicated GF cafes, Brazilian street food, and Scottish classics made celiac-safe", route: "/gluten-free/united-kingdom/edinburgh", highlights: ["Sugar Daddy's", "Tupiniquim", "GF Kitchen"] },
    { name: "Manchester", image: "photo-1515586838455-8f8f940d6853", places: 2, rating: 4.6, description: "Trendy food scene with GF pizza, plant-based comfort food, and more", route: "/gluten-free/united-kingdom/manchester", highlights: ["Rudy's Pizza", "Wholesome Junkies"] },
    { name: "Birmingham", image: "photo-1589561253898-768105ca91a8", places: 2, rating: 4.5, description: "Growing GF scene with Italian pasta and creative veggie cafes", route: "/gluten-free/united-kingdom/birmingham", highlights: ["Pasta di Piazza", "Warehouse Cafe"] },
    { name: "Glasgow", image: "photo-1580237072617-771c3ecc4a24", places: 3, rating: 4.4, description: "South Indian cuisine and Vietnamese with naturally GF dishes", route: "#", highlights: ["Dakhin", "Madurai", "Pho"] },
    { name: "Bristol", image: "photo-1567359781514-3b964e2b04d6", places: 1, rating: 4.5, description: "Creative food scene with GF pancakes and harbourside dining", route: "#", highlights: ["The Pancake Man"] },
    { name: "Brighton", image: "photo-1534655378221-6e0e46e1e76e", places: 1, rating: 4.3, description: "Seaside city with GF buckwheat galettes and health-conscious cafes", route: "#", highlights: ["Crepeaffaire"] },
    { name: "Cardiff", image: "photo-1569587112025-0d460e81a126", places: 2, rating: 4.8, description: "Dedicated GF cafes and bakeries in the Welsh capital", route: "#", highlights: ["Against the Grain", "noglü"] },
  ];

  const faqItems = [
    { question: "Is the UK good for gluten-free dining?", answer: "Yes! The UK has embraced gluten-free dining with Coeliac UK accreditation, dedicated bakeries, and widespread pub menu options. London in particular has one of the best GF scenes in Europe." },
    { question: "What is Coeliac UK accreditation?", answer: "Coeliac UK accredits venues that meet high standards for gluten-free food preparation and staff training. Look for the crossed grain symbol." },
    { question: "Can I find GF options in British pubs?", answer: "Absolutely! Many UK pubs now offer extensive gluten-free menus including fish & chips, pies, and traditional dishes with GF gravy." },
    { question: "Which UK city is most celiac-friendly?", answer: "London leads with dedicated GF bakeries like Libby's and fish & chip shops with separate fryers. Edinburgh also excels with The Gluten Free Kitchen and Sugar Daddy's Bakery." },
    { question: "Are there dedicated gluten-free restaurants in the UK?", answer: "Yes! Libby's in London, Sugar Daddy's in Edinburgh, noglü in Cardiff, and Harbourside Gluten Free in Plymouth are all 100% dedicated GF venues." },
    { question: "Can I find GF products in UK supermarkets?", answer: "Yes! Marks & Spencer, Tesco, Sainsbury's, and Waitrose all have extensive free-from ranges. The UK has one of the best supermarket GF selections in the world." },
  ];

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in the UK | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants across the UK. Coeliac UK accredited pubs, bakeries & restaurants in London, Manchester, Edinburgh, Birmingham."
      canonical="/gluten-free/united-kingdom"
    />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Gluten-Free Places</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-blue-600 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-blue-600 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-blue-700 to-red-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇬🇧</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              60+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Gluten-Free United Kingdom</h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining across Britain. From London's dedicated bakeries to Edinburgh's celiac-safe cafes and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gluten-free/united-kingdom/london">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Start with London
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <AddRestaurantDialog city="United Kingdom" triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Top Gluten-Free Cities in the UK</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Card key={city.name} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden h-48">
                  <img src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`} alt={`Gluten-free restaurants in ${city.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
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
                  <div className="flex items-center text-blue-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="font-semibold text-sm">{city.places} places</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                    <div className="flex flex-wrap gap-1">
                      {city.highlights.map((spot) => (
                        <Badge key={spot} variant="secondary" className="text-xs bg-blue-50 text-blue-700">{spot}</Badge>
                      ))}
                    </div>
                  </div>
                  {city.route !== "#" ? (
                    <Link to={city.route}>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                        Explore {city.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full opacity-60">Coming Soon</Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <UKRestaurantList />

      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-red-50 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Award className="w-12 h-12 text-blue-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Gluten-Free Dining in the United Kingdom</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The UK is one of the best countries in Europe for gluten-free dining. With Coeliac UK accreditation setting high standards and a growing number of dedicated GF venues, celiac travellers can eat safely and enjoyably across Britain.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      London leads with dedicated bakeries like Libby's and Wicked Fish's separate GF fryers. Edinburgh offers The Gluten Free Kitchen and Sugar Daddy's Bakery. Across the country, pubs and chains increasingly cater to GF needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-700 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Shield className="h-4 w-4 mr-2" />
              Why Trust Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safe Travels in the UK</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">We understand the challenges of gluten-free travel. Every place is verified by our community.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Verified</h3>
              <p className="opacity-90">Every restaurant is reviewed by real travellers with gluten sensitivities</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="opacity-90">Detailed cross-contamination information and staff training ratings</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="opacity-90">We highlight dedicated GF facilities and carefully vetted establishments</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
              <Star className="h-4 w-4 mr-2" />
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about gluten-free dining in the UK</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 shadow-sm px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Explore Gluten-Free Britain?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of gluten-free travellers who trust our verified restaurant listings.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gluten-free/united-kingdom/london">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8">
                Start with London
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <AddRestaurantDialog city="United Kingdom" triggerClassName="border-white bg-transparent !text-white hover:bg-white/10 px-8" />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
            <Globe className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-white">Gluten-Free Places</span>
          </Link>
          <p className="mb-4">Your trusted guide to gluten-free dining worldwide</p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/countries" className="hover:text-white transition-colors">Countries</Link>
          </div>
          <p className="mt-8 text-xs">© 2025 Gluten-Free Places. All rights reserved.</p>
        </div>
      </footer>
    </div>

    </>
  );
};

export default UnitedKingdom;
