import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import {
  setSearchQuery,
  setSelectedGenre,
  setSelectedPublicationYear,
} from "../redux/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Book } from "../types/globalTypes";

const AllBooks = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // Redux state
  const searchQuery = useAppSelector((state) => state.book.searchQuery);
  const selectedGenre = useAppSelector((state) => state.book.selectedGenre);
  const selectedPublicationYear = useAppSelector(
    (state) => state.book.selectedPublicationYear
  );

  // Handle search input change
  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  // Handle genre filter change
  const handleGenreFilterChange = (e) => {
    dispatch(setSelectedGenre(e.target.value));
  };

  // Handle publication year filter change
  const handlePublicationYearFilterChange = (e) => {
    dispatch(setSelectedPublicationYear(e.target.value));
  };

  // Filter and render books
  const filteredBooks = data?.data
    .filter((book: Book) => {
      const titleMatch = book.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const authorMatch = book.author
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const genreMatch = book.genre
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return titleMatch || authorMatch || genreMatch;
    })
    .filter((book: Book) => !selectedGenre || book.genre === selectedGenre)
    .filter(
      (book: Book) =>
        !selectedPublicationYear ||
        book.publicationDate === selectedPublicationYear
    );

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  // Determine whether to display all books or filtered books
  const displayBooks =
    searchQuery || selectedGenre || selectedPublicationYear
      ? filteredBooks
      : data?.data;

  return (
    <section>
      <div>
        {/* search bar */}
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search by title, author, or genre"
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500">
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 21a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4-4"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              Search
            </span>
          </button>
        </form>
        {/* filter */}
        <div className="flex w-full px-16 gap-8 mb-10">
          <div>
            <label className="text-sm font-medium text-gray-900">Genre:</label>
            <select
              value={selectedGenre}
              onChange={handleGenreFilterChange}
              name=""
              id=""
              className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option value="">Please select</option>
              {data?.data?.map((book: { _id: number; genre: string }) => (
                <option key={book._id} value={book?.genre}>
                  {book?.genre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900">
              Publication Year:
            </label>
            <select
              value={selectedPublicationYear}
              onChange={handlePublicationYearFilterChange}
              name=""
              id=""
              className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option value="">Please select</option>
              {data?.data?.map(
                (book: { _id: number; publicationDate: string }) => (
                  <option key={book._id} value={book?.publicationDate}>
                    {book?.publicationDate}
                  </option>
                )
              )}
            </select>
          </div>

          {/* add new book */}
          <div>
            <Link
              to="/add-new-book"
              className="flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-500 active:bg-indigo-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2a1 1 0 011 1v8h8a1 1 0 110 2h-8v8a1 1 0 11-2 0v-8H3a1 1 0 010-2h8V3a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add new Book
            </Link>
          </div>
        </div>

        {/* all book */}
        <div className="flex flex-wrap mb-4 px-16">
          {displayBooks?.map((book: Book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
