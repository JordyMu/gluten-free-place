import { useEffect } from "react";
import {
  MapPin, Star, ArrowLeft, Globe, Shield, Award, ArrowRight, Clock, Phone, CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";

const irelandHero =
  "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1600&q=80";

const cities = [
  {
    name: "Dublin",
    image: "photo-1549918864-48ac978761a4",
    places: 6,
    rating: 4.8,
    description: "Capital city with dedicated gluten-free kitchens and celiac-aware pubs",
    route: "/gluten-free/ireland/dublin",
    highlights: ["The Coeliac Sanctuary", "Blazing Salads", "Cornucopia"],
  },
  {
    name: "Cork",
    image: "photo-1564959130747-897fb406b9af",
    places: 17,
    rating: 4.6,
    description: "Foodie capital of the south with coeliac-aware restaurants and artisan bakeries",
    route: "/gluten-free/ireland/cork",
    highlights: ["Anton's", "The Quay Co-op", "Good Day Deli", "Market Lane", "Liberty Grill"],
  },
  {
    name: "Galway",
    image: "photo-1571680322279-a226e6a4cc2a",
    places: 11,
    rating: 4.6,
    description: "West coast cultural hub with GF pizza, burgers and seafood by the Spanish Arch",
    route: "/gluten-free/ireland/galway",
    highlights: ["Handsome Burger", "Woozza Wood Fired Pizza", "Hooked", "Pascal"],
  },
  {
    name: "Limerick",
    image: "photo-1526129318478-62ed807ebdf9",
    places: 10,
    rating: 4.5,
    description: "Riverside city with clearly labelled gluten-free pub and bistro menus",
    route: "/gluten-free/ireland/limerick",
    highlights: ["The SpitJack", "Coqbull", "The Locke Bar", "Hook & Ladder"],
  },
];

const topRestaurants = [
  {
    name: "The Coeliac Sanctuary",
    icon: "🍀",
    rating: 4.8,
    reviewCount: 156,
    cuisineTypes: ["Irish", "International"],
    menuType: "fully-gluten-free",
    address: "45 Grafton Street, Dublin 2, Ireland",
    hours: "Mon–Sat: 9:00 AM – 9:00 PM, Sun: 10:00 AM – 6:00 PM",
    phone: "+353 1 234 5678",
    website: "www.coeliacsanctuary.ie",
    directionsUrl: "https://maps.google.com/?q=The+Coeliac+Sanctuary+Dublin",
    specialty:
      "Ireland's premier dedicated gluten-free restaurant offering traditional Irish cuisine with a modern twist. Every dish is certified gluten-free and prepared in a 100% dedicated facility.",
  },
];

const otherLocations = [
  {
    name: "Jenny's Kitchen Gluten Free Baking",
    icon: "🥖",
    location: "Nenagh, Co. Tipperary",
    specialty: "Dedicated gluten-free bakery supplying cafes and shops across Ireland with fresh GF breads, cakes and treats.",
    rating: 4.9,
    reviewCount: 84,
    cuisineTypes: ["Bakery", "Café"],
    menuType: "fully-gluten-free",
  },
  {
    name: "The Ivy Cottage",
    icon: "🐟",
    location: "Doolin, Co. Clare",
    specialty: "Charming seafood cottage restaurant on the Wild Atlantic Way with clearly labelled gluten-free options and coeliac-aware staff.",
    rating: 4.7,
    reviewCount: 212,
    cuisineTypes: ["Seafood", "Irish"],
    menuType: "mixed-menu",
  },
  {
    name: "The Fish Box / Flannery's Seafood Bar",
    icon: "🦐",
    location: "Dingle, Co. Kerry",
    specialty: "Family-run seafood bar serving the day's catch with dedicated gluten-free fryer options and fresh local fish.",
    rating: 4.8,
    reviewCount: 178,
    cuisineTypes: ["Seafood", "Fish & Chips"],
    menuType: "mixed-menu",
  },
  {
    name: "Rob's Ranch House",
    icon: "🥩",
    location: "Killarney, Co. Kerry",
    specialty: "American-style steakhouse and smokehouse with gluten-free menu options, sauces and sides clearly marked.",
    rating: 4.5,
    reviewCount: 264,
    cuisineTypes: ["Steakhouse", "American"],
    menuType: "mixed-menu",
  },
  {
    name: "The Boat Yard Restaurant",
    icon: "⚓",
    location: "Dingle, Co. Kerry",
    specialty: "Waterfront restaurant specialising in Dingle Bay seafood with coeliac-safe preparation and gluten-free menu items.",
    rating: 4.7,
    reviewCount: 195,
    cuisineTypes: ["Seafood", "Irish"],
    menuType: "mixed-menu",
  },
  {
    name: "Caragh Restaurant & Lounge Bar",
    icon: "🍽️",
    location: "Killarney, Co. Kerry",
    specialty: "Modern Irish restaurant and lounge with a dedicated gluten-free menu and staff trained in allergen protocols.",
    rating: 4.6,
    reviewCount: 143,
    cuisineTypes: ["Irish", "European"],
    menuType: "mixed-menu",
  },
  {
    name: "The Reg",
    icon: "🍺",
    location: "Waterford",
    specialty: "Historic bar and restaurant in Waterford's Viking Triangle with gluten-free dishes and live music most nights.",
    rating: 4.5,
    reviewCount: 321,
    cuisineTypes: ["Pub", "Irish"],
    menuType: "mixed-menu",
  },
  {
    name: "Momo Restaurant",
    icon: "🏆",
    location: "Waterford",
    specialty: "Award-winning bistro using local produce, with gluten-free options marked on the menu and coeliac-friendly service.",
    rating: 4.7,
    reviewCount: 156,
    cuisineTypes: ["Bistro", "European"],
    menuType: "mixed-menu",
  },
  {
    name: "Rye River Café",
    icon: "☕",
    location: "Kilcock, Co. Kildare",
    specialty: "Cosy artisan café with gluten-free bread, cakes and brunch options made fresh daily.",
    rating: 4.6,
    reviewCount: 97,
    cuisineTypes: ["Café", "Brunch"],
    menuType: "mixed-menu",
  },
  {
    name: "James Long Gastro Pub",
    icon: "🍀",
    location: "Dingle, Co. Kerry",
    specialty: "Traditional Irish gastro pub with gluten-free dishes, local seafood and a warm Kerry welcome.",
    rating: 4.5,
    reviewCount: 188,
    cuisineTypes: ["Gastro Pub", "Seafood"],
    menuType: "mixed-menu",
  },
].sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);

