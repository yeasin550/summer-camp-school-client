import { useEffect, useState } from "react";

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    console.log(users)
    useEffect(() => {
        fetch("https://summer-camp-school-server-khaki.vercel.app/users")
          .then((res) => res.json())
          .then((data) => {
            setUsers(data);
          });
    }, [])
    return (
      <div className="text-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th># </th>
                <th>User Image</th>
                <th>User Name</th>
                <th>User Name</th>
                <th>Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.profile}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      
                    </div>
                  </td>
                  <td>{ user.name}</td>
                  <td>{ user.email}</td>
                  <td>{ user.role}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Admin</button>
                    <button className="btn btn-ghost btn-xs">Instructor</button>
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