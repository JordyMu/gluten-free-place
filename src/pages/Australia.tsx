import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { AustraliaRestaurantList } from "@/components/australia/AustraliaRestaurantList";
import { SEOHead } from "@/components/SEOHead";

const australiaHero = "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80";

const Australia = () => {
  const faqItems = [
    {
      question: "Is Australia a good destination for gluten-free travelers?",
      answer: "Yes! Australia is one of the most celiac-friendly countries in the world. Coeliac Australia certification is widely recognised, and dedicated gluten-free bakeries and cafes are common in major cities."
    },
    {
      question: "What does Coeliac Australia certification mean?",
      answer: "Coeliac Australia accreditation means a venue follows strict gluten-free protocols, including ingredient control, staff training and separate preparation areas to prevent cross-contamination."
    },
    {
      question: "Are there dedicated gluten-free bakeries in Australia?",
      answer: "Absolutely! Wholegreen Bakery (Sydney/Melbourne), BAKED Gluten Free (Perth), Glazed Gluten Free Patisserie (Brisbane) and Sebastien Sans Gluten (Sydney) are all 100% dedicated gluten-free facilities."
    },
    {
      question: "How do I communicate my celiac needs in Australia?",
      answer: "English is spoken everywhere, so simply tell staff you have celiac disease and need gluten-free food. Most venues understand cross-contamination and many menus clearly label GF items."
    },
    {
      question: "Which Australian city is most celiac-friendly?",
      answer: "Melbourne and Sydney lead with the largest number of dedicated GF venues, but Brisbane and Perth also have excellent dedicated bakeries and celiac-aware restaurants."
    },
    {
      question: "Can I find gluten-free products in Australian supermarkets?",
      answer: "Yes — Coles and Woolworths stock extensive gluten-free ranges, and health food stores carry specialty products. Australian labelling laws make allergen information clear and reliable."
    }
  ];

  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Gluten-Free Restaurants in Australia | Celiac-Safe Dining Guide");
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across Australia. Browse by city, read real reviews, and find safe dining nationwide.");

    const existingSchema = document.querySelector('script[data-schema="australia-gf"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'australia-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in Australia",
      description: "Find the best gluten-free restaurants across Australia. Verified celiac-safe dining in Sydney, Melbourne, Brisbane, Perth & more.",
      url: "https://glutenfreeplace.org/australia",
      mainEntity: {
        "@type": "ItemList",
        name: "Top Gluten-Free Cities in Australia",
        numberOfItems: 4,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Sydney", url: "https://glutenfreeplace.org/gluten-free/australia/sydney" },
          { "@type": "ListItem", position: 2, name: "Melbourne", url: "https://glutenfreeplace.org/gluten-free/australia/melbourne" },
          { "@type": "ListItem", position: 3, name: "Brisbane", url: "https://glutenfreeplace.org/gluten-free/australia/brisbane" },
          { "@type": "ListItem", position: 4, name: "Perth", url: "https://glutenfreeplace.org/gluten-free/australia/perth" }
        ]
      }
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="australia-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'australia-faq');
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
      document.querySelector('script[data-schema="australia-gf"]')?.remove();
      document.querySelector('script[data-schema="australia-faq"]')?.remove();
    };
  }, []);

  const cities = [
    {
      name: "Sydney",
      image: "photo-1506973035872-a4ec16b8e8d9",
      places: 3,
      rating: 4.7,
      description: "Harbour city with dedicated GF patisseries and beachside cafes",
      route: "/gluten-free/australia/sydney",
      highlights: ["Sebastien Sans Gluten", "Noglu", "The Little Kitchen"]
    },
    {
      name: "Melbourne",
      image: "photo-1514395462725-fb4566210144",
      places: 2,
      rating: 4.9,
      description: "Laneway culture with Australia's best dedicated GF bakery",
      route: "/gluten-free/australia/melbourne",
      highlights: ["Wholegreen Bakery", "Duke of Brunswick"]
    },
    {
      name: "Brisbane",
      image: "photo-1572125675722-238a4f1f4ea2",
      places: 3,
      rating: 4.8,
      description: "Riverside dining with artisan GF patisseries and fresh seafood",
      route: "/gluten-free/australia/brisbane",
      highlights: ["Glazed GF Patisserie", "Nodo", "Urban Fish Market"]
    },
    {
      name: "Perth",
      image: "photo-1524293581917-878a6d017c71",
      places: 2,
      rating: 4.8,
      description: "Sunny west coast with dedicated GF bakeries and specialty coffee",
      route: "/gluten-free/australia/perth",
      highlights: ["BAKED Gluten Free", "Straight Up Coffee"]
    }
  ];

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Australia | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants across Australia. Verified celiac-safe dining in Sydney, Melbourne, Brisbane, Perth & more. Real reviews from GF travelers."
      canonical="/australia"
    />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
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

      <section
        className="relative py-12 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${australiaHero})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇦🇺</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              10+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Dedicated Gluten-Free Restaurants in Australia
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining from Sydney to Perth.
              From dedicated patisseries to celiac-certified bakeries and cafes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gluten-free/australia/sydney">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Start with Sydney
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <AddRestaurantDialog
                city="Australia"
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
              Top Gluten-Free Cities in Australia
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
                          className="text-xs bg-blue-50 text-blue-700"
                        >
                          {spot}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link to={city.route}>
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

      <AustraliaRestaurantList />

      <section className="py-16 bg-white/50">

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                <Award className="h-4 w-4 mr-2" />
                About
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in Australia</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Australia?</h3>
                <p className="text-gray-600 mb-4">
                  Australia is one of the most celiac-aware countries in the world. Coeliac Australia certification
                  is widely trusted, and dedicated gluten-free bakeries and cafes thrive in every major city.
                </p>
                <p className="text-gray-600">
                  From Sydney's harbourside patisseries to Melbourne's laneway bakeries, Brisbane's riverside
                  dining and Perth's sunny cafes, celiacs can travel across Australia with confidence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Look for Coeliac Australia accreditation logos on menus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Coles and Woolworths carry extensive GF ranges nationwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Many pubs offer GF beer and separate fryers for chips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Australian labelling laws require clear allergen disclosure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Trust & Safety</h2>
            </div>
            <p className="text-gray-600">
              All restaurants are verified by our community of celiac travelers. We prioritize dedicated gluten-free
              facilities and Coeliac Australia certified venues. Always communicate your dietary needs directly with restaurant staff.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Everything you need to know about gluten-free dining in Australia</p>
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

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Know a Great GF Spot in Australia?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Help fellow celiac travelers discover safe dining options across Australia. Submit a restaurant to our growing directory.
          </p>
          <AddRestaurantDialog city="Australia" triggerClassName="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-3" />
        </div>
      </section>
    </div>
    </>
  );
};

export default Australia;
