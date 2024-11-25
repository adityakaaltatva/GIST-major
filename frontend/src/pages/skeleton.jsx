// Skeleton.js
import React from "react";

const Skeleton = () => {
  return (
    <div className="skeleton-loader w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-xl">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>

        <div className="h-10 bg-gray-700 rounded w-full"></div>

        <div className="h-12 bg-gray-700 rounded w-full"></div>

        <div className="h-8 bg-gray-700 rounded w-full"></div>
        <div className="h-8 bg-gray-700 rounded w-full"></div>
      </div>
    </div>
  );
};

export default Skeleton;
