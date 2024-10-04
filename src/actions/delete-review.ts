"use server";

import { revalidatePath, revalidateTag } from "next/cache";

import reviewApi from "@/api/review.api";

const deleteReview = async (_: any, formData: FormData) => {
  const reviewId = formData.get("reviewId")?.toString();
  const movieId = formData.get("movieId")?.toString();

  if (!reviewId || !movieId) {
    return {
      status: false,
      error: "리뷰 아이디를 찾을 수 없습니다.",
    };
  }

  try {
    await reviewApi.deleteReview(reviewId);

    return {
      status: true,
      message: "리뷰가 삭제되었습니다.",
    };
  } catch (err) {
    return {
      status: false,
      error: "리뷰 삭제에 실패했습니다.",
    };
  } finally {
    // revalidatePath(`/movie/${movieId}`);
    revalidateTag(`${movieId}-reviews`);
  }
};

export default deleteReview;
