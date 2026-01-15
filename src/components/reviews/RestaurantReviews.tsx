import { MessageCircle } from "lucide-react";
import { useReviews } from "@/hooks/useReviews";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";

interface RestaurantReviewsProps {
  restaurantName: string;
  restaurantCountry: string;
  restaurantCity?: string;
}

export const RestaurantReviews = ({
  restaurantName,
  restaurantCountry,
  restaurantCity,
}: RestaurantReviewsProps) => {
  const { reviews, loading, refetch } = useReviews(restaurantName, restaurantCountry);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-orange-500" />
        <h3 className="text-xl font-semibold">
          Community Reviews ({reviews.length})
        </h3>
      </div>

      <ReviewForm
        restaurantName={restaurantName}
        restaurantCountry={restaurantCountry}
        restaurantCity={restaurantCity}
        onReviewSubmitted={refetch}
      />

      <ReviewList reviews={reviews} loading={loading} />
    </div>
  );
};
