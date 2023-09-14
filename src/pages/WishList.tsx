import { removeFromWishlist } from "../redux/features/books/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Book } from "../types/globalTypes";

const WishList = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist);

  // handle remove from wishlist button
  const handleRemoveFromWishlist = (book: Book) => {
    dispatch(removeFromWishlist(book));
  };

  return (
    <div>
      {wishlist?.books?.length > 0 ? (
        <div className="container mx-auto px-80 py-20">
          {wishlist?.books?.map((book) => (
            <div className="flex" key={book._id}>
              <h1>{book.title}</h1>
              <button
                onClick={() => handleRemoveFromWishlist(book)}
                className="px-2.5 py-2.5 text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 4H16.85L15.14 2.29A2.001 2.001 0 0013.73 2H10a2 2 0 00-2 2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM7.293 18.293a1 1 0 001.414 0L12 13.414l3.293 3.293a1 1 0 101.414-1.414L13.414 12l3.293-3.293a1 1 0 00-1.414-1.414L12 10.586 8.707 7.293a1 1 0 00-1.414 1.414L10.586 12 7.293 15.293a1 1 0 000 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>Your Wishlist is empty!</div>
      )}
    </div>
  );
};

export default WishList;
