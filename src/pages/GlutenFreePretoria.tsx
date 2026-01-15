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
import PretoriaMap from "@/components/maps/PretoriaMap";

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

const GlutenFreePretoria = () => {
  const [safetyFilter, setSafetyFilter] = useState<string>("all");
  const [venueFilter, setVenueFilter] = useState<string>("all");
  const [menuFilter, setMenuFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const restaurants: Restaurant[] = [
    {
      name: "Leafy Greens Café",
      address: "Shop 2, Menlyn Maine, Pretoria, 0181",
      hours: "Daily: 7:00AM – 9:00PM",
      phone: "+27 12 348 1234",
      website: "www.leafygreens.co.za",
      directionsUrl: "https://www.google.com/maps/search/Leafy+Greens+Cafe+Menlyn+Maine+Pretoria",
      specialty: "Health-Focused Café",
      overview: "Leafy Greens is a popular health café offering a wide range of gluten-free options. Their menu is clearly marked and staff are well-trained in dietary requirements.",
      menuHighlights: ["🥗 GF Salads & Bowls", "🍳 Breakfast (GF options)", "🥤 Fresh Juices", "🍰 GF Baked Goods"],
      proTip: "Try their signature GF Buddha bowl!",
      icon: "🥗",
      featured: true,
      cuisineTypes: ["Healthy", "Café", "Vegetarian"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.6,
      reviewCount: 198,
      lat: -25.7864,
      lng: 28.2774,
      venueType: "cafe"
    },
    {
      name: "Kream Restaurant",
      address: "481 Rodericks Rd, Lynnwood, Pretoria, 0081",
      hours: "Tue–Sat: 12:00PM – 10:00PM, Sun: 12:00PM – 4:00PM",
      phone: "+27 12 361 1797",
      website: "www.kream.co.za",
      directionsUrl: "https://www.google.com/maps/search/Kream+Restaurant+Lynnwood+Pretoria",
      specialty: "Fine Dining",
      overview: "Award-winning fine dining restaurant offering creative cuisine with excellent gluten-free accommodations. Chef-driven menu changes seasonally.",
      menuHighlights: ["🍽️ Tasting Menu (GF options)", "🥩 Quality Proteins (GF)", "🍰 GF Desserts", "🍷 Wine Pairing"],
      proTip: "Mention GF requirements when booking!",
      icon: "🍽️",
      featured: true,
      cuisineTypes: ["Fine Dining", "Contemporary"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.8,
      reviewCount: 234,
      lat: -25.7633,
      lng: 28.2847,
      venueType: "restaurant"
    },
    {
      name: "Pachas",
      address: "Shop 2, Hazelwood, 245 Hazelwood Rd, Pretoria, 0081",
      hours: "Daily: 7:00AM – 5:00PM",
      phone: "+27 12 460 4367",
      website: "www.pachas.co.za",
      directionsUrl: "https://www.google.com/maps/search/Pachas+Hazelwood+Pretoria",
      specialty: "Mediterranean Café",
      overview: "Popular Mediterranean-inspired café with an extensive menu including many gluten-free breakfast and lunch options.",
      menuHighlights: ["🍳 All-Day Breakfast (GF options)", "🥗 Mediterranean Salads (GF)", "🍔 GF Bread Options", "☕ Quality Coffee"],
      proTip: "Their GF pancakes are excellent!",
      icon: "☕",
      featured: true,
      cuisineTypes: ["Mediterranean", "Café"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 289,
      lat: -25.7589,
      lng: 28.2692,
      venueType: "cafe"
    },
    {
      name: "Ritrovo Ristorante",
      address: "Essex Square, 265 West Ave, Centurion, 0157",
      hours: "Mon–Sat: 12:00PM – 10:00PM",
      phone: "+27 12 663 6820",
      website: "www.ritrovo.co.za",
      directionsUrl: "https://www.google.com/maps/search/Ritrovo+Ristorante+Centurion",
      specialty: "Italian Cuisine",
      overview: "Authentic Italian restaurant offering gluten-free pasta and pizza options. Known for accommodating dietary requirements with care.",
      menuHighlights: ["🍝 GF Pasta Options", "🍕 GF Pizza Bases", "🥗 Italian Salads (GF)", "🍰 GF Tiramisu"],
      proTip: "Their GF pasta is made in-house!",
      icon: "🍝",
      featured: true,
      cuisineTypes: ["Italian", "Pizza"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 267,
      lat: -25.8601,
      lng: 28.1889,
      venueType: "restaurant"
    },
    {
      name: "Afro-Boer Restaurant",
      address: "Cnr Festival & Lenchen Sts, Centurion, 0157",
      hours: "Daily: 11:00AM – 10:00PM",
      phone: "+27 12 663 1753",
      website: "www.afroboer.co.za",
      directionsUrl: "https://www.google.com/maps/search/Afro+Boer+Restaurant+Centurion",
      specialty: "South African Cuisine",
      overview: "Traditional South African restaurant specializing in braai and local dishes. Many meat options are naturally gluten-free with GF sides available.",
      menuHighlights: ["🥩 Braai Meats (GF)", "🍖 Traditional Potjie (ask GF)", "🥗 Fresh Sides (GF)", "🍺 Local Drinks"],
      proTip: "Ask about GF marinade options!",
      icon: "🥩",
      featured: false,
      cuisineTypes: ["South African", "Braai", "Traditional"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.3,
      reviewCount: 312,
      lat: -25.8594,
      lng: 28.1893,
      venueType: "restaurant"
    },
    {
      name: "Tasha's Menlyn Maine",
      address: "Shop 45, Menlyn Maine, Pretoria, 0181",
      hours: "Daily: 7:00AM – 9:00PM",
      phone: "+27 12 348 9999",
      website: "www.tashas.co.za",
      directionsUrl: "https://www.google.com/maps/search/Tashas+Menlyn+Maine+Pretoria",
      specialty: "Upscale Café",
      overview: "Part of the renowned Tashas chain, offering stylish dining with a comprehensive gluten-free menu clearly marked.",
      menuHighlights: ["🥗 Salads with GF Options", "🍳 Breakfast (GF)", "🥩 Grilled Proteins (GF)", "🍰 GF Desserts"],
      proTip: "Ask for their separate GF menu!",
      icon: "🍽️",
      featured: true,
      cuisineTypes: ["Café", "International"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.5,
      reviewCount: 234,
      lat: -25.7867,
      lng: 28.2777,
      venueType: "cafe"
    },
    {
      name: "Ocean Basket Brooklyn",
      address: "Brooklyn Mall, 380 Bronkhorst St, Pretoria, 0181",
      hours: "Daily: 11:00AM – 9:00PM",
      phone: "+27 12 346 4767",
      website: "www.oceanbasket.com",
      directionsUrl: "https://www.google.com/maps/search/Ocean+Basket+Brooklyn+Mall+Pretoria",
      specialty: "Seafood",
      overview: "Popular seafood chain offering fresh fish and shellfish. Many dishes are naturally gluten-free with GF sauce options available.",
      menuHighlights: ["🦐 Grilled Seafood (GF)", "🐟 Fresh Fish (GF)", "🥗 Seafood Salads (GF)", "🍚 Rice Sides (GF)"],
      proTip: "Ask about GF crumbed options!",
      icon: "🦐",
      featured: false,
      cuisineTypes: ["Seafood", "Mediterranean"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.2,
      reviewCount: 345,
      lat: -25.7721,
      lng: 28.2378,
      venueType: "restaurant"
    },
    {
      name: "The Farmhouse",
      address: "Plot 62, Silver Lakes Rd, Silver Lakes, Pretoria, 0054",
      hours: "Tue–Sun: 8:00AM – 5:00PM",
      phone: "+27 12 809 0568",
      website: "www.thefarmhouse.co.za",
      directionsUrl: "https://www.google.com/maps/search/The+Farmhouse+Silver+Lakes+Pretoria",
      specialty: "Farm-to-Table",
      overview: "Charming farm-style restaurant offering fresh, locally-sourced dishes with excellent gluten-free options in a beautiful setting.",
      menuHighlights: ["🍳 Farm Breakfast (GF options)", "🥗 Fresh Salads (GF)", "🥩 Grilled Meats (GF)", "🍰 Homestyle Desserts (GF available)"],
      proTip: "Beautiful venue for special occasions!",
      icon: "🏡",
      featured: false,
      cuisineTypes: ["Farm-to-Table", "South African"],
      celiacSafe: "protocols-in-place",
      menuType: "mixed-menu",
      rating: 4.4,
      reviewCount: 189,
      lat: -25.7234,
      lng: 28.3567,
      venueType: "restaurant"
    }
  ];

  const faqItems = [
    {
      question: "Is Pretoria a good destination for gluten-free travelers?",
      answer: "Yes! Pretoria (Tshwane) offers a growing selection of GF-friendly restaurants, especially in areas like Menlyn, Brooklyn, and Lynnwood. Many upscale restaurants accommodate dietary requirements well."
    },
    {
      question: "Which areas in Pretoria have the most GF-friendly restaurants?",
      answer: "Menlyn Maine, Brooklyn, Lynnwood, and Hazelwood have the highest concentration of restaurants catering to gluten-free diets. Centurion also offers good options."
    },
    {
      question: "Are there dedicated gluten-free bakeries in Pretoria?",
      answer: "While Pretoria has fewer dedicated GF bakeries than Johannesburg, many cafés like Leafy Greens and Pachas offer excellent GF baked goods. Health stores stock a wide variety of GF products."
    },
    {
      question: "How do I communicate my celiac needs in Pretoria restaurants?",
      answer: "English and Afrikaans are widely spoken. Simply explain you have celiac disease (soeliekte in Afrikaans). Most restaurants in upscale areas have trained staff who understand dietary restrictions."
    },
    {
      question: "What traditional South African foods are naturally gluten-free?",
      answer: "Braai meats (BBQ), pap (maize porridge), chakalaka, bobotie (without bread topping), and most grilled meats are naturally GF. Always confirm marinades and sauces."
    },
    {
      question: "Can I find gluten-free options in Pretoria's shopping malls?",
      answer: "Yes! Major malls like Menlyn Park and Brooklyn Mall have multiple restaurants with GF options. Woolworths and health stores in these malls also stock excellent GF products."
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/south-africa" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to South Africa
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-4 block">🏛️</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Safe Gluten-Free Restaurants in Pretoria
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Real reviews from gluten-free diners. Verified listings. Zero guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
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
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Gluten-Free Dining in Pretoria</h2>
                  <p className="text-gray-700">
                    Pretoria (Tshwane), South Africa's administrative capital, offers sophisticated dining with growing awareness of gluten-free needs. 
                    The city's upscale suburbs like Menlyn, Brooklyn, and Lynnwood feature restaurants that cater well to dietary requirements. 
                    From fine dining at Kream to health-focused cafés, you'll find plenty of options in the Jacaranda City.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 Restaurant Map</h2>
          <PretoriaMap restaurants={filteredRestaurants} />
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
              <Card key={index} className={`hover:shadow-lg transition-shadow ${restaurant.featured ? 'ring-2 ring-purple-300' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{restaurant.icon}</span>
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {restaurant.name}
                          {restaurant.featured && <Badge className="bg-purple-100 text-purple-800">Featured</Badge>}
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

                    <div className="bg-purple-50 p-3 rounded-lg">
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
            restaurantName="Pretoria Gluten-Free Restaurants" 
            restaurantCountry="South Africa"
            restaurantCity="Pretoria"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Helping celiacs find safe dining in Pretoria 🏛️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GlutenFreePretoria;
