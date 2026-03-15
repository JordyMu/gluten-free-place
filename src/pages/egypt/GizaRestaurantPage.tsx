import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getGizaRestaurantBySlug } from "@/data/egyptRestaurants";

const GizaRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/egypt/giza" replace />;
  const restaurant = getGizaRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/egypt/giza" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/egypt/giza" backLabel="Back to Giza" />;
};

export default GizaRestaurantPage;
