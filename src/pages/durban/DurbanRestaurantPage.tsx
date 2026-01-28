import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getDurbanRestaurantBySlug } from "@/data/durbanRestaurants";

const DurbanRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/south-africa/durban" replace />;
  }

  const restaurant = getDurbanRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/south-africa/durban" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/south-africa/durban"
      backLabel="Back to Durban"
    />
  );
};

export default DurbanRestaurantPage;
