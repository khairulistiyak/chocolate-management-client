import { Link } from "react-router-dom";
import { FaDumbbell, FaFileInvoiceDollar, FaFolderPlus } from "react-icons/fa";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import ActiveLink from "./ActiveLink";

const NavBar = () => {
  return (
    <div className="shadow-xl md:h-screen">
      <div className="md:py-5 pl-5 bg-yellow-400 flex justify-left items-center">
        <FaDumbbell className="text-4xl"></FaDumbbell>
        <div className="ml-2">
          <Link to="/">
            {/* <img src="../../public/./feet.png" alt="" /> */}
            <p className="text-3xl">
              FIT<span className="font-semibold ">NESS</span>
            </p>
          </Link>
        </div>
      </div>
      <div className=" md:pt-5 mt-10">
        <ActiveLink to="/" className="bg-slate-500">
          <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
            <FaDumbbell className="text-2xl"></FaDumbbell>
            <div>
              <p className=" border-none mx-auto w-full ml-10 font-semibold sm:hidden md:flex">All Products</p>
            </div>
          </div>
        </ActiveLink>
        <ActiveLink to="/addProducts">
          <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
            <FaFolderPlus className="text-3xl"></FaFolderPlus>

            <p className="border-none mx-auto w-full ml-10 font-semibold sm:hidden md:flex">Add Products</p>
          </div>
        </ActiveLink>
        <ActiveLink to="/Messages">
          <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
            <FiMessageSquare className="text-3xl"></FiMessageSquare>

            <p className=" border-none mx-auto w-full ml-10 font-semibold sm:hidden md:flex">Messages</p>
          </div>
        </ActiveLink>
        <ActiveLink to="/bills">
          <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
            <FaFileInvoiceDollar className="text-3xl"></FaFileInvoiceDollar>

            <p className=" border-none mx-auto w-full ml-10 font-semibold sm:hidden md:flex">Bills</p>
          </div>
        </ActiveLink>

        <hr />

        <ActiveLink to="/settings">
          <div className="flex items-center hover:bg-yellow-400 mx-auto w-full h-16 px-5">
            <FiSettings className="text-3xl"></FiSettings>

            <p className=" border-none mx-auto w-full ml-10 font-semibold sm:hidden md:flex">Settings</p>
          </div>
        </ActiveLink>
      </div>
    </div>
  );
};

export default NavBar;
