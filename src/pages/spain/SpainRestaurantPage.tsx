import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getSpainRestaurantBySlug, slugifyRestaurant, type SpainRestaurant } from "@/pages/Spain";

const CITY_IMAGES: Record<string, string> = {
  Barcelona: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200",
  Madrid: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200",
  Valencia: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=1200",
  Seville: "https://images.unsplash.com/photo-1559682468-a6a29e7d9517?w=1200",
};

const VENUE_FROM_CUISINE = (cuisines: string[]) => {
  const c = cuisines.map((x) => x.toLowerCase()).join(" ");
  if (c.includes("bakery") || c.includes("pasteler")) return "bakery" as const;
  if (c.includes("café") || c.includes("cafe") || c.includes("coffee")) return "cafe" as const;
  return "restaurant" as const;
};

const toDetailRestaurant = (r: SpainRestaurant) => {
  const slug = slugifyRestaurant(r.name);
  const city = r.city;
  const heroPhoto = CITY_IMAGES[city] ?? "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200";
  return {
    name: r.name,
    slug,
    address: `${r.address}, Spain`,
    city,
    country: "Spain",
    hours: r.hours ?? "Hours not available",
    phone: r.phone ?? "",
    website: r.website ?? "",
    directionsUrl: r.directionsUrl,
    specialty: r.specialty,
    overview: `${r.name} in ${city} is a ${r.menuType === "fully-gluten-free" ? "100% gluten-free" : "celiac-aware"} venue specializing in ${r.specialty.toLowerCase()}. ${
      r.celiacSafe === "dedicated-facility"
        ? "Operates a dedicated gluten-free facility with no cross-contamination risk — fully safe for celiacs."
        : "Follows strict celiac protocols with trained staff and clearly marked GF options."
    }`,
    menuHighlights: [
      `${r.icon} ${r.specialty}`,
      ...r.cuisineTypes.map((c) => `🍽️ ${c} options`),
    ],
    proTip:
      r.menuType === "fully-gluten-free"
        ? "Every item on the menu is gluten-free — safe to order anything."
        : "Always tell staff you have celiac disease — they're trained to guide you safely.",
    icon: r.icon,
    celiacSafe: r.celiacSafe,
    menuType: r.menuType,
    rating: r.rating,
    reviewCount: r.reviewCount,
    lat: 0,
    lng: 0,
    venueType: VENUE_FROM_CUISINE(r.cuisineTypes),
    photos: [
      heroPhoto,
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
      "https://images.unsplash.com/photo-1571066811602-716837d681de?w=800",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
    ],
  };
};

const SpainRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/spain" replace />;
  const r = getSpainRestaurantBySlug(slug);
  if (!r) return <Navigate to="/spain" replace />;

  const cityPath = r.city.toLowerCase().replace(/\s+/g, "-");

  return (
    <RestaurantDetailPage
      restaurant={toDetailRestaurant(r)}
      backLink={`/spain/${cityPath}`}
      backLabel={`Back to ${r.city}`}
    />
  );
};

export default SpainRestaurantPage;
