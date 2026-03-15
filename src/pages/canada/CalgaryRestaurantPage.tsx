import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/calgaryRestaurants";

const CalgaryRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/canada/calgary" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/canada/calgary" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/canada/calgary" backLabel="Back to Calgary" />;
};

export default CalgaryRestaurantPage;
