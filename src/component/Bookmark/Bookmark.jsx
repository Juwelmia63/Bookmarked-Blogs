const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md mx-7 mt-3 p-5 text-left">
      <p>{bookmark.title}</p>
    </div>
  );
};

export default Bookmark;
