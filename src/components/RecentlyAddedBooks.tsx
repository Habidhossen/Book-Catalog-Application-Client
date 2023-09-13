import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { Book } from "../types/globalTypes";
import BookCard from "./BookCard";
import Loader from "./Loader";

const RecentlyAddedBooks = () => {
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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            Recently Added Book
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            reprehenderit minus. Explicabo possimus consectetur ab!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data?.data.map((book: Book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedBooks;
