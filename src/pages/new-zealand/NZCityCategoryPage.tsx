import { Link } from "react-router-dom";
import {
  ArrowLeft, CheckCircle, Clock, Globe, MapPin, MessageCircle,
  Navigation, Phone, Shield, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";
import { newZealandCities, nzSlug, type NZRestaurant } from "@/data/newZealandCities";

export type NZCategoryKey = "street-food" | "bakeries" | "grocery-stores" | "gluten-free-products";

interface CategoryMeta {
  titleSuffix: string;
  emoji: string;
  description: (city: string) => string;
  badgeLabel: (n: number, label: string) => string;
  filter: (r: NZRestaurant) => boolean;
  comingSoonText: (city: string) => string;
  venueLabel: string;
  defaultVenueType: "restaurant" | "cafe" | "bakery" | "street-food" | "supermarket" | "gf-products";
}

const matchesAny = (r: NZRestaurant, regex: RegExp) =>
  r.cuisineTypes.some((c) => regex.test(c)) || regex.test(r.specialty || "");

const CATEGORIES: Record<NZCategoryKey, CategoryMeta> = {
  "street-food": {
    titleSuffix: "Street Food",
    emoji: "🍢",
    description: (city) =>
      `Discover gluten-free street food, food trucks and quick bites across ${city}. Safe celiac-friendly options on the go.`,
    badgeLabel: (n) => `${n} Street Food Spots`,
    filter: (r) => matchesAny(r, /fish & chips|takeaway|street food|pizza|ice cream|arepas|venezuelan|burger/i),
    comingSoonText: (city) => `We're actively researching gluten-free street food in ${city}. Check back soon!`,
    venueLabel: "Street Food Spot",
    defaultVenueType: "street-food",
  },
  bakeries: {
    titleSuffix: "Bakeries",
    emoji: "🥐",
    description: (city) =>
      `${city}'s best dedicated and celiac-friendly bakeries — fresh bread, pastries and cakes safe for gluten-free diets.`,
    badgeLabel: (n) => `${n} Bakeries`,
    filter: (r) => matchesAny(r, /bakery|boulangerie|patisserie|pastry/i),
    comingSoonText: (city) => `We're curating the best dedicated gluten-free bakeries in ${city}. Check back soon!`,
    venueLabel: "Bakery",
    defaultVenueType: "bakery",
  },
  "grocery-stores": {
    titleSuffix: "Grocery Stores",
    emoji: "🛒",
    description: (city) =>
      `Supermarkets, health food shops and specialty stores in ${city} stocking gluten-free ranges and pantry staples.`,
    badgeLabel: (n) => `${n} Stores`,
    filter: (r) => matchesAny(r, /supermarket|grocery|health food|wholefoods/i),
    comingSoonText: (city) => `We're mapping the best gluten-free grocery stores in ${city}. Check back soon!`,
    venueLabel: "Grocery Store",
    defaultVenueType: "supermarket",
  },
  "gluten-free-products": {
    titleSuffix: "Products",
    emoji: "🛍️",
    description: (city) =>
      `Specialty gluten-free products available in ${city} — flours, pastas, snacks and pantry essentials.`,
    badgeLabel: (n) => `${n} Product Spots`,
    filter: (r) => matchesAny(r, /gluten-free/i) && r.menuType === "fully-gluten-free",
    comingSoonText: (city) => `We're putting together our recommended gluten-free product list for ${city}. Check back soon!`,
    venueLabel: "GF Product Spot",
    defaultVenueType: "gf-products",
  },
};

const getCeliacSafeBadge = (level: NZRestaurant["celiacSafe"]) =>
  level === "dedicated-facility" ? (
    <Badge className="bg-green-100 text-green-800 border-green-300">
      <Shield className="w-3 h-3 mr-1" />
      Dedicated GF Facility
    </Badge>
  ) : (
    <Badge className="bg-blue-100 text-blue-800 border-blue-300">
      <CheckCircle className="w-3 h-3 mr-1" />
      Celiac Protocols
    </Badge>
  );

const getMenuTypeBadge = (type: NZRestaurant["menuType"]) =>
  type === "fully-gluten-free" ? (
    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">100% Gluten-Free</Badge>
  ) : (
    <Badge className="bg-amber-100 text-amber-800 border-amber-300">GF Options Available</Badge>
  );

const renderStarRating = (rating: number) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))}
    <span className="ml-1 font-semibold">{rating}</span>
  </div>
);

const openExternalLink = (url: string) => {
  if (!url) return;
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  window.open(normalizedUrl, "_blank", "noopener,noreferrer");
};

interface Props {
  citySlug: string;
  category: NZCategoryKey;
}

const NZCityCategoryPage = ({ citySlug, category }: Props) => {
  const meta = CATEGORIES[category];
  const city = newZealandCities.find((c) => c.slug === citySlug);
  const cityName = city?.name ?? citySlug;
  const venues = (city?.restaurants ?? []).filter(meta.filter);
  const title = `Gluten-Free ${meta.titleSuffix} in ${cityName}`;

  return (
    <>
      <SEOHead
        title={`${title} | GlutenFreePlace`}
        description={meta.description(cityName)}
        canonical={`/gluten-free/new-zealand/${citySlug}/${category}`}
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to={`/gluten-free/new-zealand/${citySlug}`}>
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to {cityName}
              </Button>
            </Link>
          </div>
        </header>

        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-5xl mb-4">{meta.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">{meta.description(cityName)}</p>
            <div className="mt-6">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                {meta.badgeLabel(venues.length, meta.titleSuffix)}
              </Badge>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto mb-8 bg-white border border-orange-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Know a great spot?</h2>
              <p className="text-sm text-gray-600">
                Help the community — share your favorite {meta.emoji} place in {cityName}.
              </p>
            </div>
            <AddRestaurantDialog
              city={cityName}
              venueLabel={meta.venueLabel}
              defaultVenueType={meta.defaultVenueType}
              triggerClassName="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 hover:from-orange-600 hover:to-red-600"
            />
          </div>

          {venues.length > 0 ? (
            <div className="max-w-3xl mx-auto grid gap-6">
              {venues.map((restaurant) => (
                <Card
                  key={restaurant.name}
                  className={`overflow-hidden ${restaurant.featured ? "ring-2 ring-blue-300" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-2xl">{restaurant.icon}</span>
                        <Link
                          to={`/gluten-free/new-zealand/${citySlug}/${nzSlug(restaurant.name)}`}
                          className="text-xl font-bold text-gray-900 hover:text-blue-700 hover:underline transition-colors"
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
                        <Badge key={cuisine} variant="outline">{cuisine}</Badge>
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
                            <Badge key={item} variant="secondary" className="text-sm">{item}</Badge>
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
                          onClick={() => openExternalLink(restaurant.website)}
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
                <div className="text-5xl mb-4">{meta.emoji}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h2>
                <p className="text-gray-600 max-w-md mx-auto">{meta.comingSoonText(cityName)}</p>
                <Link to={`/gluten-free/new-zealand/${citySlug}`}>
                  <Button className="mt-6">Browse All {cityName} Venues</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </>
  );
};

export default NZCityCategoryPage;
