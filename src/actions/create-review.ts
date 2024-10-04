"use server";

import reviewApi from "@/api/review.api";
import { revalidatePath, revalidateTag } from "next/cache";

const createReview = async (_: any, formData: FormData) => {
  const movieId = formData.get("movieId")?.toString();
  const author = formData.get("author")?.toString();
  const content = formData.get("content")?.toString();

  if (!author || !content || !movieId) {
    return {
      status: false,
      error: "모든 필드를 작성해 주세요.",
    };
  }

  await reviewApi.createReview({
    movieId,
    author,
    content,
  });
  //초기화
  // revalidatePath(`/movie/${movieId}`);
  revalidateTag(`${movieId}-reviews`);
};

export default createReview;
