import { MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mauritiusRestaurants, regionColors } from "@/data/mauritiusRestaurants";

const regions = ["North", "West", "East", "Central", "South"];

export const MauritiusRestaurantList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">
            <MapPin className="h-4 w-4 mr-2" />
            Restaurant Directory
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Gluten-Free Restaurants in Mauritius
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {mauritiusRestaurants.length} verified restaurants offering gluten-free options across the island
          </p>
        </div>

        {regions.map((region) => {
          const restaurants = mauritiusRestaurants.filter((r) => r.region === region);
          if (restaurants.length === 0) return null;
          const colors = regionColors[region];

          return (
            <div key={region} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Badge className={`${colors.bg} ${colors.text} ${colors.border} text-sm px-4 py-1`}>
                  {region} Mauritius
                </Badge>
                <span className="text-sm text-gray-500">{restaurants.length} places</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.name}
                    className="hover:shadow-lg transition-all duration-200 border border-gray-100"
                  >
                    <CardContent className="p-5">
                      <h3 className="font-bold text-gray-900 mb-2 leading-tight">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-start gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-gray-600">{restaurant.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs mb-3">
                        {restaurant.city}
                      </Badge>
                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          asChild
                        >
                          <a
                            href={restaurant.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            Get Directions
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
