import reviewApi from "@/api/review.api";
import { revalidatePath } from "next/cache";

const createReview = async (formData: FormData) => {
  "use server";
  const movieId = formData.get("movieId")?.toString();
  const author = formData.get("author")?.toString();
  const content = formData.get("content")?.toString();

  if (!author || !content || !movieId) {
    return;
  }

  await reviewApi.createReview({
    movieId,
    author,
    content,
  });
  //초기화
  revalidatePath(`/movie/${movieId}`);
};

export default createReview;
