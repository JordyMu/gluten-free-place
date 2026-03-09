import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getPortLouisRestaurantBySlug } from "@/data/portLouisRestaurants";

const PortLouisRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/mauritius/port-louis" replace />;
  }

  const restaurant = getPortLouisRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/mauritius/port-louis" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/mauritius/port-louis"
      backLabel="Back to Port Louis"
    />
  );
};

export default PortLouisRestaurantPage;
