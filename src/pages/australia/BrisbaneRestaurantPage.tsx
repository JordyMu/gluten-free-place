import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { brisbaneRestaurants } from "./GlutenFreeBrisbane";

const BrisbaneRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/australia/brisbane" replace />;

  const r = brisbaneRestaurants.find((x) => x.slug === slug);
  if (!r) return <Navigate to="/gluten-free/australia/brisbane" replace />;

  const restaurant = {
    name: r.name,
    slug: r.slug,
    address: r.address ?? "",
    city: "Brisbane",
    country: "Australia",
    hours: r.hours ?? "",
    phone: r.phone ?? "",
    website: r.website ?? "",
    directionsUrl: r.directionsUrl ?? "",
    specialty: r.specialty ?? "",
    overview: r.overview ?? "",
    menuHighlights: r.menuHighlights,
    whyPeopleLoveIt: r.whyPeopleLoveIt,
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
    fullMenu: r.fullMenu,
    services: r.services,
    heroImage: r.heroImage,
  };

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/australia/brisbane"
      backLabel="Back to Brisbane"
    />
  );
};

export default BrisbaneRestaurantPage;
