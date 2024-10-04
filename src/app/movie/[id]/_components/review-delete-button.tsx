"use client";

import { useActionState, useEffect, useRef } from "react";

import deleteReview from "@/actions/delete-review";

export default function ReviewDeleteButton({
  reviewId,
  movieId,
}: {
  reviewId: string;
  movieId: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(deleteReview, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  const onClick = () => {
    if (isPending) {
      return;
    }
    formRef.current?.requestSubmit();
  };

  return (
    <form action={formAction} ref={formRef}>
      <input hidden name="reviewId" defaultValue={reviewId} />
      <input hidden name="movieId" defaultValue={movieId} />
      <button
        onClick={onClick}
        disabled={isPending}
        className="text-sm text-gray-400 border border-gray-400 rounded-md px-2 py-1 hover:bg-gray-400 hover:text-white active:bg-gray-500"
      >
        {isPending ? "삭제중..." : "🗑️ 삭제하기"}
      </button>
    </form>
  );
}
