import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { useCountrySEO } from "@/hooks/useCountrySEO";

const cities = [
  {
    name: "Lagos",
    image: "photo-1618828665011-0abd973f7bb8",
    places: 22,
    rating: 4.6,
    description: "Nigeria's vibrant megacity with a booming food scene and diverse international dining options",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Abuja",
    image: "photo-1572883454114-efb4747fc878",
    places: 15,
    rating: 4.5,
    description: "The capital city with upscale restaurants and health-conscious eateries catering to diplomats",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Port Harcourt",
    image: "photo-1504681869696-d977211a5f4c",
    places: 9,
    rating: 4.3,
    description: "Oil-rich city with a growing culinary scene and fresh Niger Delta seafood",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Ibadan",
    image: "photo-1489392191049-fc10c97e64b6",
    places: 7,
    rating: 4.2,
    description: "Historic Yoruba city with traditional dishes and emerging modern restaurants",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Kano",
    image: "photo-1516426122078-c23e76319801",
    places: 6,
    rating: 4.1,
    description: "Ancient trading hub in northern Nigeria with rich Hausa culinary traditions",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Benin City",
    image: "photo-1590523741831-ab7e8b8f9c7f",
    places: 5,
    rating: 4.0,
    description: "Capital of Edo State with traditional Bini cuisine and naturally gluten-free staples",
    route: "#",
    highlights: ["Coming Soon"]
  }
];

const faqItems = [
  {
    question: "Is Nigeria a good destination for gluten-free travelers?",
    answer: "Yes! Many traditional Nigerian dishes are naturally gluten-free. Staples like jollof rice, pounded yam, garri (cassava), plantain, and grilled suya are all naturally free from gluten. Lagos especially has a growing health-food scene with dedicated GF options."
  },
  {
    question: "What traditional Nigerian foods are naturally gluten-free?",
    answer: "Popular naturally gluten-free Nigerian foods include jollof rice, fried plantain (dodo), pounded yam with egusi or ogbono soup, moi moi (bean pudding), akara (bean cakes), suya (grilled spiced meat), pepper soup, and garri (cassava flakes)."
  },
  {
    question: "How do I communicate gluten-free needs in Nigeria?",
    answer: "English is the official language of Nigeria, making it easy to communicate dietary needs. You can explain that you cannot eat wheat flour or bread. In local settings, saying 'I cannot eat anything with flour' is usually well understood. Many traditional dishes are rice or yam-based, making them naturally safe."
  },
  {
    question: "Can I find gluten-free products in Nigerian supermarkets?",
    answer: "Major supermarkets like Shoprite, SPAR, and Hubmart in Lagos and Abuja stock some imported gluten-free products. Health food stores in upscale areas like Victoria Island, Ikoyi, and Lekki offer a wider selection of GF items including pasta, bread, and snacks."
  },
  {
    question: "Are Nigerian soups and stews gluten-free?",
    answer: "Most traditional Nigerian soups like egusi, ogbono, okra, and pepper soup are naturally gluten-free, as they use ground melon seeds, ogbono seeds, or okra as thickeners rather than wheat flour. However, always confirm with the cook, as some modern recipes may include flour as a thickener."
  }
];

const Nigeria = () => {
  useCountrySEO({
    countryName: "Nigeria",
    countrySlug: "gluten-free/nigeria",
    description: "Find the best gluten-free restaurants in Nigeria. Celiac-safe dining in Lagos, Abuja, Port Harcourt & more. Discover naturally GF Nigerian cuisine.",
    ogDescription: "Discover verified gluten-free and celiac-safe restaurants across Nigeria. Browse by city, read real reviews, and find safe dining throughout West Africa.",
    cities: [
      { name: "Lagos" },
      { name: "Abuja" },
      { name: "Port Harcourt" },
      { name: "Ibadan" },
      { name: "Kano" },
      { name: "Benin City" }
    ],
    faqs: faqItems,
    schemaId: "nigeria"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-green-600 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-green-600 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-green-600 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-green-700 to-green-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇳🇬</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              64+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free Nigeria
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining across Nigeria.
              From Lagos's vibrant food scene to Abuja's international restaurants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50" disabled>
                Start with Lagos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <AddRestaurantDialog
                city="Nigeria"
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
              Popular Cities in Nigeria
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore gluten-free restaurants, bakeries, and cafés across Nigeria
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
                    alt={`Gluten-free restaurants in ${city.name}, Nigeria`}
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
                          className="text-xs bg-green-50 text-green-700"
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
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Gluten-Free Dining in Nigeria
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nigeria offers a wonderfully celiac-friendly culinary landscape. Many traditional Nigerian staples are naturally
                    gluten-free — from <strong>jollof rice</strong> and <strong>pounded yam</strong> to <strong>suya</strong> (grilled
                    spiced meat) and fresh <strong>plantain</strong>. The country's rich food heritage means there's always something safe and delicious to eat.
                  </p>
                  <p>
                    <strong>Lagos</strong> leads the way with its cosmopolitan dining scene, featuring health-conscious restaurants in
                    Victoria Island and Lekki that cater to dietary needs. <strong>Abuja's</strong> international dining scene, driven by
                    the diplomatic community, also offers excellent options for gluten-free diners.
                  </p>
                  <p>
                    Traditional Nigerian soups like <strong>egusi</strong>, <strong>ogbono</strong>, and <strong>pepper soup</strong> are
                    naturally gluten-free, using seeds and okra as thickeners instead of wheat flour. Combined with rice, yam, or garri,
                    you'll find countless safe and satisfying meals throughout the country.
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
            <Card className="text-center p-6 border-green-100 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Safe</h3>
              <p className="text-gray-600 text-sm">Every listing is checked for celiac safety and cross-contamination practices</p>
            </Card>
            <Card className="text-center p-6 border-green-100 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Reviews and tips from gluten-free travelers who've dined across Nigeria</p>
            </Card>
            <Card className="text-center p-6 border-green-100 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-green-800 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Community Driven</h3>
              <p className="text-gray-600 text-sm">Built by celiac travelers for celiac travelers exploring West Africa</p>
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
              <p className="text-gray-600">Everything you need to know about eating gluten-free in Nigeria</p>
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
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Know a Gluten-Free Spot in Nigeria?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Help fellow celiac travelers by adding your favorite gluten-free restaurants, cafés, and bakeries in Nigeria.
          </p>
          <AddRestaurantDialog
            city="Nigeria"
            triggerClassName="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3"
          />
        </div>
      </section>
    </div>
  );
};

export default Nigeria;
