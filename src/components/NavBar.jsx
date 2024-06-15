import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { BiBookOpen } from "react-icons/bi";
import { LuLogIn } from "react-icons/lu";

const NavBar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="sticky top-0 z-10 glass">
      <div className="mx-auto navbar max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </li>
              )}
              <li>
                <NavLink to={"/all-poems"}>All Poems</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About Us</NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="text-xl btn btn-ghost">
            <BiBookOpen className="mt-1 text-2xl " /> Poem Gallery
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="gap-2 px-1 menu menu-horizontal">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </li>
            )}
            <li>
              <NavLink to={"/all-poems"}>All Poems</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <Link to={"/login"} className="btn btn-ghost">
              <LuLogIn className="mt-1 " /> Login
            </Link>
          ) : (
            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://avatar.iran.liara.run/public"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={"/dashboard/profile"} className="justify-between">
                      Profile
                    </Link>
                  </li>

                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
