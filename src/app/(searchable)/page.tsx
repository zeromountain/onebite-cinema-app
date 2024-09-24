import MovieItem from "@/components/movie-item";
import movies from "@/mock/dummy.json";

export default function HomePage() {
  const recommendMovies = [...movies]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div>
      <section className="mb-8 w-full">
        <h2 className="text-2xl font-bold mb-4">지금 가장 추천하는 영화</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {recommendMovies.map((movie) => (
            <li key={`recommended-${movie.id}`}>
              <MovieItem movie={movie} w={300} h={400} />
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-8 w-full ">
        <h2 className="text-2xl font-bold mb-4">등록된 모든 영화</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {movies.map((movie) => (
            <li key={`all-${movie.id}`}>
              <MovieItem movie={movie} w={140} h={200} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
