import MovieSkeleton from "./movie-skeleton";

interface SkeletonListProps {
  count: number;
  keyName: string;
  isTriple?: boolean;
}

export default function SkeletonList({
  count,
  keyName,
  isTriple = false,
}: SkeletonListProps) {
  return (
    <ul
      className={
        !isTriple
          ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
      }
    >
      {new Array(count).fill(0).map((_, idx) => (
        <li key={`${keyName}-${idx}`}>
          <MovieSkeleton />
        </li>
      ))}
    </ul>
  );
}
