import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/torontoRestaurants";

const TorontoRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/canada/toronto" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/canada/toronto" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/canada/toronto" backLabel="Back to Toronto" />;
};

export default TorontoRestaurantPage;
