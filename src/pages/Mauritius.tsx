import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight } from "lucide-react";
import mauritiusHero from "@/assets/mauritius-aerial.jpg";
import portLouisImage from "@/assets/port-louis-mauritius.jpg";
import grandBaieImage from "@/assets/grand-baie-mauritius.jpg";
import flicEnFlacImage from "@/assets/flic-en-flac-mauritius.jpg";
import curepipeImage from "@/assets/curepipe-mauritius.jpg";
import quatreBornesImage from "@/assets/quatre-bornes-mauritius.jpg";
import mahebourgImage from "@/assets/mahebourg-mauritius.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { MauritiusRestaurantList } from "@/components/mauritius/MauritiusRestaurantList";
import { SEOHead } from "@/components/SEOHead";

const cities = [
  {
    name: "Port Louis",
    image: portLouisImage,
    isLocal: true,
    places: 7,
    rating: 4.6,
    description: "The vibrant capital city with a multicultural food scene and waterfront dining",
    route: "/gluten-free/mauritius/port-louis",
    highlights: ["Escale Créole", "Yellow Chilli", "ZAYTOON", "Island Babe"]
  },
  {
    name: "Grand Baie",
    image: grandBaieImage,
    isLocal: true,
    places: 7,
    rating: 4.5,
    description: "Popular coastal town with beachfront restaurants and international cuisine",
    route: "/gluten-free/mauritius/grand-baie",
    highlights: ["Luigi's Italian", "Wang Thai", "LUX*", "Fynbos"]
  },
  {
    name: "Flic en Flac",
    image: flicEnFlacImage,
    isLocal: true,
    rating: 4.4,
    description: "West coast beach resort area with diverse dining options and sunset views",
    route: "/gluten-free/mauritius/flic-en-flac",
    highlights: ["Salt & Lemon", "Ocean Vagabond", "La Flamme Kreol", "Il Padrino"]
  },
  {
    name: "Curepipe",
    image: curepipeImage,
    isLocal: true,
    places: 7,
    rating: 4.3,
    description: "Highland town known for its cool climate, colonial charm, and local eateries",
    route: "/gluten-free/mauritius/curepipe",
    highlights: ["Yellow Chilli", "Escale Créole", "ZAYTOON", "Island Babe"]
  },
  {
    name: "Quatre Bornes",
    image: quatreBornesImage,
    isLocal: true,
    places: 6,
    rating: 4.2,
    description: "Bustling market town with street food and authentic Mauritian home cooking",
    route: "/gluten-free/mauritius/quatre-bornes",
    highlights: ["ZAYTOON", "Yellow Chilli", "Island Babe", "Nando's"]
  },
  {
    name: "Mahebourg",
    image: mahebourgImage,
    isLocal: true,
    places: 6,
    rating: 4.1,
    description: "Historic fishing village on the southeast coast with fresh seafood and Creole flavors",
    route: "/gluten-free/mauritius/mahebourg",
    highlights: ["Taste of Freedom", "Tamassa Resort", "Green Island", "L'Escale"]
  }
];

const faqItems = [
  {
    question: "Is Mauritius a good destination for gluten-free travelers?",
    answer: "Yes! Mauritian cuisine is a fusion of Indian, Chinese, Creole, and French influences, with many naturally gluten-free staples like rice, lentils (dal), fresh seafood, and tropical fruits. Most traditional curries and grilled dishes are safe with careful cross-contamination checks."
  },
  {
    question: "What traditional Mauritian foods are naturally gluten-free?",
    answer: "Many Mauritian dishes are naturally GF including dholl puri filling (lentils), fish vindaye, octopus curry, rougaille (tomato-based stew), mine frit (rice noodle version), fresh tropical fruits like lychees and mangoes, and most rice-based meals served across the island."
  },
  {
    question: "How do I communicate gluten-free needs in Mauritius?",
    answer: "English and French are both widely spoken in Mauritius, making it easy to explain dietary needs. You can say 'sans gluten' (French) or explain in English. Most hotel and resort restaurants understand celiac/gluten-free requests, especially in tourist areas like Grand Baie and Flic en Flac."
  },
  {
    question: "Can I find gluten-free products in Mauritian supermarkets?",
    answer: "Major supermarkets like Super U, Intermart, and Winners in Port Louis and tourist areas stock some imported gluten-free products. Health food shops are growing, and many Indian grocery items (rice flour, chickpea flour) are naturally gluten-free and widely available."
  },
  {
    question: "Are hotel restaurants in Mauritius celiac-friendly?",
    answer: "Most 4- and 5-star resort hotels in Mauritius are experienced in handling dietary requirements including celiac disease. Many offer dedicated GF menus or can adapt dishes upon request. It's always best to notify the hotel in advance of your stay."
  },
  {
    question: "What should I watch out for when eating gluten-free in Mauritius?",
    answer: "Be cautious with dholl puri (the flatbread wrapper contains wheat flour), faratas (roti-like flatbreads), gateaux piments (may contain flour), and soy sauce in Chinese-Mauritian dishes. Street food stalls may have cross-contamination risks, so always ask about ingredients."
  }
];

