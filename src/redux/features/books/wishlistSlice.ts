import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  coverImage?: string;
}

interface WishlistState {
  books: IBook[];
}

const initialState: WishlistState = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      const existingBook = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (!existingBook) {
        state.books.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
