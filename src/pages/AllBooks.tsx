import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { Book } from "../types/globalTypes";

const AllBooks = () => {
  // fetching data by RTK Query
  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  return (
    <section>
      <div>
        {/* search bar */}
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
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
              name=""
              id=""
              className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option value="">Please select</option>
              {data?.data?.map((book) => (
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
              name=""
              id=""
              className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option value="">Please select</option>
              {data?.data?.map((book) => (
                <option key={book._id} value={book?.publicationDate}>
                  {book?.publicationDate}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* all book */}
        <div className="flex flex-wrap mb-4 px-16">
          {data?.data.map((book: Book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
