import React, { Suspense } from "react";

import RecommendedMovie from "./_components/recommended-movie";
import AlllMovie from "./_components/all-movie";
import SkeletonList from "./_components/skeleton-list";

export default async function HomePage() {
  return (
    <>
      <section className="mb-8 w-full">
        <h2 className="text-2xl font-bold mb-4">지금 가장 추천하는 영화</h2>
        <Suspense
          fallback={
            <SkeletonList count={3} keyName="recommended-movie" isTriple />
          }
        >
          <RecommendedMovie />
        </Suspense>
      </section>
      <section className="mb-8 w-full">
        <h2 className="text-2xl font-bold mb-4">등록된 모든 영화</h2>
        <Suspense fallback={<SkeletonList count={10} keyName="all-movie" />}>
          <AlllMovie />
        </Suspense>
      </section>
    </>
  );
}
