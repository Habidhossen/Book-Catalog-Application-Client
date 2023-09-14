import { Link } from "react-router-dom";
import { addToWishlist } from "../redux/features/books/wishlistSlice";
import { useAppDispatch } from "../redux/hook";

const BookCard = ({ book }) => {
  // handle dispatch
  const dispatch = useAppDispatch();

  // destructure book object
  const { _id, title, author, genre, publicationDate, coverImage } = book;

  // handle add to wishlist
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(book));
  };

  return (
    <div className="p-4 lg:w-1/5 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src={coverImage}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {title}
          </h2>
          <h3 className="text-gray-500 mb-3">{author}</h3>
          <p className="">{genre}</p>
          <p className="mb-4">{publicationDate}</p>
          <Link to={`/book/${_id}`}>View Book</Link>

          <button
            onClick={() => handleAddToWishlist()}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
