import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { _id, name, category, title, image, sellerName, price, sellerEmail, quantity, description, ratings, brand, code } =
    toy;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const title = form.title.value;
    const image = form.image.value;
    const sellerName = form.sellerName.value;
    const price = form.price.value;
    const sellerEmail = form.sellerEmail.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const ratings = form.ratings.value;
    const brand = form.brand.value;
    const code = form.code.value;

    const updatedToy = {
      name,
      category,
      title,
      image,
      sellerName,
      price,
      sellerEmail,
      quantity,
      description,
      ratings,
      brand,
      code,
    };

    console.log(updatedToy);

    fetch(`https://ph-assignment-number-eleven-server.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update a toy successfully!",
            icon: "Success",
            confirmButtonText: "Okay!",
          });
        }
      });
  };

  return (
    <div className="py-10 mx-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg rounded-lg my-10">
      <form onSubmit={handleUpdateToy}>
        <div className="grid grid-cols-3 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter Your Product Name"
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Product Category</span>
            </label>
            <div className="input-group">
              <select name="category" className="select select-bordered w-10/12 mx-auto">
                <option disabled selected>
                  {category}
                </option>
                <option>Science Kits</option>
                <option>Engineering Kits</option>
                <option>Math Learning Toys</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Product Code</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="code"
                defaultValue={code}
                placeholder="Enter Your Product Code"
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                defaultValue={brand}
                placeholder="Enter Your Product Brand"
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Product Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Enter Your Product Title"
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Product Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Enter Your Product URL"
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Product Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Enter Your Product Price"
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                placeholder="Enter Available Product Quantity"
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Product Ratings</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="ratings"
                defaultValue={ratings}
                placeholder="Enter Your Product Ratings"
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="sellerName"
                name="sellerName"
                placeholder="Enter Your Name"
                defaultValue={sellerName}
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="sellerEmail"
                placeholder="Enter Your Email"
                defaultValue={sellerEmail}
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text w-10/12 mx-auto">Write Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Enter Description About Your Product "
                className="input input-bordered w-10/12 mx-auto py-2 px-3 mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-1/2 mx-auto">
          <label className="input-group input-group-vertical">
            <input
              type="submit"
              className="btn btn-primary py-2 px-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 hover:border-none mt-10"
              value="Update"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
