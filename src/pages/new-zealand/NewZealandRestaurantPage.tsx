import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import type { Restaurant } from "@/data/capeTownRestaurants";
import { findNZRestaurant, nzSlug, type NZRestaurant } from "@/data/newZealandCities";

const toRestaurant = (r: NZRestaurant, cityName: string): Restaurant => ({
  name: r.name,
  slug: nzSlug(r.name),
  address: r.address,
  city: cityName,
  country: "New Zealand",
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

const NewZealandRestaurantPage = () => {
  const { city, slug } = useParams<{ city: string; slug: string }>();
  if (!city || !slug) return <Navigate to="/new-zealand" replace />;
  const found = findNZRestaurant(city, slug);
  if (!found) return <Navigate to={`/gluten-free/new-zealand/${city}`} replace />;
  return (
    <RestaurantDetailPage
      restaurant={toRestaurant(found.restaurant, found.city.name)}
      backLink={`/gluten-free/new-zealand/${city}`}
      backLabel={`Back to ${found.city.name}`}
    />
  );
};

export default NewZealandRestaurantPage;
