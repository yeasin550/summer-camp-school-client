/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://summer-camp-school-server-khaki.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(
      `https://summer-camp-school-server-khaki.vercel.app/makeInstructors/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="text-lg">
      <div className="overflow-x-auto">
        <h1 className="text-3xl font-semibold my-5">
          Total User : {users?.length}
        </h1>
        <table className="table ">
          {/* head */}
          <thead className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
            <tr>
              <th># </th>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Name</th>
              <th>Role</th>
              <th className="text-center">Action</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask  w-12 h-12">
                        <img
                          src={user.profile}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <th>
                  {user.role === "admin" ? (
                    <button className="bg-gray-300 rounded-md py-3 px-4 text-gray-400">
                      Admin
                    </button>
                  ) : (
                    // "admin"
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="hover:bg-red-400 bg-red-600 py-3 px-4 rounded-md text-white"
                    >
                      Admin
                    </button>
                  )}
                </th>
                <th>
                  {user.role === "instructor" ? (
                    <button className="bg-gray-300 rounded-md py-3 px-4 text-gray-400">
                      Instructor
                    </button>
                  ) : (
                    // "instructor"
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="hover:bg-orange-400 bg-orange-600 py-3 px-4 rounded-md text-white"
                    >
                      Instructor
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
