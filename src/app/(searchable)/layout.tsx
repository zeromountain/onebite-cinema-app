import SearchForm from "@/components/common/search-form";
import { Suspense } from "react";

export default function SearchableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <SearchForm />
      </Suspense>
      {children}
    </>
  );
}
