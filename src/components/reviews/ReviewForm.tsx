import { useState } from "react";
import { Star, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAddReview } from "@/hooks/useReviews";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface ReviewFormProps {
  restaurantName: string;
  restaurantCountry: string;
  restaurantCity?: string;
  onReviewSubmitted?: () => void;
}

export const ReviewForm = ({
  restaurantName,
  restaurantCountry,
  restaurantCity,
  onReviewSubmitted,
}: ReviewFormProps) => {
  const { user } = useAuth();
  const { addReview, loading, error } = useAddReview();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (comment.trim().length < 10) {
      toast({
        title: "Review too short",
        description: "Please write at least 10 characters in your review.",
        variant: "destructive",
      });
      return;
    }

    const result = await addReview({
      restaurant_name: restaurantName,
      restaurant_country: restaurantCountry,
      restaurant_city: restaurantCity,
      rating,
      comment: comment.trim(),
    });

    if (result.success) {
      toast({
        title: "Review submitted!",
        description: "Thank you for sharing your experience.",
      });
      setRating(0);
      setComment("");
      onReviewSubmitted?.();
    } else {
      toast({
        title: "Error",
        description: error || "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return (
      <Card className="bg-orange-50 border-orange-200">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Sign in to share your experience at this restaurant
            </p>
            <Link to="/auth">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Sign In to Review
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Write a Review</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Star Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Rating
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= (hoveredRating || rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Review
            </label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience... Was it celiac-safe? How was the food quality?"
              rows={4}
              className="resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Review"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
