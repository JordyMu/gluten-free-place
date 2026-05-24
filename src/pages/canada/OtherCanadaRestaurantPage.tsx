import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getRestaurantBySlug } from "@/data/otherCanadaRestaurants";

const OtherCanadaRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/canada" replace />;
  const restaurant = getRestaurantBySlug(slug);
  if (!restaurant) return <Navigate to="/gluten-free/canada" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/canada" backLabel="Back to Canada" />;
};

export default OtherCanadaRestaurantPage;
