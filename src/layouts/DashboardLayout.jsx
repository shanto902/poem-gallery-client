import { BiBookOpen, BiMenu } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";
import PaddingContainer from "../components/PaddingContainer";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer-2"
          className="absolute p-2 text-4xl drawer-button lg:hidden bg-base-200"
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

        <ul className="min-h-full p-4 space-y-2 menu w-80 bg-base-200 text-base-content">
          <Link to={"/"} className="text-xl btn btn-ghost">
            <BiBookOpen className="mt-1 text-2xl " /> Poem Gallery
          </Link>
          <li>
            <NavLink to={"/dashboard/"} end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/profile`}>Profile</NavLink>
          </li>

          <li>
            <NavLink to={`/dashboard/add-poem`}>Add Poem</NavLink>
          </li>

          <li>
            <NavLink to={`/dashboard/all-poems`}>My Poems</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
