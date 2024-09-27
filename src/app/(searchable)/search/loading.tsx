import React from "react";

const NetflixLoader = () => (
  <div className="relative w-full h-1 bg-gray-200 overflow-hidden">
    <div className="absolute top-0 h-full w-1/3 bg-red-600 animate-netflixLoader"></div>
  </div>
);

export default function SearchLoading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="w-56">
        <NetflixLoader />
      </div>
      <p className="mt-4 text-red-600">로딩중...</p>
    </div>
  );
}
