import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getKisumuRestaurantBySlug } from "@/data/kisumuRestaurants";

const KisumuRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/kenya/kisumu" replace />;
  const restaurant = getKisumuRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/kenya/kisumu" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/kenya/kisumu" backLabel="Back to Kisumu" />;
};

export default KisumuRestaurantPage;
