import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Clock, Globe, Phone, Leaf, Award, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RestaurantReviews } from "@/components/reviews/RestaurantReviews";

const GlutenFreeStellenbosch = () => {
  const stellenboschRestaurants = [
    {
      name: "Tokara Restaurant",
      rating: 4.8,
      reviews: 342,
      cuisine: "Fine Dining",
      address: "Helshoogte Pass, Stellenbosch",
      hours: "12:00 PM - 3:00 PM, 7:00 PM - 9:30 PM",
      website: "tokara.com",
      phone: "+27 21 885 2550",
      menuType: "Extensive GF Options",
      celiacInfo: "Chef-trained, separate prep area",
      description: "Award-winning restaurant with panoramic views of the Simonsberg mountains. Their kitchen is highly trained in celiac requirements with dedicated prep areas.",
      specialties: ["Farm-to-table cuisine", "Wine pairings", "Tasting menus"],
      proTip: "Request the celiac-safe tasting menu - the chef creates a special journey using local ingredients."
    },
    {
      name: "Overture at Hidden Valley",
      rating: 4.7,
      reviews: 256,
      cuisine: "Contemporary",
      address: "Hidden Valley Wine Estate, Stellenbosch",
      hours: "12:00 PM - 2:30 PM, Wed-Sun",
      website: "overturerestaurant.co.za",
      phone: "+27 21 880 2646",
      menuType: "GF Menu Available",
      celiacInfo: "Trained staff, clear allergen marking",
      description: "Fine dining experience overlooking beautiful vineyards. Known for their exceptional wine pairings and accommodating approach to dietary requirements.",
      specialties: ["5-course tasting menu", "Local wines", "Seasonal dishes"],
      proTip: "Book the terrace for stunning sunset views over the vines while enjoying your gluten-free feast."
    },
    {
      name: "Jardine Restaurant",
      rating: 4.6,
      reviews: 198,
      cuisine: "Modern South African",
      address: "1 Andringa Street, Stellenbosch",
      hours: "12:00 PM - 9:00 PM",
      website: "jardine.co.za",
      phone: "+27 21 886 5020",
      menuType: "GF Options",
      celiacInfo: "Kitchen trained, modifications available",
      description: "Located in the heart of Stellenbosch, Jardine offers contemporary South African cuisine with excellent gluten-free adaptations.",
      specialties: ["Local game", "Seafood", "Artisan desserts"],
      proTip: "Their chocolate fondant can be made gluten-free with advance notice - absolutely divine!"
    },
    {
      name: "The Big Easy by Ernie Els",
      rating: 4.5,
      reviews: 312,
      cuisine: "Steakhouse & Grill",
      address: "Ernie Els Wines, Stellenbosch",
      hours: "11:00 AM - 10:00 PM",
      website: "bigeasywine.com",
      phone: "+27 21 881 3052",
      menuType: "GF Menu Available",
      celiacInfo: "Clear menu marking, staff awareness",
      description: "Premium steakhouse on the Ernie Els wine estate. Their naturally gluten-free meat dishes and sides make dining safe and delicious.",
      specialties: ["Aged steaks", "Estate wines", "Grilled seafood"],
      proTip: "The ribeye with truffle butter is naturally gluten-free and pairs perfectly with their flagship Signature wine."
    },
    {
      name: "Schoon de Companje",
      rating: 4.4,
      reviews: 423,
      cuisine: "Bakery & Café",
      address: "50 Church Street, Stellenbosch",
      hours: "7:00 AM - 5:00 PM",
      website: "schoon.co.za",
      phone: "+27 21 883 8760",
      menuType: "GF Baked Goods",
      celiacInfo: "Dedicated GF products, separate display",
      description: "Artisan bakery offering a selection of gluten-free breads, pastries, and cakes. Perfect for breakfast or a coffee stop.",
      specialties: ["GF sourdough", "Pastries", "Artisan coffee"],
      proTip: "Arrive early for the best selection of gluten-free items - they sell out fast on weekends!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/gluten-free/south-africa/cape-town" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium whitespace-nowrap">Back to Cape Town</span>
            </Link>
            <Link to="/" className="text-xl font-bold text-purple-900 whitespace-nowrap">
              🍇 GF Stellenbosch
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Wine className="w-8 h-8" />
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-1">
                Cape Winelands
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gluten-Free Stellenbosch
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Historic wine town with world-class dining and celiac-friendly options
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">🍷 300+ Wine Estates</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🏛️ Historic Oak-Lined Streets</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🍽️ 5 GF Restaurants</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Wine Region Info Card */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🍇</span>
              <div>
                <h2 className="text-xl font-bold text-purple-900 mb-2">About Stellenbosch</h2>
                <p className="text-purple-800">
                  Just 50km from Cape Town, Stellenbosch is South Africa's second-oldest town and the heart of the Cape Winelands. 
                  The town combines historic Cape Dutch architecture with a vibrant food scene. Many wine estate restaurants 
                  have embraced gluten-free dining, making it a wonderful destination for celiacs who love fine wine and food.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <Card className="bg-amber-50 border-amber-200 mb-8">
          <CardContent className="p-6">
            <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Wine Region Tips for Celiacs
            </h3>
            <ul className="space-y-2 text-amber-800">
              <li>✓ Call ahead to wine estates - many can arrange gluten-free platters for tastings</li>
              <li>✓ Most wines are naturally gluten-free, but always confirm no wheat-based fining agents were used</li>
              <li>✓ Designate a driver or book a wine tour - Uber is limited outside central Stellenbosch</li>
              <li>✓ Weekend bookings are essential, especially for top restaurants</li>
            </ul>
          </CardContent>
        </Card>

        {/* Restaurants List */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🍽️ Gluten-Free Restaurants in Stellenbosch
        </h2>

        <div className="space-y-8">
          {stellenboschRestaurants.map((restaurant, index) => (
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
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
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
                      <MapPin className="w-4 h-4 text-purple-600" />
                      {restaurant.address}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-purple-600" />
                      {restaurant.hours}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe className="w-4 h-4 text-purple-600" />
                      {restaurant.website}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-purple-600" />
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
                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-purple-800">
                    <strong>💡 Pro Tip:</strong> {restaurant.proTip}
                  </p>
                </div>

                {/* Reviews Section */}
                <RestaurantReviews
                  restaurantName={restaurant.name}
                  restaurantCountry="South Africa"
                  restaurantCity="Stellenbosch"
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
  );
};

export default GlutenFreeStellenbosch;
