import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Clock, Globe, Phone, Leaf, Award, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";
import { SEOHead } from "@/components/SEOHead";

const GlutenFreeFranschhoek = () => {
  const franschhoekRestaurants = [
    {
      name: "La Petite Colombe",
      rating: 4.9,
      reviews: 456,
      cuisine: "Fine Dining",
      address: "Leeu Estates, Dassenberg Road, Franschhoek",
      hours: "12:00 PM - 2:00 PM, 7:00 PM - 9:00 PM",
      website: "lapetitecolombe.com",
      phone: "+27 21 202 3395",
      menuType: "Full GF Tasting Menu",
      celiacInfo: "Michelin-trained kitchen, dedicated prep",
      description: "Sister restaurant to The Test Kitchen, La Petite Colombe offers an extraordinary fine dining experience with comprehensive gluten-free tasting menus.",
      specialties: ["Tasting menus", "Wine pairings", "Garden produce"],
      proTip: "Book weeks in advance and mention celiac disease - they'll prepare an entirely separate gluten-free tasting journey."
    },
    {
      name: "Maison Estate Restaurant",
      rating: 4.7,
      reviews: 289,
      cuisine: "French-Inspired",
      address: "Maison Estate, Franschhoek",
      hours: "12:00 PM - 3:00 PM, 6:30 PM - 9:30 PM",
      website: "maisonestate.co.za",
      phone: "+27 21 876 2116",
      menuType: "GF Menu Available",
      celiacInfo: "French-trained chef, allergen protocols",
      description: "Elegant French-inspired cuisine in a stunning estate setting. The chef has extensive experience with celiac-safe cooking from European training.",
      specialties: ["French classics", "Estate wines", "Seasonal produce"],
      proTip: "Their duck confit is naturally gluten-free and rivals anything you'd find in Paris."
    },
    {
      name: "Foliage Restaurant",
      rating: 4.8,
      reviews: 234,
      cuisine: "Farm-to-Table",
      address: "Heritage Square, Huguenot Road, Franschhoek",
      hours: "12:00 PM - 2:30 PM, 6:30 PM - 9:30 PM",
      website: "foliage.co.za",
      phone: "+27 21 876 2328",
      menuType: "Extensive GF Options",
      celiacInfo: "Garden-sourced, naturally GF focused",
      description: "Farm-to-table restaurant where many dishes are naturally gluten-free thanks to their focus on fresh, local produce from their own garden.",
      specialties: ["Garden vegetables", "Foraging", "Sustainable dining"],
      proTip: "Ask for the 'garden tour' before your meal - they'll show you where your vegetables are growing!"
    },
    {
      name: "Tuk Tuk Microbrewery",
      rating: 4.5,
      reviews: 512,
      cuisine: "Casual Dining",
      address: "11 Huguenot Road, Franschhoek",
      hours: "11:00 AM - 10:00 PM",
      website: "tuktukfranschhoek.co.za",
      phone: "+27 21 492 2207",
      menuType: "GF Menu Available",
      celiacInfo: "Separate fryers, marked menu",
      description: "Relaxed microbrewery with a surprisingly good gluten-free menu including burgers on GF buns. Great for a casual lunch.",
      specialties: ["GF burgers", "Craft sodas", "Casual fare"],
      proTip: "They offer gluten-free beer alternatives - ask about their current selection of craft ciders."
    },
    {
      name: "Reuben's Restaurant",
      rating: 4.6,
      reviews: 678,
      cuisine: "Contemporary",
      address: "2 Daniel Hugo Street, Franschhoek",
      hours: "12:00 PM - 3:00 PM, 6:00 PM - 10:00 PM",
      website: "reubens.co.za",
      phone: "+27 21 876 3772",
      menuType: "GF Options",
      celiacInfo: "Celebrity chef kitchen, trained staff",
      description: "Celebrity chef Reuben Riffel's flagship restaurant offers contemporary South African cuisine with excellent gluten-free adaptations.",
      specialties: ["Local ingredients", "Contemporary twists", "Signature dishes"],
      proTip: "The slow-roasted lamb shoulder is a signature dish and completely gluten-free - feeds 2-3 people."
    },
    {
      name: "Ryan's Kitchen",
      rating: 4.7,
      reviews: 345,
      cuisine: "Modern European",
      address: "Place Vendome, Franschhoek",
      hours: "12:00 PM - 2:30 PM, 6:30 PM - 9:00 PM",
      website: "ryanskitchen.co.za",
      phone: "+27 21 876 4598",
      menuType: "GF Accommodating",
      celiacInfo: "Intimate kitchen, personal attention",
      description: "Intimate fine dining experience where the small kitchen allows for personal attention to dietary requirements. Chef Ryan is known for accommodating celiacs.",
      specialties: ["Seasonal menus", "Local wines", "Personal service"],
      proTip: "With only a few tables, every dish gets personal attention - perfect for celiacs who need that extra care."
    }
  ];

  return (
    <>
    <SEOHead
      title="Gluten-Free Restaurants in Franschhoek | Celiac-Safe Dining Guide 2026"
      description="Find the best gluten-free restaurants in Franschhoek, South Africa. French-inspired fine dining with comprehensive GF tasting menus."
      canonical="/gluten-free/south-africa/cape-town/franschhoek"
    />
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/gluten-free/south-africa/cape-town" className="flex items-center gap-2 text-amber-600 hover:text-amber-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium whitespace-nowrap">Back to Cape Town</span>
            </Link>
            <Link to="/" className="text-xl font-bold text-amber-900 whitespace-nowrap">
              🥂 GF Franschhoek
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-amber-500 to-rose-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Wine className="w-8 h-8" />
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-1">
                Gourmet Capital
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gluten-Free Franschhoek
            </h1>
            <p className="text-xl text-amber-100 mb-6">
              South Africa's culinary capital with world-class gluten-free fine dining
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">🍽️ Gourmet Capital of SA</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🇫🇷 French Heritage</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🍷 6 GF Restaurants</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Wine Region Info Card */}
        <Card className="bg-gradient-to-r from-amber-50 to-rose-50 border-amber-200 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🥂</span>
              <div>
                <h2 className="text-xl font-bold text-amber-900 mb-2">About Franschhoek</h2>
                <p className="text-amber-800">
                  Known as the "French Corner" of South Africa, Franschhoek was settled by French Huguenots in 1688. 
                  Today it's considered South Africa's gourmet capital, with more top restaurants per capita than anywhere 
                  in the country. The French culinary tradition here means chefs are particularly skilled at adapting dishes 
                  for dietary requirements, making it a paradise for gluten-free food lovers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card className="bg-rose-50 border-rose-200 mb-8">
          <CardContent className="p-6">
            <h3 className="font-bold text-rose-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Franschhoek Tips for Celiacs
            </h3>
            <ul className="space-y-2 text-rose-800">
              <li>✓ Book fine dining restaurants at least a week ahead and mention celiac requirements</li>
              <li>✓ The Wine Tram is a fun way to visit estates - call ahead to arrange GF platters at your stops</li>
              <li>✓ Many restaurants source from local farms - fresh produce means naturally gluten-free options</li>
              <li>✓ The French baking tradition means some bakeries offer authentic gluten-free croissants</li>
            </ul>
          </CardContent>
        </Card>

        {/* Restaurants List */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🍽️ Gluten-Free Restaurants in Franschhoek
        </h2>

        <div className="space-y-8">
          {franschhoekRestaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Restaurant Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 font-medium">{restaurant.rating}</span>
                      </div>
                      <span className="text-gray-400">({restaurant.reviews} reviews)</span>
                      <Badge variant="secondary">{restaurant.cuisine}</Badge>
                    </div>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                    <Leaf className="w-3 h-3 mr-1" />
                    {restaurant.menuType}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{restaurant.description}</p>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      {restaurant.address}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-amber-600" />
                      {restaurant.hours}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe className="w-4 h-4 text-amber-600" />
                      {restaurant.website}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-amber-600" />
                      {restaurant.phone}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Celiac Safety</h4>
                    <p className="text-sm text-gray-600">{restaurant.celiacInfo}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {restaurant.specialties.map((spec, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="bg-amber-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-amber-800">
                    <strong>💡 Pro Tip:</strong> {restaurant.proTip}
                  </p>
                </div>

                {/* Reviews Section */}
                <RestaurantReviews
                  restaurantName={restaurant.name}
                  restaurantCountry="South Africa"
                  restaurantCity="Franschhoek"
                />

                {/* Get Directions Button */}
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.name + ' ' + restaurant.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Cape Town */}
        <div className="mt-12 text-center">
          <Link to="/gluten-free/south-africa/cape-town">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cape Town Guide
            </Button>
          </Link>
        </div>
      </div>
    </div>

    </>
  );
};

export default GlutenFreeFranschhoek;
