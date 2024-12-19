import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import NewCollection from "@/components/NewCollection";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Featured />
      <NewCollection />
    </div>
  );
};

export default HomePage;
