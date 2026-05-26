import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Globe,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { capeTownRestaurants } from "@/data/capeTownRestaurants";
import type { Restaurant } from "@/data/capeTownRestaurants";
import { SEOHead } from "@/components/SEOHead";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";

const getCeliacSafeBadge = (level: Restaurant["celiacSafe"]) => {
  if (level === "dedicated-facility") {
    return (
      <Badge className="bg-green-100 text-green-800 border-green-300">
        <Shield className="w-3 h-3 mr-1" />
        Dedicated GF Facility
      </Badge>
    );
  }
  return (
    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
      <CheckCircle className="w-3 h-3 mr-1" />
      Celiac Protocols
    </Badge>
  );
};

const getMenuTypeBadge = (type: Restaurant["menuType"]) => {
  if (type === "fully-gluten-free") {
    return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>;
  }
  return <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>;
};

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const openExternalLink = (url: string) => {
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalizedUrl, "_blank", "noopener,noreferrer");
};

const description =
  "Cape Town's best gluten-free bakeries — fresh bread, croissants, pastries and cakes safe for celiacs, from dedicated GF bakeries to celiac-friendly patisseries.";

const CapeTownBakeries = () => {
  const venues = capeTownRestaurants.filter(
    (r) =>
      r.venueType === "bakery" ||
      r.cuisineTypes?.some((c) => /bakery|patisserie|boulangerie/i.test(c)) ||
      /bakery|boulangerie|patisserie|pastry/i.test(r.specialty || "")
  );

  return (
    <>
      <SEOHead
        title="Gluten-Free Bakeries in Cape Town | GlutenFreePlace"
        description={description}
        canonical="/gluten-free/south-africa/cape-town/bakeries"
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/gluten-free/south-africa/cape-town">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Cape Town
              </Button>
            </Link>
          </div>
        </header>

        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-5xl mb-4">🥐</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gluten-Free Bakeries in Cape Town</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">{description}</p>
            <div className="mt-6">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                {venues.length} Bakeries
              </Badge>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto mb-8 bg-white border border-orange-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Know a great spot?</h2>
              <p className="text-sm text-gray-600">Help the community — share your favorite 🥐 bakery in Cape Town.</p>
            </div>
            <AddRestaurantDialog
              city="cape-town"
              venueLabel="Bakery"
              defaultVenueType="bakery"
              triggerClassName="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 hover:from-orange-600 hover:to-red-600"
            />
          </div>

          {venues.length > 0 ? (
            <div className="max-w-3xl mx-auto grid gap-6">
              {venues.map((restaurant) => (
                <Card
                  key={restaurant.slug}
                  className={`overflow-hidden ${restaurant.featured ? "ring-2 ring-blue-300" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-2xl">{restaurant.icon}</span>
                        <Link
                          to={`/gluten-free/south-africa/cape-town/${restaurant.slug}`}
                          className="text-xl font-bold text-gray-900 hover:text-blue-700 transition-colors"
                        >
                          {restaurant.name}
                        </Link>
                        {restaurant.featured && (
                          <Badge className="bg-amber-100 text-amber-800 border-amber-300">Featured</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{restaurant.specialty}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      {renderStarRating(restaurant.rating)}
                      <span className="text-sm text-gray-500">({restaurant.reviewCount} reviews)</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {restaurant.cuisineTypes.map((cuisine) => (
                        <Badge key={cuisine} variant="outline">
                          {cuisine}
                        </Badge>
                      ))}
                      {getCeliacSafeBadge(restaurant.celiacSafe)}
                      {getMenuTypeBadge(restaurant.menuType)}
                    </div>

                    <p className="text-gray-700 mb-4">{restaurant.overview}</p>

                    {restaurant.menuHighlights?.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.menuHighlights.map((item) => (
                            <Badge key={`${restaurant.slug}-${item}`} variant="secondary" className="text-sm">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {restaurant.proTip && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-amber-700" />
                          <span className="font-medium text-amber-800">Pro Tip:</span>
                          <span className="text-amber-700">{restaurant.proTip}</span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{restaurant.address}</span>
                      </div>
                      {restaurant.hours && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{restaurant.hours}</span>
                        </div>
                      )}
                      {restaurant.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${restaurant.phone}`} className="hover:text-blue-700">
                            {restaurant.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        type="button"
                        className="bg-blue-700 hover:bg-blue-800"
                        onClick={() => openExternalLink(restaurant.directionsUrl)}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      {restaurant.website && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => openExternalLink(restaurant.website!)}
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Website
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12 max-w-2xl mx-auto">
              <CardContent>
                <div className="text-5xl mb-4">🥐</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  We're curating the best dedicated gluten-free bakeries in Cape Town. Check back soon!
                </p>
                <Link to="/gluten-free/south-africa/cape-town">
                  <Button className="mt-6">Browse All Cape Town Venues</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </>
  );
};

export default CapeTownBakeries;
