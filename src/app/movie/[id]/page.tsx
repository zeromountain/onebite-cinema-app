import BlurImage from "@/components/common/blur-image";
import movies from "@/mock/dummy.json";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movie = movies.find((movie) => movie.id === Number(params.id));

  if (!movie) {
    return <div>영화 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen gap-4">
      {/* 이미지 포스터 영역 */}
      <section
        style={{
          backgroundImage: `url(${movie.posterImgUrl})`,
        }}
        className="flex h-[400px] justify-center items-center relative bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:top-0 before:left-0 before:bg-black before:opacity-50 before:w-full before:h-full"
      >
        <BlurImage
          src={movie.posterImgUrl}
          alt={movie.title}
          width={220}
          height={300}
          className="relative"
        />
      </section>
      {/* 영화 정보 영역 */}
      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{movie.title}</h3>
        <div className="flex gap-2 text-sm">
          <p>{movie.releaseDate}</p>
          <span className="text-gray-500">|</span>
          <p>{movie.genres.join(", ")}</p>
          <span className="text-gray-500">|</span>
          <p>{movie.runtime}분</p>
        </div>
        <p className="text-sm font-light text-gray-300">{movie.company}</p>
        <h4 className="text-lg font-bold">{movie.subTitle}</h4>
        <p className="text-sm text-yellow-200 font-semibold">
          {movie.description}
        </p>
      </section>
    </div>
  );
}
