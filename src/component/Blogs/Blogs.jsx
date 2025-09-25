import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmarks }) => {
  const [blos, setBlogs] = useState([]);

  //   console.log(blos);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      {blos.map((blog) => (
        <Blog
          key={blog.id}
          handleBookmarks={handleBookmarks}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
