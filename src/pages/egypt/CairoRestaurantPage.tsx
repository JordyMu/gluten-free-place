import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getCairoRestaurantBySlug } from "@/data/egyptRestaurants";

const CairoRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/egypt/cairo" replace />;
  const restaurant = getCairoRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/egypt/cairo" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/egypt/cairo" backLabel="Back to Cairo" />;
};

export default CairoRestaurantPage;
