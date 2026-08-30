import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { restaurantsForCityPage } from "./GlutenFreeCork";

const CorkRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/ireland/cork" replace />;
  const restaurant = restaurantsForCityPage.find((r) => r.slug === slug);
  if (!restaurant) return <Navigate to="/gluten-free/ireland/cork" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/ireland/cork" backLabel="Back to Cork" />;
};

export default CorkRestaurantPage;
