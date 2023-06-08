import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const { createUserWithEmail, createUserWithGoogle, updateUserProfile } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    console.log(form, name, email, photo, password);

    createUserWithEmail(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserProfile(result.user, name, photo);
        console.log("Created User: ", createdUser);
      })
      .catch((error) => console.log(error));
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
    <div className="w-1/3 mx-auto py-5 my-10 rounded-xl px-10 bg-gradient-to-r from-purple-500 to-indigo-500">
      <h1 className="text-4xl text-white text-center font-bold mb-4 py-2">Sign Up Now</h1>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-[18px]">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="input input-xs sm:input-sm md:input-md input-bordered"
          />
        </div>
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
            <span className="label-text text-white text-[18px]">Your Photo URL</span>
          </label>
          <input
            type="url"
            name="photoURL"
            placeholder="Enter Your Photo url"
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
            value="Sign Up"
          />
        </div>
      </form>
      <p className="text-white">
        Already have an account? <Link className="text-blue-800" to="/signIn">Sign In</Link>
      </p>
      <p className="text-center text-white">Or login with</p>
      <button
        onClick={handleGoogleSingIn}
        className="btn btn-xs sm:btn-sm md:btn-md w-full border-none bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 text-white border my-3"
      >
        <FaGoogle className="text-blue-500"></FaGoogle> Continue with Google
      </button>
    </div>
  );
};

export default SignUp;
