import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const {user} = useContext(AuthContext)

  // const isAdmin = true;
  const [isAdmin] = useAdmin();


  const [isInstructor] = useInstructor();


    return (
      <div className="drawer  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button  lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4  w-80 h-full bg-green-400 text-2xl ">
            {/* Sidebar content here */}

            <div className=" mx-auto">
              <div className="avatar p-3">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            {isAdmin ? (
              <div className="border-2">
                <li>
                  <NavLink to="/dashboard/manageClasses">ManageClasses</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUserFriends></FaUserFriends> ManageUsers
                  </NavLink>
                </li>
              </div>
            ) : isInstructor ? (
              <div className="border-2">
                <li>
                  <NavLink to="/dashboard/addNewClass">AddNewClass</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClass">MyClass</NavLink>
                </li>
              </div>
            ) : (
              <div className="border-2">
                <li>
                  <NavLink to="/dashboard/mySelectedClasses">
                    MySelectedClasses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myEnrolledClasses">
                    MyEnrolledClasses
                  </NavLink>
                </li>
              </div>
            )}

            {/* <li>
              <NavLink to="/dashboard/addNewClass">AddNewClass</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myClass">My Class</NavLink>
            </li> */}
            <div className="divider"></div>
            <div className="border-2 text-left">
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/instructors">Instructor</NavLink>
              </li>
              <li>
                <NavLink to="/classes">Classes</NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;