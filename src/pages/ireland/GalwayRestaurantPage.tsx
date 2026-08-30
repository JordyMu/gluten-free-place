import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { restaurantsForCityPage } from "./GlutenFreeGalway";

const GalwayRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/gluten-free/ireland/galway" replace />;
  const restaurant = restaurantsForCityPage.find((r) => r.slug === slug);
  if (!restaurant) return <Navigate to="/gluten-free/ireland/galway" replace />;
  return <RestaurantDetailPage restaurant={restaurant} backLink="/gluten-free/ireland/galway" backLabel="Back to Galway" />;
};

export default GalwayRestaurantPage;
