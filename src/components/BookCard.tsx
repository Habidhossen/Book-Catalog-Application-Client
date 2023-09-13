import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { _id, title, author, genre, publicationDate, coverImage } = book;

  return (
    <div className="p-4 lg:w-1/5 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src={coverImage}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {title}
          </h2>
          <h3 className="text-gray-500 mb-3">{author}</h3>
          <p className="">{genre}</p>
          <p className="mb-4">{publicationDate}</p>
          <Link to={`/book/${_id}`}>View Book</Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
