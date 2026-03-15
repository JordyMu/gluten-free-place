import { MapPin, Star, Clock, Globe, Phone, ShieldCheck, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { torontoRestaurants } from "@/data/torontoRestaurants";
import { montrealRestaurants } from "@/data/montrealRestaurants";
import { vancouverRestaurants } from "@/data/vancouverRestaurants";
import { calgaryRestaurants } from "@/data/calgaryRestaurants";
import { otherCanadaRestaurants } from "@/data/otherCanadaRestaurants";
import type { Restaurant } from "@/data/capeTownRestaurants";

const menuTypeLabel = (type: string) => {
  if (type === "fully-gluten-free") return "Fully GF";
  return "Mixed Menu";
};

const menuTypeColors: Record<string, string> = {
  "Fully GF": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Mixed Menu": "bg-violet-100 text-violet-800 border-violet-200",
};

const celiacLabel = (type: string) => {
  if (type === "dedicated-facility") return "Dedicated GF Facility";
  return "Celiac Protocols in Place";
};

const citySlugMap: Record<string, string> = {
  Toronto: "toronto",
  Montreal: "montreal",
  Vancouver: "vancouver",
  Calgary: "calgary",
};

const allRestaurants: Restaurant[] = [
  ...torontoRestaurants,
  ...montrealRestaurants,
  ...vancouverRestaurants,
  ...calgaryRestaurants,
  ...otherCanadaRestaurants,
]
  .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
  .slice(0, 25);

export const CanadaRestaurantList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
            <MapPin className="h-4 w-4 mr-2" />
            Top Restaurants
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Top 25 Gluten-Free Restaurants in Canada
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our highest-rated gluten-free dining spots across Canada, verified for celiac safety
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {allRestaurants.map((restaurant, index) => {
            const label = menuTypeLabel(restaurant.menuType);
            const citySlug = citySlugMap[restaurant.city] || "";
            return (
              <Card
                key={`${restaurant.slug}-${index}`}
                className="hover:shadow-xl transition-all duration-200 border border-gray-100 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">{restaurant.icon}</span>
                      {citySlug ? (
                        <Link
                          to={`/gluten-free/canada/${citySlug}/${restaurant.slug}`}
                          className="hover:text-red-700 transition-colors"
                        >
                          {restaurant.name}
                        </Link>
                      ) : (
                        <span>{restaurant.name}</span>
                      )}
                      {index < 3 && (
                        <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-xs ml-1">
                          Top {index + 1}
                        </Badge>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5 ml-9">{restaurant.specialty}</p>
                  </div>

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

                  <div className="flex flex-wrap gap-2 mb-3 ml-9">
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">
                      <ShieldCheck className="h-3.5 w-3.5 mr-1" />
                      Celiac Protocols
                    </Badge>
                    <Badge className={`text-xs ${menuTypeColors[label]}`}>
                      🍽️ {label}
                    </Badge>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-4 py-2 mb-4 ml-9 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span className="text-sm text-emerald-800">{celiacLabel(restaurant.celiacSafe)}</span>
                  </div>

                  <div className="space-y-2 ml-9 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                      <span>{restaurant.address}</span>
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
                          href={restaurant.website.startsWith("http") ? restaurant.website : `https://${restaurant.website}`}
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

                  <div className="mt-4 ml-9">
                    <a
                      href={restaurant.directionsUrl}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
