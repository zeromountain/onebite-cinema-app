import Link from "next/link";

import { Movie } from "@/types";
import BlurImage from "./common/blur-image";

interface MovieItemProps {
  movie: Movie;
  w: number;
  h: number;
}

export default function MovieItem({ movie, w, h }: MovieItemProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <BlurImage
        src={movie.posterImgUrl}
        alt={movie.title}
        width={w}
        height={h}
        className="w-full h-auto rounded mb-2 hover:scale-105 transition-all duration-300 cursor-pointer object-cover border-[1px] border-dotted border-gray-300 shadow-xl"
      />
    </Link>
  );
}
