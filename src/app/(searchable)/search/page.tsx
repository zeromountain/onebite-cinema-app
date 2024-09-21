export default function SearchPage({
  searchParams: { q },
}: {
  searchParams: {
    q: string;
  };
}) {
  return <div>검색어 : {q}</div>;
}