const faqItems = [
  {
    question: "Is Ireland a good destination for gluten-free travellers?",
    answer:
      "Yes. Ireland has strong celiac awareness, EU allergen labelling laws and a Coeliac Society network, so most restaurants and pubs can clearly identify gluten-free dishes.",
  },
  {
    question: "Which Irish foods are naturally gluten-free?",
    answer:
      "Fresh seafood, Irish stew (with a GF thickener), boiled and roast potatoes, colcannon, smoked salmon and most farmhouse cheeses are naturally gluten-free.",
  },
  {
    question: "Are there dedicated gluten-free restaurants in Ireland?",
    answer:
      "Yes — Dublin leads the way with dedicated 100% gluten-free kitchens such as The Coeliac Sanctuary, where cross-contamination risk is virtually zero.",
  },
  {
    question: "Can I get gluten-free beer in Irish pubs?",
    answer:
      "Most city pubs now stock at least one gluten-free beer or cider. Cider is a reliable fallback, and many pubs also list GF options on their food menus.",
  },
  {
    question: "How do I explain celiac disease in Ireland?",
    answer:
      "English is spoken everywhere. Say you have coeliac disease and ask about cross-contamination — staff are generally well trained on allergen requirements.",
  },
  {
    question: "Can I find gluten-free products in Irish supermarkets?",
    answer:
      "Yes. Tesco, Dunnes Stores, SuperValu and Aldi all carry extensive free-from ranges with clear allergen labelling.",
  },
];

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ))}
    <span className="ml-1 font-semibold text-gray-900">{rating}</span>
  </div>
);

