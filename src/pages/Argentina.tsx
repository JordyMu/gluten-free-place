import { ArrowLeft, ArrowRight, Award, Globe, MapPin, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { ArgentinaRestaurantList } from "@/components/argentina/ArgentinaRestaurantList";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import argentinaHero from "/images/argentina-hero.webp";

const cities = [
  { name: "Buenos Aires", image: "photo-1589909202802-8f4aadce1849", places: "40+", rating: 4.8, description: "The country’s largest collection of dedicated bakeries, cafés and restaurants", highlights: ["La Unión", "Sintaxis", "GOUT"] },
  { name: "Mendoza", image: "/images/mendoza-card.jpg", isLocal: true, places: "3+", rating: 4.7, description: "Wine-country dining with dedicated gluten-free cafés and bakeries", highlights: ["Enebro", "Enharinate", "Celiac-safe dining"] },
  { name: "Córdoba", image: "/images/cordoba-card.jpg", isLocal: true, places: "3+", rating: 4.7, description: "Central Argentina’s growing destination for gluten-free comfort food", highlights: ["Antojitos", "Napoli Sin Tacc", "Gisela Mondino"] },
  { name: "Bariloche", image: "photo-1518105779142-d975f22f1b0a", places: "10+", rating: 4.8, description: "Celiac-friendly stops in the Patagonian lake district and nearby mountain towns", highlights: ["Ruca Umel", "CHIMI DELI", "Celi Deli"] },
];

const faqItems = [
  { question: "Is Argentina good for gluten-free travelers?", answer: "Yes. Argentina has strong awareness of celiac disease, especially in Buenos Aires and major tourist destinations. Look for the phrase “Sin TACC,” which identifies gluten-free food." },
  { question: "What does Sin TACC mean?", answer: "Sin TACC means food made without wheat, oats, barley or rye. It is Argentina’s widely recognized term for gluten-free food and appears on certified packaged products and restaurant menus." },
  { question: "Where can I find the most gluten-free restaurants?", answer: "Buenos Aires offers the widest choice of dedicated bakeries, cafés and restaurants. Mendoza, Córdoba, Bariloche, El Calafate and Ushuaia also have useful celiac-safe options." },
  { question: "How should I explain celiac disease in Spanish?", answer: "Say “Soy celíaco/a” and ask “¿Es sin TACC?” Also confirm whether preparation surfaces, fryers and utensils are shared." },
  { question: "Are Argentine supermarkets suitable for celiac travelers?", answer: "Major supermarkets carry clearly marked Sin TACC products. Always check for the official gluten-free symbol and read the ingredient label." },
];

const schemaJson = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dedicated Gluten-Free Restaurants in Argentina",
    description: "Find gluten-free restaurants, bakeries and cafés across Argentina, including Buenos Aires, Mendoza, Córdoba and Bariloche.",
    url: "https://glutenfreeplace.org/argentina",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  },
];

