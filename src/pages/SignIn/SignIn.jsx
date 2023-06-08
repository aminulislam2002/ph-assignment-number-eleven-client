import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const { logInUser, createUserWithGoogle } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, email, password);

    logInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log("Logged In User", loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSingIn = () => {
    createUserWithGoogle(googleProvider)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className=" py-5 my-10">
      <div className="w-1/3 mx-auto rounded-xl px-10 bg-gradient-to-r from-purple-500 to-indigo-500">
        <h1 className="text-4xl text-white text-center font-bold mb-4 py-2">Sign In Now</h1>
        <form onSubmit={handleSignIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-[18px]">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-xs sm:input-sm md:input-md input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-[18px]">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input input-xs sm:input-sm md:input-md input-bordered"
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white border-none my-3 hover:from-blue-700 hover:to-blue-900"
              value="Sign In"
            />
          </div>
        </form>
        <p className="text-white">
          New to ABC Toy Shop?
          <Link className="text-blue-800" to="/signUp">
            Sign Up
          </Link>
        </p>
        <p className="text-center text-white">Or login with</p>
        <button
          onClick={handleGoogleSingIn}
          className="btn btn-xs sm:btn-sm md:btn-md w-full border-none bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 text-white border my-3"
        >
          <FaGoogle className="text-white mr-1"></FaGoogle> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
