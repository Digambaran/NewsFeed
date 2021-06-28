import React from "react";
const Card = () => (
  <div className="border col-span-full sm:col-span-1 dark:bg-gray-600 border-gray-300 shadow rounded-md w-12  w-full mx-auto">
    <div className="animate-pulse flex flex-col space-y-2">
      <div className=" bg-gray-400 w-full h-24" />
      <div className="flex-1 space-y-2 p-1">
        <div className="h-4 bg-gray-400 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-2 bg-gray-400 rounded w-5/6" />
          <div className="h-2 bg-gray-400 rounded" />
        </div>
      </div>
    </div>
  </div>
);
const LargeCard = () => (
  <div className="border dark:bg-gray-600 col-span-full sm:col-span-2 sm:row-span-2 border-gray-300 shadow rounded-md p-4  w-full mx-auto">
    <div className="animate-pulse flex flex-col space-y-2">
      <div className=" bg-gray-400 w-full h-24" />
      <div className="flex-1 space-y-2 p-1">
        <div className="h-4 bg-gray-400 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-2 bg-gray-400 rounded w-5/6" />
          <div className="h-2 bg-gray-400 rounded" />
        </div>
      </div>
    </div>
  </div>
);

const WideCard = () => (
  <div className="border dark:bg-gray-600 col-span-full sm:col-span-3 border-gray-300 shadow rounded-md p-4  w-full mx-auto">
    <div className="animate-pulse flex flex-col space-y-2">
      <div className=" bg-gray-400 w-full h-24" />
      <div className="flex-1 space-y-2 p-1">
        <div className="h-4 bg-gray-400 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-2 bg-gray-400 rounded w-5/6" />
          <div className="h-2 bg-gray-400 rounded" />
        </div>
      </div>
    </div>
  </div>
);
const TallCard = () => (
  <div className="border dark:bg-gray-600 col-span-full sm:col-span-1 row-span-2 border-gray-300 shadow rounded-md p-4  w-full mx-auto">
    <div className="animate-pulse flex flex-col space-y-2">
      <div className=" bg-gray-400 w-full h-24" />
      <div className="flex-1 space-y-2 p-1">
        <div className="h-4 bg-gray-400 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-2 bg-gray-400 rounded w-5/6" />
          <div className="h-2 bg-gray-400 rounded" />
        </div>
      </div>
    </div>
  </div>
);
export { Card, LargeCard, TallCard, WideCard };
