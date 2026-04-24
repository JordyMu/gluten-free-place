import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/lyonRestaurants";

const LyonRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/france/lyon" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/france/lyon" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/france/lyon" backLabel="Back to Lyon" />;
};

export default LyonRestaurantPage;
