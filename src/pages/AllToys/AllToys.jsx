import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div className="mx-10 py-10">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy.name}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.category}</td>
                <td>$ {toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/singleToyDetails/${toy._id}`}>
                    <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
