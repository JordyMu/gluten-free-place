import { Link } from "react-router-dom";
import { MapPin, Star, Users, ArrowRight, Shield, ChefHat, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEOHead } from "@/components/SEOHead";
const cities = [
  {
    name: "Marrakesh",
    image: "photo-1597212618440-806262de4f6b",
    places: 18,
    description: "Navigate the medina with confidence — tagines, msemen, and naturally gluten-free Moroccan classics.",
    rating: 4.6,
    route: "#",
  },
  {
    name: "Casablanca",
    image: "photo-1569383746724-6f1b882b8f46",
    places: 14,
    description: "Morocco's cosmopolitan hub with modern restaurants offering dedicated gluten-free menus.",
    rating: 4.5,
    route: "#",
  },
  {
    name: "Rabat",
    image: "photo-1553899017-c205d710e08b",
    places: 10,
    description: "The capital city blends traditional Moroccan cuisine with growing gluten-free awareness.",
    rating: 4.4,
    route: "#",
  },
  {
    name: "Fes",
    image: "photo-1545042679-09db5aba3e8e",
    places: 8,
    description: "Ancient culinary traditions meet celiac-safe dining in the spiritual heart of Morocco.",
    rating: 4.3,
    route: "#",
  },
  {
    name: "Agadir",
    image: "photo-1548018560-c7196e70554a",
    places: 9,
    description: "Beach resort town with international restaurants catering to gluten-free travellers.",
    rating: 4.4,
    route: "#",
  },
  {
    name: "Tangier",
    image: "photo-1553244469-c2ec6973e0a4",
    places: 7,
    description: "Gateway to Africa with a vibrant food scene and naturally gluten-free Moroccan staples.",
    rating: 4.2,
    route: "#",
  },
];

const faqs = [
  {
    question: "Is Moroccan food naturally gluten-free?",
    answer: "Many traditional Moroccan dishes are naturally gluten-free, including tagines, couscous alternatives made from corn, grilled meats, and salads. However, couscous (made from semolina wheat) and msemen (Moroccan flatbread) contain gluten. Always confirm ingredients with restaurants.",
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
  

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Morocco | Celiac-Safe Dining Guide 2026"
      description="Discover the best gluten-free restaurants, riads, and celiac-safe dining options across Morocco. From Marrakesh tagines to Casablanca's modern eateries — your complete guide to gluten-free travel in Morocco."
      canonical="/gluten-free/morocco"
    />
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-5xl mb-4 block">🇲🇦</span>
          <h1 className="text-3xl md:text-5xl font-bold !text-white mb-4">
            Gluten-Free Morocco
          </h1>
          <p className="text-lg md:text-xl !text-white/90 max-w-2xl mx-auto mb-6">
            Your trusted guide to celiac-safe dining across the Kingdom of Morocco
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="bg-transparent border-white !text-white px-4 py-2 text-sm">
              <MapPin className="h-4 w-4 mr-1" /> 6 Cities
            </Badge>
            <Badge variant="outline" className="bg-transparent border-white !text-white px-4 py-2 text-sm">
              <Star className="h-4 w-4 mr-1" /> 66+ Places
            </Badge>
            <Badge variant="outline" className="bg-transparent border-white !text-white px-4 py-2 text-sm">
              <Users className="h-4 w-4 mr-1" /> Community Verified
            </Badge>
          </div>
        </div>
      </section>

      {/* City Cards */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-3">Explore Cities in Morocco</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find celiac-safe restaurants, cafés, and food options in Morocco's most visited cities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <Card
              key={city.name}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={`Gluten-free dining in ${city.name}, Morocco`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold text-sm">{city.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{city.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-orange-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="font-semibold text-sm">{city.places} places</span>
                  </div>
                </div>
                {city.route !== "#" ? (
                  <Link to={city.route}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      Explore {city.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="w-full bg-muted text-muted-foreground">
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Intro Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Gluten-Free Dining in Morocco</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Morocco is a paradise for food lovers, and with some knowledge, it can be wonderfully navigable for those with celiac disease or gluten sensitivity. Traditional Moroccan cuisine features many naturally gluten-free dishes — from aromatic tagines slow-cooked with preserved lemons and olives, to vibrant salads and grilled meats.
            </p>
            <p>
              The key staples to watch for are <strong>couscous</strong> (traditionally made from wheat semolina), <strong>bread</strong> (khobz, a central part of every meal), and <strong>pastilla</strong> (phyllo-wrapped pastry). However, many riads and modern restaurants in tourist areas are increasingly aware of gluten-free needs and can adapt their menus.
            </p>
            <p>
              Street food markets like Jemaa el-Fnaa in Marrakesh offer grilled meats, fresh juices, and dried fruits that are naturally safe. Always carry a dietary card in Arabic and French for the best communication with local vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Why Trust Our Morocco Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Celiac Verified", desc: "Restaurants checked for cross-contamination protocols" },
              { icon: ChefHat, title: "Chef Confirmed", desc: "Kitchen practices verified with staff" },
              { icon: Globe, title: "Traveller Tested", desc: "Reviewed by gluten-free travellers to Morocco" },
              { icon: MessageCircle, title: "Community Driven", desc: "Real reviews from the celiac community" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold !text-white mb-4">Ready to Explore Gluten-Free Morocco?</h2>
          <p className="!text-white/90 mb-6 max-w-xl mx-auto">
            Start with Marrakesh — Morocco's most popular destination with the widest range of celiac-safe dining options.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-semibold" disabled>
            Marrakesh Guide Coming Soon
          </Button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Morocco;
