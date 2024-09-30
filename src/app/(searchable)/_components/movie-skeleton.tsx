import React from "react";

export default function MovieSkeleton() {
  return (
    <div className="animate-pulse">
      <div
        className={`w-full bg-gray-300 rounded mb-2 cursor-pointer shadow-xl pb-[150%]`}
      />
    </div>
  );
}
