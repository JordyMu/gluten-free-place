import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getQuatreBornesRestaurantBySlug } from "@/data/quatreBornesRestaurants";

const QuatreBornesRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/mauritius/quatre-bornes" replace />;
  }

  const restaurant = getQuatreBornesRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/mauritius/quatre-bornes" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/mauritius/quatre-bornes"
      backLabel="Back to Quatre Bornes"
    />
  );
};

export default QuatreBornesRestaurantPage;
