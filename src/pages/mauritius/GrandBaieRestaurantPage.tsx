import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getGrandBaieRestaurantBySlug } from "@/data/grandBaieRestaurants";

const GrandBaieRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/mauritius/grand-baie" replace />;
  }

  const restaurant = getGrandBaieRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/mauritius/grand-baie" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/mauritius/grand-baie"
      backLabel="Back to Grand Baie"
    />
  );
};

export default GrandBaieRestaurantPage;
