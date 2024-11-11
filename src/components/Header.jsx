import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white p-4 flex  justify-between shadow-lg">
      <img
        className="h-16 w-20 rounded-full ml-10"
        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <div className="flex items-center mr-10 gap-4">
        <FaShoppingCart className="h-10 w-10" />
        <h1>10</h1>
      </div>
    </div>
  );
};

export default Header;
