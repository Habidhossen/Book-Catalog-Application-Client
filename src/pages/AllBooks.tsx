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
        <div className="relative mt-2 w-full text-gray-500">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by title, author, or genre"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
          <div className="absolute inset-y-0 right-3 flex items-center">
            <select className="text-sm bg-transparent outline-none px-1 rounded-lg h-full">
              <option disabled>Filter</option>
              <option>Genre</option>
              <option>Publication Year</option>
            </select>
          </div>
        </div>

        {/* all book */}
        <div className="flex flex-wrap -m-4">
          {data?.data.map((book: Book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
