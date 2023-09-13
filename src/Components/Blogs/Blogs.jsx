import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";
const Blogs = ({ handleBookmarks, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default Blogs;
