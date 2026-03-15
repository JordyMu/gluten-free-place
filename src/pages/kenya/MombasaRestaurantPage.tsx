import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getMombasaRestaurantBySlug } from "@/data/mombasaRestaurants";

const MombasaRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/kenya/mombasa" replace />;
  const restaurant = getMombasaRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/kenya/mombasa" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/kenya/mombasa" backLabel="Back to Mombasa" />;
};

export default MombasaRestaurantPage;
