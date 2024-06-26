import { BiBookOpen, BiMenu } from "react-icons/bi";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineFileAdd,
  AiOutlineProfile,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { MdOutlineSpaceDashboard } from "react-icons/md";

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
        <div className="px-5 mt-5">
          <Outlet />
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
              <MdOutlineSpaceDashboard /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/profile`}>
              <AiOutlineProfile /> Profile
            </NavLink>
          </li>

          <li>
            <NavLink to={`/dashboard/add-poem`}>
              <AiOutlineFileAdd /> Add Poem
            </NavLink>
          </li>

          <li>
            <NavLink to={`/dashboard/all-poems`}>
              {" "}
              <AiOutlineUnorderedList />
              My Poems
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
