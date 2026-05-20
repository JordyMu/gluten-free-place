import { useEffect, useMemo } from "react";
import { MapPin, Star, ArrowLeft, Globe, Shield, Award, ArrowRight, Clock, Phone, Navigation, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

type ItalyRestaurant = {
  name: string;
  address: string;
  hours?: string;
  phone?: string;
  website?: string;
  directionsUrl?: string;
  specialty?: string;
  overview?: string;
  menuHighlights?: string[];
  proTip?: string;
  icon?: string;
  cuisineTypes?: string[];
  celiacSafe?: string;
  menuType?: string;
  rating?: number;
  reviewCount?: number;
};

type ItalyCity = {
  name: string;
  slug: string;
  emoji: string;
  description: string;
  highlights: string[];
  image: string;
  restaurants: ItalyRestaurant[];
};

const cities: ItalyCity[] = [
  {
    name: "Rome",
    slug: "rome",
    emoji: "🏛️",
    description: "Capital with dedicated GF pizzerias, trattorias and gelaterias",
    highlights: ["Mama Eat", "Voglia di Pizza", "Sgrano"],
    image: "photo-1525874684015-58379d421a52",
    restaurants: [
      {
        name: "Mama Eat – Gluten-Free Italian Restaurant",
        address: "Via di San Cosimato 7/9, Trastevere, Rome",
        hours: "Mon–Sun: 12:00 – 23:00",
        phone: "+39 06 5806222",
        website: "www.mamaeat.it",
        directionsUrl: "https://www.google.com/maps/place/Mama+Eat/@41.8872,12.4691,17z",
        specialty: "Fried appetizers, GF pizza & pasta",
        overview: "Certified gluten-free restaurant offering a full Italian menu safe for celiacs. Known for GF lasagna, pizza, tiramisu and GF beer with separate preparation areas.",
        menuHighlights: ["GF Lasagna", "Neapolitan Pizza (GF)", "Tiramisu (GF)", "GF Italian Beer"],
        proTip: "Their carbonara is celiac-safe.",
        icon: "🍝",
        cuisineTypes: ["Italian", "Mediterranean"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.8,
        reviewCount: 342,
      },
      {
        name: "Voglia di Pizza – Authentic Neapolitan Gluten-Free",
        address: "Via dei Cappuccini 15, 00187 Roma",
        hours: "Mon–Sun: 11:30 – 24:00",
        phone: "+39 06 4201 7506",
        website: "www.vogliadipizza.com",
        directionsUrl: "https://www.google.com/maps/place/Voglia+di+Pizza/@41.9028,12.4964,17z",
        specialty: "Wood-fired Neapolitan-style GF pizza",
        overview: "AIC-certified pizzeria using traditional wood-fired ovens and certified GF flour. Multiple Rome locations.",
        menuHighlights: ["Margherita DOP (GF)", "Mortadella e Pistacchi (GF)", "Marinara Classica (GF)"],
        proTip: "Try the mortadella-topped pizza – a Roman specialty.",
        icon: "🍕",
        cuisineTypes: ["Italian", "Pizza"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 567,
      },
      {
        name: "Sgrano – Dedicated Gluten-Free Trattoria",
        address: "Via del Boschetto 114, 00184 Roma (Monti)",
        hours: "Tue–Sun: 12:30 – 15:00, 19:30 – 23:00",
        phone: "+39 06 489 1435",
        website: "www.sgrano-roma.com",
        directionsUrl: "https://www.google.com/maps/place/Sgrano/@41.8958,12.4924,17z",
        specialty: "Traditional Roman trattoria – 100% GF",
        overview: "Pioneering AIC-certified gluten-free trattoria recreating authentic Roman dishes — handmade pasta to traditional desserts.",
        menuHighlights: ["Carbonara Tradizionale (GF)", "Amatriciana (GF)", "Supplì al Telefono (GF)"],
        proTip: "Order the supplì – they stretch like the originals.",
        icon: "🌾",
        cuisineTypes: ["Italian", "Roman"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.7,
        reviewCount: 198,
      },
      {
        name: "Le Altre Farine Del Mulino – Gluten-Free Bakery",
        address: "Via Ostiense 54/56, 00154 Roma (Testaccio)",
        hours: "Mon–Sat: 7:30 – 20:00",
        phone: "+39 06 574 6394",
        website: "www.lealtefarine.com",
        directionsUrl: "https://www.google.com/maps/place/Le+Altre+Farine/@41.8756,12.4816,17z",
        specialty: "Artisanal GF breads & traditional Roman pastries",
        overview: "Rome's premier AIC-certified gluten-free bakery in Testaccio recreating Roman classics with alternative flours.",
        menuHighlights: ["Pane Romano (GF)", "Maritozzo Romano (GF)", "Pizza al Taglio (GF)"],
        proTip: "Order the maritozzo in the morning — fresh whipped cream.",
        icon: "🥖",
        cuisineTypes: ["Bakery", "Italian"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.8,
        reviewCount: 221,
      },
    ],
  },
  {
    name: "Florence",
    slug: "florence",
    emoji: "🎨",
    description: "Tuscan capital with dedicated GF bakeries and traditional schiacciata",
    highlights: ["Celiachia e Gusto", "Antica Gelateria", "Leopoldo Cafebar"],
    image: "photo-1543429776-2782fc8e1acd",
    restaurants: [
      {
        name: "Celiachia e Gusto – Authentic Tuscan Gluten-Free",
        address: "Via dei Serragli 87, 50124 Firenze",
        hours: "Mon–Sat: 8:00 – 20:00",
        phone: "+39 055 239 8674",
        website: "www.celiachiaegusto.it",
        directionsUrl: "https://www.google.com/maps/place/Celiachia+e+Gusto/@43.7696,11.2558,17z",
        specialty: "GF schiacciata (Tuscan flatbread)",
        overview: "Florence's premier AIC-certified gluten-free bakery and restaurant specialising in Tuscan classics.",
        menuHighlights: ["Schiacciata all'Uva (GF)", "Ribollita (GF)", "Pici al Cinghiale (GF)"],
        proTip: "Visit in the morning for fresh schiacciata.",
        icon: "🥖",
        cuisineTypes: ["Tuscan", "Bakery"],
        celiacSafe: "dedicated-facility",
        menuType: "fully-gluten-free",
        rating: 4.9,
        reviewCount: 156,
      },
    ],
  },
  {
    name: "Milan",
    slug: "milan",
    emoji: "🛍️",
    description: "Fashion capital with upscale GF dining and risotto specialists",
    highlights: ["Ristorante Alice", "Grom", "Risotteria Melotti"],
    image: "photo-1520440229-6469a149ac59",
    restaurants: [
      {
        name: "Ristorante Alice – Fashion District Fine Dining",
        address: "Via Adige 9, 20135 Milano",
        hours: "Tue–Sat: 19:30 – 23:00",
        phone: "+39 02 5990 4998",
        directionsUrl: "https://www.google.com/maps/place/Ristorante+Alice/@45.4570,9.2008,17z",
        specialty: "Modern Italian fine dining with GF options",
        overview: "Refined Milanese kitchen with seasonal menu and careful celiac handling.",
        icon: "🍽️",
        cuisineTypes: ["Italian", "Fine Dining"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 184,
      },
      {
        name: "Risotteria Melotti – Risotto Specialists",
        address: "Via Cesare Battisti 5, 20122 Milano",
        hours: "Mon–Sat: 12:00 – 23:00",
        phone: "+39 02 7639 4496",
        directionsUrl: "https://www.google.com/maps/place/Risotteria+Melotti/@45.4623,9.1965,17z",
        specialty: "Naturally GF Veronese rice dishes",
        overview: "Specialist risotteria — rice-based menu naturally suited to celiacs, with clearly marked GF items.",
        icon: "🍚",
        cuisineTypes: ["Italian", "Risotto"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 142,
      },
    ],
  },
  {
    name: "Venice",
    slug: "venice",
    emoji: "🚣",
    description: "Lagoon city with GF bakeries and seafood-led osterie",
    highlights: ["Farini", "Osteria San Marco"],
    image: "photo-1523906834658-6e24ef2386f9",
    restaurants: [
      {
        name: "Farini – Venetian Gluten-Free Bakery & Café",
        address: "Cannaregio 4654, 30121 Venezia",
        hours: "Daily: 7:30 – 19:30",
        directionsUrl: "https://www.google.com/maps/place/Farini+Venezia/@45.4408,12.3155,17z",
        specialty: "GF bakery and café",
        overview: "Popular bakery chain with a verified GF selection in central Venice.",
        icon: "🥐",
        cuisineTypes: ["Bakery"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.5,
        reviewCount: 96,
      },
    ],
  },
  {
    name: "Naples",
    slug: "naples",
    emoji: "🍕",
    description: "Home of pizza – with celiac-safe Neapolitan pies and street food",
    highlights: ["La Smorfia", "Il Glutino"],
    image: "photo-1534447677768-be436bb09401",
    restaurants: [
      {
        name: "Pizzeria La Smorfia – Authentic Neapolitan Gluten-Free",
        address: "Via San Sebastiano 35, 80134 Napoli",
        hours: "Daily: 12:00 – 23:30",
        phone: "+39 081 552 9594",
        directionsUrl: "https://www.google.com/maps/place/La+Smorfia/@40.8479,14.2521,17z",
        specialty: "Wood-fired Neapolitan GF pizza",
        overview: "AIC-certified pizzeria using a dedicated GF station for true Neapolitan pies.",
        icon: "🍕",
        cuisineTypes: ["Pizza", "Italian"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.7,
        reviewCount: 312,
      },
    ],
  },
  {
    name: "Bologna",
    slug: "bologna",
    emoji: "🍝",
    description: "Italy's food capital with Emilian trattorias and GF piadine",
    highlights: ["Grom", "Mò Mortadella Lab", "Trattoria Vecchio Mercato"],
    image: "photo-1601925928860-6a3e5e83b6df",
    restaurants: [
      {
        name: "Mò Mortadella Lab – Gourmet Gluten-Free Piadine",
        address: "Via Drapperie 6, 40124 Bologna",
        hours: "Daily: 11:00 – 22:00",
        directionsUrl: "https://www.google.com/maps/place/Mo+Mortadella+Lab/@44.4949,11.3434,17z",
        specialty: "GF piadine with mortadella",
        overview: "Gourmet sandwich bar in central Bologna offering certified GF piadine.",
        icon: "🥪",
        cuisineTypes: ["Italian", "Street Food"],
        celiacSafe: "protocols-in-place",
        menuType: "mixed-menu",
        rating: 4.6,
        reviewCount: 175,
      },
    ],
  },
];

const faqItems = [
  {
    question: "Is Italy a good destination for gluten-free travelers?",
    answer: "Yes — Italy has one of the most advanced celiac scenes in the world. The Italian Celiac Association (AIC) certifies hundreds of restaurants, pizzerias and gelaterias, especially in Rome, Florence, Milan, Naples and Bologna.",
  },
  {
    question: "What does AIC certification mean?",
    answer: "AIC (Associazione Italiana Celiachia) certifies venues that follow strict protocols to safely serve celiacs. Look for the AIC 'spiga barrata' logo when choosing a restaurant.",
  },
  {
    question: "Can I eat real Italian pizza and pasta with celiac disease?",
    answer: "Absolutely. Many Italian pizzerias and trattorias offer certified gluten-free pasta and wood-fired GF pizza prepared in separate areas to avoid cross-contamination.",
  },
  {
    question: "How do I say gluten-free in Italian?",
    answer: "Say 'senza glutine' (without gluten) or 'sono celiaco/celiaca' (I am celiac). Most staff in major cities are familiar with celiac needs.",
  },
  {
    question: "Which Italian city is most celiac-friendly?",
    answer: "Rome leads with the highest number of dedicated GF spots, followed by Florence, Milan and Naples. Even small towns often have at least one AIC-certified venue.",
  },
  {
    question: "Can I find gluten-free products in Italian supermarkets?",
    answer: "Yes — Esselunga, Coop, Conad and pharmacies stock wide GF ranges. Many products are reimbursed by the Italian health system for residents with a celiac diagnosis.",
  },
];

const getCeliacSafeBadge = (level?: string) => {
  if (level === "dedicated-facility") {
    return (
      <Badge className="bg-green-100 text-green-800 border-green-300">
        <Shield className="h-3 w-3 mr-1" /> Dedicated GF Facility
      </Badge>
    );
  }
  if (level === "protocols-in-place") {
    return (
      <Badge className="bg-blue-100 text-blue-800 border-blue-300">
        <CheckCircle className="h-3 w-3 mr-1" /> Celiac Protocols
      </Badge>
    );
  }
  return null;
};

const getMenuTypeBadge = (type?: string) => {
  if (type === "fully-gluten-free") {
    return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
  }
  if (type === "mixed-menu") {
    return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
  }
  return null;
};

const renderStars = (rating?: number) => {
  if (!rating) return null;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
      <span className="ml-1 font-semibold text-sm">{rating}</span>
    </div>
  );
};

const openExternalLink = (url: string) => {
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalizedUrl, "_blank", "noopener,noreferrer");
};

const Italy = () => {
  const [searchParams] = useSearchParams();
  const cityFilter = searchParams.get("city");

  const visibleCities = useMemo(() => {
    if (!cityFilter) return cities;
    const f = cityFilter.toLowerCase();
    return cities.filter((c) => c.name.toLowerCase().includes(f) || c.slug.includes(f));
  }, [cityFilter]);

  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Gluten-Free Restaurants in Italy | Celiac-Safe Dining Guide");
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Discover verified gluten-free and celiac-safe restaurants across Italy. AIC-certified pizzerias, trattorias and bakeries in every major city.");

    const existingSchema = document.querySelector('script[data-schema="italy-gf"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-schema", "italy-gf");
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in Italy",
      description: "Find the best gluten-free restaurants across Italy. AIC-certified celiac-safe dining in Rome, Florence, Milan, Venice, Naples and more.",
      url: "https://glutenfreeplace.org/italy",
      mainEntity: {
        "@type": "ItemList",
        name: "Top Gluten-Free Cities in Italy",
        numberOfItems: cities.length,
        itemListElement: cities.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          url: `https://glutenfreeplace.org/italy#city-${c.slug}`,
        })),
      },
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="italy-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.setAttribute("data-schema", "italy-faq");
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.querySelector('script[data-schema="italy-gf"]')?.remove();
      document.querySelector('script[data-schema="italy-faq"]')?.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Gluten-Free Restaurants in Italy | Celiac-Safe Dining Guide 2026"
        description="Find the best gluten-free restaurants in Italy. AIC-certified celiac-safe pizza, pasta & gelato in Rome, Florence, Milan, Venice, Naples & more."
        canonical="/italy"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
        <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-green-700" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 via-gray-700 to-red-600 bg-clip-text text-transparent">
                Gluten-Free Places
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-700 transition-colors whitespace-nowrap">Home</Link>
              <Link to="/countries" className="text-gray-700 hover:text-green-700 transition-colors">Countries</Link>
              <a href="#cities" className="text-gray-700 hover:text-green-700 transition-colors">Cities</a>
              <a href="#faq" className="text-gray-700 hover:text-green-700 transition-colors">FAQ</a>
              <UserMenu />
            </div>
          </div>
        </header>

        <section className="relative py-12 overflow-hidden bg-gradient-to-r from-green-700 via-white/10 to-red-600">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Countries
            </Link>
            <div className="max-w-4xl mx-auto">
              <span className="text-5xl mb-4 block">🇮🇹</span>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" />
                AIC-Certified Restaurants
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Gluten-Free Italy
              </h1>
              <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
                From authentic Neapolitan pizza to creamy risottos and Tuscan schiacciata — discover
                Italy's world-class gluten-free dining, all verified for celiac safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#city-rome">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                    Start with Rome
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <AddRestaurantDialog
                  city="Italy"
                  triggerClassName="border-white/70 bg-transparent !text-white hover:bg-white/10"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="cities" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                <MapPin className="h-4 w-4 mr-2" />
                Explore by City
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Top Gluten-Free Cities in Italy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <Card
                  key={city.slug}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                      alt={`Gluten-free restaurants in ${city.name}, Italy`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <span className="text-lg">{city.emoji}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-gray-600 text-sm mb-3">{city.description}</p>
                    <div className="flex items-center text-green-700 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold text-sm">{city.restaurants.length} places</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                      <div className="flex flex-wrap gap-1">
                        {city.highlights.map((spot) => (
                          <Badge key={spot} variant="secondary" className="text-xs bg-green-50 text-green-700">
                            {spot}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <a href={`#city-${city.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-green-700 to-red-600 hover:from-green-800 hover:to-red-700">
                        Explore {city.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl space-y-16">
            {visibleCities.map((city) => (
              <div key={city.slug} id={`city-${city.slug}`} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{city.emoji}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Gluten-Free Restaurants in {city.name}
                  </h2>
                </div>
                <div className="grid gap-6">
                  {city.restaurants.map((r) => (
                    <Card key={r.name} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-2xl">{r.icon}</span>
                            <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>
                          </div>
                          {r.specialty && <p className="text-sm text-gray-500">{r.specialty}</p>}
                        </div>

                        {r.rating && (
                          <div className="flex items-center gap-2 mb-3">
                            {renderStars(r.rating)}
                            <span className="text-sm text-gray-500">({r.reviewCount} reviews)</span>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mb-3">
                          {r.cuisineTypes?.map((c) => (
                            <Badge key={c} variant="outline">{c}</Badge>
                          ))}
                          {getCeliacSafeBadge(r.celiacSafe)}
                          {getMenuTypeBadge(r.menuType)}
                        </div>

                        {r.overview && <p className="text-gray-700 mb-4">{r.overview}</p>}

                        {r.menuHighlights && r.menuHighlights.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                            <div className="flex flex-wrap gap-2">
                              {r.menuHighlights.map((item) => (
                                <Badge key={item} variant="secondary" className="text-sm">{item}</Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {r.proTip && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4 text-amber-700" />
                              <span className="font-medium text-amber-800">Pro Tip:</span>
                              <span className="text-amber-700">{r.proTip}</span>
                            </div>
                          </div>
                        )}

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{r.address}</span>
                          </div>
                          {r.hours && (
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span>{r.hours}</span>
                            </div>
                          )}
                          {r.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <a href={`tel:${r.phone}`} className="hover:text-green-700">{r.phone}</a>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {r.directionsUrl && (
                            <Button
                              type="button"
                              className="bg-green-700 hover:bg-green-800"
                              onClick={() => openExternalLink(r.directionsUrl!)}
                            >
                              <Navigation className="w-4 h-4 mr-2" />
                              Get Directions
                            </Button>
                          )}
                          {r.website && (
                            <Button type="button" variant="outline" onClick={() => openExternalLink(r.website!)}>
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                  <Award className="h-4 w-4 mr-2" />
                  About
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in Italy</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Italy?</h3>
                  <p className="text-gray-600 mb-4">
                    Italy is one of the world's most celiac-friendly countries. The Italian Celiac Association
                    (AIC) certifies hundreds of restaurants nationwide, and gluten-free pizza, pasta and gelato
                    are widely available.
                  </p>
                  <p className="text-gray-600">
                    EU labelling laws and a strong food culture make it easy to dine safely from Rome to Sicily.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Say "senza glutine" or "sono celiaco/celiaca"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Look for the AIC "spiga barrata" logo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Risotto and polenta are naturally gluten-free</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Esselunga, Coop and Conad stock wide GF ranges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 bg-green-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">FAQ</Badge>
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

export default Italy;
