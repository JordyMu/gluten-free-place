import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getSharmRestaurantBySlug } from "@/data/egyptRestaurants";

const SharmRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/egypt/sharm-el-sheikh" replace />;
  const restaurant = getSharmRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/egypt/sharm-el-sheikh" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/egypt/sharm-el-sheikh" backLabel="Back to Sharm El Sheikh" />;
};

export default SharmRestaurantPage;
