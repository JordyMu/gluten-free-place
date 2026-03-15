import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/manchesterRestaurants";

const ManchesterRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/united-kingdom/manchester" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/united-kingdom/manchester" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/united-kingdom/manchester" backLabel="Back to Manchester" />;
};

export default ManchesterRestaurantPage;
