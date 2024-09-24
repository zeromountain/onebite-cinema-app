"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useRef } from "react";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("q");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current?.value.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }

    router.push(`/search?q=${inputRef.current?.value}`);
  };

  useEffect(() => {
    if (inputRef.current) {
      if (search) {
        inputRef.current.value = search;
      }
    }
  }, [search]);

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-5">
      <input
        ref={inputRef}
        type="text"
        placeholder="검색어를 입력해주세요."
        className="flex-1 border border-gray-300 rounded-md p-2 text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        검색
      </button>
    </form>
  );
}
