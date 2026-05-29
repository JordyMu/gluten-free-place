import { Link, Navigate } from "react-router-dom";
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
import { cities, type ItalyRestaurant } from "@/pages/Italy";
import { SEOHead } from "@/components/SEOHead";
import { AddRestaurantDialog } from "@/components/restaurants/AddRestaurantDialog";

type CategoryKey = "street-food" | "bakeries" | "grocery-stores" | "gluten-free-products";

interface CategoryMeta {
  title: (city: string) => string;
  emoji: string;
  description: (city: string) => string;
  badgeLabel: (n: number) => string;
  filter: (r: ItalyRestaurant) => boolean;
  comingSoonText: (city: string) => string;
  venueLabel: string;
  defaultVenueType: "restaurant" | "cafe" | "bakery" | "street-food" | "supermarket" | "gf-products";
}

const has = (arr: string[] | undefined, re: RegExp) => (arr || []).some((c) => re.test(c));

const CATEGORIES: Record<CategoryKey, CategoryMeta> = {
  "street-food": {
    title: (c) => `Gluten-Free Street Food in ${c}`,
    emoji: "🍢",
    description: (c) =>
      `Discover gluten-free street food, food trucks and quick bites across ${c}. Safe celiac-friendly options on the go.`,
    badgeLabel: (n) => `${n} Street Food Spots`,
    filter: (r) =>
      has(r.cuisineTypes, /street food|piadina|fast food/i) ||
      /street food|piadina|supplì|suppli|pizza al taglio|trapizzino|arepa|food truck/i.test(
        `${r.specialty || ""} ${r.overview || ""}`
      ),
    comingSoonText: (c) =>
      `We're actively researching gluten-free street food and food-truck options in ${c}. Check back soon or suggest a venue!`,
    venueLabel: "Street Food Spot",
    defaultVenueType: "street-food",
  },
  bakeries: {
    title: (c) => `Gluten-Free Bakeries in ${c}`,
    emoji: "🥐",
    description: (c) =>
      `${c} is home to dedicated gluten-free bakeries — fresh bread, pastries, cakes and pizza al taglio safe for celiacs.`,
    badgeLabel: (n) => `${n} Bakeries`,
    filter: (r) =>
      has(r.cuisineTypes, /bakery|pastry|patisserie/i) ||
      /bakery|pastry|patisserie|pasticceria|panificio/i.test(`${r.specialty || ""} ${r.overview || ""}`),
    comingSoonText: (c) => `We're curating the best dedicated gluten-free bakeries in ${c}. Check back soon!`,
    venueLabel: "Bakery",
    defaultVenueType: "bakery",
  },
  "grocery-stores": {
    title: (c) => `Gluten-Free Grocery Stores in ${c}`,
    emoji: "🛒",
    description: (c) =>
      `Supermarkets, health-food shops and specialty stores in ${c} stocking gluten-free ranges.`,
    badgeLabel: (n) => `${n} Stores`,
    filter: (r) =>
      has(r.cuisineTypes, /supermarket|grocery|store/i) ||
      /supermarket|grocery|store|negozio/i.test(`${r.specialty || ""} ${r.overview || ""}`),
    comingSoonText: (c) => `We're mapping the best gluten-free grocery stores and supermarkets in ${c}. Check back soon!`,
    venueLabel: "Grocery Store",
    defaultVenueType: "supermarket",
  },
  "gluten-free-products": {
    title: (c) => `Gluten-Free Products in ${c}`,
    emoji: "🛍️",
    description: (c) =>
      `Specialty gluten-free products available in ${c} — flours, pastas, snacks and pantry essentials.`,
    badgeLabel: (n) => `${n} Product Spots`,
    filter: (r) =>
      has(r.cuisineTypes, /products|gf products/i) ||
      /gf products|gluten-free products|specialty products/i.test(`${r.specialty || ""} ${r.overview || ""}`),
    comingSoonText: (c) => `We're putting together our recommended gluten-free product list for ${c}. Check back soon!`,
    venueLabel: "GF Product Spot",
    defaultVenueType: "gf-products",
  },
};

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getCeliacSafeBadge = (level?: string) => {
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
      Careful Handling
    </Badge>
  );
};

