import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/montrealRestaurants";

const MontrealRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/canada/montreal" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/canada/montreal" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/canada/montreal" backLabel="Back to Montreal" />;
};

export default MontrealRestaurantPage;
