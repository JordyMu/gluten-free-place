import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { parisRestaurants } from "@/data/parisRestaurants";
import { SEOHead } from "@/components/SEOHead";
import type { Restaurant } from "@/data/capeTownRestaurants";

type CategoryKey = "street-food" | "bakeries" | "grocery-stores" | "gluten-free-products";

interface CategoryMeta {
  title: string;
  emoji: string;
  description: string;
  badgeLabel: (n: number) => string;
  filter: (r: Restaurant) => boolean;
  comingSoonText: string;
}

const CATEGORIES: Record<CategoryKey, CategoryMeta> = {
  "street-food": {
    title: "Gluten-Free Street Food in Paris",
    emoji: "🍢",
    description:
      "Discover gluten-free street food, food trucks and quick bites across Paris. Safe celiac-friendly options on the go.",
    badgeLabel: (n) => `${n} Street Food Spots`,
    filter: (r) => r.venueType === "street-food",
    comingSoonText:
      "We're actively researching gluten-free street food and food-truck options in Paris. Check back soon or suggest a venue!",
  },
  bakeries: {
    title: "Gluten-Free Bakeries in Paris",
    emoji: "🥐",
    description:
      "Paris is home to some of Europe's best 100% gluten-free bakeries — fresh croissants, baguettes, pastries and cakes safe for celiacs.",
    badgeLabel: (n) => `${n} Bakeries`,
    filter: (r) =>
      r.cuisineTypes?.some((c) => /bakery|patisserie|boulangerie/i.test(c)) ||
      /bakery|boulangerie|patisserie|pastry/i.test(r.specialty || ""),
    comingSoonText:
      "We're curating the best dedicated gluten-free bakeries in Paris. Check back soon!",
  },
  "grocery-stores": {
    title: "Gluten-Free Grocery Stores in Paris",
    emoji: "🛒",
    description:
      "Supermarkets, health food shops and specialty stores in Paris stocking gluten-free ranges — Monoprix, Naturalia, Bio c' Bon and more.",
    badgeLabel: (n) => `${n} Stores`,
    filter: (r) => r.venueType === "grocery" || r.venueType === "supermarket",
    comingSoonText:
      "We're mapping the best gluten-free grocery stores and supermarkets in Paris. Check back soon!",
  },
  "gluten-free-products": {
    title: "Gluten-Free Products in Paris",
    emoji: "🛍️",
    description:
      "Specialty gluten-free products available in Paris — flours, pastas, snacks and pantry essentials from local and imported brands.",
    badgeLabel: (n) => `${n} Product Spots`,
    filter: (r) => r.venueType === "gf-products" || r.venueType === "specialty",
    comingSoonText:
      "We're putting together our recommended gluten-free product list for Paris. Check back soon!",
  },
};

interface Props {
  category: CategoryKey;
}

const ParisCategoryPage = ({ category }: Props) => {
  const meta = CATEGORIES[category];
  const venues = parisRestaurants.filter(meta.filter);

  return (
    <>
      <SEOHead
        title={`${meta.title} | GlutenFreePlace`}
        description={meta.description}
        canonical={`/gluten-free/france/paris/${category}`}
      />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/gluten-free/france/paris">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Paris
              </Button>
            </Link>
          </div>
        </header>

        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-5xl mb-4">{meta.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{meta.title}</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">{meta.description}</p>
            <div className="mt-6">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                {meta.badgeLabel(venues.length)}
              </Badge>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          {venues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue) => (
                <Link key={venue.slug} to={`/gluten-free/france/paris/${venue.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg">{venue.name}</CardTitle>
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800 shrink-0">
                          {meta.emoji}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">
                            {venue.address.split(",")[1]?.trim() || venue.city}
                          </span>
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
                        <p className="text-sm text-gray-600 line-clamp-2">{venue.overview}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <div className="text-5xl mb-4">{meta.emoji}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h2>
                <p className="text-gray-600 max-w-md mx-auto">{meta.comingSoonText}</p>
                <Link to="/gluten-free/france/paris">
                  <Button className="mt-6">Browse All Paris Venues</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </>
  );
};

export default ParisCategoryPage;
