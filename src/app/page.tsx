import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HouseShapePlant from "@/components/HouseShapePlant";
import NewCollection from "@/components/NewCollection";
import PopularProducts from "@/components/PopularProducts";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Featured />
      <NewCollection />
      <PopularProducts />
      <HouseShapePlant />
    </div>
  );
};

export default HomePage;
