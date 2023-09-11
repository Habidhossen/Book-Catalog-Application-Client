import BookCard from "./BookCard";

const RecentlyAddedBooks = () => {
  type Book = {
    Id: string;
    Title: string;
    Author: string;
    Genre: string;
    PublicationDate: string;
    CoverImage: string;
  };

  const books: Book[] = [
    {
      Id: "1",
      Title: "To Kill a Mockingbird",
      Author: "Harper Lee",
      Genre: "Fiction",
      PublicationDate: "July 11, 1960",
      CoverImage: "https://dummyimage.com/200x200",
    },
    {
      Id: "2",
      Title: "1984",
      Author: "George Orwell",
      Genre: "Science Fiction",
      PublicationDate: "June 8, 1949",
      CoverImage: "https://dummyimage.com/200x200",
    },
    {
      Id: "3",
      Title: "Pride and Prejudice",
      Author: "Jane Austen",
      Genre: "Classic",
      PublicationDate: "January 28, 1813",
      CoverImage: "https://dummyimage.com/200x200",
    },
    {
      Id: "4",
      Title: "The Great Gatsby",
      Author: "F. Scott Fitzgerald",
      Genre: "Fiction",
      PublicationDate: "April 10, 1925",
      CoverImage: "https://dummyimage.com/200x200",
    },
    {
      Id: "5",
      Title: "The Hobbit",
      Author: "J.R.R. Tolkien",
      Genre: "Fantasy",
      PublicationDate: "September 21, 1937",
      CoverImage: "https://dummyimage.com/200x200",
    },
    {
      Id: "6",
      Title: "Harry Potter and the Sorcerer's Stone",
      Author: "J.K. Rowling",
      Genre: "Fantasy",
      PublicationDate: "June 26, 1997",
      CoverImage: "https://dummyimage.com/200x200",
    },
    {
      Id: "7",
      Title: "The Catcher in the Rye",
      Author: "J.D. Salinger",
      Genre: "Fiction",
      PublicationDate: "July 16, 1951",
      CoverImage: "https://dummyimage.com/200x200",
    },
    {
      Id: "8",
      Title: "The Lord of the Rings",
      Author: "J.R.R. Tolkien",
      Genre: "Fantasy",
      PublicationDate: "July 29, 1954",
      CoverImage: "https://dummyimage.com/200x200",
    },
    {
      Id: "9",
      Title: "To the Lighthouse",
      Author: "Virginia Woolf",
      Genre: "Modernist",
      PublicationDate: "May 5, 1927",
      CoverImage: "https://dummyimage.com/200x200",
    },
    {
      Id: "10",
      Title: "Brave New World",
      Author: "Aldous Huxley",
      Genre: "Science Fiction",
      PublicationDate: "June 2, 1932",
      CoverImage: "https://dummyimage.com/200x200",
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
            <BookCard key={book.Id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedBooks;