const openExternalLink = (url: string) => {
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalized, "_blank", "noopener,noreferrer");
};

const Ireland = () => {
  useEffect(() => {
    const existingSchema = document.querySelector('script[data-schema="ireland-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-schema", "ireland-gf");
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in Ireland",
      description:
        "Find verified gluten-free and celiac-safe restaurants across Ireland, from Dublin to Cork, Galway and Limerick.",
      url: "https://glutenfreeplace.org/ireland",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://glutenfreeplace.org" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://glutenfreeplace.org/countries" },
          { "@type": "ListItem", position: 3, name: "Ireland", item: "https://glutenfreeplace.org/ireland" },
        ],
      },
    });
    document.head.appendChild(schema);

    const existingFaqSchema = document.querySelector('script[data-schema="ireland-faq"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.setAttribute("data-schema", "ireland-faq");
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
      document.querySelector('script[data-schema="ireland-gf"]')?.remove();
      document.querySelector('script[data-schema="ireland-faq"]')?.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Gluten-Free Options in Ireland | Celiac-Safe Dining"
        description="Gluten free options across Ireland: verified celiac-safe restaurants, bakeries and pubs in Dublin, Cork, Galway and Limerick."
        canonical="/ireland"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
        <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-green-700" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-transparent">
                Gluten-Free Places
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-700 transition-colors whitespace-nowrap">Home</Link>
              <Link to="/countries" className="text-gray-700 hover:text-green-700 transition-colors">Countries</Link>
              <Link to="#cities" className="text-gray-700 hover:text-green-700 transition-colors">Cities</Link>
              <Link to="#faq" className="text-gray-700 hover:text-green-700 transition-colors">FAQ</Link>
              <UserMenu />
            </div>
          </div>
        </header>

        <section
          className="relative py-12 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${irelandHero})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Countries
            </Link>
            <div className="max-w-4xl mx-auto">
              <span className="text-5xl mb-4 block">🇮🇪</span>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" />
                Verified Gluten-Free Places
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Dedicated Gluten-Free Restaurants in Ireland
              </h1>
              <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
                Celiac-safe Irish dining from Dublin's dedicated gluten-free kitchens to
                naturally gluten-free seafood on the west coast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#cities">
                  <Button size="lg" className="bg-white text-green-800 hover:bg-green-50">
                    Explore Irish Cities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <AddRestaurantDialog
                  city="Ireland"
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
                Top Gluten-Free Cities in Ireland
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
                    const media = (
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={`https://images.unsplash.com/${city.image}?auto=format&fit=crop&w=600&q=80`}
                          alt={`Gluten-free restaurants in ${city.name}, Ireland`}
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
                    <div className="flex items-center text-green-700 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold text-sm">{city.places} places</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                      <div className="flex flex-wrap gap-1">
                        {city.highlights.map((spot) => (
                          <Badge key={spot} variant="secondary" className="text-xs bg-green-50 text-green-800">
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
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                <MapPin className="h-4 w-4 mr-2" />
                Top Restaurants
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Top Gluten-Free Restaurants in Ireland
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our highest-rated celiac-safe spots across Ireland, verified by gluten-free travellers
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {topRestaurants.map((r) => (
                <Card key={r.name} className="overflow-hidden border-2 border-green-200 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>
                      <p className="text-sm text-gray-500">{r.city}, Ireland</p>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      {renderStarRating(r.rating)}
                      <span className="text-sm text-gray-500">({r.reviewCount} reviews)</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {r.cuisineTypes.map((c) => (
                        <Badge key={c} variant="outline">{c}</Badge>
                      ))}
                      <Badge className="bg-green-100 text-green-800 border-green-300">
                        <Shield className="w-3 h-3 mr-1" />
                        Dedicated GF Facility
                      </Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>
                    </div>

                    <p className="text-gray-700 mb-4">{r.overview}</p>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                        <span>{r.address}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-0.5 text-gray-400" />
                        <span>{r.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{r.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <button
                          onClick={() => openExternalLink(r.website)}
                          className="text-green-700 hover:underline"
                        >
                          {r.website}
                        </button>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                        <h4 className="font-semibold text-gray-900">Menu Highlights</h4>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {r.menuHighlights.map((item) => (
                          <li key={item} className="text-sm text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Pro Tip:</span> {r.proTip}
                      </p>
                    </div>

                    <Button
                      onClick={() => openExternalLink(r.directionsUrl)}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                <MapPin className="h-4 w-4 mr-2" />
                Beyond the Cities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Other Irish Locations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Gluten-free gems in smaller towns across Ireland — from Dingle's seafood bars to Waterford's historic pubs
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-5">
              {otherLocations.map((r) => {
                const isFullyGF = r.menuType === "fully-gluten-free";
                return (
                  <Card
                    key={r.name}
                    className="hover:shadow-xl transition-all duration-200 border border-gray-100 overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          <span className="text-2xl">{r.icon}</span>
                          <span className="hover:text-green-700 transition-colors">{r.name}</span>
                        </h3>
                        <p className="text-sm text-gray-500 mt-0.5 ml-9">{r.specialty}</p>
                      </div>

                      <div className="flex items-center gap-2 mb-3 ml-9">
                        {renderStarRating(r.rating)}
                        <span className="text-sm text-gray-400">({r.reviewCount} reviews)</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-3 ml-9">
                        {r.cuisineTypes.map((cuisine) => (
                          <Badge
                            key={cuisine}
                            variant="outline"
                            className="text-xs font-medium text-gray-600 border-gray-200 bg-gray-50"
                          >
                            🍴 {cuisine}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3 ml-9">
                        <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">
                          <Shield className="h-3.5 w-3.5 mr-1" />
                          Celiac Protocols
                        </Badge>
                        <Badge className={`text-xs ${isFullyGF
                          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                          : "bg-violet-100 text-violet-800 border-violet-200"}`}>
                          🍽️ {isFullyGF ? "Fully GF" : "Mixed Menu"}
                        </Badge>
                      </div>

                      <div className="space-y-2 ml-9 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                          <span>{r.location}, Ireland</span>
                        </div>
                      </div>

                      <div className="mt-4 ml-9">
                        <button
                          onClick={() => openExternalLink(`https://maps.google.com/?q=${encodeURIComponent(`${r.name} ${r.location} Ireland`)}`)}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                          Get Directions
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
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
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in Ireland</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Ireland?</h3>
                  <p className="text-gray-600 mb-4">
                    Ireland combines EU allergen labelling rules with a strong Coeliac Society presence, so
                    kitchens are used to handling gluten-free requests properly rather than guessing.
                  </p>
                  <p className="text-gray-600">
                    Dublin has dedicated gluten-free kitchens, while coastal towns serve plates of seafood,
                    potatoes and farmhouse produce that are naturally free from gluten.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Ask for the allergen menu — it's a legal requirement in Ireland</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Gluten-free soda bread is widely available in cafes and bakeries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Check chips are cooked in a separate fryer before ordering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                      <span>Most pubs stock gluten-free beer or cider — just ask at the bar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-6 h-6 text-green-700" />
                <h2 className="text-lg font-semibold text-gray-900">Trust & Safety</h2>
              </div>
              <p className="text-gray-600">
                All restaurants are verified by our community of celiac travellers. We prioritise dedicated gluten-free
                facilities and restaurants with proven celiac protocols. Always communicate your dietary needs directly
                with restaurant staff.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="text-gray-600 mt-2">Everything you need to know about gluten-free dining in Ireland</p>
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

        <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Know a Great GF Spot in Ireland?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help fellow celiac travellers discover safe dining options across Ireland. Submit a restaurant to our
              growing directory.
            </p>
            <AddRestaurantDialog city="Ireland" triggerClassName="bg-white text-green-800 hover:bg-green-50 text-lg px-8 py-3" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Ireland;
