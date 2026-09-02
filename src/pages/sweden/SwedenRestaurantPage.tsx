import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getSwedenCity } from "@/data/swedenRestaurants";

const SwedenRestaurantPage = () => {
  const { citySlug, slug } = useParams<{ citySlug: string; slug: string }>();
  const city = getSwedenCity(citySlug);
  if (!city) return <Navigate to="/sweden" replace />;
  const restaurant = city.restaurants.find((r) => r.slug === slug);
  if (!restaurant) return <Navigate to={`/gluten-free/sweden/${city.slug}`} replace />;
  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink={`/gluten-free/sweden/${city.slug}`}
      backLabel={`Back to ${city.name}`}
    />
  );
};

export default SwedenRestaurantPage;