const getMenuTypeBadge = (type?: string) => {
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

interface Props {
  citySlug: string;
  category: CategoryKey;
}

const ItalyCategoryPage = ({ citySlug, category }: Props) => {
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return <Navigate to="/italy" replace />;

  const meta = CATEGORIES[category];
  const venues = city.restaurants.filter(meta.filter);

  return (
    <>
      <SEOHead
        title={`${meta.title(city.name)} | GlutenFreePlace`}
        description={meta.description(city.name)}
        canonical={`/gluten-free/italy/${city.slug}/${category}`}
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to={`/gluten-free/italy/${city.slug}`}>
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to {city.name}
              </Button>
            </Link>
          </div>
        </header>

        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-5xl mb-4">{meta.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{meta.title(city.name)}</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">{meta.description(city.name)}</p>
            <div className="mt-6">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                {meta.badgeLabel(venues.length)}
              </Badge>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto mb-8 bg-white border border-orange-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Know a great spot?</h2>
              <p className="text-sm text-gray-600">
                Help the community — share your favorite {meta.emoji} place in {city.name}.
              </p>
            </div>
            <AddRestaurantDialog
              city={city.name}
              venueLabel={meta.venueLabel}
              defaultVenueType={meta.defaultVenueType}
              triggerClassName="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 hover:from-orange-600 hover:to-red-600"
            />
          </div>

          {venues.length > 0 ? (
            <div className="max-w-3xl mx-auto grid gap-6">
              {venues.map((restaurant, index) => (
                <Card key={`${slugify(restaurant.name)}-${index}`} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {restaurant.icon && <span className="text-2xl">{restaurant.icon}</span>}
                        <Link
                          to={`/gluten-free/italy/${city.slug}/${slugify(restaurant.name)}`}
                          className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors"
                        >
                          {restaurant.name}
                        </Link>
                      </div>
                      {restaurant.specialty && <p className="text-sm text-gray-500">{restaurant.specialty}</p>}
                    </div>

                    {restaurant.rating !== undefined && (
                      <div className="flex items-center gap-2 mb-3">
                        {renderStarRating(restaurant.rating)}
                        {restaurant.reviewCount !== undefined && (
                          <span className="text-sm text-gray-500">({restaurant.reviewCount} reviews)</span>
                        )}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-3">
                      {(restaurant.cuisineTypes || []).map((cuisine) => (
                        <Badge key={cuisine} variant="outline">
                          {cuisine}
                        </Badge>
                      ))}
                      {getCeliacSafeBadge(restaurant.celiacSafe)}
                      {getMenuTypeBadge(restaurant.menuType)}
                    </div>

                    {restaurant.overview && <p className="text-gray-700 mb-4">{restaurant.overview}</p>}

                    {restaurant.menuHighlights && restaurant.menuHighlights.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Menu Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {restaurant.menuHighlights.map((item) => (
                            <Badge key={item} variant="secondary" className="text-sm">
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
                          <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="hover:text-orange-600">
                            {restaurant.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {restaurant.directionsUrl && (
                        <Button
                          type="button"
                          className="bg-orange-600 hover:bg-orange-700"
                          onClick={() => openExternalLink(restaurant.directionsUrl!)}
                        >
                          <Navigation className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                      )}
                      {restaurant.website && (
                        <Button type="button" variant="outline" onClick={() => openExternalLink(restaurant.website!)}>
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
                <p className="text-gray-600 max-w-md mx-auto">{meta.comingSoonText(city.name)}</p>
                <Link to={`/gluten-free/italy/${city.slug}`}>
                  <Button className="mt-6">Browse All {city.name} Venues</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </>
  );
};

export default ItalyCategoryPage;
