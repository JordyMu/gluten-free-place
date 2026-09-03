import { useEffect } from "react";
import { MapPin, Star, ArrowLeft, Clock, Globe, Navigation, MessageCircle, Award, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";
import { newZealandCities } from "@/data/newZealandCities";

const nzHero = "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1600&q=80";

const nzFaqItems = [
  { question: "Is New Zealand a good destination for gluten-free travelers?", answer: "Yes! New Zealand has excellent celiac awareness, clear allergen labelling, and a strong café culture. Auckland and Wellington both have dedicated 100% gluten-free bakeries." },
  { question: "What are the best dedicated gluten-free spots in New Zealand?", answer: "The GF Depot in Auckland and Gluten Free 4u in Wellington are both fully dedicated facilities offering breads, pastries, pies and cakes that are safe for celiacs." },
  { question: "Are gluten-free options widely available in New Zealand cafés?", answer: "Yes — most cafés across Auckland, Wellington, Christchurch and Queenstown clearly mark GF items on the menu and can accommodate dietary requests." },
  { question: "How do I find safe gluten-free food in smaller NZ towns?", answer: "Supermarkets like Countdown, New World and Pak'nSave stock a wide GF range. Naturally GF options like grilled meats, fish, rice dishes and salads are easy to find." },
  { question: "Which New Zealand city is most celiac-friendly?", answer: "Auckland leads with the widest selection of dedicated and GF-friendly venues, followed by Wellington and Christchurch." },
];

const cityMeta: Record<string, { image: string; description: string }> = {
  auckland: {
    image: "photo-1600208669687-f19af3638cb9",
    description: "New Zealand's biggest city, home to dedicated GF bakeries and diverse dining",
  },
  wellington: {
    image: "photo-1589871973318-9ca1258faa5d",
    description: "The capital's café and craft-food scene with strong GF labelling",
  },
  "queenstown-arrowtown": {
    image: "photo-1589802829985-817e51171b92",
    description: "Alpine resort towns with celiac-aware restaurants and lakeside dining",
  },
  christchurch: {
    image: "photo-1523482580672-f109ba8cb9be",
    description: "Garden City eateries with clearly marked gluten-free menus",
  },
};

const NewZealand = () => {
  const cities = newZealandCities;
  const totalPlaces = cities.reduce((sum, c) => sum + c.restaurants.length, 0);

  useEffect(() => {
    const existingSchema = document.querySelector('script[data-schema="nz-gf"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-schema", "nz-gf");
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Gluten-Free Restaurants in New Zealand",
      description:
        "Find the best gluten-free restaurants across New Zealand. Verified celiac-safe dining in Auckland, Wellington, Christchurch and Queenstown.",
      url: "https://glutenfreeplace.org/new-zealand",
      mainEntity: {
        "@type": "ItemList",
        name: "Top Gluten-Free Cities in New Zealand",
        numberOfItems: cities.length,
        itemListElement: cities.map((city, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: city.name,
          url: `https://glutenfreeplace.org/gluten-free/new-zealand/${city.slug}`,
        })),
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://glutenfreeplace.org" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://glutenfreeplace.org/countries" },
          { "@type": "ListItem", position: 3, name: "New Zealand", item: "https://glutenfreeplace.org/new-zealand" },
        ],
      },
    });
    document.head.appendChild(schema);

    const existingFaq = document.querySelector('script[data-schema="nz-faq"]');
    if (existingFaq) existingFaq.remove();

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.setAttribute("data-schema", "nz-faq");
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: nzFaqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.querySelector('script[data-schema="nz-gf"]')?.remove();
      document.querySelector('script[data-schema="nz-faq"]')?.remove();
    };
  }, [cities]);

  const moreRestaurants = [
    { name: "Sabal", address: "169 Maunganui Road, Mount Maunganui 3116, New Zealand", cuisineTypes: ["Indian", "Vegetarian"], menuHighlights: ["🍛 GF curries", "🥘 Dosa (GF)", "🌶️ Vegan options"], proTip: "Ask for the GF menu — most curries are naturally gluten-free.", hours: "Tue-Sun: 5:00PM – 9:30PM", rating: 4.6, reviewCount: 187 },
    { name: "Wooden Spoon", address: "169 London Street, Hamilton Central, Hamilton 3204, New Zealand", cuisineTypes: ["Cafe", "Brunch"], menuHighlights: ["🥞 GF pancakes", "🥑 Smashed avo (GF)", "☕ Specialty coffee"], proTip: "Their GF bread is baked in-house — fantastic toast.", hours: "Mon-Sun: 7:00AM – 3:00PM", rating: 4.5, reviewCount: 142 },
    { name: "Dhara's Caffe", address: "19 Buxton Square, Nelson 7010, New Zealand", cuisineTypes: ["Indian", "Cafe"], menuHighlights: ["🍛 GF thali", "🫓 Rice flour roti", "🍵 Chai"], proTip: "The thali is almost entirely gluten-free.", hours: "Mon-Sat: 9:00AM – 4:00PM", rating: 4.7, reviewCount: 96 },
    { name: "Black Rabbit Pizza", address: "94 Beach Road, Kaikōura 7300, New Zealand", cuisineTypes: ["Pizza", "Italian"], menuHighlights: ["🍕 GF pizza base", "🥗 Fresh salads", "🍺 Local beer"], proTip: "Order GF base in advance on busy nights.", hours: "Wed-Sun: 4:00PM – 9:00PM", rating: 4.4, reviewCount: 118 },
    { name: "That Sandwich Place", address: "112 Emerson Street, Napier South, Napier 4110, New Zealand", cuisineTypes: ["Sandwiches", "Cafe"], menuHighlights: ["🥪 GF sandwiches", "🥗 Salads", "☕ Coffee"], proTip: "GF bread is baked fresh daily — ask what's available.", hours: "Mon-Fri: 8:00AM – 3:00PM", rating: 4.6, reviewCount: 89 },
    { name: "Munch", address: "62 Broadway Avenue, Palmerston North Central, Palmerston North 4410, New Zealand", cuisineTypes: ["Cafe", "Brunch"], menuHighlights: ["🍳 GF breakfast", "🥯 GF bagels", "🥗 Bowls"], proTip: "Almost the entire brunch menu can be made GF.", hours: "Mon-Sun: 7:30AM – 3:00PM", rating: 4.5, reviewCount: 156 },
    { name: "Te Mata Figs Cafe", address: "205 Napier Road, Havelock North 4130, New Zealand", cuisineTypes: ["Cafe", "Orchard"], menuHighlights: ["🌿 Seasonal plates", "🍯 Fig produce", "☕ Coffee"], proTip: "Most dishes are naturally GF — staff are very allergen-aware.", hours: "Wed-Sun: 9:00AM – 3:00PM", rating: 4.7, reviewCount: 112 },
    { name: "Bambuchi", address: "31a Waitoa Road, Hataitai, Wellington 6021, New Zealand", cuisineTypes: ["Japanese", "Sushi"], menuHighlights: ["🍣 Sushi", "🍜 Rice bowls", "🥢 GF tamari"], proTip: "Ask for tamari instead of soy sauce.", hours: "Tue-Sat: 11:30AM – 9:00PM", rating: 4.5, reviewCount: 73 },
    { name: "San Sea People Ice Cream", address: "107A Maunganui Road, Mount Maunganui 3116, New Zealand", cuisineTypes: ["Ice Cream", "Dessert"], menuHighlights: ["🍦 Gelato (GF)", "🍫 Vegan flavours", "🍓 Sorbet"], proTip: "Most flavours are GF — confirm cones aren't shared.", hours: "Mon-Sun: 11:00AM – 9:00PM", rating: 4.8, reviewCount: 204 },
    { name: "Earth Store Whitianga", address: "67 Albert Street, Whitianga 3510, New Zealand", cuisineTypes: ["Health Food", "Cafe"], menuHighlights: ["🥗 GF bowls", "🍪 GF baking", "🥤 Smoothies"], proTip: "Great for GF travel snacks for the road.", hours: "Mon-Sat: 8:30AM – 5:00PM", rating: 4.6, reviewCount: 64 },
    { name: "Dragonfruit Café", address: "7 Laurie Hall Lane, Whangārei 0110, New Zealand", cuisineTypes: ["Cafe", "Vegan"], menuHighlights: ["🌱 Vegan GF mains", "🥞 GF baking", "🥤 Smoothie bowls"], proTip: "Vegan + GF combined — easy to dine safely.", hours: "Tue-Sat: 8:00AM – 2:30PM", rating: 4.7, reviewCount: 98 },
    { name: "Taste Nature", address: "131 High Street, Central Dunedin, Dunedin 9016, New Zealand", cuisineTypes: ["Organic", "Cafe"], menuHighlights: ["🥗 GF deli bowls", "🍞 GF bread", "☕ Organic coffee"], proTip: "Stock up on GF pantry items from the store.", hours: "Mon-Sat: 8:00AM – 5:30PM", rating: 4.5, reviewCount: 121 },
    { name: "Hello Stranger Cafe", address: "1149 Pukuatua Street, Rotorua 3010, New Zealand", cuisineTypes: ["Cafe", "Brunch"], menuHighlights: ["🥯 GF baking", "🍳 GF brunch", "☕ Coffee"], proTip: "GF cabinet baking is excellent — go early.", hours: "Mon-Sun: 7:00AM – 3:00PM", rating: 4.6, reviewCount: 178 },
    { name: "Stoked Bar & Grill", address: "19 Esplanade, Whitianga 3510, New Zealand", cuisineTypes: ["Grill", "Seafood"], menuHighlights: ["🥩 GF steaks", "🐟 Fresh fish", "🥗 Sides (GF)"], proTip: "Most mains can be made GF — ask for sauce on side.", hours: "Mon-Sun: 11:30AM – 9:00PM", rating: 4.4, reviewCount: 167 },
    { name: "Mike's Bistro & Taproom", address: "40 Devon Street East, New Plymouth Central, New Plymouth 4310, New Zealand", cuisineTypes: ["Bistro", "Brewery"], menuHighlights: ["🍺 GF beer", "🍔 GF burger", "🍟 GF fries"], proTip: "Genuinely GF craft beer on tap — rare in NZ.", hours: "Wed-Sun: 12:00PM – 10:00PM", rating: 4.5, reviewCount: 145 },
    { name: "Relishes Cafe", address: "1/99 Ardmore Street, Wanaka 9305, New Zealand", cuisineTypes: ["Cafe", "Bistro"], menuHighlights: ["🥗 GF lunch plates", "🍰 GF cabinet", "☕ Coffee"], proTip: "Book a window seat for the lake view.", hours: "Mon-Sun: 8:00AM – 4:00PM", rating: 4.6, reviewCount: 213 },
    { name: "Kisa", address: "195 Cuba Street, Te Aro, Wellington 6011, New Zealand", cuisineTypes: ["Modern NZ", "Bar"], menuHighlights: ["🍽️ GF small plates", "🍷 Natural wine", "🥢 Snacks"], proTip: "Tell staff at the start — they're great at adapting plates.", hours: "Tue-Sat: 5:00PM – Late", rating: 4.7, reviewCount: 156 },
    { name: "Hunger Monger Seafood", address: "129 Marine Parade, Napier 4110, New Zealand", cuisineTypes: ["Seafood"], menuHighlights: ["🐟 Grilled fish (GF)", "🦐 Prawns", "🥗 Salads"], proTip: "Grilled options are naturally GF — skip the batter.", hours: "Mon-Sun: 11:30AM – 9:30PM", rating: 4.5, reviewCount: 188 },
    { name: "Sands Fish & Chips", address: "Shop 1, 623 Rocks Road, Tāhunanui, Nelson 7011, New Zealand", cuisineTypes: ["Fish & Chips"], menuHighlights: ["🍟 GF chips", "🐟 GF battered fish", "🍔 GF burger"], proTip: "Call ahead so they can run the GF fryer.", hours: "Mon-Sun: 11:00AM – 8:30PM", rating: 4.4, reviewCount: 132 },
    { name: "Big Fig", address: "105 Ardmore Street, Wanaka 9305, New Zealand", cuisineTypes: ["Mediterranean", "Slow Food"], menuHighlights: ["🥘 Slow-cooked tagines", "🥗 Salads", "🍷 Wine"], proTip: "Nearly the whole menu is GF — ideal for celiacs.", hours: "Mon-Sun: 5:00PM – 9:30PM", rating: 4.8, reviewCount: 276 },
    { name: "CBD Cafe", address: "41 Queen Street, Blenheim 7201, New Zealand", cuisineTypes: ["Cafe"], menuHighlights: ["🥪 GF wraps", "🍰 GF slices", "☕ Coffee"], proTip: "Strong GF cabinet — call to reserve favourites.", hours: "Mon-Fri: 7:00AM – 3:00PM", rating: 4.4, reviewCount: 87 },
    { name: "tibs", address: "112 Ocean View Road, Oneroa, Waiheke Island 1081, New Zealand", cuisineTypes: ["Ethiopian"], menuHighlights: ["🫓 Teff injera (GF)", "🍛 Wat stews", "🌱 Vegan options"], proTip: "Confirm 100% teff injera (no wheat blend).", hours: "Thu-Sun: 5:00PM – 9:00PM", rating: 4.7, reviewCount: 64 },
    { name: "Plateau Bar + Eatery", address: "64 Tuwharetoa Street, Taupō 3330, New Zealand", cuisineTypes: ["Bistro", "Bar"], menuHighlights: ["🍔 GF burgers", "🍕 GF pizza", "🍺 GF beer"], proTip: "GF buns and pizza bases always available.", hours: "Mon-Sun: 11:30AM – Late", rating: 4.5, reviewCount: 201 },
    { name: "Community Burgers", address: "112 Tennyson Street, Napier South, Napier 4110, New Zealand", cuisineTypes: ["Burgers"], menuHighlights: ["🍔 GF burgers", "🍟 GF fries", "🥤 Shakes"], proTip: "Ask for fries cooked separately to avoid cross-contact.", hours: "Wed-Sun: 12:00PM – 9:00PM", rating: 4.6, reviewCount: 154 },
    { name: "Leonardo's Pure Pizzeria", address: "1099 Tutanekai Street, Rotorua 3010, New Zealand", cuisineTypes: ["Pizza", "Italian"], menuHighlights: ["🍕 GF pizza", "🍝 GF pasta", "🥗 Insalata"], proTip: "GF pasta and pizza both available — confirm separate prep.", hours: "Mon-Sun: 5:00PM – 10:00PM", rating: 4.5, reviewCount: 198 },
    { name: "White & Wong's", address: "149 Quay Street, Auckland CBD, Auckland 1010, New Zealand", cuisineTypes: ["Asian Fusion"], menuHighlights: ["🥢 GF dumplings", "🍜 GF noodles", "🍤 Stir-fries"], proTip: "Ask for the allergen menu — clear GF marking.", hours: "Mon-Sun: 11:30AM – Late", rating: 4.5, reviewCount: 312 },
    { name: "& Wine", address: "1099 Tutanekai Street, Rotorua 3010, New Zealand", cuisineTypes: ["Wine Bar", "Small Plates"], menuHighlights: ["🧀 GF charcuterie", "🥂 Wine", "🥗 Small plates"], proTip: "Most plates are naturally GF — just skip the bread.", hours: "Wed-Sun: 4:00PM – Late", rating: 4.4, reviewCount: 142 },
  ];

  return (
    <>
      <SEOHead
        title="Gluten-Free Options in New Zealand | Celiac-Safe Dining"
        description="Gluten free options across New Zealand: verified celiac-safe restaurants, bakeries and cafés in Auckland, Wellington, Christchurch, Queenstown and more."
        canonical="/new-zealand"
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
          style={{ backgroundImage: `url(${nzHero})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Countries
            </Link>
            <div className="max-w-4xl mx-auto">
              <span className="text-5xl mb-4 block">🇳🇿</span>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" />
                {totalPlaces}+ Gluten-Free Places
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Dedicated Gluten-Free Restaurants in New Zealand
              </h1>
              <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
                Discover safe, delicious gluten-free dining across Aotearoa — from Auckland's dedicated
                bakeries to Wellington's café scene and the South Island's stunning eateries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/gluten-free/new-zealand/auckland">
                  <Button size="lg" className="bg-white text-red-700 hover:bg-red-50">
                    Start with Auckland
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <AddRestaurantDialog
                  city="New Zealand"
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
                Top Gluten-Free Cities in New Zealand
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose a city to explore verified gluten-free restaurants with detailed reviews and safety information
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city, index) => {
                const meta = cityMeta[city.slug];
                const route = `/gluten-free/new-zealand/${city.slug}`;
                const rating = (
                  city.restaurants.reduce((sum, r) => sum + (r.rating || 0), 0) / (city.restaurants.length || 1)
                ).toFixed(1);
                return (
                  <Card
                    key={city.name}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in overflow-hidden flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Link to={route} aria-label={`Explore gluten-free options in ${city.name}`} className="block">
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={`https://images.unsplash.com/${meta?.image ?? "photo-1507699622108-4be3abd695ad"}?auto=format&fit=crop&w=600&q=80`}
                          alt={`Gluten-free restaurants in ${city.name}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold text-sm">{rating}</span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                        </div>
                      </div>
                    </Link>
                    <CardContent className="p-5 flex flex-col flex-1">
                      <p className="text-gray-600 text-sm mb-3">{meta?.description}</p>
                      <div className="flex items-center text-red-600 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="font-semibold text-sm">{city.restaurants.length} places</span>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Popular spots:</p>
                        <div className="flex flex-wrap gap-1">
                          {city.restaurants.slice(0, 3).map((r) => (
                            <Badge key={r.name} variant="secondary" className="text-xs bg-red-50 text-red-700">
                              {r.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Link to={route} className="mt-auto">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                          Explore {city.name}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">More Gluten-Free Spots Across New Zealand</h2>
              <Badge variant="secondary">{moreRestaurants.length} places</Badge>
            </div>
            <p className="text-gray-600 mb-6">Additional verified gluten-free venues nationwide.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {moreRestaurants.map((restaurant) => (
                <Card key={restaurant.name} className="border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{restaurant.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold text-sm">{restaurant.rating}</span>
                      <span className="text-gray-500 text-xs">({restaurant.reviewCount} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {restaurant.cuisineTypes.map((cuisine) => (
                        <Badge key={cuisine} variant="outline" className="text-xs">{cuisine}</Badge>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 space-y-1 mb-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>{restaurant.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{restaurant.hours}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {restaurant.menuHighlights.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                    {restaurant.proTip && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 mb-3 text-xs">
                        <div className="flex items-start gap-2">
                          <MessageCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="text-amber-800"><span className="font-medium">Pro Tip:</span> {restaurant.proTip}</span>
                        </div>
                      </div>
                    )}
                    <Button asChild size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.name + " " + restaurant.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
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
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Gluten-Free Dining in New Zealand</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Why New Zealand?</h3>
                  <p className="text-gray-600 mb-4">
                    New Zealand has one of the highest celiac-awareness rates in the world. Cafés and
                    restaurants from Auckland to Queenstown clearly mark gluten-free options, and dedicated
                    GF bakeries make it easy to enjoy fresh bread, pies and pastries safely.
                  </p>
                  <p className="text-gray-600">
                    Clear food labelling laws and a strong farm-to-table culture mean naturally gluten-free
                    produce, seafood and meats are abundant nationwide.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Celiac Tips</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Look for "GF" labelling — widely used across NZ menus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Dedicated GF bakeries: The GF Depot (Auckland), Gluten Free 4u (Wellington)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Coeliac New Zealand provides crossed-grain certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Countdown, New World and Pak'nSave stock wide GF ranges</span>
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
                <p className="text-gray-600 mt-2">Everything you need to know about gluten-free dining in New Zealand</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {nzFaqItems.map((faq, index) => (
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
            <h2 className="text-3xl font-bold text-white mb-4">Know a Great GF Spot in New Zealand?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Help fellow celiac travelers discover safe dining options across Aotearoa. Submit a restaurant to our growing directory.
            </p>
            <AddRestaurantDialog city="New Zealand" triggerClassName="bg-white text-red-700 hover:bg-red-50 text-lg px-8 py-3" />
          </div>
        </section>
      </div>
    </>
  );
};

export default NewZealand;
