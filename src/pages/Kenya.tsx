import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { useCountrySEO } from "@/hooks/useCountrySEO";
import { KenyaRestaurantList } from "@/components/kenya/KenyaRestaurantList";

const cities = [
  {
    name: "Nairobi",
    image: "photo-1611348524140-53c9a25263d6",
    places: 30,
    rating: 4.6,
    description: "Kenya's capital with a growing health-food scene and diverse international dining",
    route: "#",
    highlights: ["About Thyme", "Talisman", "Hemingways"]
  },
  {
    name: "Mombasa",
    image: "photo-1590523741831-ab7e8b8f9c7f",
    places: 9,
    rating: 4.5,
    description: "Coastal city with fresh seafood and Swahili cuisine offering natural GF options",
    route: "#",
    highlights: ["Salty Squid", "Tribearth", "Kilifi Boatyard"]
  },
  {
    name: "Kisumu",
    image: "photo-1489392191049-fc10c97e64b6",
    places: 0,
    rating: 4.2,
    description: "Lakeside city on Lake Victoria with fresh fish and traditional Luo dishes",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Nakuru",
    image: "photo-1516426122078-c23e76801",
    places: 8,
    rating: 4.3,
    description: "Rift Valley hub near flamingo lakes with charming local eateries and safari lodges",
    route: "#",
    highlights: ["Camp Carnelley's", "Lake Nakuru Lodge", "Loisaba"]
  }
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
  }
];

const Kenya = () => {
  useCountrySEO({
    countryName: "Kenya",
    countrySlug: "gluten-free/kenya",
    description: "Find the best gluten-free restaurants in Kenya. Celiac-safe dining in Nairobi, Mombasa, Kisumu & more. Discover naturally GF Kenyan cuisine.",
    ogDescription: "Discover verified gluten-free and celiac-safe restaurants across Kenya. Browse by city, read real reviews, and find safe dining throughout East Africa.",
    cities: [
      { name: "Nairobi" },
      { name: "Mombasa" },
      { name: "Kisumu" },
      { name: "Nakuru" }
    ],
    faqs: faqItems,
    schemaId: "kenya"
  });

  return (
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
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50" disabled>
                Start with Nairobi
                <ArrowRight className="w-5 h-5 ml-2" />
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
              Popular Cities in Kenya
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore gluten-free restaurants, bakeries, and cafés across Kenya
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
                    alt={`Gluten-free restaurants in ${city.name}, Kenya`}
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
                  <Button disabled className="w-full opacity-60">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-red-50 border-green-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Gluten-Free Dining in Kenya
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Kenya offers a surprisingly celiac-friendly culinary landscape. Many traditional Kenyan staples are naturally
                    gluten-free — from <strong>nyama choma</strong> (grilled meat) and <strong>ugali</strong> (maize porridge) to fresh
                    tropical fruits and coastal seafood dishes. The country's diverse food heritage means there's always something safe to eat.
                  </p>
                  <p>
                    <strong>Nairobi</strong> leads the way with its cosmopolitan dining scene, featuring health-conscious cafés in
                    Westlands and Karen that cater to dietary needs. <strong>Mombasa's</strong> coastal cuisine relies heavily on
                    rice, coconut, and fresh fish — many dishes are naturally free from gluten.
                  </p>
                  <p>
                    While dedicated gluten-free bakeries are still emerging, Kenya's focus on fresh, whole ingredients makes it
                    easier than you might expect to eat safely. Always communicate your needs clearly, and you'll find
                    Kenyans are warm and accommodating hosts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top 25 Restaurants */}
      <KenyaRestaurantList />

      {/* Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-green-100 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Safe</h3>
              <p className="text-gray-600 text-sm">Every listing is checked for celiac safety and cross-contamination practices</p>
            </Card>
            <Card className="text-center p-6 border-orange-100 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Reviews and tips from gluten-free travelers who've dined across Kenya</p>
            </Card>
            <Card className="text-center p-6 border-red-100 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Community Driven</h3>
              <p className="text-gray-600 text-sm">Built by celiac travelers for celiac travelers exploring East Africa</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">Everything you need to know about eating gluten-free in Kenya</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Know a Gluten-Free Spot in Kenya?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Help fellow celiac travelers by adding your favorite gluten-free restaurants, cafés, and bakeries in Kenya.
          </p>
          <AddRestaurantDialog
            city="Kenya"
            triggerClassName="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3"
          />
        </div>
      </section>
    </div>
  );
};

export default Kenya;
