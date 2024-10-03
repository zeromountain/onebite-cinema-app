import instance, { Instance } from "./instance";

export class ReviewApi {
  constructor(private readonly instance: Instance) {
    if (!instance) {
      throw new Error("Instance is not defined");
    }

    this.instance = instance;
  }
  async createReview({
    movieId,
    content,
    author,
  }: {
    movieId: string;
    content: string;
    author: string;
  }) {
    await this.instance("/review", {
      method: "POST",
      body: JSON.stringify({
        movieId,
        content,
        author,
      }),
    });
  }

  async getReviews(movieId: string) {
    const response = await this.instance(`/review/movie/${movieId}`, {
      method: "GET",
    });

    return response.json();
  }

  async updateReview(reviewId: string, content: string, author: string) {
    await this.instance(`/review/${reviewId}`, {
      method: "PATCH",
      body: JSON.stringify({
        content,
        author,
      }),
    });
  }

  async deleteReview(reviewId: string) {
    await this.instance(`/review/${reviewId}`, {
      method: "DELETE",
    });
  }
}

const reviewApi = new ReviewApi(instance);

export default reviewApi;
