import React from "react";

import movieApi from "@/api/moive.api";
import MovieInfo from "./_components/movie-info";
import ReviewForm from "./_components/review-form";
import ReviewList from "./_components/review-list";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const movies = await movieApi.getMovies();

  return movies.map((movie) => ({ id: String(movie.id) }));
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const movie = await movieApi.getMovie(params.id);

    if (!movie) {
      throw new Error("해당하는 영화 정보를 찾을 수 없습니다.");
    }

    return {
      title: `한입시네마 | ${movie.title}`,
      description: movie.description,
      openGraph: {
        title: `한입시네마 | ${movie.title}`,
        description: movie.description,
        images: [`${movie.posterImgUrl}`],
      },
    };
  } catch (err) {
    console.error(err);
    notFound();
  }
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
