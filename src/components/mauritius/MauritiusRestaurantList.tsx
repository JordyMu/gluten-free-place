import { MapPin, Star, Clock, Globe, Phone, ShieldCheck, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mauritiusTopRestaurants } from "@/data/mauritiusTopRestaurants";

const menuTypeColors: Record<string, string> = {
  "Fully GF": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Mixed Menu": "bg-violet-100 text-violet-800 border-violet-200",
  "GF Options": "bg-blue-100 text-blue-800 border-blue-200",
};

export const MauritiusRestaurantList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">
            <MapPin className="h-4 w-4 mr-2" />
            Top Restaurants
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Top 25 Gluten-Free Restaurants in Mauritius
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our highest-rated gluten-free dining spots across the island, verified for celiac safety
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {mauritiusTopRestaurants.map((restaurant, index) => (
            <Card
              key={restaurant.name}
              className="hover:shadow-xl transition-all duration-200 border border-gray-100 overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Name & subtitle */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-2xl">{restaurant.emoji}</span>
                    {restaurant.name}
                    {index < 3 && (
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs ml-1">
                        Top {index + 1}
                      </Badge>
                    )}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5 ml-9">{restaurant.subtitle}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3 ml-9">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(restaurant.rating)
                            ? "text-amber-400 fill-amber-400"
                            : i < restaurant.rating
                            ? "text-amber-400 fill-amber-200"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-sm text-gray-900">{restaurant.rating}</span>
                  <span className="text-sm text-gray-400">({restaurant.reviewCount} reviews)</span>
                </div>

                {/* Cuisine badges */}
                <div className="flex flex-wrap gap-1.5 mb-3 ml-9">
                  {restaurant.cuisineTypes.map((cuisine) => (
                    <Badge
                      key={cuisine}
                      variant="outline"
                      className="text-xs font-medium text-gray-600 border-gray-200 bg-gray-50"
                    >
                      🍴 {cuisine}
                    </Badge>
                  ))}
                </div>

                {/* Celiac & menu type badges */}
                <div className="flex flex-wrap gap-2 mb-3 ml-9">
                  <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">
                    <ShieldCheck className="h-3.5 w-3.5 mr-1" />
                    Celiac Protocols
                  </Badge>
                  <Badge className={`text-xs ${menuTypeColors[restaurant.menuType]}`}>
                    🍽️ {restaurant.menuType}
                  </Badge>
                </div>

                {/* Certification bar */}
                {restaurant.certification && (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2 mb-3 ml-9 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span className="text-sm text-emerald-800">{restaurant.certification}</span>
                  </div>
                )}

                {/* Celiac info bar */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-2 mb-4 ml-9 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                  <span className="text-sm text-blue-800">{restaurant.celiacInfo}</span>
                </div>

                {/* Details */}
                <div className="space-y-2 ml-9 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                    <span>{restaurant.address}, Mauritius</span>
                  </div>
                  {restaurant.hours && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400 shrink-0" />
                      <span>{restaurant.hours}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-4 flex-wrap">
                    {restaurant.website && (
                      <a
                        href={restaurant.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Globe className="h-4 w-4" />
                        <span>{restaurant.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
                      </a>
                    )}
                    {restaurant.phone && (
                      <a
                        href={`tel:${restaurant.phone}`}
                        className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-800 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{restaurant.phone}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Get directions */}
                <div className="mt-4 ml-9">
                  <a
                    href={restaurant.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Get Directions
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
