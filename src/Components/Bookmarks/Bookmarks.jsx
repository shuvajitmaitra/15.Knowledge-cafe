import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  // console.log(bookmarks);
  return (
    <div className="md:w-1/3 ">
      <div className="rounded-lg bg-slate-200 mb-6">
        <h2 className="text-3xl font-bold mx-6 mt-6 p-6 text-[#6047EC]">
          Spent time on read : {readingTime} min
        </h2>
      </div>
      <div className="rounded-lg bg-slate-200 py-2">
        <h2 className="text-3xl font-bold mx-6 ">
          Bookmarked blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
