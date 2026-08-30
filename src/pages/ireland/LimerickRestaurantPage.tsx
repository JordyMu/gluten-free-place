import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { restaurantsForCityPage } from "./GlutenFreeLimerick";

const LimerickRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/ireland/limerick" replace />;
  const restaurant = restaurantsForCityPage.find((r) => r.slug === slug);
  if (!restaurant) return <Navigate to="/gluten-free/ireland/limerick" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/ireland/limerick" backLabel="Back to Limerick" />;
};

export default LimerickRestaurantPage;
