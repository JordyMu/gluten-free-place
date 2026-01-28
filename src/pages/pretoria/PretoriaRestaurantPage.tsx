import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getPretoriaRestaurantBySlug } from "@/data/pretoriaRestaurants";

const PretoriaRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/south-africa/pretoria" replace />;
  }

  const restaurant = getPretoriaRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/south-africa/pretoria" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/south-africa/pretoria"
      backLabel="Back to Pretoria"
    />
  );
};

export default PretoriaRestaurantPage;
