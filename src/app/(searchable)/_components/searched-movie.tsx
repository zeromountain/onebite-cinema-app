import movieApi from "@/api/moive.api";
import MovieItem from "@/components/movie-item";

export default async function SearchedMovie({ q }: { q?: string }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const searchedMovies = await movieApi.getMoviesByQuery(q);

  return (
    <>
      {searchedMovies.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchedMovies.map((movie) => (
            <li key={`searched-${movie.id}`}>
              <MovieItem movie={movie} w={300} h={400} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-2xl font-bold">검색 결과가 없습니다.</p>
      )}
    </>
  );
}
