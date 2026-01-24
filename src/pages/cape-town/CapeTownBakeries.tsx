import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { capeTownRestaurants } from "@/data/capeTownRestaurants";

const CapeTownBakeries = () => {
  const bakeryVenues = capeTownRestaurants.filter(
    (r) => r.venueType === "bakery"
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/gluten-free/south-africa/cape-town">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Cape Town
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🥐</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Gluten-Free Bakeries in Cape Town
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Fresh bread, pastries, and baked goods made without gluten. Find dedicated and celiac-safe bakeries across Cape Town.
          </p>
          <div className="mt-6">
            <Badge className="bg-white/20 text-white text-lg px-4 py-2">
              {bakeryVenues.length} Bakeries
            </Badge>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        {bakeryVenues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bakeryVenues.map((venue) => (
              <Link
                key={venue.slug}
                to={`/gluten-free/south-africa/cape-town/${venue.slug}`}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{venue.name}</CardTitle>
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                        🥐 Bakery
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{venue.address.split(',')[1]?.trim() || venue.city}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{venue.rating}</span>
                      </div>
                      {venue.celiacSafetyScore && (
                        <div className="flex items-center gap-2">
                          <UtensilsCrossed className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-700">
                            Safety Score: {venue.celiacSafetyScore}/10
                          </span>
                        </div>
                      )}
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {venue.overview}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-5xl mb-4">🥐</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Coming Soon!
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                We're actively researching gluten-free bakeries in Cape Town. Check back soon or help us by suggesting a venue!
              </p>
              <Link to="/gluten-free/south-africa/cape-town">
                <Button className="mt-6">
                  Browse All Cape Town Venues
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default CapeTownBakeries;
