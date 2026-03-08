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
    name: "Gaborone",
    image: "photo-1504674900247-0877df9cc836",
    places: 16,
    rating: 4.5,
    description: "Botswana's capital with a growing international dining scene and modern malls",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Francistown",
    image: "photo-1489392191049-fc10c97e64b6",
    places: 8,
    rating: 4.3,
    description: "The second-largest city with local eateries and South African-influenced cuisine",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Maun",
    image: "photo-1516426122078-c23e76319801",
    places: 10,
    rating: 4.6,
    description: "Gateway to the Okavango Delta with safari lodges offering world-class dining",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Kasane",
    image: "photo-1501785888041-af3ef285b470",
    places: 7,
    rating: 4.5,
    description: "Chobe riverfront town with luxury lodges and fresh river fish dishes",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Palapye",
    image: "photo-1572883454114-efb4747fc878",
    places: 4,
    rating: 4.1,
    description: "Fast-growing town along the A1 highway with local restaurants and chain eateries",
    route: "#",
    highlights: ["Coming Soon"]
  },
  {
    name: "Serowe",
    image: "photo-1590523741831-ab7e8b8f9c7f",
    places: 3,
    rating: 4.0,
    description: "Historic royal capital with traditional Tswana cuisine and cultural heritage",
    route: "#",
    highlights: ["Coming Soon"]
  }
];

const faqItems = [
  {
    question: "Is Botswana a good destination for gluten-free travelers?",
    answer: "Yes! Traditional Tswana cuisine features many naturally gluten-free staples like sorghum porridge, grilled meats (seswaa), beans, and fresh vegetables. Safari lodges in Maun and Kasane are particularly experienced in accommodating dietary needs."
  },
  {
    question: "What traditional Botswana foods are naturally gluten-free?",
    answer: "Seswaa (shredded beef), bogobe (sorghum porridge), morogo (wild spinach), grilled game meats, beans, and fresh fruits are all naturally gluten-free. Sorghum and maize are staple grains, both of which are GF."
  },
  {
    question: "How do I communicate gluten-free needs in Botswana?",
    answer: "English is the official language of Botswana, making it very easy to communicate dietary requirements. In local restaurants, you can also say 'ga ke je wheat' (I don't eat wheat) in Setswana. Safari lodges and hotels handle GF requests routinely."
  },
  {
    question: "Can I find gluten-free products in Botswana supermarkets?",
    answer: "Major supermarkets like Choppies, Spar, and Pick n Pay in Gaborone and Francistown stock South African gluten-free brands. Selection is better in Gaborone's larger malls like Riverwalk and Game City."
  },
  {
    question: "Are safari lodges in Botswana celiac-friendly?",
    answer: "Most luxury safari lodges in the Okavango Delta, Chobe, and Makgadikgadi are excellent at accommodating celiac guests. They typically request dietary information before arrival and prepare dedicated GF meals."
  },
  {
    question: "What should I watch out for when eating gluten-free in Botswana?",
    answer: "Be cautious with vetkoek (fried dough), commercial sausages (boerewors may contain fillers), gravies thickened with flour, and any bread-based dishes. Street food may have cross-contamination risks — always ask about ingredients."
  }
];

const Botswana = () => {
  useCountrySEO({
    countryName: "Botswana",
    countrySlug: "gluten-free/botswana",
    description: "Find the best gluten-free restaurants in Botswana. Celiac-safe dining in Gaborone, Maun, Kasane & more. Discover naturally GF Tswana cuisine and safari lodge dining.",
    ogDescription: "Discover verified gluten-free and celiac-safe restaurants across Botswana. Browse by city, read real reviews, and find safe dining from Gaborone to the Okavango Delta.",
    cities: [
      { name: "Gaborone" },
      { name: "Francistown" },
      { name: "Maun" },
      { name: "Kasane" },
      { name: "Palapye" },
      { name: "Serowe" }
    ],
    faqs: faqItems,
    schemaId: "botswana"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-sky-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-sky-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-amber-600 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sky-600 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-sky-600 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-sky-600 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-sky-600 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-sky-700 to-amber-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇧🇼</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              48+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free Botswana
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining across Botswana.
              From Gaborone's modern restaurants to world-class safari lodge cuisine in the Okavango Delta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-sky-700 hover:bg-sky-50" disabled>
                Start with Gaborone
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <AddRestaurantDialog
                city="Botswana"
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
            <Badge className="mb-4 bg-sky-100 text-sky-800 border-sky-200">
              <MapPin className="h-4 w-4 mr-2" />
              Explore by City
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Popular Cities in Botswana
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore gluten-free restaurants, lodges, and cafés across Botswana
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
                    alt={`Gluten-free restaurants in ${city.name}, Botswana`}
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
                  <div className="flex items-center text-sky-600 mb-3">
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
            <Card className="bg-gradient-to-r from-sky-50 to-amber-50 border-sky-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Gluten-Free Dining in Botswana
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Botswana's cuisine is rooted in naturally gluten-free ingredients. Traditional Tswana food revolves
                    around <strong>seswaa</strong> (slow-cooked shredded beef), <strong>bogobe</strong> (sorghum or maize porridge),
                    and <strong>morogo</strong> (wild greens) — all naturally safe for celiac travelers.
                  </p>
                  <p>
                    <strong>Gaborone</strong> leads with a modern dining scene influenced by neighboring South Africa,
                    offering international restaurants in malls like Riverwalk and Game City. <strong>Maun</strong> and
                    <strong> Kasane</strong> are home to luxury safari lodges that excel at accommodating dietary needs,
                    often preparing fully bespoke GF menus for guests.
                  </p>
                  <p>
                    Botswana's reliance on sorghum, maize, and fresh meats makes it naturally easier to eat gluten-free
                    than many other destinations. Combined with the country's renowned hospitality, celiac travelers
                    will find a warm welcome and safe meals across the country.
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
            <Card className="text-center p-6 border-sky-100 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Safe</h3>
              <p className="text-gray-600 text-sm">Every listing is checked for celiac safety and cross-contamination practices</p>
            </Card>
            <Card className="text-center p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Safari Expertise</h3>
              <p className="text-gray-600 text-sm">Reviews and tips from gluten-free travelers who've dined across Botswana's lodges</p>
            </Card>
            <Card className="text-center p-6 border-orange-100 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Community Driven</h3>
              <p className="text-gray-600 text-sm">Built by celiac travelers for celiac travelers exploring Southern Africa</p>
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
              <p className="text-gray-600">Everything you need to know about eating gluten-free in Botswana</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-sky-600">
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
      <section className="py-16 bg-gradient-to-r from-sky-600 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Know a Gluten-Free Spot in Botswana?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Help fellow celiac travelers by adding your favorite gluten-free restaurants, lodges, and cafés in Botswana.
          </p>
          <AddRestaurantDialog
            city="Botswana"
            triggerClassName="bg-white text-sky-700 hover:bg-sky-50 font-semibold px-8 py-3"
          />
        </div>
      </section>
    </div>
  );
};

export default Botswana;
