import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Award, Globe, MapPin, Shield, Star } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import germanyHero from "@/assets/germany-hero.jpg";

const cityLinks: Record<string, string> = {
  Berlin: "/gluten-free/germany/berlin",
  Munich: "/gluten-free/germany/munich",
  Hamburg: "/gluten-free/germany/hamburg",
};

const cities = [
  {
    name: "Berlin",
    image: "photo-1560969184-10fe8719e047",
    rating: "4.8",
    description: "Creative capital with dedicated bakeries, vegan cafés and globally inspired dining",
    highlights: ["GF Bakeries", "Vegan Cafés", "International Cuisine"],
  },
  {
    name: "Munich",
    image: "photo-1595867818082-083862f3d630",
    rating: "4.7",
    description: "Bavarian hospitality with celiac-aware kitchens and gluten-free classics",
    highlights: ["Bavarian Food", "Cafés", "Fine Dining"],
  },
  {
    name: "Hamburg",
    image: "photo-1515081774057-84dcf72d0cf1",
    rating: "4.6",
    description: "Harbour dining, fresh seafood and an expanding gluten-free café scene",
    highlights: ["Seafood", "Brunch", "Bakeries"],
  },
  {
    name: "Cologne",
    image: "photo-1551816230-ef5deaed4a26",
    rating: "4.6",
    description: "Cathedral city dining with riverside restaurants and reliable gluten-free choices",
    highlights: ["Global Cuisine", "Casual Dining", "Cafés"],
  },
];

const faqItems = [
  {
    question: "Is Germany a good destination for gluten-free travelers?",
    answer: "Yes. Gluten-free products are widely available, allergen information is required on menus, and major cities have dedicated bakeries and celiac-aware restaurants.",
  },
  {
    question: "How do I ask for gluten-free food in German?",
    answer: "Ask for “glutenfrei” and say “Ich habe Zöliakie” to explain that you have celiac disease. Always confirm how food is prepared and whether shared fryers are used.",
  },
  {
    question: "Are allergens shown on German menus?",
    answer: "Restaurants must provide allergen information, although it may appear in a separate guide. Ask staff to show you the allergen list and confirm cross-contamination procedures.",
  },
  {
    question: "Can I find gluten-free food in German supermarkets?",
    answer: "Yes. Most large supermarkets and organic shops carry gluten-free bread, pasta, snacks and baking products. Look for “glutenfrei” on the packaging.",
  },
  {
    question: "Which German city is best for gluten-free dining?",
    answer: "Berlin generally has the broadest selection, while Munich, Hamburg and Cologne also offer strong choices across bakeries, cafés and international restaurants.",
  },
];

