import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/strasbourgRestaurants";

const StrasbourgRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/france/strasbourg" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/france/strasbourg" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/france/strasbourg" backLabel="Back to Strasbourg" />;
};

export default StrasbourgRestaurantPage;
