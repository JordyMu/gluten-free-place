import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/birminghamRestaurants";

const BirminghamRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/united-kingdom/birmingham" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/united-kingdom/birmingham" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/united-kingdom/birmingham" backLabel="Back to Birmingham" />;
};

export default BirminghamRestaurantPage;
