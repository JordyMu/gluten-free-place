import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getAlexandriaRestaurantBySlug } from "@/data/egyptRestaurants";

const AlexandriaRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/egypt/alexandria" replace />;
  const restaurant = getAlexandriaRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/egypt/alexandria" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/egypt/alexandria" backLabel="Back to Alexandria" />;
};

export default AlexandriaRestaurantPage;
