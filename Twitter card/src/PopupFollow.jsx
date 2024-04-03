function PopupFollow({ isOpen, unfollow, cancel, handle }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="absolute h-full w-full top-0 left-0 bg-white backdrop-blur-3xl opacity-30  z-10"></div>
      <section className="  flex gap-4 rounded-2xl flex-col absolute cursor-default bg-background-c p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto text-white max-w-96 z-20">
        <strong className="text-2xl">
          Are you sure you want to unfollow {handle}?
        </strong>
        <p className="text-gray-400 text-sm">
          Their posts will no longer appear in your Home Timeline. You will
          still be able to view their profile, unless their posts are protected
        </p>

        <button
          className="rounded-full bg-white text-black font-bold p-2 hover:bg-gray-300"
          onClick={unfollow}
        >
          Unfollow
        </button>
        <button
          className="rounded-full border border-white text-white font-bold p-2 hover:bg-gray-600"
          onClick={cancel}
        >
          Cancel
        </button>
      </section>
    </>
  );
}

export default PopupFollow;
