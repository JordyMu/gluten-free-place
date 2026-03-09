import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getCurepipeRestaurantBySlug } from "@/data/curepipeRestaurants";

const CurepipeRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/mauritius/curepipe" replace />;
  }

  const restaurant = getCurepipeRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/mauritius/curepipe" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/mauritius/curepipe"
      backLabel="Back to Curepipe"
    />
  );
};

export default CurepipeRestaurantPage;
