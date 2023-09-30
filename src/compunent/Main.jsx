import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="grid md:grid-cols-5 gap- md-w-150px ">
        <div className="mx-auto w-full ">
          <NavBar></NavBar>
        </div>
        <div className="md:col-span-4 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
