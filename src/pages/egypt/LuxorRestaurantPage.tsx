import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getLuxorRestaurantBySlug } from "@/data/egyptRestaurants";

const LuxorRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/egypt/luxor" replace />;
  const restaurant = getLuxorRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/egypt/luxor" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/egypt/luxor" backLabel="Back to Luxor" />;
};

export default LuxorRestaurantPage;
