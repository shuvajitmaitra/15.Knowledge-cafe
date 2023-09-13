import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="bg-white m-6 p-4 rounded-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
