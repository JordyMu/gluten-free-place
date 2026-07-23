import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { sydneyRestaurants } from "./GlutenFreeSydney";

const SydneyRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/australia/sydney" replace />;

  const r = sydneyRestaurants.find((x) => x.slug === slug);
  if (!r) return <Navigate to="/gluten-free/australia/sydney" replace />;

  const restaurant = {
    name: r.name,
    slug: r.slug,
    address: r.address ?? "",
    city: "Sydney",
    country: "Australia",
    hours: r.hours ?? "",
    phone: r.phone ?? "",
    website: r.website ?? "",
    directionsUrl: r.directionsUrl ?? "",
    specialty: r.specialty ?? "",
    overview: r.overview ?? "",
    menuHighlights: r.menuHighlights,
    fullMenu: r.fullMenu,
    proTip: r.proTip ?? "",
    icon: r.icon ?? "🍽️",
    celiacSafe: r.celiacSafe ?? "protocols-in-place",
    menuType: r.menuType ?? "mixed-menu",
    rating: r.rating ?? 0,
    reviewCount: r.reviewCount ?? 0,
    lat: 0,
    lng: 0,
    venueType: "restaurant" as const,
    photos: (r.photos ?? []) as (string | { url: string; caption?: string })[],
    cuisineTypes: r.cuisineTypes ?? [],
    heroImage: r.heroImage,
  };

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/australia/sydney"
      backLabel="Back to Sydney"
    />
  );
};

export default SydneyRestaurantPage;
