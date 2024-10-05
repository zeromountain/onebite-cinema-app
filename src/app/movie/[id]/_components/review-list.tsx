import reviewApi from "@/api/review.api";
import { Review } from "@/types";
import ReviewItem from "./review-item";

interface ReviewListProps {
  movieId: string;
}

export default async function ReviewList({ movieId }: ReviewListProps) {
  const reviews = await reviewApi.getReviews(movieId);

  return (
    <div className="mt-4 p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">
        리뷰 {reviews.length}개
      </h2>
      <ul className="space-y-4">
        {reviews.map((review: Review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
}
