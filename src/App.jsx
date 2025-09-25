import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);

  const handleReadingtime = (time, id) => {
    const numberConvertimee = JSON.parse(time);
    const newreadingtime = readingtime + numberConvertimee;
    setReadingtime(newreadingtime);

    const remainnigBookmark = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );

    setBookmarks(remainnigBookmark);
  };

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className="flex justify-center  mt-10">
          <Blogs
            handleBookmarks={handleBookmarks}
            handleReadingtime={handleReadingtime}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingtime={readingtime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
