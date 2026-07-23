import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { perthRestaurants } from "./GlutenFreePerth";

const PerthRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/australia/perth" replace />;

  const r = perthRestaurants.find((x) => x.slug === slug);
  if (!r) return <Navigate to="/gluten-free/australia/perth" replace />;

  const restaurant = {
    name: r.name,
    slug: r.slug,
    address: r.address ?? "",
    city: "Perth",
    country: "Australia",
    hours: r.hours ?? "",
    phone: r.phone ?? "",
    website: r.website ?? "",
    directionsUrl: r.directionsUrl ?? "",
    specialty: r.specialty ?? "",
    overview: r.overview ?? "",
    menuHighlights: r.menuHighlights,
    proTip: r.proTip ?? "",
    icon: r.icon ?? "🍽️",
    celiacSafe: r.celiacSafe ?? "protocols-in-place",
    menuType: r.menuType ?? "mixed-menu",
    rating: r.rating ?? 0,
    reviewCount: r.reviewCount ?? 0,
    lat: 0,
    lng: 0,
    venueType: "restaurant" as const,
    photos: [] as (string | { url: string; caption?: string })[],
    cuisineTypes: r.cuisineTypes ?? [],
  };

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/australia/perth"
      backLabel="Back to Perth"
    />
  );
};

export default PerthRestaurantPage;
