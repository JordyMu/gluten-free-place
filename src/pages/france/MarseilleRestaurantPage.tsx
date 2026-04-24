import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/marseilleRestaurants";

const MarseilleRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/france/marseille" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/france/marseille" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/france/marseille" backLabel="Back to Marseille" />;
};

export default MarseilleRestaurantPage;
