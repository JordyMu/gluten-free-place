import { useState, useMemo } from "react";
import { MapPin, Star, ArrowLeft, Phone, Clock, Globe, CheckCircle, Navigation, Heart, MessageCircle, Award, Shield, Search, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DurbanMap from "@/components/maps/DurbanMap";

interface Restaurant {
  name: string;
  address: string;
  hours: string;
  phone: string;
  website: string;
  directionsUrl: string;
  specialty: string;
  overview: string;
  menuHighlights: string[];
  proTip: string;
  icon: string;
  featured: boolean;
  cuisineTypes: string[];
  celiacSafe: "dedicated-facility" | "protocols-in-place";
  menuType: "fully-gluten-free" | "mixed-menu";
  rating: number;
  reviewCount: number;
  lat: number;
  lng: number;
  venueType: "bakery" | "restaurant" | "cafe";
}

const GlutenFreeDurban = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
  const [venueFilter, setVenueFilter] = useState<string>("all");
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const restaurants: Restaurant[] = [
    {
      name: "9th Avenue Bistro",
      address: "9th Ave, Morningside, Durban, 4001",
      hours: "Tue–Sat: 6:30PM – 10:00PM",
      phone: "+27 31 312 9134",
      website: "www.9thavenuebistro.co.za",
      directionsUrl: "https://www.google.com/maps/search/9th+Avenue+Bistro+Morningside+Durban",
      specialty: "Fine Dining with GF Options",
      overview: "Award-winning fine dining restaurant offering a sophisticated menu with excellent gluten-free accommodations. Chef is very aware of dietary requirements.",
      menuHighlights: ["🥩 Fine Dining Mains (GF options)", "🥗 Creative Starters (GF)", "🍰 GF Desserts", "🍷 Wine Pairing"],
      proTip: "Mention GF requirements when booking!",
      icon: "🍽️",
      featured: true,
      cuisineTypes: ["Fine Dining", "Contemporary"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.7,
      reviewCount: 234,
      lat: -29.8330,
      lng: 31.0089,
      venueType: "restaurant"
    },
    {
      name: "The Glenwood Bakery",
      address: "275 Helen Joseph Rd, Glenwood, Durban, 4001",
      hours: "Mon–Fri: 6:30AM – 5:00PM, Sat: 7:00AM – 2:00PM",
      phone: "+27 31 201 8200",
      website: "www.glenwoodbakery.co.za",
      directionsUrl: "https://www.google.com/maps/search/Glenwood+Bakery+Durban",
      specialty: "Artisan Bakery with GF Options",
      overview: "Popular neighborhood bakery offering a selection of gluten-free breads and baked goods alongside their regular menu.",
      menuHighlights: ["🥖 GF Bread Options", "🍰 GF Cakes", "🥗 Light Meals (GF options)", "☕ Coffee"],
      proTip: "Call ahead for GF bread availability!",
      icon: "🥖",
      featured: true,
      cuisineTypes: ["Bakery", "Café"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 178,
      lat: -29.8621,
      lng: 31.0172,
      venueType: "bakery"
    },
    {
      name: "Café 1999",
      address: "Silvervause Centre, Silverton Rd, Musgrave, Durban, 4001",
      hours: "Daily: 7:00AM – 9:00PM",
      phone: "+27 31 201 7171",
      website: "www.cafe1999.co.za",
      directionsUrl: "https://www.google.com/maps/search/Cafe+1999+Musgrave+Durban",
      specialty: "All-Day Dining",
      overview: "Popular family restaurant with an extensive menu including many gluten-free options. Known for accommodating dietary requirements.",
      menuHighlights: ["🍳 Breakfast (GF options)", "🥗 Salads (GF)", "🍔 GF Bun Options", "🍰 GF Desserts"],
      proTip: "Great for family dining with GF needs!",
      icon: "☕",
      featured: true,
      cuisineTypes: ["Café", "Family"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 289,
      lat: -29.8477,
      lng: 31.0033,
      venueType: "cafe"
    },
    {
      name: "Havana Grill & Wine Bar",
      address: "Shop 4, Lighthouse Mall, Umhlanga Rocks Dr, Umhlanga, 4320",
      hours: "Daily: 11:00AM – 10:00PM",
      phone: "+27 31 561 7500",
      website: "www.havanagrill.co.za",
      directionsUrl: "https://www.google.com/maps/search/Havana+Grill+Umhlanga",
      specialty: "Steakhouse & Seafood",
      overview: "Upscale steakhouse offering premium meats and seafood with gluten-free sides and sauce options available.",
      menuHighlights: ["🥩 Premium Steaks (GF)", "🦐 Fresh Seafood (GF)", "🥗 Sides (GF options)", "🍷 Wine Selection"],
      proTip: "Ask about GF sauces!",
      icon: "🥩",
      featured: true,
      cuisineTypes: ["Steakhouse", "Seafood"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 312,
      lat: -29.7267,
      lng: 31.0851,
      venueType: "restaurant"
    },
    {
      name: "Ocean Terrace",
      address: "The Oyster Box, 2 Lighthouse Rd, Umhlanga, 4320",
      hours: "Daily: 6:30AM – 10:00PM",
      phone: "+27 31 514 5000",
      website: "www.oysterboxhotel.com",
      directionsUrl: "https://www.google.com/maps/search/Oyster+Box+Hotel+Ocean+Terrace+Umhlanga",
      specialty: "Luxury Hotel Dining",
      overview: "Iconic oceanfront restaurant at The Oyster Box Hotel offering excellent gluten-free accommodations in a stunning setting.",
      menuHighlights: ["🍳 Breakfast Buffet (GF options)", "🥗 Lunch (GF)", "🦐 Seafood (GF)", "🍰 GF Desserts"],
      proTip: "World-famous high tea with GF options!",
      icon: "🌊",
      featured: true,
      cuisineTypes: ["Fine Dining", "Seafood", "International"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.8,
      reviewCount: 456,
      lat: -29.7282,
      lng: 31.0840,
      venueType: "restaurant"
    },
    {
      name: "Unity Brasserie & Bar",
      address: "Shop 43, Gateway Theatre of Shopping, Umhlanga, 4319",
      hours: "Daily: 9:00AM – 10:00PM",
      phone: "+27 31 566 2255",
      website: "www.unitybrasserie.co.za",
      directionsUrl: "https://www.google.com/maps/search/Unity+Brasserie+Gateway+Umhlanga",
      specialty: "Contemporary Dining",
      overview: "Trendy brasserie at Gateway Mall offering a diverse menu with clear gluten-free options and knowledgeable staff.",
      menuHighlights: ["🥗 Salads (GF)", "🥩 Grilled Meats (GF)", "🍝 GF Pasta Available", "🍹 Cocktails"],
      proTip: "Ask for the allergen menu!",
      icon: "🍽️",
      featured: false,
      cuisineTypes: ["Contemporary", "International"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 198,
      lat: -29.7284,
      lng: 31.0497,
      venueType: "restaurant"
    },
    {
      name: "Mali's Indian Restaurant",
      address: "7 Mitchell Cres, Umhlanga Rocks, 4320",
      hours: "Daily: 12:00PM – 10:00PM",
      phone: "+27 31 561 7609",
      website: "www.malis.co.za",
      directionsUrl: "https://www.google.com/maps/search/Malis+Indian+Restaurant+Umhlanga",
      specialty: "Indian Cuisine",
      overview: "Authentic Indian restaurant with many naturally gluten-free curries and rice dishes. Durban is famous for its Indian cuisine.",
      menuHighlights: ["🍛 Curries (many GF)", "🍚 Biryani (GF)", "🥘 Tandoori (GF)", "🥗 Indian Vegetarian"],
      proTip: "Most curries are naturally GF - confirm naan alternatives!",
      icon: "🍛",
      featured: false,
      cuisineTypes: ["Indian", "Curry"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 267,
      lat: -29.7267,
      lng: 31.0833,
      venueType: "restaurant"
    },
    {
      name: "Ile Maurice",
      address: "48 Mackeurtan Ave, Morningside, Durban, 4001",
      hours: "Tue–Sat: 6:00PM – 10:00PM, Sun: 12:00PM – 3:00PM",
      phone: "+27 31 312 8828",
      website: "www.ilemaurice.co.za",
      directionsUrl: "https://www.google.com/maps/search/Ile+Maurice+Morningside+Durban",
      specialty: "Mauritian Cuisine",
      overview: "Unique Mauritian restaurant offering island-inspired dishes with many naturally gluten-free seafood and rice-based options.",
      menuHighlights: ["🦐 Seafood Dishes (GF)", "🍚 Rice-Based Mains (GF)", "🍛 Island Curries (GF)", "🥥 Tropical Flavors"],
      proTip: "Ask about traditional rice accompaniments!",
      icon: "🏝️",
      featured: false,
      cuisineTypes: ["Mauritian", "Seafood", "Island"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.6,
      reviewCount: 189,
      lat: -29.8328,
      lng: 31.0102,
      venueType: "restaurant"
    }
  ];

  const faqItems = [
    {
      question: "Is Durban a good destination for gluten-free travelers?",
      answer: "Yes! Durban has a diverse food scene with many naturally gluten-free options, especially Indian cuisine which the city is famous for. Umhlanga offers upscale dining with excellent GF accommodations."
    },
    {
      question: "What makes Durban unique for gluten-free dining?",
      answer: "Durban has a large Indian population, making it South Africa's curry capital. Many traditional Indian dishes are naturally gluten-free, including rice-based biryanis, tandoori meats, and most curries."
    },
    {
      question: "Which areas in Durban have the most GF-friendly restaurants?",
      answer: "Umhlanga (especially around Gateway Mall and the beachfront), Morningside, and Glenwood have the highest concentration of restaurants catering to gluten-free diets."
    },
    {
      question: "Are there dedicated gluten-free bakeries in Durban?",
      answer: "While Durban doesn't have as many dedicated GF bakeries as Johannesburg or Cape Town, The Glenwood Bakery and several health stores stock gluten-free products. Some restaurants offer GF baked goods."
    },
    {
      question: "What traditional Durban foods are naturally gluten-free?",
      answer: "Bunny chow (the bread part isn't GF, but you can ask for filling only), curries with rice, biryani, grilled seafood, and braai meats are popular naturally GF options. Always confirm preparation."
    },
    {
      question: "How do I communicate my celiac needs in Durban restaurants?",
      answer: "English is widely spoken. Simply explain you have celiac disease. In Indian restaurants, emphasize no flour-based items like naan or roti. Staff are generally accommodating."
    }
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
        return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
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

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant => {
      const matchesSafety = safetyFilter === "all" || restaurant.celiacSafe === safetyFilter;
      const matchesVenue = venueFilter === "all" || restaurant.venueType === venueFilter;
      const matchesMenu = menuFilter === "all" || restaurant.menuType === menuFilter;
      const matchesSearch = searchQuery === "" || 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisineTypes.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesSafety && matchesVenue && matchesMenu && matchesSearch;
    });
  }, [safetyFilter, venueFilter, menuFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/south-africa" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to South Africa
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-4 block">🌊</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Safe Gluten-Free Restaurants in Durban
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Real reviews from gluten-free diners. Verified listings. Zero guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Search className="w-5 h-5 mr-2" />
              Find Gluten-Free Food Near Me
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Plus className="w-5 h-5 mr-2" />
              Add a Restaurant
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Durban</h2>
                  <p className="text-gray-700">
                    Durban, known as South Africa's curry capital, offers unique advantages for gluten-free travelers. 
                    The city's rich Indian heritage means many restaurants serve naturally GF dishes like curries and biryanis. 
                    The beachfront suburb of Umhlanga provides upscale dining with excellent dietary accommodations, 
                    while the warm coastal atmosphere makes for memorable dining experiences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 Restaurant Map</h2>
          <DurbanMap restaurants={filteredRestaurants} />
        </section>

        {/* Filters */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter Restaurants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Search</label>
                  <Input
                    placeholder="Search restaurants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Safety Level</label>
                  <Select value={safetyFilter} onValueChange={setSafetyFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Safety Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Safety Levels</SelectItem>
                      <SelectItem value="dedicated-facility">Dedicated GF Facility</SelectItem>
                      <SelectItem value="protocols-in-place">Careful Handling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Venue Type</label>
                  <Select value={venueFilter} onValueChange={setVenueFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Venues" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Venues</SelectItem>
                      <SelectItem value="bakery">Bakery</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="cafe">Café</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Menu Type</label>
                  <Select value={menuFilter} onValueChange={setMenuFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Menu Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Menu Types</SelectItem>
                      <SelectItem value="fully-gluten-free">100% Gluten-Free</SelectItem>
                      <SelectItem value="mixed-menu">GF Options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Restaurant Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🍽️ Gluten-Free Restaurants ({filteredRestaurants.length})
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${restaurant.featured ? 'ring-2 ring-blue-300' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{restaurant.icon}</span>
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {restaurant.name}
                          {restaurant.featured && <Badge className="bg-blue-100 text-blue-800">Featured</Badge>}
                        </CardTitle>
                        <p className="text-sm text-gray-600">{restaurant.specialty}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {getCeliacSafeBadge(restaurant.celiacSafe)}
                      {getMenuTypeBadge(restaurant.menuType)}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {renderStarRating(restaurant.rating)}
                      <span className="text-sm text-gray-500">({restaurant.reviewCount} reviews)</span>
                    </div>

                    <p className="text-gray-700 text-sm">{restaurant.overview}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{restaurant.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{restaurant.phone}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Menu Highlights:</p>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.menuHighlights.map((item, i) => (
                          <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{item}</span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <p className="text-sm"><span className="font-medium">💡 Pro Tip:</span> {restaurant.proTip}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={restaurant.directionsUrl} target="_blank" rel="noopener noreferrer">
                          <Navigation className="w-4 h-4 mr-1" />
                          Directions
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-1" />
                          Website
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Reviews Section */}
        <section>
          <RestaurantReviews 
            restaurantName="Durban Gluten-Free Restaurants" 
            restaurantCountry="South Africa"
            restaurantCity="Durban"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Helping celiacs find safe dining in Durban 🌊
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GlutenFreeDurban;
