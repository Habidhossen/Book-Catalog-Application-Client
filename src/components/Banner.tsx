import { Link } from "react-router-dom";
import bannerImg from "../assets/images/banner.svg";

const Banner = () => {
  return (
    <section className="bg-lime-50 h-screen">
      {/* Gradient and blur background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-indigo-200 to-indigo-50 blur-xl z-0"></div> */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
        <img className="mt-48" src={bannerImg} alt="banner" />
        <div className="p-8">
          <p className="uppercase text-sm font-medium text-[#16A571]">
            The best of 2023
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold lg:leading-snug">
            Meet Your Next <br />
            <span className="text-[#16A571]">Favorite</span> Book.
          </h1>

          <Link
            to="all-books"
            className="my-3 group relative inline-flex items-center overflow-hidden rounded-full bg-gray-950 px-8 py-3 text-white"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 rtl:rotate-90 transform"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span className="text-sm font-medium transition-all group-hover:me-4">
              Discover Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
