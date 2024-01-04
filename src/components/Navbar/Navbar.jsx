import { useContext, useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { MdSportsMartialArts } from "react-icons/md";
const Navbar = () => {
  // dark mode
  //  const [isDarkMode, setIsDarkMode] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-400 to-lime-600 text-white sticky top-0 left-0 z-50 font-bold lg:pl-12">
      {/* <DayNightToggle
        onChange={() => setIsDarkMode(!isDarkMode)}
        checked={isDarkMode}
      /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-16">
        <div className="flex items-center lg:space-x-64">
          {/* div-1  */}
          <div className="text-xl w-16">
            <MdSportsMartialArts className="text-[50px] text-black" />
          </div>
          {/* div-2 */}
          <div className="hidden md:block items-baseline space-x-4 menu menu-horizontal px-1">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Classes
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "default"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          {/* div-3 */}
          {/* logout and profile */}
          <div className=" flex items-center mb-3 lg:pl-10">
            <div className="">
              {user ? (
                <Link to="/login">
                  <button
                    onClick={handleLogOut}
                    className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:red-pink-500 font-bold hover:to-red-500"
                  >
                    LogOut
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="group relative h-12 w-24 overflow-hidden rounded-lg bg-white text-lg shadow">
                    <div className="absolute inset-0 w-3 bg-gradient-to-r from-red-500 to-indigo-500 text-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">
                      Login
                    </span>
                  </button>
                </Link>
              )}
            </div>
            <div className="avatar placeholder mt-3 mr-2">
              {user && (
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <img
                    className="cursor-pointer"
                    title={user.displayName}
                    src={user?.photoURL}
                  />
                </div>
              )}
            </div>

            <div onClick={handleTheme} className="mt-4">
              {theme === "dark" ? (
                <FaMoon
                  size={24}
                  className="text-yellow-500"
                  title="Light Mode"
                />
              ) : (
                <FaMoon size={22} className="text-white" title="Dark Mode" />
              )}
            </div>
          </div>
        </div>

        <div className="ml-4 flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <ul className="menu px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard "
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
          {user ? (
            <Link to="/login">
              <button
                onClick={handleLogOut}
                className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-orange-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500"
              >
                LogOut
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-5 py-2.5  bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
