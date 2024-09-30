import { Suspense } from "react";
import SearchedMovie from "../_components/searched-movie";
import SkeletonList from "../_components/skeleton-list";

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
