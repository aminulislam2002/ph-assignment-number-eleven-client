import { FaRegStar, FaStar } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const singleToy = useLoaderData();
  const { name, ratings, description, sellerName, sellerEmail, quantity, price, image } = singleToy;

  return (
    <div className="card w-11/12 mx-auto my-10 bg-slate-300">
      <div className="flex py-10">
        <div className="w-1/2">
          <div className="w-11/12 mx-auto">
            <img className="w-full h-full object-cover" src={image} alt="Toy" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-3/4 mx-auto">
            <h1 className="text-4xl font-semibold">{name}</h1>
            <div className="text-yellow-600">
                          <Rating
                            placeholderRating={ratings?.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className="bg-yellow-600 text-2xl"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                          />
                        </div>
            <p className="py-4">{description}</p>
            <table className="mb-4">
              <tbody>
                <tr>
                  <td className="text-sm font-semibold text-gray-500 pr-2">Seller:</td>
                  <td>{sellerName}</td>
                </tr>
                <tr>
                  <td className="text-sm font-semibold text-gray-500 pr-2">Seller Email:</td>
                  <td>{sellerEmail}</td>
                </tr>
                <tr>
                  <td className="text-sm font-semibold text-gray-500 pr-2">Available Quantity:</td>
                  <td>{quantity}</td>
                </tr>
              </tbody>
            </table>

            <div className="text-4xl py-6 text-red-500 font-semibold">${price}</div>

            <div className="flex gap-6 mb-4">
              <button className="btn w-1/2 border-none bg-orange-500 hover:bg-orange-700">Add To Cart</button>
              <button className="btn w-1/2 border-none bg-red-500 hover:bg-red-700">Buy Now</button>
            </div>

            <div className="flex gap-5">
              <input type="text" placeholder="Write a comment..." className="w-3/4 mx-auto rounded-full px-4 py-2" />
              <button className="btn send-comment">
                <HiOutlinePaperAirplane className=" w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
