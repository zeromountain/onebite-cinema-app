import { Movie } from "@/types";
import instance, { Instance } from "./instance";

class MovieApi {
  constructor(private readonly instance: Instance) {
    if (!instance) {
      throw new Error("Instance is not defined");
    }

    this.instance = instance;
  }

  async getMovies(): Promise<Movie[]> {
    const response = await this.instance("/movie", {
      method: "GET",
      cache: "force-cache",
    });

    return response.json();
  }

  async getMovie(id: string): Promise<Movie> {
    const response = await this.instance(`/movie/${id}`, {
      method: "GET",
      cache: "force-cache",
    });

    return response.json();
  }

  async getMoviesByQuery(query?: string): Promise<Movie[]> {
    const response = await this.instance(`/movie/search?q=${query}`, {
      method: "GET",
      cache: "force-cache",
    });

    return response.json();
  }

  async getRecommendMovies(): Promise<Movie[]> {
    const response = await this.instance("/movie/random", {
      method: "GET",
      next: {
        revalidate: 3,
      },
    });

    return response.json();
  }
}

const movieApi = new MovieApi(instance);

export default movieApi;
