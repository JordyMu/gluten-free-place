import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { restaurantsForCityPage } from "./GlutenFreeDublin";

const DublinRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/ireland/dublin" replace />;
  const restaurant = restaurantsForCityPage.find((r) => r.slug === slug);
  if (!restaurant) return <Navigate to="/gluten-free/ireland/dublin" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/ireland/dublin" backLabel="Back to Dublin" />;
};

export default DublinRestaurantPage;
