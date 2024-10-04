"use client";

import createReview from "@/actions/create-review";
import { useActionState, useEffect } from "react";

interface ReviewFormProps {
  movieId: string;
}

export default function ReviewForm({ movieId }: ReviewFormProps) {
  const [state, formAction, isPending] = useActionState(createReview, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="mt-6 space-y-4 bg-black p-6 rounded-md"
    >
      <h2 className="text-2xl font-bold text-white mb-4">리뷰 작성</h2>
      <input type="hidden" name="movieId" defaultValue={movieId} />
      <div>
        <textarea
          id="content"
          name="content"
          rows={4}
          placeholder="이 영화에 대한 생각을 자유롭게 적어주세요."
          className="w-full bg-gray-800 text-white placeholder-gray-500 border-none rounded p-3 focus:ring-2 focus:ring-red-600 focus:outline-none"
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="닉네임"
          className="w-full bg-gray-800 text-white placeholder-gray-500 border-none rounded p-3 focus:ring-2 focus:ring-red-600 focus:outline-none"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 px-4 rounded font-bold hover:bg-red-700 transition duration-300"
          disabled={isPending}
        >
          {isPending ? "리뷰 저장중..." : "리뷰 등록"}
        </button>
      </div>
    </form>
  );
}
