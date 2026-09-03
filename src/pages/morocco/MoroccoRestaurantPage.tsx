import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getMoroccoCity } from "@/data/moroccoRestaurants";

const MoroccoRestaurantPage = () => {
  const { citySlug, slug } = useParams<{ citySlug: string; slug: string }>();
  const city = getMoroccoCity(citySlug);
  if (!city) return <Navigate to="/gluten-free/morocco" replace />;
  const restaurant = city.restaurants.find((r) => r.slug === slug);
  if (!restaurant) return <Navigate to={`/gluten-free/morocco/${city.slug}`} replace />;
  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink={`/gluten-free/morocco/${city.slug}`}
      backLabel={`Back to ${city.name}`}
    />
  );
};

export default MoroccoRestaurantPage;
