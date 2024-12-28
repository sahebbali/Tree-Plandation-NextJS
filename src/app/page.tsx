import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Featured from "@/components/Featured";
import HouseShapePlant from "@/components/HouseShapePlant";
import IndoorePlant from "@/components/IndoorePlant";
import Landscaping from "@/components/Landscaping";
import NewCollection from "@/components/NewCollection";
import PopularProducts from "@/components/PopularProducts";
import Reviews from "@/components/Reviews";
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
      <Brand />

      <Reviews />
    </div>
  );
};

export default HomePage;
