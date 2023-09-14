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
        <div className="container container-lg mx-auto">
          {wishlist?.books?.map((book) => (
            <div key={book._id}>
              <h1>{book.title}</h1>
              <button onClick={() => handleRemoveFromWishlist(book)}>
                Delete from Wishlist
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
