import { useParams, Navigate } from "react-router-dom";
import { RestaurantDetailPage } from "@/components/restaurants/RestaurantDetailPage";
import { getJohannesburgRestaurantBySlug } from "@/data/johannesburgRestaurants";

const JohannesburgRestaurantPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/gluten-free/south-africa/johannesburg" replace />;
  }

  const restaurant = getJohannesburgRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/gluten-free/south-africa/johannesburg" replace />;
  }

  return (
    <RestaurantDetailPage
      restaurant={restaurant}
      backLink="/gluten-free/south-africa/johannesburg"
      backLabel="Back to Johannesburg"
    />
  );
};

export default JohannesburgRestaurantPage;
