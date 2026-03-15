import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/londonRestaurants";

const LondonRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/united-kingdom/london" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/united-kingdom/london" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/united-kingdom/london" backLabel="Back to London" />;
};

export default LondonRestaurantPage;
