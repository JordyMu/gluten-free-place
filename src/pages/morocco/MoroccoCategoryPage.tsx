import { useParams, Navigate } from "react-router-dom";
import CanadaCityPage from "@/components/canada/CanadaCityPage";
import { getMoroccoCity } from "@/data/moroccoRestaurants";
import type { Restaurant } from "@/data/capeTownRestaurants";

type CategoryKey = "street-food" | "bakeries" | "grocery-stores" | "gluten-free-products";

const CATEGORIES: Record<
  CategoryKey,
  { label: string; emoji: string; filter: (r: Restaurant) => boolean; intro: (city: string) => string }
> = {
  "street-food": {
    label: "Street Food",
    emoji: "🍢",
    filter: (r) => r.venueType === "street-food",
    intro: (city) => `Gluten-free street food, market stalls and quick bites across ${city}.`,
  },
  bakeries: {
    label: "Bakeries",
    emoji: "🥐",
    filter: (r) => r.venueType === "bakery",
    intro: (city) => `Bakeries and pâtisseries in ${city} with gluten-free breads, cakes and pastries.`,
  },
  "grocery-stores": {
    label: "Grocery Stores",
    emoji: "🛒",
    filter: (r) => r.venueType === "supermarket",
    intro: (city) => `Supermarkets and health food shops in ${city} stocking gluten-free ranges.`,
  },
  "gluten-free-products": {
    label: "GF Products",
    emoji: "🛍️",
    filter: (r) => r.venueType === "gf-products" || r.menuType === "fully-gluten-free",
    intro: (city) => `Where to buy specialty gluten-free products in ${city} — flours, breads, pasta and snacks.`,
  },
};

const MoroccoCategoryPage = ({ category }: { category: CategoryKey }) => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = getMoroccoCity(citySlug);
  if (!city) return <Navigate to="/gluten-free/morocco" replace />;

  const meta = CATEGORIES[category];
  const restaurants = city.restaurants.filter(meta.filter);

  return (
    <CanadaCityPage
      cityName={city.name}
      citySlug={city.slug}
      countryName="Morocco"
      countrySlug="morocco"
      emoji={meta.emoji}
      heroImage={city.heroImage}
      heading={`Gluten-Free ${meta.label} in ${city.name}`}
      compactHero
      hideOverview
      intro={meta.intro(city.name)}
      restaurants={restaurants}
      faqItems={[
        {
          question: `How many gluten-free ${meta.label.toLowerCase()} are listed in ${city.name}?`,
          answer: `We currently list ${restaurants.length} verified ${meta.label.toLowerCase()} option${restaurants.length === 1 ? "" : "s"} in ${city.name}.`,
        },
      ]}
    />
  );
};

export default MoroccoCategoryPage;
