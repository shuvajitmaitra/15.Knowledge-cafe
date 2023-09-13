import "./App.css";
// import PropTypes from "prop-types";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  // State declare..........
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  // console.log(bookmarks);
  //

  // Bookmarks handler function ...........
  const handleBookmarks = (blog) => {
    const newBookmark = [...bookmarks, blog];
    if (bookmarks.find((item) => item.id === blog.id)) {
      return Swal.fire({
        icon: "error",
        title: "You added the blog before...",
      });
    } else {
      setBookmarks(newBookmark);
    }
    // console.log(blog);
  };

  //Reading time handler function.......
  const handleReadingTime = (time, id) => {
    // console.log(time);
    if (bookmarks.find((item) => item.id !== id)) {
      return Swal.fire({
        icon: "error",
        title: "You added the blog before...",
      });
    } else {
      setReadingTime(readingTime + time);
    }

    // console.log(readingTime);
    const readItem = bookmarks.filter((item) => item.id !== id);
    setBookmarks(readItem);
  };
  return (
    <div className="app-container">
      <div className="bg-slate-50">
        <Header></Header>
      </div>
      <div className="container md:flex mx-auto gap-6 my-6">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}
// App.propTypes = {
//   blog: PropTypes.object.isRequired,
// };
export default App;
