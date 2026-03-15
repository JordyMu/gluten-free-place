import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getNakuruRestaurantBySlug } from "@/data/nakuruRestaurants";

const NakuruRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/kenya/nakuru" replace />;
  const restaurant = getNakuruRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/kenya/nakuru" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/kenya/nakuru" backLabel="Back to Nakuru" />;
};

export default NakuruRestaurantPage;
