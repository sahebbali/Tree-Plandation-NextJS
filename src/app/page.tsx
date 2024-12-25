import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HouseShapePlant from "@/components/HouseShapePlant";
import IndoorePlant from "@/components/IndoorePlant";
import Landscaping from "@/components/Landscaping";
import NewCollection from "@/components/NewCollection";
import PopularProducts from "@/components/PopularProducts";
import SpecialsTreeCollection from "@/components/SpecialsTreeCollection";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Featured />
      <NewCollection />
      <PopularProducts />
      <HouseShapePlant />
      <SpecialsTreeCollection />
      <IndoorePlant />
      <Landscaping />
    </div>
  );
};

export default HomePage;
