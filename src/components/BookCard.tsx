const BookCard = ({ book }) => {
  const { Title, Author, Genre, PublicationDate, CoverImage } = book;

  return (
    <div className="p-4 lg:w-1/5 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src={CoverImage}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {Title}
          </h2>
          <h3 className="text-gray-500 mb-3">{Author}</h3>
          <p className="">{Genre}</p>
          <p className="mb-4">{PublicationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
