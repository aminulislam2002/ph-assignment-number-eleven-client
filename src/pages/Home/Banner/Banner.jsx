import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="md:mx-20 sm:mx-10 mx-5 my-10">
      <div className="grid grid-cols-2 gap-4 mt-10 bg-gradient-to-r from-gray-100 to-purple-100">
        <div className="ml-10">
          <h1 className="text-4xl font-bold mb-4">
            Hello, <span className="text-purple-500">{user?.displayName}</span> Your Dream Toy is here
          </h1>
          <p className="text-xl mb-6">
          EDU Toys Gallery is an educational toy seller shop. That online platform that offers a wide range of educational toys and resources for children. Our website is designed to provide a stimulating learning experience for kids while offering parents and educators a convenient and reliable source for educational products
          </p>
          <button className="btn bg-green-500 hover:bg-green-600 border-none text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div>
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/stylish-young-entrepreneur-girl-with-laptop-sitting-cafe-pointing-finger-advertisement-banner_1258-123829.jpg?size=626&ext=jpg&ga=GA1.1.235952763.1681062999&semt=sph"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
