import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

  const isAdmin = true;
  const isInstructor = true;


    return (
      <div className="drawer lg:drawer-open">
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
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-green-400 text-2xl ">
            {/* Sidebar content here */}

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/manageClasses">ManageClasses</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">ManageUsers</NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/addNewClass">AddNewClass</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClass">MyClass</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/instructor">Instructor</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/classes">Classes</NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink to="/dashboard/addNewClass">AddNewClass</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myClass">My Class</NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/instructor">Instructor</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;