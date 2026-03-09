import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getFlicEnFlacRestaurantBySlug } from "@/data/flicEnFlacRestaurants";

const FlicEnFlacRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/mauritius/flic-en-flac" replace />;
  }

  const restaurant = getFlicEnFlacRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/mauritius/flic-en-flac" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/mauritius/flic-en-flac"
      backLabel="Back to Flic en Flac"
    />
  );
};

export default FlicEnFlacRestaurantPage;
