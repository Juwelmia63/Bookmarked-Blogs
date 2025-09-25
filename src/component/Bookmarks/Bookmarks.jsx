import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-1/3 text-black ml-6 mb-6 bg-slate-200 rounded-2xl shadow-lg">
      {/* spend time  */}
      <div className="bg-white rounded-3xl p-3 m-4">
        <p className="">Spent time on read : 177 min</p>
      </div>

      {/* Bookmarked Blogs */}

      <p className="text-left ml-8">Bookmarked Blogs : {bookmarks.length}</p>

      <div className="">
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
