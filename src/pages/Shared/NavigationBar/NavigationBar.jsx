import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/logo-1.png";

const NavigationBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOutUser = () => {
    logOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
      </li>
      <li>
        <Link to="/allToys" className="text-white hover:text-gray-300">
          All Toys
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/myToys" className="text-white hover:text-gray-300">
              My Toys
            </Link>
          </li>
          <li>
            <Link to="/addToy" className="text-white hover:text-gray-300">
              Add a Toy
            </Link>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <Link to="/blogs" className="text-white hover:text-gray-300">
          Blogs
        </Link>
      </li>
      <li>
        <Link to="/signUp" className="text-white hover:text-gray-300">
          Sign Up
        </Link>
      </li>
      {user ? (
        <li>
          <button onClick={handleLogOutUser} className="btn btn-ghost text-white hover:text-gray-300">
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <Link to="/signIn" className="text-white hover:text-gray-300">
            SingIn
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-blue-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-200 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <div className="flex items-center">
          <img src={logo} className="w-10 h-10 rounded-xl mr-2" alt="" />
          <h3 className="text-3xl font-bold">
            <span className="text-purple-600">EDU</span> Toys Gallery
          </h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <img className="w-15 h-8 rounded-full" src={user?.photoURL} alt={user?.displayName} title={user?.displayName} />
        ) : (
          <Link to="/logIn" className="text-white hover:text-gray-300">
            Profile
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
