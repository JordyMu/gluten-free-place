import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import type { Restaurant } from "@/data/capeTownRestaurants";
import { findDERestaurant, deSlug, type DERestaurant } from "@/data/germanyCities";

const toRestaurant = (r: DERestaurant, cityName: string): Restaurant => ({
  name: r.name,
  slug: deSlug(r.name),
  address: r.address,
  city: cityName,
  country: "Germany",
  hours: r.hours,
  phone: r.phone,
  website: r.website,
  directionsUrl: r.directionsUrl,
  specialty: r.specialty,
  overview: r.overview,
  menuHighlights: r.menuHighlights,
  proTip: r.proTip,
  icon: r.icon,
  featured: r.featured,
  cuisineTypes: r.cuisineTypes,
  celiacSafe: r.celiacSafe,
  menuType: r.menuType,
  rating: r.rating,
  reviewCount: r.reviewCount,
  lat: 0,
  lng: 0,
  venueType: "restaurant",
  photos: [],
});

const GermanyRestaurantPage = () => {
  const { city, slug } = useParams<{ city: string; slug: string }>();
  if (!city || !slug) return <Navigate to="/germany" replace />;
  const found = findDERestaurant(city, slug);
  if (!found) return <Navigate to={`/gluten-free/germany/${city}`} replace />;
  return (
    <RestaurantDetailPage
      restaurant={toRestaurant(found.restaurant, found.city.name)}
      backLink={`/gluten-free/germany/${city}`}
      backLabel={`Back to ${found.city.name}`}
    />
  );
};

export default GermanyRestaurantPage;
