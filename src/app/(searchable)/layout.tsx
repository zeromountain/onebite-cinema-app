import SearchForm from "@/components/common/search-form";

export default function SearchableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchForm />
      {children}
    </>
  );
}
