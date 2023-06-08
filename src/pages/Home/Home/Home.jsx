import { useLoaderData } from "react-router-dom";
import ImagesGallery from "../ImageGallery/ImagesGallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <ImagesGallery></ImagesGallery>
      <ShopByCategory data={data}></ShopByCategory>
    </div>
  );
};

export default Home;
