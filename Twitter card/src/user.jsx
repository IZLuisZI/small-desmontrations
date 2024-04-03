import React, { useState } from "react";
import PopupFollow from "./PopupFollow.jsx";
import UserSkeleton from "./UserSkeleton.jsx";
import { useEffect } from "react";
function User({ name, handle, photo, isfollowing }) {
  const [followingStatus, setfollowingStatus] = useState(isfollowing);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const followButtonClass = followingStatus
    ? "self-center inline-block h-fit py-2 px-6 rounded-3xl font-bold text-white bg-black hover:bg-gray-700 hover:text-red-600 ml-auto"
    : "self-center inline-block h-fit py-2 px-6 rounded-3xl font-bold text-black bg-white hover:bg-gray-400 ml-auto";

  const text = followingStatus ? "Following" : "Follow";

  useEffect(() => {
    if (name && handle && photo) {
      setLoading(false); // Set loading to false when the data has loaded
    }
  }, [name, handle, photo]);

  function followStatus() {
    setfollowingStatus(true);

    setIsOpen(followingStatus);
  }

  function handleConfirmUnfollow() {
    setfollowingStatus(false);
    setIsOpen(false);
  }
  function handleCancelUnfollow() {
    setIsOpen(false);
  }

  if (loading) {
    return <UserSkeleton />;
  }

  return (
    <>
      <div className="flex cursor-pointer h-24 px-8 py-4 gap-4 hover:bg-gray-600">
        <div className="flex">
          <figure className="pr-4 hover:opacity-80 object-cover min-w-max ">
            <img
              className="max-w-full max-h-full min-w-full aspect-square h-20  rounded-full object-cover"
              src={photo}
              alt={name}
            />
          </figure>
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-xl hover:underline ">
              {name}
            </h1>
            <p className="text-gray-500 text-xl">{handle}</p>
          </div>
        </div>
        <span onClick={followStatus} className={followButtonClass}>
          {text}
        </span>
      </div>
      <PopupFollow
        isOpen={isOpen}
        unfollow={handleConfirmUnfollow}
        cancel={handleCancelUnfollow}
        handle={handle}
      />
    </>
  );
}

export default User;
