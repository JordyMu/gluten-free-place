import { useMemo, useState } from "react";
import { ExternalLink, MapPin, Search, ShieldCheck, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { argentinaRestaurants } from "@/data/argentinaRestaurants";

const openExternalLink = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

export const ArgentinaRestaurantList = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All");
  const cities = useMemo(() => ["All", ...Array.from(new Set(argentinaRestaurants.map((restaurant) => restaurant.city))).sort()], []);
  const restaurants = useMemo(() => argentinaRestaurants.filter((restaurant) => {
    const term = query.trim().toLowerCase();
    const matchesQuery = !term || restaurant.name.toLowerCase().includes(term) || restaurant.specialty.toLowerCase().includes(term);
    return matchesQuery && (city === "All" || restaurant.city === city);
  }), [city, query]);

  return (
    <section id="restaurants" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <Badge className="mb-4 border-red-200 bg-red-100 text-red-800"><MapPin className="mr-2 h-4 w-4" />Restaurant Directory</Badge>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Gluten-Free Restaurants Across Argentina</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">Search the supplied restaurants or narrow the directory by city.</p>
        </div>

        <div className="mx-auto mb-8 grid max-w-4xl gap-3 md:grid-cols-[1fr_240px]">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search restaurants" className="pl-9" />
          </div>
          <select value={city} onChange={(event) => setCity(event.target.value)} className="h-10 rounded-md border border-input bg-white px-3 text-sm">
            {cities.map((option) => <option key={option} value={option}>{option === "All" ? "All cities" : option}</option>)}
          </select>
        </div>

        <div className="mx-auto max-w-3xl space-y-5">
          {restaurants.map((restaurant) => (
            <Card key={`${restaurant.name}-${restaurant.address}`} className="overflow-hidden border border-border transition-all duration-200 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
                    <span className="text-2xl" aria-hidden="true">{restaurant.icon}</span>
                    <span>{restaurant.name}</span>
                  </h3>
                  <p className="ml-9 mt-0.5 text-sm text-muted-foreground">{restaurant.specialty}</p>
                </div>

                <div className="mb-3 ml-9 flex items-center gap-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={index < Math.floor(restaurant.rating)
                          ? "h-4 w-4 fill-amber-400 text-amber-400"
                          : index < restaurant.rating
                            ? "h-4 w-4 fill-amber-200 text-amber-400"
                            : "h-4 w-4 text-muted"}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{restaurant.rating}</span>
                  <span className="text-sm text-muted-foreground">({restaurant.reviewCount} reviews)</span>
                </div>

                <div className="mb-3 ml-9 flex flex-wrap gap-1.5">
                  {restaurant.cuisineTypes.map((cuisine) => (
                    <Badge key={cuisine} variant="outline" className="bg-muted text-xs font-medium text-muted-foreground">
                      🍴 {cuisine}
                    </Badge>
                  ))}
                </div>

                <div className="mb-3 ml-9 flex flex-wrap gap-2">
                  <Badge className="border-emerald-200 bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="mr-1 h-3.5 w-3.5" />
                    Celiac Protocols
                  </Badge>
                  <Badge className={restaurant.menuType === "fully-gluten-free" ? "border-emerald-200 bg-emerald-100 text-emerald-800" : "border-violet-200 bg-violet-100 text-violet-800"}>
                    🍽️ {restaurant.menuType === "fully-gluten-free" ? "Fully GF" : "Mixed Menu"}
                  </Badge>
                </div>

                <div className="mb-4 ml-9 flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="text-sm text-emerald-800">
                    {restaurant.celiacSafe === "dedicated-facility" ? "Dedicated GF Facility" : "Celiac Protocols in Place"}
                  </span>
                </div>

                <div className="ml-9 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{restaurant.address}</span>
                </div>

                <div className="ml-9 mt-4">
                  <Button type="button" variant="link" className="h-auto p-0 text-sm font-medium" onClick={() => openExternalLink(restaurant.directionsUrl)}>
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};