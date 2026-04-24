import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { FranceRestaurantList } from "@/components/france/FranceRestaurantList";
import { SEOHead } from "@/components/SEOHead";

const France = () => {
  const faqItems = [
    {
      question: "Is France a good destination for gluten-free travelers?",
      answer: "Yes! France has embraced gluten-free dining with growing celiac awareness. Paris in particular is home to renowned 100% gluten-free bakeries like Chambelland, Copains, and Noglu."
    },
    {
      question: "What French foods are naturally gluten-free?",
      answer: "Buckwheat galettes (galettes de sarrasin) from Brittany are traditional and naturally GF. Many cheeses, charcuterie, fresh seafood, ratatouille, and sauces like hollandaise can also be naturally gluten-free."
    },
    {
      question: "Are there dedicated gluten-free bakeries in France?",
      answer: "Absolutely! Boulangerie Chambelland, Copains (multiple locations), Noglu, and La Manufacture du Sans Gluten in Paris are all 100% dedicated. Lyon and Bordeaux also have dedicated GF spots."
    },
    {
      question: "How do I communicate my celiac needs in French?",
      answer: "Say 'Je suis cœliaque' (I'm celiac) or 'sans gluten' (without gluten). Most restaurants in major cities understand. A printed allergen card in French is helpful in smaller towns."
    },
    {
      question: "Which French city is most celiac-friendly?",
      answer: "Paris leads by far with the most dedicated GF bakeries and restaurants. Lyon and Bordeaux also have excellent GF scenes."
    },
    {
      question: "Can I find gluten-free products in French supermarkets?",
      answer: "Yes — major chains like Monoprix, Carrefour, and Naturalia stock extensive GF ranges. EU labelling laws make ingredient lists clear and reliable."
    }
  ];

  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Gluten-Free Restaurants in France | Celiac-Safe Dining Guide");
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across France. Browse by city, read real reviews, and find safe dining nationwide.");

    const existingSchema = document.querySelector('script[data-schema="france-gf"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'france-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in France",
      description: "Find the best gluten-free restaurants across France. Verified celiac-safe dining in Paris, Lyon, Bordeaux, Nice & more.",
      url: "https://glutenfreeplace.org/gluten-free/france",
      mainEntity: {
        "@type": "ItemList",
        name: "Top Gluten-Free Cities in France",
        numberOfItems: 4,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Paris", url: "https://glutenfreeplace.org/gluten-free/france/paris" },
          { "@type": "ListItem", position: 2, name: "Lyon", url: "https://glutenfreeplace.org/gluten-free/france/lyon" },
          { "@type": "ListItem", position: 3, name: "Bordeaux", url: "https://glutenfreeplace.org/gluten-free/france/bordeaux" },
          { "@type": "ListItem", position: 4, name: "Nice", url: "https://glutenfreeplace.org/gluten-free/france/nice" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="france-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'france-faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.querySelector('script[data-schema="france-gf"]')?.remove();
      document.querySelector('script[data-schema="france-faq"]')?.remove();
    };
  }, []);

  const cities = [
    {
      name: "Paris",
      image: "photo-1502602898657-3e91760cbb34",
      places: 41,
      rating: 4.7,
      description: "France's capital with renowned dedicated GF bakeries and bistros",
      route: "/gluten-free/france/paris",
      highlights: ["Chambelland", "Copains", "Noglu"]
    },
    {
      name: "Lyon",
      image: "photo-1524396309943-e03f5249f002",
      places: 2,
      rating: 4.6,
      description: "Gastronomic capital with growing gluten-free scene",
      route: "/gluten-free/france/lyon",
      highlights: ["Copains Lyon", "Les Gasteliers"]
    },
    {
      name: "Bordeaux",
      image: "photo-1606744824163-985d376605aa",
      places: 1,
      rating: 4.6,
      description: "Wine capital with artisan GF bakery options",
      route: "/gluten-free/france/bordeaux",
      highlights: ["BAG Bakery Art Gallery"]
    },
    {
      name: "Nice",
      image: "photo-1533614767277-ed01112a4e34",
      places: 1,
      rating: 4.6,
      description: "Côte d'Azur destination with vegan & GF patisseries",
      route: "/gluten-free/france/nice",
      highlights: ["Amour Patisserie Vegetale"]
    }
  ];

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in France | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants across France. Verified celiac-safe dining in Paris, Lyon, Bordeaux, Marseille & more. Real reviews from GF travelers."
      canonical="/gluten-free/france"
    />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-700" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-gray-700 to-red-600 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-700 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-blue-700 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-blue-700 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-blue-700 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-blue-700 via-white/10 to-red-600">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇫🇷</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              50+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free France
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining across France — from Paris's
              dedicated bakeries to Lyon's gastronomic scene and the Côte d'Azur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gluten-free/france/paris">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Start with Paris
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <AddRestaurantDialog
                city="France"
                triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10"
              />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Gluten-Free Cities in France
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
                    loading="lazy"
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
                  <div className="flex items-center text-blue-700 mb-3">
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
                          className="text-xs bg-blue-50 text-blue-700"
                        >
                          {spot}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {city.route !== "#" ? (
                    <Link to={city.route}>
                      <Button className="w-full bg-gradient-to-r from-blue-700 to-red-600 hover:from-blue-800 hover:to-red-700">
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

      <FranceRestaurantList />

      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                <Award className="h-4 w-4 mr-2" />
                About
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in France</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Why France?</h3>
                <p className="text-gray-600 mb-4">
                  France's renowned gastronomic culture has fully embraced gluten-free dining. Paris is home
                  to some of Europe's most acclaimed dedicated GF bakeries, and traditional dishes like
                  buckwheat galettes are naturally celiac-safe.
                </p>
                <p className="text-gray-600">
                  EU food labelling laws ensure clear allergen information, making it straightforward to dine
                  and shop with confidence across the country.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Say "Je suis cœliaque" or look for "sans gluten" on menus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Buckwheat galettes (Brittany) are naturally gluten-free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>AFDIAG (French Celiac Association) certifies safe products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Monoprix, Carrefour and Naturalia stock GF ranges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">FAQ</Badge>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              {faqItems.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="px-6">
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default France;
