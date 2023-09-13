import { BsBookmarks } from "react-icons/bs";
import PropTypes from "prop-types";
import "./Blog.css";
const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
  const { id, title, cover, hashtag, reading_time, author, publish_date } =
    blog;
  return (
    <div className="border-b-2 border-gray-400 pb-14 mb-14">
      <img src={cover} alt="" className="cover-image" />
      <div className="flex justify-between items-center my-8 ">
        <div className="flex gap-6 items-center mb-4">
          <div className="author-image">
            <img src={author.image} alt="" />
          </div>
          <div>
            <h4 className="text-2xl font-bold">{author.name}</h4>
            <p className="font-semibold text-[#11111199]">{publish_date}</p>
          </div>
        </div>
        <div className="flex  justify-center  gap-3 mr-2">
          <p className="text-[#11111199] ">{reading_time} min read</p>
          <button className="text-2xl" onClick={() => handleBookmarks(blog)}>
            <BsBookmarks />
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-[#11111199]  "> {hashtag} </p>
      <button onClick={() => handleReadingTime(reading_time, id)}>
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default Blog;
