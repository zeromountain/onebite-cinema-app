import React from "react";

import movieApi from "@/api/moive.api";
import MovieInfo from "./_components/movie-info";
import ReviewForm from "./_components/review-form";
import ReviewList from "./_components/review-list";
import { Metadata } from "next";

export const generateStaticParams = async () => {
  const movies = await movieApi.getMovies();

  return movies.map((movie) => ({ id: String(movie.id) }));
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const movie = await movieApi.getMovie(params.id);

  if (!movie) {
    return {
      title: "한입시네마",
      description: "해당하는 영화 정보를 찾을 수 없습니다.",
      openGraph: {
        title: "한입시네마",
        description: "해당하는 영화 정보를 찾을 수 없습니다.",
        images: ["/thumbnail.png"],
      },
    };
  }

  return {
    title: movie.title,
    description: movie.description,
    openGraph: {
      title: movie.title,
      description: movie.description,
      images: movie.posterImgUrl,
    },
  };
}

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <MovieInfo id={params.id} />
      <ReviewForm movieId={params.id} />
      <ReviewList movieId={params.id} />
    </>
  );
}
