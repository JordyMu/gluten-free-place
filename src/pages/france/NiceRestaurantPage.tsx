import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/niceRestaurants";

const NiceRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/france/nice" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/france/nice" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/france/nice" backLabel="Back to Nice" />;
};

export default NiceRestaurantPage;
