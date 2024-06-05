import { BiBookOpen, BiMenu } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";
import PaddingContainer from "../components/PaddingContainer";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button text-4xl  lg:hidden p-2 bg-base-200 absolute"
        >
          <BiMenu />
        </label>
        <div className="mt-2">
          <PaddingContainer>
            <Outlet />
          </PaddingContainer>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-2">
          <Link to={"/"} className="btn btn-ghost text-xl">
            <BiBookOpen className="  text-2xl mt-1" /> Poem Gallery
          </Link>
          <li>
            <NavLink to={"/dashboard/"} end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/profile`}>Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
