import { Link } from "react-router-dom";
import { FaDumbbell, FaFileInvoiceDollar, FaHeadset } from "react-icons/fa";
import { FiMessageSquare, FiSettings } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="shadow-xl md:h-screen">
      <div className="px-5  md:pt-5">
        <Link to="/">
          <img src="../../public/./feet.png" alt="" />
        </Link>
      </div>
      <div className=" md:pt-5 mt-10">
        <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
          <FaDumbbell className="text-2xl"></FaDumbbell>
          <Link to="/AddProducts">
            <p className=" border-none mx-auto w-full ml-10 font-semibold sm:hidden md:flex">All Product</p>
          </Link>
        </div>
        <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
          <FiMessageSquare className="text-2xl"></FiMessageSquare>
          <Link to="/AddProducts">
            <p className=" border-none	 mx-auto  w-full  ml-10 font-semibold">Messages</p>
          </Link>
        </div>
        <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
          <FaFileInvoiceDollar className="text-2xl"></FaFileInvoiceDollar>
          <Link to="/AddProducts">
            <p className=" border-none	 mx-auto  w-full  ml-10 font-semibold ">Bills</p>
          </Link>
        </div>
        <hr />
        <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
          <FiSettings className="text-2xl"></FiSettings>
          <Link to="/AddProducts">
            <p className=" border-none	 mx-auto  w-full  ml-10 font-semibold">Settings</p>
          </Link>
        </div>
        <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
          <FaHeadset className="text-2xl"></FaHeadset>
          <Link to="/AddProducts">
            <p className=" border-none	 mx-auto  w-full  ml-10 font-semibold">Support</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
