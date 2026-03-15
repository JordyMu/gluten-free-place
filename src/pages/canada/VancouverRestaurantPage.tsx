import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/vancouverRestaurants";

const VancouverRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/canada/vancouver" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/canada/vancouver" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/canada/vancouver" backLabel="Back to Vancouver" />;
};

export default VancouverRestaurantPage;
