import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import NewCollection from "@/components/NewCollection";
import PopularProducts from "@/components/PopularProducts";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Featured />
      <NewCollection />
      <PopularProducts />
    </div>
  );
};

export default HomePage;
