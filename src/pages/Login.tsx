import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, loginWithGoogle } from "../redux/features/auth/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Login = () => {
  // Define the form data structure
  type FormData = {
    email: string;
    password: string;
  };

  // React navigate hook
  const navigate = useNavigate();

  // Redux dispatch and selector
  const {
    user,
    isLoading,
    error: firebaseError,
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // Create the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Define the onSubmit function with the correct type
  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  // handle google login button
  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  // if user successfully login
  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user?.email]);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <div className="mt-5">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="label-text-alt text-red-500 mt-2">
                Email is required
              </span>
            )}
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="label-text-alt text-red-500 mt-2">
                Password is required
              </span>
            )}
            {firebaseError && (
              <span className="label-text-alt text-red-500 mt-2 text-center">
                {firebaseError}
              </span>
            )}
          </div>
          <div className="pt-4">
            <button className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150">
              Login
            </button>
          </div>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_17_40)">
              <path
                d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                fill="#4285F4"
              />
              <path
                d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                fill="#34A853"
              />
              <path
                d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                fill="#FBBC04"
              />
              <path
                d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Continue with Google
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-green-600 hover:text-green-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
