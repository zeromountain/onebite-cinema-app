import movieApi from "@/api/moive.api";
import MovieItem from "@/components/movie-item";

export default async function AlllMovie() {
  const movies = await movieApi.getMovies();

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {movies.map((movie) => (
        <li key={`all-${movie.id}`}>
          <MovieItem movie={movie} w={140} h={200} />
        </li>
      ))}
    </ul>
  );
}
