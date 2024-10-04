import React from "react";

import movieApi from "@/api/moive.api";
import MovieInfo from "./_components/movie-info";
import ReviewForm from "./_components/review-form";
import ReviewList from "./_components/review-list";

export const generateStaticParams = async () => {
  const movies = await movieApi.getMovies();

  return movies.map((movie) => ({ id: String(movie.id) }));
};

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
