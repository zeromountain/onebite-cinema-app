import { Review } from "@/types";

import ReviewDeleteButton from "./review-delete-button";

interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  return (
    <li className="bg-black rounded-lg p-4 shadow-md">
      <div className="flex justify-end gap-2">
        <button className="text-sm text-gray-400 border border-gray-400 rounded-md px-2 py-1 hover:bg-gray-400 hover:text-white active:bg-gray-500">
          ✍️ 수정하기
        </button>
        <ReviewDeleteButton
          reviewId={review.id.toString()}
          movieId={review.movieId.toString()}
        />
      </div>
      <p className="text-gray-300 mb-2">{review.content}</p>
      <div className="flex items-center">
        {/* 프로필 이미지 */}
        <div className="w-8 h-8 bg-gray-600 rounded-full mr-2"></div>
        <p className="text-sm text-gray-400">{review.author}</p>
      </div>
    </li>
  );
}
