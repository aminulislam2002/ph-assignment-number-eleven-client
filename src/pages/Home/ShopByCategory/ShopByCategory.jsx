import { useState } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [categoryData, setCategoryData] = useState([]);

  const handleCategoryData = async (categoryName) => {
    try {
      const res = await fetch(`https://ph-assignment-number-eleven-server.vercel.app/categoryToys?category=${categoryName}`);
      const data = await res.json();
      setCategoryData(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching category data:", error);
    }
  };

  console.log(categoryData);

  return (
    <div className="md:mx-20 sm:mx-10 mx-5 my-10">
      <div className="bg-blue-500 py-8">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Shop By Category</h1>
            <p className="text-lg w-2/3 mx-auto">
              The Shop by Category section on the EDU Toys Gallery website provides a convenient and organized way for
              visitors to explore and browse our extensive range of educational toys and resources. This section is designed
              to help customers quickly locate products that align with specific subjects or areas of interest, making their
              shopping experience efficient and enjoyable.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 text-white py-3">
        <button onClick={() => handleCategoryData("Science Kits")}>Science Kits</button>
        <button onClick={() => handleCategoryData("Engineering Kits")}>Engineering Kits</button>
        <button onClick={() => handleCategoryData("Math Learning Toys")}>Math Learning Toys</button>
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        {categoryData.map((category) => (
          <div key={category._id}>
            <div className="shadow-xl mt-5">
              <div className="flex justify-center items-center">
                <img className="w-48 h-40 mx-auto mt-3" src={category.image} alt="Shoes" />
              </div>
              <div className="px-5 py-5">
                <div>
                  <h2 className="card-title">{category.name}</h2>
                  <div>
                    <span className="text-gray-500 font-bold me-3">Price:</span>
                    <span className="badge badge-secondary">${category.price}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-bold me-3">Code:</span>
                    <span className="text-black font-semibold">{category.code}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 font-bold me-3">Seller:</span>
                    <span className="text-black font-semibold">{category.sellerName}</span>
                  </div>
                </div>
                <div className="flex justify-center gap-2 items-end my-3">
                  <button className="btn btn-primary w-1/2">Cart</button>
                  <button className="btn btn-secondary w-1/2">
                    <Link to={`/singleToyDetails/${category._id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
