import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getHurghadaRestaurantBySlug } from "@/data/egyptRestaurants";

const HurghadaRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/egypt/hurghada" replace />;
  const restaurant = getHurghadaRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/egypt/hurghada" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/egypt/hurghada" backLabel="Back to Hurghada" />;
};

export default HurghadaRestaurantPage;
