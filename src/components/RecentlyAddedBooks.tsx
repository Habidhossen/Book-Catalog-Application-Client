import { Book } from "../types/globalTypes";
import BookCard from "./BookCard";

const RecentlyAddedBooks = () => {
  const books: Book[] = [
    {
      _id: "1",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationDate: "July 11, 1960",
      coverImage: "https://dummyimage.com/200x200",
    },
    {
      _id: "2",
      title: "1984",
      author: "George Orwell",
      genre: "Science Fiction",
      publicationDate: "June 8, 1949",
      coverImage: "https://dummyimage.com/200x200",
    },
    {
      _id: "3",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Classic",
      publicationDate: "January 28, 1813",
      coverImage: "https://dummyimage.com/200x200",
    },
    {
      _id: "4",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      publicationDate: "April 10, 1925",
      coverImage: "https://dummyimage.com/200x200",
    },
    {
      _id: "5",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationDate: "September 21, 1937",
      coverImage: "https://dummyimage.com/200x200",
    },
    {
      _id: "6",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      publicationDate: "June 26, 1997",
      coverImage: "https://dummyimage.com/200x200",
    },
    {
      _id: "7",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publicationDate: "July 16, 1951",
      coverImage: "https://dummyimage.com/200x200",
    },
    {
      _id: "8",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationDate: "July 29, 1954",
      coverImage: "https://dummyimage.com/200x200",
    },
    {
      _id: "9",
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      genre: "Modernist",
      publicationDate: "May 5, 1927",
      coverImage: "https://dummyimage.com/200x200",
    },
    {
      _id: "10",
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Science Fiction",
      publicationDate: "June 2, 1932",
      coverImage: "https://dummyimage.com/200x200",
    },
  ];

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
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedBooks;