const Argentina = () => (
  <>
    <SEOHead
      title="Gluten-Free Restaurants in Argentina | Celiac Guide"
      description="Find dedicated gluten-free restaurants, bakeries and cafés across Argentina, from Buenos Aires and Mendoza to Bariloche."
      canonical="/argentina"
      schemaJson={schemaJson}
    />
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-amber-50">
      <header className="sticky top-0 z-50 border-b border-red-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-red-700">Gluten-Free Places</span>
          </Link>
          <nav className="hidden items-center space-x-8 md:flex" aria-label="Argentina page navigation">
            <Link to="/" className="text-gray-700 transition-colors hover:text-red-600">Home</Link>
            <Link to="/countries" className="text-gray-700 transition-colors hover:text-red-600">Countries</Link>
            <a href="#cities" className="text-gray-700 transition-colors hover:text-red-600">Cities</a>
            <a href="#restaurants" className="text-gray-700 transition-colors hover:text-red-600">Restaurants</a>
            <a href="#faq" className="text-gray-700 transition-colors hover:text-red-600">FAQ</a>
            <UserMenu />
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-12">
        <img src={argentinaHero} alt="Buenos Aires skyline and the Obelisk" className="absolute inset-0 h-full w-full object-cover" width={1200} height={525} loading="eager" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Link to="/countries" className="mb-4 inline-flex items-center text-white/80 transition-colors hover:text-white"><ArrowLeft className="mr-2 h-4 w-4" />Back to All Countries</Link>
          <span className="mb-4 block text-5xl" aria-hidden="true">🇦🇷</span>
          <Badge className="mb-4 border-white/30 bg-white/20 text-white"><MapPin className="mr-2 h-4 w-4" />60+ Gluten-Free Places</Badge>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">Dedicated Gluten-Free Restaurants in Argentina</h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-white/90">Discover Sin TACC bakeries, cafés and restaurants from Buenos Aires to Bariloche.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#restaurants"><Button size="lg" className="bg-white text-red-700 hover:bg-red-50">Explore Restaurants<ArrowRight className="ml-2 h-5 w-5" /></Button></a>
            <AddRestaurantDialog city="Argentina" triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10" />
          </div>
        </div>
      </section>

      <section id="cities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-red-200 bg-red-100 text-red-800"><MapPin className="mr-2 h-4 w-4" />Explore by Region</Badge>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Top Gluten-Free Destinations in Argentina</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">Browse the country’s leading destinations for dedicated gluten-free food and celiac-aware dining.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <Card key={city.name} className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <a href="#restaurants" className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img src={city.isLocal ? city.image : `https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`} alt={`Gluten-free dining in ${city.name}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" width={600} height={400} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute right-4 top-4 flex items-center rounded-full bg-white/90 px-3 py-1"><Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" /><span className="text-sm font-semibold">{city.rating}</span></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{city.name}</h3>
                  </div>
                </a>
                <CardContent className="p-5">
                  <p className="mb-3 text-sm text-gray-600">{city.description}</p>
                  <div className="mb-3 flex items-center text-red-600"><MapPin className="mr-1 h-4 w-4" /><span className="text-sm font-semibold">{city.places} places</span></div>
                  <div className="mb-4 flex flex-wrap gap-1">{city.highlights.map((highlight) => <Badge key={highlight} variant="secondary" className="bg-red-50 text-xs text-red-700">{highlight}</Badge>)}</div>
                  <Link to={city.name === "Buenos Aires" ? "/gluten-free/argentina/buenos-aires" : "#restaurants"}><Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">Explore {city.name}<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ArgentinaRestaurantList />

      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4"><div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center"><Badge className="mb-4 border-red-200 bg-red-100 text-red-800"><Award className="mr-2 h-4 w-4" />About</Badge><h2 className="text-3xl font-bold text-gray-900">Gluten-Free Dining in Argentina</h2></div>
          <div className="grid gap-8 md:grid-cols-2">
            <div><h3 className="mb-3 text-xl font-semibold text-gray-900">Why Argentina?</h3><p className="mb-4 text-gray-600">Argentina has one of Latin America’s strongest gluten-free cultures. The familiar Sin TACC symbol helps travelers identify suitable food in restaurants and shops.</p><p className="text-gray-600">Buenos Aires leads with dedicated bakeries and restaurants, while Mendoza, Córdoba and Bariloche offer an expanding range of celiac-aware choices.</p></div>
            <div><h3 className="mb-3 text-xl font-semibold text-gray-900">Celiac Tips</h3><ul className="space-y-3 text-gray-600">{["Look for the official Sin TACC symbol", "Say “Soy celíaco/a” when ordering", "Confirm that fryers and preparation surfaces are separate", "Carry a Spanish celiac dining card outside major cities"].map((tip) => <li key={tip} className="flex items-start gap-2"><Shield className="mt-0.5 h-5 w-5 shrink-0 text-red-600" /><span>{tip}</span></li>)}</ul></div>
          </div>
        </div></div>
      </section>

      <section className="bg-red-50/50 py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl"><div className="mb-3 flex items-center gap-2"><Shield className="h-6 w-6 text-red-600" /><h2 className="text-lg font-semibold text-gray-900">Trust & Safety</h2></div><p className="text-gray-600">We prioritize dedicated gluten-free venues and restaurants with clear celiac protocols. Always confirm ingredients and cross-contamination procedures directly with staff.</p></div></div></section>

      <section id="faq" className="py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-3xl"><div className="mb-8 text-center"><h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2><p className="mt-2 text-gray-600">Everything you need to know about gluten-free dining in Argentina</p></div><Accordion type="single" collapsible className="w-full">{faqItems.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="text-gray-600">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></div></section>

      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16"><div className="container mx-auto px-4 text-center"><h2 className="mb-4 text-3xl font-bold text-white">Know a Great GF Spot in Argentina?</h2><p className="mx-auto mb-8 max-w-2xl text-white/90">Help fellow celiac travelers discover safe dining across Argentina by submitting a restaurant.</p><AddRestaurantDialog city="Argentina" triggerClassName="bg-white text-red-700 hover:bg-red-50 text-lg px-8 py-3" /></div></section>
    </div>
  </>
);

export default Argentina;