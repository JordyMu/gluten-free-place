import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getNairobiRestaurantBySlug } from "@/data/nairobiRestaurants";

const NairobiRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/kenya/nairobi" replace />;
  const restaurant = getNairobiRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/kenya/nairobi" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/kenya/nairobi" backLabel="Back to Nairobi" />;
};

export default NairobiRestaurantPage;
