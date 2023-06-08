import { useEffect, useState } from "react";

const ImagesGallery = () => {
  const [toys, setToys] = useState([]);
  const [showMoreToy, setShowMoreToy] = useState(6);
  const [showAllData, setShowAllData] = useState(false);

  useEffect(() => {
    fetch("https://ph-assignment-number-eleven-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleShowMoreToy = () => {
    if (showAllData) {
      setShowMoreToy(6);
      setShowAllData(false);
    } else {
      setShowMoreToy(toys.length);
      setShowAllData(true);
    }
  };

  return (
    <div className="md:mx-20 sm:mx-10 mx-5 my-10">
      <div className="bg-blue-500 py-8">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Our latest product gallery</h1>
            <p className="text-lg w-2/3 mx-auto">
            Welcome to our captivating Photo Gallery at Edu Toys Gallery! Immerse yourself in a visual journey through our extensive collection of educational toys.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-3">
        {toys.slice(0, showMoreToy).map((toy) => (
          <div key={toy._id}>
            <div data-aos="fade-up" className="p-3 bg-white rounded shadow">
              <img className="w-44 h-28 mx-auto object-cover rounded" src={toy.image} alt="" />
              <h1 className="text-center mt-2">{toy.name}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        <button
          onClick={handleShowMoreToy}
          className="btn bg-green-500 hover:bg-green-600 border-none text-white font-bold py-2 px-4 rounded"
        >
          {showAllData ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default ImagesGallery;
