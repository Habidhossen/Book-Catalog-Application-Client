import { signOut } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase.init";
import { setUser } from "../redux/features/auth/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Navbar = () => {
  // declare state for handling navigation bar
  const [state, setState] = useState(false);

  // Redux dispatch and selector
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // navigation bar items with path
  const navigation = [
    { title: "All Books", to: "all-books" },
    { title: "My Wishlist", to: "wishlist" },
  ];

  // handle SignOut button
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
  };

  /* 
  // get current User from firebase
  const currentUser = getAuth().currentUser; 
  */

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <h1 className="text-2xl font-bold text-indigo-600">
              Book Application
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 hover:text-indigo-600">
                  <Link to={item.to} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              {user?.email ? (
                <li>
                  <button
                    onClick={handleSignOut}
                    className="block py-3 px-4 font-medium text-center text-white bg-red-600 hover:bg-red-500 active:bg-red-700 active:shadow-none rounded-lg shadow md:inline"
                  >
                    Sign out
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="login"
                      className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="signup"
                      className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                    >
                      Sign in
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
