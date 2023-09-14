import { SubmitHandler, useForm } from "react-hook-form";
import { usePostBookMutation } from "../redux/features/books/bookApi";
import { Book } from "../types/globalTypes";

const AddNewBook = () => {
  const [postBook, { isLoading, isError }] = usePostBookMutation();

  console.log(isLoading, isError);

  // Create the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>();

  // Define the onSubmit function with the correct type
  const onSubmit: SubmitHandler<Book> = (data) => {
    const bookData = {
      ...data,
      coverImage:
        "https://www.seobongo.com/en/placeholder/600x800/d5d5d5/584959/Book%20Catalog%20Application/png", //just add a new field for book cover placeholder in current object
    };
    postBook(bookData);
  };
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-slate-50 px-8 py-6 rounded-xl text-gray-600 max-w-md w-full">
        <div className="text-center pb-8">
          <h3 className="text-gray-800 text-xl font-bold">Add a new Book</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="font-medium">Book Title</label>
            <input
              type="text"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 mt-2 text-xs">
                Book title is required
              </span>
            )}
          </div>
          <div>
            <label className="font-medium">Author</label>
            <input
              type="text"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              {...register("author", { required: true })}
            />
            {errors.author && (
              <span className="text-red-500 mt-2 text-xs">
                Author is required
              </span>
            )}
          </div>
          <div>
            <label className="font-medium">Genre</label>
            <input
              type="text"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              {...register("genre", { required: true })}
            />
            {errors.genre && (
              <span className="text-red-500 mt-2 text-xs">
                Genre is required
              </span>
            )}
          </div>
          <div>
            <label className="font-medium">Publication Date</label>
            <input
              type="number"
              min="1900"
              max="2099"
              step="1"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              {...register("publicationDate", { required: true })}
            />
            {errors.publicationDate && (
              <span className="text-red-500 mt-2 text-xs">
                Publication Date is required
              </span>
            )}
          </div>

          <div className="pt-4">
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewBook;
