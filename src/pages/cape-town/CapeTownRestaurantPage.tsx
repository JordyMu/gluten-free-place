import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/capeTownRestaurants";

const CapeTownRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/south-africa/cape-town" replace />;
  }

  const restaurant = getRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/south-africa/cape-town" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/south-africa/cape-town"
      backLabel="Back to Cape Town"
    />
  );
};

export default CapeTownRestaurantPage;
