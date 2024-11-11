import { backgroundimage } from "../constants";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <img src={backgroundimage} className="h-[800px] w-full" />
        <div className="text-lg flex-col absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <p className="font-bold">Order food from the widest range of</p>
          <p className="font-bold">restaurants.</p>
          <div className="flex gap-4 mt-4">
            <input className="p-4 w-96 rounded-xl" placeholder="Restaurants or cuisine" />
            <button className="bg-[#FFDD00] p-4 rounded-xl">Find Restaurants</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
