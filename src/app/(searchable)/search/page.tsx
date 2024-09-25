import SearchedMovie from "../_components/searched-movie";

export default function SearchPage({
  searchParams: { q },
}: {
  searchParams: {
    q: string;
  };
}) {
  return (
    <div className="min-h-screen pt-4">
      <SearchedMovie q={q} />
    </div>
  );
}
