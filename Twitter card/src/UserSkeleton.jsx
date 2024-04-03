import React from "react";

function UserSkeleton() {
  return (
    <div className="animate-pulse flex gap-16 cursor-pointer h-24 px-8 py-4 gap-4">
      <div className="flex">
        <figure className="pr-12 mr-4 bg-gray-500 aspect-square rounded-full object-cover min-w-max "></figure>
        <div className="flex flex-col justify-center">
          <div className="h-4 pr-4 px-12 bg-gray-500 rounded w-3/4"></div>
          <div className="h-4 px-12 bg-gray-500 rounded w-1/2 mt-2"></div>
        </div>
      </div>
      <div className="self-center inline-block h-fit py-4 px-12 rounded-3xl bg-gray-500 ml-auto"></div>
    </div>
  );
}

export default UserSkeleton;
