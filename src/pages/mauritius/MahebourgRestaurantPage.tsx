import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getMahebourgRestaurantBySlug } from "@/data/mahebourgRestaurants";

const MahebourgRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/mauritius/mahebourg" replace />;
  }

  const restaurant = getMahebourgRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/mauritius/mahebourg" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/mauritius/mahebourg"
      backLabel="Back to Mahebourg"
    />
  );
};

export default MahebourgRestaurantPage;
