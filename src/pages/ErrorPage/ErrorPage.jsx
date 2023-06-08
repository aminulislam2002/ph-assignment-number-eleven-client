import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 Page Not Found</h1>
      <p className="text-xl mb-8">Oops! The page your looking for does not exist.</p>
      <button
        href="/"
        className="px-6 py-3 bg-gray-800 text-white font-bold text-lg rounded transition-colors duration-300 hover:bg-gray-700"
      >
        <Link to="/">Go back to homepage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
