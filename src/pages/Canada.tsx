import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { CanadaRestaurantList } from "@/components/canada/CanadaRestaurantList";
import { SEOHead } from "@/components/SEOHead";

const Canada = () => {
  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in Canada | Celiac-Safe Dining Guide");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across Canada. Browse by city, read real reviews, and find safe dining from coast to coast.");
    }

    const existingSchema = document.querySelector('script[data-schema="canada-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'canada-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Canada",
      "description": "Find the best gluten-free restaurants across Canada. Verified celiac-safe dining in Toronto, Vancouver, Montreal, Calgary & more.",
      "url": "https://glutenfreeplace.org/gluten-free/canada",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Top Gluten-Free Cities in Canada",
        "numberOfItems": 4,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Toronto", "url": "https://glutenfreeplace.org/gluten-free/canada/toronto" },
          { "@type": "ListItem", "position": 2, "name": "Vancouver", "url": "https://glutenfreeplace.org/gluten-free/canada/vancouver" },
          { "@type": "ListItem", "position": 3, "name": "Montreal", "url": "https://glutenfreeplace.org/gluten-free/canada/montreal" },
          { "@type": "ListItem", "position": 4, "name": "Calgary", "url": "https://glutenfreeplace.org/gluten-free/canada/calgary" }
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "Countries", "item": "https://glutenfreeplace.org/countries" },
          { "@type": "ListItem", "position": 3, "name": "Canada", "item": "https://glutenfreeplace.org/gluten-free/canada" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="canada-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'canada-faq');
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
      document.querySelector('script[data-schema="canada-gf"]')?.remove();
      document.querySelector('script[data-schema="canada-faq"]')?.remove();
    };
  }, []);

  const cities = [
    {
      name: "Toronto",
      image: "photo-1517935706615-2717063c2225",
      places: 24,
      rating: 4.7,
      description: "Canada's largest city with dedicated GF bakeries and diverse cuisine",
      route: "/gluten-free/canada/toronto",
      highlights: ["Almond Butterfly", "Bunner's", "Riz GF Kitchen"]
    },
    {
      name: "Vancouver",
      image: "photo-1559511260-66a654ae982a",
      places: 5,
      rating: 4.7,
      description: "West Coast city with health-conscious cafes and dedicated GF bakeries",
      route: "/gluten-free/canada/vancouver",
      highlights: ["GF Epicurean", "Lemonade Bakery", "Innocent Ice Cream"]
    },
    {
      name: "Montreal",
      image: "photo-1519178614-68673b201f36",
      places: 15,
      rating: 4.6,
      description: "Vibrant bilingual city with French-inspired GF bakeries and cafes",
      route: "/gluten-free/canada/montreal",
      highlights: ["Parc Sans Gluten", "Cantine Panella", "Arepera"]
    },
    {
      name: "Calgary",
      image: "/images/canada/calgary.webp",
      isLocal: true,
      places: 2,
      rating: 4.5,
      description: "Alberta's hub with growing gluten-free dining options",
      route: "/gluten-free/canada/calgary",
      highlights: ["Sweet Rice", "TRE Vietnamese"]
    },
    {
      name: "Québec City",
      image: "photo-1558618666-fcd25c85f82e",
      places: 4,
      rating: 4.5,
      description: "Historic city with charming European-style GF cafes",
      route: "#",
      highlights: ["Julio Taqueria", "Bistro Hortus", "Chez Hansel et Gretel"]
    },
    {
      name: "Victoria",
      image: "photo-1559511260-66a654ae982a",
      places: 3,
      rating: 4.6,
      description: "Beautiful island city with artisan GF spots",
      route: "#",
      highlights: ["MAiiZ Tortillería", "Better Acres"]
    },
    {
      name: "Ottawa",
      image: "photo-1570531356612-c0a2e7c52ef7",
      places: 2,
      rating: 4.5,
      description: "Canada's capital with emerging GF dining scene",
      route: "#",
      highlights: ["Coming Soon"]
    },
    {
      name: "Winnipeg",
      image: "photo-1517935706615-2717063c2225",
      places: 2,
      rating: 4.3,
      description: "Prairie city with growing gluten-free awareness",
      route: "#",
      highlights: ["Habanero Sombrero"]
    }
  ];

  const faqItems = [
    {
      question: "Is Canada a good destination for gluten-free travelers?",
      answer: "Yes! Canada has excellent celiac awareness, especially in major cities. Toronto and Vancouver have numerous dedicated GF bakeries, and many restaurants across the country offer clearly marked GF menus."
    },
    {
      question: "What Canadian foods are naturally gluten-free?",
      answer: "Many traditional Canadian dishes can be naturally GF including poutine (with GF gravy), maple syrup, wild game, fresh seafood, and First Nations-inspired dishes using corn and rice."
    },
    {
      question: "Are there dedicated gluten-free bakeries in Canada?",
      answer: "Absolutely! Bunner's Bakeshop and Almond Butterfly in Toronto, Lemonade Bakery and The Gluten Free Epicurean in Vancouver, and Parc Sans Gluten in Montreal are all 100% dedicated GF bakeries."
    },
    {
      question: "How do I communicate my celiac needs in Canadian restaurants?",
      answer: "English and French are widely spoken. Most restaurants are familiar with celiac disease and gluten-free dietary needs. In Québec, saying 'sans gluten' or 'maladie cœliaque' is helpful."
    },
    {
      question: "Which Canadian city is most celiac-friendly?",
      answer: "Toronto leads with the most dedicated GF bakeries and restaurants. Vancouver is a close second with its health-conscious dining culture. Montreal has excellent GF French-style bakeries."
    },
    {
      question: "Can I find gluten-free products in Canadian supermarkets?",
      answer: "Yes! Major chains like Whole Foods, Loblaws, and Metro stock extensive GF products. Canada has strong allergen labelling laws, making it easy to identify safe products."
    }
  ];

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Canada | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants across Canada. Verified celiac-safe dining in Toronto, Vancouver, Montreal, Calgary & more. Real reviews from GF travelers."
      canonical="/gluten-free/canada"
    />
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Gluten-Free Places
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">Home</Link>
            <Link to="/countries" className="text-gray-700 hover:text-red-600 transition-colors">Countries</Link>
            <Link to="#cities" className="text-gray-700 hover:text-red-600 transition-colors">Cities</Link>
            <Link to="#faq" className="text-gray-700 hover:text-red-600 transition-colors">FAQ</Link>
            <UserMenu />
          </div>
        </div>
      </header>

      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-red-700 to-red-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇨🇦</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              60+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free Canada
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining from coast to coast.
              From Toronto's dedicated bakeries to Vancouver's health-conscious cafes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gluten-free/canada/toronto">
                <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
                  Start with Toronto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <AddRestaurantDialog
                city="Canada"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Gluten-Free Cities in Canada
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
                    src={city.isLocal ? city.image : `https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
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
                  <div className="flex items-center text-red-600 mb-3">
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
                          className="text-xs bg-red-50 text-red-700"
                        >
                          {spot}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {city.route !== "#" ? (
                    <Link to={city.route}>
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
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

      <CanadaRestaurantList />

      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                <Award className="h-4 w-4 mr-2" />
                About
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in Canada</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Canada?</h3>
                <p className="text-gray-600 mb-4">
                  Canada is one of the most celiac-friendly countries in the world. With strong food labelling laws,
                  widespread awareness, and a thriving health food culture, gluten-free travelers can explore with confidence.
                </p>
                <p className="text-gray-600">
                  Major cities like Toronto and Vancouver boast numerous dedicated gluten-free bakeries, while Montreal's
                  French-inspired culinary scene has embraced GF dining with artisan bakeries and bistros.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Look for "Certified Gluten-Free" labels in supermarkets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Many Asian restaurants use tamari (GF soy sauce)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>In Québec, say "sans gluten" or "maladie cœliaque"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Canadian food labelling laws require clear allergen disclosure</span>
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
              All restaurants are verified by our community of celiac travelers. We prioritize dedicated gluten-free
              facilities and restaurants with proven celiac protocols. Always communicate your dietary needs directly with restaurant staff.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Everything you need to know about gluten-free dining in Canada</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Know a Great GF Spot in Canada?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Help fellow celiac travelers discover safe dining options across Canada. Submit a restaurant to our growing directory.
          </p>
          <AddRestaurantDialog city="Canada" triggerClassName="bg-white text-red-700 hover:bg-red-50 text-lg px-8 py-3" />
        </div>
      </section>
    </div>

    </>
  );
};

export default Canada;
