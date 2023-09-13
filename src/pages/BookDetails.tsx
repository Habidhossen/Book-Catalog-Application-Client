import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import {
  useDeleteBookMutation,
  useGetOneBookQuery,
} from "../redux/features/books/bookApi";

const BookDetails = () => {
  // get book id from params
  const { id: bookId } = useParams();
  // for navigate
  const navigate = useNavigate();

  // fetching data by RTK Query
  const { data, isLoading, isError } = useGetOneBookQuery(bookId, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteBook, { isSuccess }] = useDeleteBookMutation();

  console.log(isLoading, isError);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  const handleDeleteBtn = (bookId: string) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (isConfirmed) {
      deleteBook(bookId);
    }
  };

  // is Success return to book details page
  if (isSuccess) {
    navigate("/");
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="book"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={data?.data?.coverImage}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data?.data?.title}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Genre: {data?.data?.genre}
            </h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Author: {data?.data?.author}
            </h2>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-purple-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">
                  {data?.data?.reviews.length} Reviews
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"></span>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex">
              <Link
                to={`/edit-book/${data?.data?._id}`}
                className="flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"
              >
                Edit Book
              </Link>
              <button
                onClick={() => handleDeleteBtn(data?.data?._id)}
                className="flex ml-4 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                {isLoading ? "Loading..." : "Delete Book"}
              </button>
            </div>
          </div>

          {/* review section */}
          <div className="w-full">
            <h1 className="text-xl font-semibold mt-8 mb-2">
              Reviews and Ratings ({data?.data?.reviews.length})
            </h1>

            {/* card */}
            {data?.data?.reviews.map((review) => (
              <div
                className="border-2 px-10 py-4 rounded-lg mb-2"
                key={review._id}
              >
                <div className="flex items-center gap-x-3">
                  <img
                    src={
                      review?.image
                        ? review?.image
                        : "https://t4.ftcdn.net/jpg/05/42/36/11/360_F_542361185_VFRJWpR2FH5OiAEVveWO7oZnfSccZfD3.jpg"
                    }
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <span className="block text-gray-700 font-medium">
                      {review?.username}
                    </span>
                    <div className="flex items-center gap-3">
                      {/* render star based on ratings */}
                      <span className="flex items-center">
                        {Array.from({ length: 5 }, (_, index) => (
                          <svg
                            key={index}
                            fill={
                              index < review?.rating ? "currentColor" : "none"
                            }
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4 text-purple-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                        ))}
                      </span>
                      {review?.rating} out of 5
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="mt-2">{review?.comment}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
