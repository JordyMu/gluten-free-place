import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { cities } from "@/pages/Italy";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const ItalyRestaurantPage = () => {
  const { citySlug, restaurantSlug } = useParams<{ citySlug: string; restaurantSlug: string }>();
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return <Navigate to="/italy" replace />;

  const restaurant = city.restaurants.find((r) => slugify(r.name) === restaurantSlug);
  if (!restaurant) return <Navigate to={`/gluten-free/italy/${city.slug}`} replace />;

  const backLink = `/gluten-free/italy/${city.slug}`;

  const mapped = {
    name: restaurant.name,
    slug: restaurantSlug!,
    address: restaurant.address,
    city: city.name,
    country: "Italy",
    hours: restaurant.hours || "Hours not available",
    phone: restaurant.phone || "Not available",
    website: (restaurant.website || "").replace(/^https?:\/\//, ""),
    directionsUrl:
      restaurant.directionsUrl ||
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.name + " " + restaurant.address)}`,
    specialty: restaurant.specialty || "Gluten-Free Italian",
    overview: restaurant.overview || `${restaurant.name} is a celiac-aware spot in ${city.name}, Italy.`,
    menuHighlights: restaurant.menuHighlights || [],
    proTip: restaurant.proTip || "",
    icon: restaurant.icon || "🍝",
    celiacSafe: (restaurant.celiacSafe === "dedicated-facility"
      ? "dedicated-facility"
      : "protocols-in-place") as "dedicated-facility" | "protocols-in-place",
    menuType: (restaurant.menuType === "fully-gluten-free"
      ? "fully-gluten-free"
      : "mixed-menu") as "fully-gluten-free" | "mixed-menu",
    rating: restaurant.rating ?? 4.5,
    reviewCount: restaurant.reviewCount ?? 0,
    lat: 0,
    lng: 0,
    venueType: "restaurant" as const,
    photos: [] as (string | { url: string; caption?: string })[],
  };

  return (
    <RestaurantDetailPage
      restaurant={mapped}
      backLink={backLink}
      backLabel={`Back to ${city.name}`}
    />
  );
};

export default ItalyRestaurantPage;
