import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/edinburghRestaurants";

const EdinburghRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/united-kingdom/edinburgh" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/united-kingdom/edinburgh" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/united-kingdom/edinburgh" backLabel="Back to Edinburgh" />;
};

export default EdinburghRestaurantPage;
