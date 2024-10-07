import movieApi from "@/api/moive.api";
import MovieItem from "@/components/movie-item";

export default async function RecommendedMovie() {
  const recommendMovies = await movieApi.getRecommendMovies();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {recommendMovies.map((movie) => (
        <li key={`recommended-${movie.id}`}>
          <MovieItem movie={movie} w={300} h={400} />
        </li>
      ))}
    </ul>
  );
}
