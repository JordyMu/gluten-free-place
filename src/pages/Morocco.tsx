import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

const cities = [
  {
    name: "Marrakesh",
    image: "photo-1597212618440-806262de4f6b",
    places: 24,
    rating: 4.6,
    description: "Navigate the medina with confidence — tagines, msemen, and naturally gluten-free Moroccan classics",
    route: "/gluten-free/morocco/marrakesh",
    highlights: ["Jemaa el-Fnaa grills", "Riad dining", "GF tagines"],
  },
  {
    name: "Casablanca",
    image: "photo-1569383746724-6f1b882b8f46",
    places: 23,
    rating: 4.5,
    description: "Morocco's cosmopolitan hub with modern restaurants offering dedicated gluten-free menus",
    route: "/gluten-free/morocco/casablanca",
    highlights: ["Modern GF menus", "Seafood restaurants", "Marjane GF products"],
  },
  {
    name: "Rabat",
    image: "/images/rabat-hero.webp?v=2",
    places: 21,
    rating: 4.4,
    description: "The capital city blends traditional Moroccan cuisine with growing gluten-free awareness",
    route: "/gluten-free/morocco/rabat",
    highlights: ["Lina Gluten Free", "Traditional tagines", "Café culture"],
  },
  {
    name: "Tangier",
    image: "/images/tangier-hero.webp?v=2",
    places: 19,
    rating: 4.2,
    description: "Gateway to Africa with a vibrant food scene and naturally gluten-free Moroccan staples",
    route: "/gluten-free/morocco/tangier",
    highlights: ["Seafood grills", "Kasbah cafés", "Fresh juices"],
  },
];

const otherMoroccoRestaurants: { name: string; area: string; icon: string; rating: number; cuisines: string[] }[] = [
  { name: "BILMOS", area: "Chefchaouen", icon: "🫐", rating: 4.6, cuisines: ["Moroccan", "Café"] },
  { name: "Culture Box", area: "Fès", icon: "📦", rating: 4.5, cuisines: ["International", "Café"] },
  { name: "KSOU Café & Restaurant", area: "Essaouira", icon: "☕", rating: 4.6, cuisines: ["Moroccan", "Café"] },
  { name: "Let's Be Healing Food", area: "Tamraght", icon: "🌿", rating: 4.7, cuisines: ["Healthy", "Vegetarian"] },
  { name: "Pasta Baladin", area: "Essaouira", icon: "🍝", rating: 4.5, cuisines: ["Italian", "Pasta"] },
  { name: "Cinema Cafe", area: "Fès", icon: "🎬", rating: 4.4, cuisines: ["Café", "International"] },
  { name: "Le 20 Restaurant", area: "Agadir", icon: "🍽️", rating: 4.5, cuisines: ["Moroccan", "International"] },
  { name: "Pâtisserie Boujemaa", area: "Essaouira", icon: "🧁", rating: 4.3, cuisines: ["Bakery", "Patisserie"] },
  { name: "The Loft", area: "Essaouira", icon: "🏠", rating: 4.6, cuisines: ["International", "Bistro"] },
  { name: "Teapot Cafe", area: "Taghazout", icon: "🫖", rating: 4.5, cuisines: ["Café", "Breakfast"] },
  { name: "La Terrazza", area: "Aït Benhaddou", icon: "🏜️", rating: 4.4, cuisines: ["Moroccan", "Italian"] },
  { name: "Gusto Italia", area: "Essaouira", icon: "🇮🇹", rating: 4.5, cuisines: ["Italian", "Pizza"] },
  { name: "Little Italy", area: "Agadir", icon: "🍕", rating: 4.4, cuisines: ["Italian", "Pizza"] },
  { name: "Restaurant Hamsa", area: "Chefchaouen", icon: "🪬", rating: 4.6, cuisines: ["Moroccan", "Vegetarian"] },
  { name: "Toma", area: "Fès", icon: "🍅", rating: 4.5, cuisines: ["Mediterranean", "Bistro"] },
];

const faqItems = [
  {
    question: "Is Moroccan food naturally gluten-free?",
    answer: "Many traditional Moroccan dishes are naturally gluten-free, including tagines, corn-based couscous alternatives, grilled meats, and salads. However, traditional couscous (semolina wheat) and msemen flatbread contain gluten. Always confirm ingredients with restaurants.",
  },
  {
    question: "How do I explain celiac disease in Morocco?",
    answer: "In Moroccan Arabic (Darija), you can say 'Andi hassasiya l-gluten' (I have a gluten sensitivity). Many restaurants in tourist areas understand English or French. Carrying a translated dietary card in Arabic and French is highly recommended.",
  },
  {
    question: "What traditional Moroccan dishes are safe for celiacs?",
    answer: "Tagines (slow-cooked stews), harira soup (check for flour thickener), grilled kebabs, zaalouk (eggplant dip), and fresh fruit are often safe. Avoid bread, pastilla, and traditional couscous unless confirmed gluten-free.",
  },
  {
    question: "Can I find gluten-free products in Moroccan supermarkets?",
    answer: "Major supermarkets like Marjane and Carrefour in larger cities stock some gluten-free products, especially in Casablanca and Marrakesh. Selection is more limited outside major cities, so plan accordingly.",
  },
  {
    question: "Are riads and hotels accommodating for gluten-free diets?",
    answer: "Many riads, especially in tourist areas like Marrakesh and Fes, are very accommodating when informed in advance. Boutique riads often prepare meals fresh and can easily adapt dishes to be gluten-free.",
  },
];

