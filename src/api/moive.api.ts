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
    try {
      const response = await this.instance("/movie", {
        method: "GET",
        cache: "force-cache",
      });

      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to fetch movies: getMovies");
      }

      return response.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async getMovie(id: string): Promise<Movie | null> {
    try {
      const response = await this.instance(`/movie/${id}`, {
        method: "GET",
        cache: "force-cache",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch movie ${id}`);
      }

      return response.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async getMoviesByQuery(query?: string): Promise<Movie[]> {
    try {
      const response = await this.instance(`/movie/search?q=${query}`, {
        method: "GET",
        cache: "force-cache",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      return response.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async getRecommendMovies(): Promise<Movie[]> {
    try {
      const response = await this.instance("/movie/random", {
        method: "GET",
        next: {
          revalidate: 3,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      return response.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}

const movieApi = new MovieApi(instance);

export default movieApi;
