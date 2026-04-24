import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/bordeauxRestaurants";

const BordeauxRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/france/bordeaux" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/france/bordeaux" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/france/bordeaux" backLabel="Back to Bordeaux" />;
};

export default BordeauxRestaurantPage;
