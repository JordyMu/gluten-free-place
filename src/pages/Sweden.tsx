import { MapPin, Star, ArrowLeft, Globe, Shield, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";
import { swedenCities } from "@/data/swedenRestaurants";

const faqItems = [
  {
    question: "Is Sweden a good destination for gluten-free travellers?",
    answer:
      "Yes. Sweden has excellent coeliac awareness, strict EU allergen labelling and a widely used word for gluten-free — 'glutenfri' — that appears on menus and packaging across the country.",
  },
  {
    question: "How do I ask for gluten-free food in Swedish?",
    answer:
      "Say 'glutenfri' for gluten-free and 'jag har celiaki' if you have coeliac disease. Almost all staff also speak fluent English.",
  },
  {
    question: "Which Swedish foods are naturally gluten-free?",
    answer:
      "Grilled and cured fish, shellfish, potatoes, lingonberries, cheeses and most Swedish salads are naturally gluten-free. Watch out for breaded fish, flour-thickened sauces and traditional buns.",
  },
  {
    question: "Can I find gluten-free products in Swedish supermarkets?",
    answer:
      "Absolutely. ICA, Coop and Willys stock large glutenfri sections with bread, crispbread, pasta, oats and baking mixes from brands such as Semper and Fria.",
  },
  {
    question: "Which Swedish city is most coeliac-friendly?",
    answer:
      "Stockholm leads with dedicated gluten-free kitchens and bakeries, followed by Gothenburg and Malmö. Uppsala is great for classic Swedish fika with gluten-free cakes.",
  },
];

const totalPlaces = swedenCities.reduce((sum, c) => sum + c.restaurants.length, 0);

const schemaJson = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Gluten-Free Restaurants in Sweden",
    description:
      "Find gluten free options across Sweden: celiac-safe restaurants, bakeries and cafés in Stockholm, Gothenburg, Malmö and Uppsala.",
    url: "https://glutenfreeplace.org/sweden",
    mainEntity: {
      "@type": "ItemList",
      name: "Top Gluten-Free Cities in Sweden",
      numberOfItems: swedenCities.length,
      itemListElement: swedenCities.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        url: `https://glutenfreeplace.org/gluten-free/sweden/${c.slug}`,
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

const Sweden = () => (
  <>
    <SEOHead
      title="Gluten-Free Options in Sweden | Celiac-Safe Dining"
      description="Gluten free options across Sweden: verified celiac-safe restaurants, bakeries and cafés in Stockholm, Gothenburg, Malmö and Uppsala."
      canonical="/sweden"
      schemaJson={schemaJson}
    />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-red-600 transition-colors">Countries</Link>
            <a href="#cities" className="text-gray-700 hover:text-red-600 transition-colors">Cities</a>
            <a href="#faq" className="text-gray-700 hover:text-red-600 transition-colors">FAQ</a>
            <UserMenu />
          </div>
        </div>
      </header>

      <section
        className="relative py-12 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1600&q=70)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇸🇪</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              {totalPlaces}+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Dedicated Gluten-Free Restaurants in Sweden
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Explore celiac-safe dining across Sweden — from Stockholm's dedicated gluten-free kitchens to
              Gothenburg's seafood, Malmö's food halls and Uppsala's classic fika.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gluten-free/sweden/stockholm">
                <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
                  Start with Stockholm
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <AddRestaurantDialog
                city="Sweden"
                triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="cities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
              <MapPin className="h-4 w-4 mr-2" />
              Explore by City
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Top Gluten-Free Cities in Sweden</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {swedenCities.map((city, index) => (
              <Card
                key={city.slug}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/gluten-free/sweden/${city.slug}`} aria-label={`Explore gluten-free options in ${city.name}`} className="block">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                      alt={`Gluten-free restaurants in ${city.name}, Sweden`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      width={600}
                      height={400}
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
                </Link>
                <CardContent className="p-5">
                  <p className="text-gray-600 text-sm mb-3">{city.description}</p>
                  <div className="flex items-center text-red-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="font-semibold text-sm">{city.restaurants.length} places</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                    <div className="flex flex-wrap gap-1">
                      {city.restaurants.slice(0, 3).map((r) => (
                        <Badge key={r.slug} variant="secondary" className="text-xs bg-red-50 text-red-700">
                          {r.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link to={`/gluten-free/sweden/${city.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      Explore {city.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                <Award className="h-4 w-4 mr-2" />
                About
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in Sweden</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Sweden?</h3>
                <p className="text-gray-600 mb-4">
                  Sweden is one of Europe's easiest countries for coeliac travellers. Allergen labelling is strict,
                  the word "glutenfri" appears on menus and packaging everywhere, and staff are used to allergy questions.
                </p>
                <p className="text-gray-600">
                  Stockholm and Gothenburg have dedicated gluten-free kitchens and bakeries, while every supermarket
                  carries a broad gluten-free range — making self-catering simple.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Look for "glutenfri" and the crossed-grain symbol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Say "jag har celiaki" to explain coeliac disease</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Grilled fish and shellfish are usually naturally gluten-free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Semper and Fria are the most stocked Swedish GF brands</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-red-600" />
              <h2 className="text-lg font-semibold text-gray-900">Trust & Safety</h2>
            </div>
            <p className="text-gray-600">
              Listings are checked by our community of coeliac travellers. We prioritise dedicated gluten-free
              facilities and venues with proven protocols — always confirm your needs with staff before ordering.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Everything you need to know about gluten-free dining in Sweden</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Know a Great GF Spot in Sweden?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Help fellow coeliac travellers discover safe dining across Sweden. Submit a restaurant to our directory.
          </p>
          <AddRestaurantDialog city="Sweden" triggerClassName="bg-white text-red-700 hover:bg-red-50 text-lg px-8 py-3" />
        </div>
      </section>
    </div>
  </>
);

export default Sweden;