const Mauritius = () => {
  

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Mauritius | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants in Mauritius. Celiac-safe dining in Port Louis, Grand Baie, Flic en Flac & more. Discover naturally GF Mauritian cuisine."
      canonical="/gluten-free/mauritius"
    />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-blue-600 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-blue-600 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={mauritiusHero} alt="Aerial view of Mauritius" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇲🇺</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              60+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free Mauritius
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining across Mauritius.
              From Port Louis's multicultural cuisine to Grand Baie's beachfront restaurants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gluten-free/mauritius/port-louis">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Start with Port Louis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <AddRestaurantDialog
                city="Mauritius"
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
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <MapPin className="h-4 w-4 mr-2" />
              Explore by City
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Popular Cities in Mauritius
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore gluten-free restaurants, bakeries, and cafés across Mauritius
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
                    src={(city as any).isLocal ? city.image : `https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={`Gluten-free restaurants in ${city.name}, Mauritius`}
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
                  <div className="flex items-center text-blue-600 mb-3">
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
                          className="text-xs bg-teal-50 text-teal-700"
                        >
                          {spot}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {city.route === "#" ? (
                    <Button disabled className="w-full opacity-60">Coming Soon</Button>
                  ) : (
                    <Link to={city.route} className="w-full">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore {city.name}</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Directory */}
      <MauritiusRestaurantList />

      {/* Intro Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Gluten-Free Dining in Mauritius
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Mauritius is a paradise not just for beaches but also for gluten-free travelers. The island's cuisine
                    is a rich fusion of <strong>Indian, Chinese, Creole, and French</strong> flavors, with many dishes
                    naturally built around rice, lentils, seafood, and tropical produce.
                  </p>
                  <p>
                    <strong>Port Louis</strong> offers the most diverse dining scene, from the famous Central Market's
                    street food to upscale waterfront restaurants at Caudan. <strong>Grand Baie</strong> and
                    <strong> Flic en Flac</strong> cater well to international visitors, with resort restaurants that
                    understand celiac needs.
                  </p>
                  <p>
                    Traditional dishes like <strong>fish vindaye</strong>, <strong>octopus curry</strong>, and
                    <strong> rougaille</strong> are naturally gluten-free when prepared traditionally. Just watch out for
                    dholl puri wrappers and faratas, which contain wheat flour. With a little care, Mauritius offers
                    an incredible culinary adventure for celiac travelers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-blue-100 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Safe</h3>
              <p className="text-gray-600 text-sm">Every listing is checked for celiac safety and cross-contamination practices</p>
            </Card>
            <Card className="text-center p-6 border-teal-100 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Island Expertise</h3>
              <p className="text-gray-600 text-sm">Reviews and tips from gluten-free travelers who've dined across Mauritius</p>
            </Card>
            <Card className="text-center p-6 border-cyan-100 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Community Driven</h3>
              <p className="text-gray-600 text-sm">Built by celiac travelers for celiac travelers exploring the Indian Ocean</p>
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
              <p className="text-gray-600">Everything you need to know about eating gluten-free in Mauritius</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Know a Gluten-Free Spot in Mauritius?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Help fellow celiac travelers by adding your favorite gluten-free restaurants, cafés, and bakeries in Mauritius.
          </p>
          <AddRestaurantDialog
            city="Mauritius"
            triggerClassName="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3"
          />
        </div>
      </section>
    </div>
    </>
  );
};

export default Mauritius;
