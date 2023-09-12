const Footer = () => {
  return (
    <footer className="bg-indigo-50 flex flex-col items-center sm:flex-row sm:justify-between py-8 px-8 mx-auto md:flex md:px-12">
      <p className="text-sm text-gray-500">
        © Copyright 2023. All Rights Reserved.
      </p>

      <div className="flex mt-3 -mx-2 sm:mt-0">
        <a
          href=""
          className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Reddit"
        >
          {" "}
          Teams{" "}
        </a>

        <a
          href=""
          className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Reddit"
        >
          {" "}
          Privacy{" "}
        </a>

        <a
          href=""
          className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Reddit"
        >
          {" "}
          Cookies{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
