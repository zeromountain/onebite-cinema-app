import { notFound } from "next/navigation";

import movieApi from "@/api/moive.api";
import BlurImage from "@/components/common/blur-image";

interface MovieInfoProps {
  id: string;
}

export default async function MovieInfo({ id }: MovieInfoProps) {
  const movie = await movieApi.getMovie(id);

  if (!movie) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4 mb-32">
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
      <section className="flex flex-col gap-4 p-4">
        <h3 className="text-2xl font-bold text-white">{movie.title}</h3>
        <div className="flex gap-2 text-sm">
          <p className="text-white">{movie.releaseDate}</p>
          <span className="text-gray-500">|</span>
          <p className="text-white">{movie.genres.join(", ")}</p>
          <span className="text-gray-500">|</span>
          <p className="text-white">{movie.runtime}분</p>
        </div>
        <p className="text-sm font-light text-gray-300">{movie.company}</p>
        <h4 className="text-lg font-bold text-white">{movie.subTitle}</h4>
        <p className="text-sm text-yellow-200 font-semibold">
          {movie.description}
        </p>
      </section>
    </div>
  );
}
