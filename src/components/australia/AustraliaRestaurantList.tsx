import { MapPin, Star, Clock, Globe, Phone, ShieldCheck, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sydneyRestaurants } from "@/pages/australia/GlutenFreeSydney";
import { melbourneRestaurants } from "@/pages/australia/GlutenFreeMelbourne";
import { brisbaneRestaurants } from "@/pages/australia/GlutenFreeBrisbane";
import { perthRestaurants } from "@/pages/australia/GlutenFreePerth";

const menuTypeLabel = (type?: string) =>
  type === "fully-gluten-free" ? "Fully GF" : "Mixed Menu";

const menuTypeColors: Record<string, string> = {
  "Fully GF": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Mixed Menu": "bg-violet-100 text-violet-800 border-violet-200",
};

const celiacLabel = (type?: string) =>
  type === "dedicated-facility" ? "Dedicated GF Facility" : "Celiac Protocols in Place";

type Row = {
  slug: string;
  name: string;
  icon?: string;
  specialty?: string;
  rating?: number;
  reviewCount?: number;
  cuisineTypes?: string[];
  celiacSafe?: string;
  menuType?: string;
  address?: string;
  hours?: string;
  phone?: string;
  website?: string;
  directionsUrl?: string;
  city: string;
  citySlug: string;
};

const withCity = (arr: any[], city: string, citySlug: string): Row[] =>
  arr.map((r) => ({ ...r, city, citySlug }));

const allRestaurants: Row[] = [
  ...withCity(sydneyRestaurants, "Sydney", "sydney"),
  ...withCity(melbourneRestaurants, "Melbourne", "melbourne"),
  ...withCity(brisbaneRestaurants, "Brisbane", "brisbane"),
  ...withCity(perthRestaurants, "Perth", "perth"),
]
  .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0) || (b.reviewCount ?? 0) - (a.reviewCount ?? 0))
  .slice(0, 25);

export const AustraliaRestaurantList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            <MapPin className="h-4 w-4 mr-2" />
            Top Restaurants
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Top Gluten-Free Restaurants in Australia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our highest-rated gluten-free dining spots across Australia, verified for celiac safety
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {allRestaurants.map((r, index) => {
            const label = menuTypeLabel(r.menuType);
            return (
              <Card
                key={`${r.slug}-${index}`}
                className="hover:shadow-xl transition-all duration-200 border border-gray-100 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      {r.icon && <span className="text-2xl">{r.icon}</span>}
                      <Link
                        to={`/gluten-free/australia/${r.citySlug}`}
                        className="hover:text-blue-700 transition-colors"
                      >
                        {r.name}
                      </Link>
                      {index < 3 && (
                        <Badge className="ml-2 bg-amber-100 text-amber-800 border-amber-200">
                          Top {index + 1}
                        </Badge>
                      )}
                    </h3>
                    {r.specialty && (
                      <p className="text-sm text-gray-600 mt-1">{r.specialty}</p>
                    )}
                    {typeof r.rating === "number" && (
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(r.rating!) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{r.rating}</span>
                        {r.reviewCount && (
                          <span className="text-sm text-gray-500">({r.reviewCount} reviews)</span>
                        )}
                      </div>
                    )}
                  </div>

                  {r.cuisineTypes && r.cuisineTypes.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {r.cuisineTypes.map((c) => (
                        <Badge key={c} variant="outline" className="text-xs">
                          {c}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className={menuTypeColors[label]}>{label}</Badge>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <ShieldCheck className="h-3 w-3 mr-1" />
                      {celiacLabel(r.celiacSafe)}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      <MapPin className="h-3 w-3 mr-1" />
                      {r.city}
                    </Badge>
                  </div>

                  <div className="space-y-1.5 text-sm text-gray-700">
                    {r.address && (
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 text-gray-500 flex-shrink-0" />
                        <span>{r.address}</span>
                      </div>
                    )}
                    {r.hours && (
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 text-gray-500 flex-shrink-0" />
                        <span>{r.hours}</span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {r.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-gray-500" />
                          <a
                            href={r.website.startsWith("http") ? r.website : `https://${r.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {r.website}
                          </a>
                        </div>
                      )}
                      {r.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>{r.phone}</span>
                        </div>
                      )}
                    </div>
                    {r.directionsUrl && (
                      <a
                        href={r.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:underline pt-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Get Directions
                      </a>
                    )}
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
