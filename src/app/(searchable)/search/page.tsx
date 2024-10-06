import { Suspense } from "react";
import SearchedMovie from "../_components/searched-movie";
import SkeletonList from "../_components/skeleton-list";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { q: string };
}): Promise<Metadata> {
  return {
    title: `한입시네마 - 검색 : ${searchParams.q}`,
  };
}

export default function SearchPage({
  searchParams: { q },
}: {
  searchParams: {
    q: string;
  };
}) {
  return (
    <div className="min-h-screen pt-4">
      <Suspense
        key={q}
        fallback={<SkeletonList count={3} keyName="searched-movie" isTriple />}
      >
        <SearchedMovie q={q} />
      </Suspense>
    </div>
  );
}