const Morocco = () => {
  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Gluten-Free Restaurants in Morocco | Celiac-Safe Dining Guide");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across Morocco. Browse by city, read real reviews, and find safe dining from Marrakesh to Casablanca.");
    }

    const existingSchema = document.querySelector('script[data-schema="morocco-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'morocco-gf');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Gluten-Free Restaurants in Morocco",
      "description": "Find the best gluten-free restaurants across Morocco. Verified celiac-safe dining in Marrakesh, Casablanca, Rabat, Fes & more.",
      "url": "https://glutenfreeplace.org/gluten-free/morocco",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Top Gluten-Free Cities in Morocco",
        "numberOfItems": cities.length,
        "itemListElement": cities.map((city, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": city.name,
        })),
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glutenfreeplace.org" },
          { "@type": "ListItem", "position": 2, "name": "Countries", "item": "https://glutenfreeplace.org/countries" },
          { "@type": "ListItem", "position": 3, "name": "Morocco", "item": "https://glutenfreeplace.org/gluten-free/morocco" },
        ],
      },
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="morocco-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'morocco-faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.querySelector('script[data-schema="morocco-gf"]')?.remove();
      document.querySelector('script[data-schema="morocco-faq"]')?.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Gluten-Free Options in Morocco | Celiac-Safe Dining"
        description="Gluten free options across Morocco: verified celiac-safe restaurants, riads and cafés in Marrakesh, Casablanca, Rabat, Fes, Agadir and Tangier."
        canonical="/gluten-free/morocco"
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

        <section
          className="relative py-12 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1920&q=80')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Countries
            </Link>
            <div className="max-w-4xl mx-auto">
              <span className="text-5xl mb-4 block">🇲🇦</span>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" />
                85+ Gluten-Free Places
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Dedicated Gluten-Free Restaurants in Morocco
              </h1>
              <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
                Your trusted guide to celiac-safe dining across the Kingdom of Morocco.
                From Marrakesh tagines to Casablanca's modern eateries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="#cities">
                  <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
                    Explore Cities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <AddRestaurantDialog
                  city="Morocco"
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
                Top Gluten-Free Cities in Morocco
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
                  {(() => {
                    const imageUrl = city.image.startsWith("/")
                      ? city.image
                      : `https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`;
                    const media = (
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={imageUrl}
                          alt={`Gluten-free restaurants in ${city.name}, Morocco`}
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
                    );
                    return city.route !== "#" ? (
                      <Link to={city.route} aria-label={`Explore gluten-free options in ${city.name}`} className="block">
                        {media}
                      </Link>
                    ) : (
                      media
                    );
                  })()}
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
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                <MapPin className="h-4 w-4 mr-2" />
                More Destinations
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Other Moroccan Locations
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-5">
              {otherMoroccoRestaurants.map((r) => (
                <Card
                  key={r.name}
                  className="hover:shadow-xl transition-all duration-200 border border-gray-100 overflow-hidden"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                      <span className="text-2xl">{r.icon}</span>
                      {r.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-3 ml-9">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(r.rating)
                                ? "text-amber-400 fill-amber-400"
                                : i < r.rating
                                ? "text-amber-400 fill-amber-200"
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-sm text-gray-900">{r.rating}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3 ml-9">
                      {r.cuisines.map((c) => (
                        <Badge
                          key={c}
                          variant="outline"
                          className="text-xs font-medium text-gray-600 border-gray-200 bg-gray-50"
                        >
                          🍴 {c}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 ml-9">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">
                        <Shield className="h-3.5 w-3.5 mr-1" />
                        Celiac Protocols in Place
                      </Badge>
                      <Badge className="text-xs bg-violet-100 text-violet-800 border-violet-200">
                        🍽️ Mixed Menu
                      </Badge>
                    </div>

                    <div className="mt-3 ml-9 text-sm text-gray-600 flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                      <span>{r.area}, Morocco</span>
                    </div>
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
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in Morocco</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Morocco?</h3>
                  <p className="text-gray-600 mb-4">
                    Morocco is a paradise for food lovers, and with some knowledge, it can be wonderfully navigable for those with celiac disease or gluten sensitivity. Traditional Moroccan cuisine features many naturally gluten-free dishes — from aromatic tagines to vibrant salads and grilled meats.
                  </p>
                  <p className="text-gray-600">
                    The key staples to watch for are couscous (wheat semolina), khobz bread, and pastilla. Many riads and modern restaurants in tourist areas are increasingly aware of gluten-free needs and can adapt their menus.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Carry a dietary card in Arabic and French</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Tagines and grilled meats are usually naturally gluten-free</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Avoid couscous, khobz bread, and pastilla unless confirmed GF</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Marjane and Carrefour stock GF products in major cities</span>
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
                <p className="text-gray-600 mt-2">Everything you need to know about gluten-free dining in Morocco</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Know a Great GF Spot in Morocco?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help fellow celiac travelers discover safe dining options across Morocco. Submit a restaurant to our growing directory.
            </p>
            <AddRestaurantDialog city="Morocco" triggerClassName="bg-white text-red-700 hover:bg-red-50 text-lg px-8 py-3" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Morocco;