const Germany = () => {
  const [searchParams] = useSearchParams();
  const requestedCity = searchParams.get("city");
  const selectedCity = cities.find((city) => city.name.toLowerCase() === requestedCity?.toLowerCase());

  useEffect(() => {
    if (!selectedCity) return;
    window.requestAnimationFrame(() => document.getElementById("cities")?.scrollIntoView({ behavior: "smooth" }));
  }, [selectedCity]);

  const schemaJson = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Dedicated Gluten-Free Restaurants in Germany",
      description: "A celiac-safe dining guide to gluten-free restaurants, bakeries and cafés across Germany.",
      url: "https://glutenfreeplace.org/germany",
      mainEntity: {
        "@type": "ItemList",
        name: "Top Gluten-Free Cities in Germany",
        numberOfItems: cities.length,
        itemListElement: cities.map((city, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: city.name,
          url: `https://glutenfreeplace.org/germany?city=${encodeURIComponent(city.name)}`,
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

  return (
    <>
      <SEOHead
        title="Gluten-Free Restaurants in Germany | Celiac Guide"
        description="Find dedicated gluten-free restaurants, bakeries and cafés in Berlin, Munich, Hamburg and Cologne, with practical celiac travel tips."
        canonical="/germany"
        schemaJson={schemaJson}
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-amber-50">
        <header className="sticky top-0 z-50 border-b border-red-100 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-red-700">Gluten-Free Places</span>
            </Link>
            <nav className="hidden items-center space-x-8 md:flex" aria-label="Germany page navigation">
              <Link to="/" className="whitespace-nowrap text-gray-700 transition-colors hover:text-red-600">Home</Link>
              <Link to="/countries" className="text-gray-700 transition-colors hover:text-red-600">Countries</Link>
              <a href="#cities" className="text-gray-700 transition-colors hover:text-red-600">Cities</a>
              <a href="#faq" className="text-gray-700 transition-colors hover:text-red-600">FAQ</a>
              <UserMenu />
            </nav>
          </div>
        </header>

        <section
          className="relative overflow-hidden bg-cover bg-center py-12"
          style={{ backgroundImage: `url(${germanyHero})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <Link to="/countries" className="mb-4 inline-flex items-center text-white/80 transition-colors hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Countries
            </Link>
            <div className="mx-auto max-w-4xl">
              <span className="mb-4 block text-5xl" aria-hidden="true">🇩🇪</span>
              <Badge className="mb-4 border-white/30 bg-white/20 text-white">
                <MapPin className="mr-2 h-4 w-4" />
                Gluten-Free Places Across Germany
              </Badge>
              <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                Dedicated Gluten-Free Restaurants in Germany
              </h1>
              <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-white/90">
                Discover celiac-safe dining from Berlin to Munich, with dedicated bakeries,
                welcoming cafés and restaurants that understand gluten-free needs.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a href="#cities">
                  <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
                    Explore German Cities
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <AddRestaurantDialog city="Germany" triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10" />
              </div>
            </div>
          </div>
        </section>

        <section id="cities" className="scroll-mt-20 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge className="mb-4 border-red-200 bg-red-100 text-red-800">
                <MapPin className="mr-2 h-4 w-4" />
                Explore by City
              </Badge>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                {selectedCity ? `Gluten-Free Dining in ${selectedCity.name}` : "Top Gluten-Free Cities in Germany"}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Browse Germany’s leading destinations for dedicated gluten-free food and celiac-aware dining.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cities.map((city) => {
                const isSelected = selectedCity?.name === city.name;
                const cityHref = cityLinks[city.name] ?? `/germany?city=${encodeURIComponent(city.name)}`;
                return (
                  <Card
                    key={city.name}
                    className={`group overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${isSelected ? "border-2 border-red-600" : "border-0"}`}
                  >
                    <Link to={cityHref} className="block">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                          alt={`Gluten-free restaurants in ${city.name}`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          width={600}
                          height={400}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute right-4 top-4 flex items-center rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
                          <Star className="mr-1 h-4 w-4 fill-current text-yellow-400" />
                          <span className="text-sm font-semibold">{city.rating}</span>
                        </div>
                        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{city.name}</h3>
                      </div>
                    </Link>
                    <CardContent className="p-5">
                      <p className="mb-3 text-sm text-gray-600">{city.description}</p>
                      <div className="mb-3 flex items-center text-red-600">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span className="text-sm font-semibold">City dining guide</span>
                      </div>
                      <div className="mb-4">
                        <p className="mb-2 text-xs text-gray-500">Popular choices:</p>
                        <div className="flex flex-wrap gap-1">
                          {city.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary" className="bg-red-50 text-xs text-red-700">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Link to={cityHref}>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
                          Explore {city.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <Badge className="mb-4 border-red-200 bg-red-100 text-red-800">
                  <Award className="mr-2 h-4 w-4" />
                  About
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900">Gluten-Free Dining in Germany</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Why Germany?</h3>
                  <p className="mb-4 text-gray-600">
                    Germany combines clear EU allergen labelling with a growing range of dedicated gluten-free bakeries,
                    cafés and restaurants in its major cities.
                  </p>
                  <p className="text-gray-600">
                    Organic shops and supermarkets also carry broad gluten-free ranges, making city breaks and longer
                    journeys easier for travelers with celiac disease.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Celiac Tips</h3>
                  <ul className="space-y-3 text-gray-600">
                    {["Look for “glutenfrei” on menus and packaging", "Say “Ich habe Zöliakie” when ordering", "Ask whether fryers and preparation surfaces are shared", "Request the restaurant’s written allergen guide"].map((tip) => (
                      <li key={tip} className="flex items-start gap-2">
                        <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-red-50/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-3 flex items-center gap-2">
                <Shield className="h-6 w-6 text-red-600" />
                <h2 className="text-lg font-semibold text-gray-900">Trust & Safety</h2>
              </div>
              <p className="text-gray-600">
                We prioritize dedicated gluten-free venues and restaurants with clear celiac protocols. Always confirm
                ingredients and cross-contamination procedures directly with restaurant staff.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="mt-2 text-gray-600">Everything you need to know about gluten-free dining in Germany</p>
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

        <section className="bg-gradient-to-r from-red-600 to-red-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Know a Great GF Spot in Germany?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/90">
              Help fellow celiac travelers discover safe dining across Germany by submitting a restaurant.
            </p>
            <AddRestaurantDialog city="Germany" triggerClassName="bg-white text-red-700 hover:bg-red-50 text-lg px-8 py-3" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Germany;