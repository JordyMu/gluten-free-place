import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UserMenu } from "@/components/layout/UserMenu";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { SEOHead } from "@/components/SEOHead";
import { newZealandCities } from "@/data/newZealandCities";

const nzFaqItems = [
  { question: "Is New Zealand a good destination for gluten-free travelers?", answer: "Yes! New Zealand has excellent celiac awareness, clear allergen labelling, and a strong café culture. Auckland and Wellington both have dedicated 100% gluten-free bakeries." },
  { question: "What are the best dedicated gluten-free spots in New Zealand?", answer: "The GF Depot in Auckland and Gluten Free 4u in Wellington are both fully dedicated facilities offering breads, pastries, pies and cakes that are safe for celiacs." },
  { question: "Are gluten-free options widely available in New Zealand cafés?", answer: "Yes — most cafés across Auckland, Wellington, Christchurch and Queenstown clearly mark GF items on the menu and can accommodate dietary requests." },
  { question: "How do I find safe gluten-free food in smaller NZ towns?", answer: "Supermarkets like Countdown, New World and Pak'nSave stock a wide GF range. Naturally GF options like grilled meats, fish, rice dishes and salads are easy to find." },
  { question: "Which New Zealand city is most celiac-friendly?", answer: "Auckland leads with the widest selection of dedicated and GF-friendly venues, followed by Wellington and Christchurch." },
];
const NewZealand = () => {
  const [searchParams] = useSearchParams();
  const cityFilter = searchParams.get("city");
  
  
  
  const cities = newZealandCities;


  const moreRestaurants = [
    { name: "Sabal", address: "169 Maunganui Road, Mount Maunganui 3116, New Zealand", cuisineTypes: ["Indian", "Vegetarian"], overview: "Modern Indian eatery with a strong gluten-free menu and clear allergen labelling.", menuHighlights: ["🍛 GF curries", "🥘 Dosa (GF)", "🌶️ Vegan options"], proTip: "Ask for the GF menu — most curries are naturally gluten-free.", hours: "Tue-Sun: 5:00PM – 9:30PM", rating: 4.6, reviewCount: 187 },
    { name: "Wooden Spoon", address: "169 London Street, Hamilton Central, Hamilton 3204, New Zealand", cuisineTypes: ["Cafe", "Brunch"], overview: "Hamilton brunch favourite with dedicated GF baking and a clearly marked menu.", menuHighlights: ["🥞 GF pancakes", "🥑 Smashed avo (GF)", "☕ Specialty coffee"], proTip: "Their GF bread is baked in-house — fantastic toast.", hours: "Mon-Sun: 7:00AM – 3:00PM", rating: 4.5, reviewCount: 142 },
    { name: "Dhara's Caffe", address: "19 Buxton Square, Nelson 7010, New Zealand", cuisineTypes: ["Indian", "Cafe"], overview: "Indian-inspired café in Nelson with extensive gluten-free and vegan options.", menuHighlights: ["🍛 GF thali", "🫓 Rice flour roti", "🍵 Chai"], proTip: "The thali is almost entirely gluten-free.", hours: "Mon-Sat: 9:00AM – 4:00PM", rating: 4.7, reviewCount: 96 },
    { name: "Black Rabbit Pizza", address: "94 Beach Road, Kaikōura 7300, New Zealand", cuisineTypes: ["Pizza", "Italian"], overview: "Seaside pizzeria offering reliable gluten-free bases and craft toppings.", menuHighlights: ["🍕 GF pizza base", "🥗 Fresh salads", "🍺 Local beer"], proTip: "Order GF base in advance on busy nights.", hours: "Wed-Sun: 4:00PM – 9:00PM", rating: 4.4, reviewCount: 118 },
    { name: "That Sandwich Place", address: "112 Emerson Street, Napier South, Napier 4110, New Zealand", cuisineTypes: ["Sandwiches", "Cafe"], overview: "Napier deli with house-made GF bread and big, generous sandwiches.", menuHighlights: ["🥪 GF sandwiches", "🥗 Salads", "☕ Coffee"], proTip: "GF bread is baked fresh daily — ask what's available.", hours: "Mon-Fri: 8:00AM – 3:00PM", rating: 4.6, reviewCount: 89 },
    { name: "Munch", address: "62 Broadway Avenue, Palmerston North Central, Palmerston North 4410, New Zealand", cuisineTypes: ["Cafe", "Brunch"], overview: "Palmerston North all-day eatery clearly marking GF and DF options across the menu.", menuHighlights: ["🍳 GF breakfast", "🥯 GF bagels", "🥗 Bowls"], proTip: "Almost the entire brunch menu can be made GF.", hours: "Mon-Sun: 7:30AM – 3:00PM", rating: 4.5, reviewCount: 156 },
    { name: "Te Mata Figs Cafe", address: "205 Napier Road, Havelock North 4130, New Zealand", cuisineTypes: ["Cafe", "Orchard"], overview: "Hawke's Bay orchard café with seasonal, mostly naturally GF dishes.", menuHighlights: ["🌿 Seasonal plates", "🍯 Fig produce", "☕ Coffee"], proTip: "Most dishes are naturally GF — staff are very allergen-aware.", hours: "Wed-Sun: 9:00AM – 3:00PM", rating: 4.7, reviewCount: 112 },
    { name: "Bambuchi", address: "31a Waitoa Road, Hataitai, Wellington 6021, New Zealand", cuisineTypes: ["Japanese", "Sushi"], overview: "Wellington Japanese spot with naturally GF sushi and tamari on request.", menuHighlights: ["🍣 Sushi", "🍜 Rice bowls", "🥢 GF tamari"], proTip: "Ask for tamari instead of soy sauce.", hours: "Tue-Sat: 11:30AM – 9:00PM", rating: 4.5, reviewCount: 73 },
    { name: "San Sea People Ice Cream", address: "107A Maunganui Road, Mount Maunganui 3116, New Zealand", cuisineTypes: ["Ice Cream", "Dessert"], overview: "Artisan gelato with many naturally gluten-free flavours.", menuHighlights: ["🍦 Gelato (GF)", "🍫 Vegan flavours", "🍓 Sorbet"], proTip: "Most flavours are GF — confirm cones aren't shared.", hours: "Mon-Sun: 11:00AM – 9:00PM", rating: 4.8, reviewCount: 204 },
    { name: "Earth Store Whitianga", address: "67 Albert Street, Whitianga 3510, New Zealand", cuisineTypes: ["Health Food", "Cafe"], overview: "Wholefoods store and café on the Coromandel with strong GF range.", menuHighlights: ["🥗 GF bowls", "🍪 GF baking", "🥤 Smoothies"], proTip: "Great for GF travel snacks for the road.", hours: "Mon-Sat: 8:30AM – 5:00PM", rating: 4.6, reviewCount: 64 },
    { name: "Dragonfruit Café", address: "7 Laurie Hall Lane, Whangārei 0110, New Zealand", cuisineTypes: ["Cafe", "Vegan"], overview: "Whangārei plant-based café with a fully labelled GF menu.", menuHighlights: ["🌱 Vegan GF mains", "🥞 GF baking", "🥤 Smoothie bowls"], proTip: "Vegan + GF combined — easy to dine safely.", hours: "Tue-Sat: 8:00AM – 2:30PM", rating: 4.7, reviewCount: 98 },
    { name: "Taste Nature", address: "131 High Street, Central Dunedin, Dunedin 9016, New Zealand", cuisineTypes: ["Organic", "Cafe"], overview: "Dunedin organic store + café with reliable gluten-free choices.", menuHighlights: ["🥗 GF deli bowls", "🍞 GF bread", "☕ Organic coffee"], proTip: "Stock up on GF pantry items from the store.", hours: "Mon-Sat: 8:00AM – 5:30PM", rating: 4.5, reviewCount: 121 },
    { name: "Hello Stranger Cafe", address: "1149 Pukuatua Street, Rotorua 3010, New Zealand", cuisineTypes: ["Cafe", "Brunch"], overview: "Rotorua café known for GF baking and a wide allergen-friendly menu.", menuHighlights: ["🥯 GF baking", "🍳 GF brunch", "☕ Coffee"], proTip: "GF cabinet baking is excellent — go early.", hours: "Mon-Sun: 7:00AM – 3:00PM", rating: 4.6, reviewCount: 178 },
    { name: "Stoked Bar & Grill", address: "19 Esplanade, Whitianga 3510, New Zealand", cuisineTypes: ["Grill", "Seafood"], overview: "Coromandel waterfront grill with a clearly marked GF menu.", menuHighlights: ["🥩 GF steaks", "🐟 Fresh fish", "🥗 Sides (GF)"], proTip: "Most mains can be made GF — ask for sauce on side.", hours: "Mon-Sun: 11:30AM – 9:00PM", rating: 4.4, reviewCount: 167 },
    { name: "Mike's Bistro & Taproom", address: "40 Devon Street East, New Plymouth Central, New Plymouth 4310, New Zealand", cuisineTypes: ["Bistro", "Brewery"], overview: "New Plymouth bistro and brewery with GF beers and a labelled menu.", menuHighlights: ["🍺 GF beer", "🍔 GF burger", "🍟 GF fries"], proTip: "Genuinely GF craft beer on tap — rare in NZ.", hours: "Wed-Sun: 12:00PM – 10:00PM", rating: 4.5, reviewCount: 145 },
    { name: "Relishes Cafe", address: "1/99 Ardmore Street, Wanaka 9305, New Zealand", cuisineTypes: ["Cafe", "Bistro"], overview: "Lakefront Wanaka institution with a long-running GF menu.", menuHighlights: ["🥗 GF lunch plates", "🍰 GF cabinet", "☕ Coffee"], proTip: "Book a window seat for the lake view.", hours: "Mon-Sun: 8:00AM – 4:00PM", rating: 4.6, reviewCount: 213 },
    { name: "Kisa", address: "195 Cuba Street, Te Aro, Wellington 6011, New Zealand", cuisineTypes: ["Modern NZ", "Bar"], overview: "Cuba St small plates with strong GF flagging across the menu.", menuHighlights: ["🍽️ GF small plates", "🍷 Natural wine", "🥢 Snacks"], proTip: "Tell staff at the start — they're great at adapting plates.", hours: "Tue-Sat: 5:00PM – Late", rating: 4.7, reviewCount: 156 },
    { name: "Hunger Monger Seafood", address: "129 Marine Parade, Napier 4110, New Zealand", cuisineTypes: ["Seafood"], overview: "Napier seafront seafood spot with naturally GF fresh fish and sides.", menuHighlights: ["🐟 Grilled fish (GF)", "🦐 Prawns", "🥗 Salads"], proTip: "Grilled options are naturally GF — skip the batter.", hours: "Mon-Sun: 11:30AM – 9:30PM", rating: 4.5, reviewCount: 188 },
    { name: "Sands Fish & Chips", address: "Shop 1, 623 Rocks Road, Tāhunanui, Nelson 7011, New Zealand", cuisineTypes: ["Fish & Chips"], overview: "Tāhunanui beachside chippy offering a dedicated GF fryer on request.", menuHighlights: ["🍟 GF chips", "🐟 GF battered fish", "🍔 GF burger"], proTip: "Call ahead so they can run the GF fryer.", hours: "Mon-Sun: 11:00AM – 8:30PM", rating: 4.4, reviewCount: 132 },
    { name: "Big Fig", address: "105 Ardmore Street, Wanaka 9305, New Zealand", cuisineTypes: ["Mediterranean", "Slow Food"], overview: "Wanaka slow-cooked sharing plates, most naturally gluten-free.", menuHighlights: ["🥘 Slow-cooked tagines", "🥗 Salads", "🍷 Wine"], proTip: "Nearly the whole menu is GF — ideal for celiacs.", hours: "Mon-Sun: 5:00PM – 9:30PM", rating: 4.8, reviewCount: 276 },
    { name: "CBD Cafe", address: "41 Queen Street, Blenheim 7201, New Zealand", cuisineTypes: ["Cafe"], overview: "Blenheim café with a clearly labelled GF menu and cabinet.", menuHighlights: ["🥪 GF wraps", "🍰 GF slices", "☕ Coffee"], proTip: "Strong GF cabinet — call to reserve favourites.", hours: "Mon-Fri: 7:00AM – 3:00PM", rating: 4.4, reviewCount: 87 },
    { name: "tibs", address: "112 Ocean View Road, Oneroa, Waiheke Island 1081, New Zealand", cuisineTypes: ["Ethiopian"], overview: "Waiheke Ethiopian — injera made from teff is naturally gluten-free.", menuHighlights: ["🫓 Teff injera (GF)", "🍛 Wat stews", "🌱 Vegan options"], proTip: "Confirm 100% teff injera (no wheat blend).", hours: "Thu-Sun: 5:00PM – 9:00PM", rating: 4.7, reviewCount: 64 },
    { name: "Plateau Bar + Eatery", address: "64 Tuwharetoa Street, Taupō 3330, New Zealand", cuisineTypes: ["Bistro", "Bar"], overview: "Taupō bistro with a clearly marked GF menu and GF beer on tap.", menuHighlights: ["🍔 GF burgers", "🍕 GF pizza", "🍺 GF beer"], proTip: "GF buns and pizza bases always available.", hours: "Mon-Sun: 11:30AM – Late", rating: 4.5, reviewCount: 201 },
    { name: "Community Burgers", address: "112 Tennyson Street, Napier South, Napier 4110, New Zealand", cuisineTypes: ["Burgers"], overview: "Napier smash burgers with reliable GF buns and dedicated prep.", menuHighlights: ["🍔 GF burgers", "🍟 GF fries", "🥤 Shakes"], proTip: "Ask for fries cooked separately to avoid cross-contact.", hours: "Wed-Sun: 12:00PM – 9:00PM", rating: 4.6, reviewCount: 154 },
    { name: "Leonardo's Pure Pizzeria", address: "1099 Tutanekai Street, Rotorua 3010, New Zealand", cuisineTypes: ["Pizza", "Italian"], overview: "Eat Streat pizzeria with proper Italian GF pizza bases.", menuHighlights: ["🍕 GF pizza", "🍝 GF pasta", "🥗 Insalata"], proTip: "GF pasta and pizza both available — confirm separate prep.", hours: "Mon-Sun: 5:00PM – 10:00PM", rating: 4.5, reviewCount: 198 },
    { name: "White & Wong's", address: "149 Quay Street, Auckland CBD, Auckland 1010, New Zealand", cuisineTypes: ["Asian Fusion"], overview: "Auckland viaduct pan-Asian with a dedicated allergen-aware menu.", menuHighlights: ["🥢 GF dumplings", "🍜 GF noodles", "🍤 Stir-fries"], proTip: "Ask for the allergen menu — clear GF marking.", hours: "Mon-Sun: 11:30AM – Late", rating: 4.5, reviewCount: 312 },
    { name: "& Wine", address: "1099 Tutanekai Street, Rotorua 3010, New Zealand", cuisineTypes: ["Wine Bar", "Small Plates"], overview: "Rotorua Eat Streat wine bar with GF-friendly grazing plates.", menuHighlights: ["🧀 GF charcuterie", "🥂 Wine", "🥗 Small plates"], proTip: "Most plates are naturally GF — just skip the bread.", hours: "Wed-Sun: 4:00PM – Late", rating: 4.4, reviewCount: 142 },
  ];



  const getCeliacSafeBadge = (level: string) => {
    switch (level) {
      case "dedicated-facility":
        return <Badge className="bg-green-100 text-green-800 border-green-300"><Shield className="w-3 h-3 mr-1" />Dedicated GF Facility</Badge>;
      case "protocols-in-place":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300"><CheckCircle className="w-3 h-3 mr-1" />Careful Handling</Badge>;
      default:
        return null;
    }
  };

  const getMenuTypeBadge = (type: string) => {
    switch (type) {
      case "fully-gluten-free":
        return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
      case "mixed-menu":
        return <Badge className="bg-amber-100 text-amber-800 border-amber-300">Many GF Options</Badge>;
      default:
        return null;
    }
  };

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        <span className="ml-1 font-semibold">{rating}</span>
      </div>
    );
  };

  const filteredCities = cityFilter 
    ? cities.filter(city => city.name.toLowerCase().includes(cityFilter.toLowerCase()))
    : cities;

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in New Zealand | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants in New Zealand. Dedicated bakeries, cafes & restaurants in Auckland, Wellington, Christchurch, Queenstown."
      canonical="/new-zealand"
    />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-700" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-gray-700 to-green-700 bg-clip-text text-transparent">
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

      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-blue-700 via-white/10 to-green-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link to="/countries" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Countries
          </Link>
          <div className="max-w-4xl mx-auto">
            <span className="text-5xl mb-4 block">🇳🇿</span>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              {cities.reduce((sum, c) => sum + c.restaurants.length, 0)}+ Gluten-Free Places
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Gluten-Free New Zealand
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Discover safe, delicious gluten-free dining across Aotearoa — from Auckland's dedicated
              bakeries to Wellington's café scene and the South Island's stunning eateries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#cities">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Explore Cities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
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
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <MapPin className="h-4 w-4 mr-2" />
              Explore by City
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Gluten-Free Cities in New Zealand
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a city to jump to its verified gluten-free restaurants and cafés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => {
              const slug = city.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
              return (
                <Card
                  key={city.name}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-40 bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20" />
                    <h3 className="relative text-2xl font-bold text-white text-center px-4">{city.name}</h3>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center text-blue-700 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-semibold text-sm">{city.restaurants.length} places</span>
                    </div>
                    {city.restaurants.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Popular spots:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {city.restaurants.slice(0, 3).map((r) => (
                            <Badge key={r.name} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-normal">
                              {r.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <a href={`#city-${slug}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                        Explore {city.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Cities and Restaurants */}
        {filteredCities.map((city) => (
          <div key={city.name} id={`city-${city.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} className="mb-10 scroll-mt-24">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{city.name}</h2>
              <Badge variant="secondary">{city.restaurants.length} restaurants</Badge>
            </div>

            <div className="grid gap-6">
              {city.restaurants.map((restaurant, index) => (
                <Card key={index} className={`overflow-hidden ${restaurant.featured ? 'ring-2 ring-blue-300' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Restaurant Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              {restaurant.featured && (
                                <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                                  <Award className="w-3 h-3 mr-1" />Featured
                                </Badge>
                              )}
                              <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              {renderStarRating(restaurant.rating)}
                              <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {restaurant.cuisineTypes?.map((cuisine, i) => (
                            <Badge key={i} variant="outline">{cuisine}</Badge>
                          ))}
                          {restaurant.celiacSafe && getCeliacSafeBadge(restaurant.celiacSafe)}
                          {restaurant.menuType && getMenuTypeBadge(restaurant.menuType)}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{restaurant.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{restaurant.hours}</span>
                          </div>
                          {restaurant.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <a href={`tel:${restaurant.phone}`} className="hover:text-blue-600">{restaurant.phone}</a>
                            </div>
                          )}
                        </div>

                        {/* Overview */}
                        <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                        {/* Menu Highlights */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.menuHighlights.map((item, i) => (
                              <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
                            ))}
                          </div>
                        </div>

                        {/* Pro Tip */}
                        {restaurant.proTip && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4 text-amber-600" />
                              <span className="font-medium text-amber-800">Pro Tip:</span>
                              <span className="text-amber-700">{restaurant.proTip}</span>
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-3 mt-4">
                          <Button asChild className="bg-blue-600 hover:bg-blue-700">
                            <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                              <Navigation className="w-4 h-4 mr-2" />
                              Get Directions
                            </a>
                          </Button>
                          {restaurant.website && (
                            <Button variant="outline" asChild>
                              <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                                <Globe className="w-4 h-4 mr-2" />
                                Website
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* More gluten-free spots across New Zealand */}
        <div className="mt-12 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">More Gluten-Free Spots Across New Zealand</h2>
            <Badge variant="secondary">{moreRestaurants.length} restaurants</Badge>
          </div>
          <p className="text-gray-600 mb-6">Additional verified gluten-free venues nationwide.</p>
          <div className="grid gap-6">
            {moreRestaurants.map((restaurant, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{restaurant.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          {renderStarRating(restaurant.rating)}
                          <span className="text-gray-500 text-sm">({restaurant.reviewCount} reviews)</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {restaurant.cuisineTypes?.map((cuisine, i) => (
                        <Badge key={i} variant="outline">{cuisine}</Badge>
                      ))}
                      {getCeliacSafeBadge("protocols-in-place")}
                      {getMenuTypeBadge("mixed-menu")}
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{restaurant.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{restaurant.hours}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.menuHighlights.map((item, i) => (
                          <Badge key={i} variant="secondary" className="text-sm">{item}</Badge>
                        ))}
                      </div>
                    </div>

                    {restaurant.proTip && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-amber-600" />
                          <span className="font-medium text-amber-800">Pro Tip:</span>
                          <span className="text-amber-700">{restaurant.proTip}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3 mt-4">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.name + " " + restaurant.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
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
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Look for "GF" labelling — widely used across NZ menus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Dedicated GF bakeries: The GF Depot (Auckland), Gluten Free 4u (Wellington)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Coeliac New Zealand provides crossed-grain certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Countdown, New World and Pak'nSave stock wide GF ranges</span>
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
              {nzFaqItems.map((faq, index) => (
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

export default NewZealand;
