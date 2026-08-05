import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, Clock, Globe, Phone, Award, Wine, Navigation, Heart, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { getStellenboschRestaurantBySlug } from "@/data/stellenboschRestaurants";

const StellenboschRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/gluten-free/south-africa/cape-town/stellenbosch" replace />;
  }

  const restaurant = getStellenboschRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/south-africa/cape-town/stellenbosch" replace />;
  }

  const renderStarRating = (rating: number) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
      <span className="ml-1 font-semibold text-lg">{rating}</span>
      <span className="text-gray-500 text-sm ml-1">({restaurant.reviews} reviews)</span>
    </div>
  );

  return (
    <>
      <SEOHead
        title={`${restaurant.name} - Gluten-Free in Stellenbosch | GlutenFreePlace`}
        description={restaurant.description.substring(0, 155)}
        canonical={`/gluten-free/south-africa/cape-town/stellenbosch/${restaurant.slug}`}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <Link
              to="/gluten-free/south-africa/cape-town/stellenbosch"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stellenbosch
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="relative text-white py-16"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.45)), url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=70)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-6xl mb-4 block">🍇</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{restaurant.name}</h1>
            <p className="text-xl text-blue-100 mb-6">{restaurant.cuisine} · {restaurant.menuType}</p>
            <div className="flex justify-center">{renderStarRating(restaurant.rating)}</div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  {restaurant.featured && (
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <Badge variant="outline">{restaurant.cuisine}</Badge>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-300">{restaurant.menuType}</Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{restaurant.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href={`tel:${restaurant.phone}`} className="hover:text-blue-600">
                    {restaurant.phone}
                  </a>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{restaurant.description}</p>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Wine className="w-5 h-5 text-blue-600" />
                  Menu Highlights
                </h2>
                <div className="flex flex-wrap gap-2">
                  {restaurant.specialties.map((item, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-green-600" />
                  Celiac Safety
                </h2>
                <p className="text-sm text-gray-600">{restaurant.celiacInfo}</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-amber-800">
                  <span className="font-semibold">💡 Pro Tip:</span> {restaurant.proTip}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="bg-red-700 hover:bg-red-800 text-white" asChild>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      restaurant.name + " " + restaurant.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    Get Directions
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4 mr-1" />
                    Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
};

export default StellenboschRestaurantPage;
