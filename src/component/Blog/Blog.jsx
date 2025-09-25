import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks }) => {
  const {
    id,
    author,
    date,
    publishedAgo,
    readingTime,
    title,
    tags,
    coverImage,
  } = blog;
  return (
    <div>
      <div className="card bg-white w-full shadow-lg mb-8">
        <figure>
          <img className="w-full" src={coverImage} alt="Shoes" />
        </figure>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 font-mono">
            <div className="w-10 rounded-full mt-2">
              <img
                className="rounded-full"
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>

            <div>
              <h2 className="card-title text-black">{author}</h2>
              <h2 className="card-title text-black text-xs">
                {" "}
                {date} ({publishedAgo})
              </h2>
            </div>
          </div>

          <div className="flex gap-1">
            <p className="text-black text-xs">{readingTime}</p>
            <button onClick={() => handleBookmarks(blog)}>
              <FaBookmark className="text-black text-2xl" />
            </button>
          </div>
        </div>

        <h1 className="text-black text-left  mt-2">{title}</h1>

        <p className="text-slate-500 text-left mt-2">{tags}</p>

        <p className="text-purple-500 text-xs text-left mt-5 underline">
          Mark as read
        </p>
      </div>
    </div>
  );
};

export default Blog;
