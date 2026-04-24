import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/parisRestaurants";

const ParisRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/france/paris" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/france/paris" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/france/paris" backLabel="Back to Paris" />;
};

export default ParisRestaurantPage;
