import { useContext, useEffect, useState } from "react";

// import { FaMoneyCheckAlt, FaTrashAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
// import MySelectedClassesDetails from "./MySelectedClassesDetails";
// import Swal from "sweetalert2";
import MySelectedClassesDetails from "./MySelectedClassesDetails";
const MyEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  console.log(enrolled);

  useEffect(() => {
    fetch(
      `https://summer-camp-school-server-khaki.vercel.app/carts?email=${user?.email}`,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPayments(data)
        setEnrolled(data);
      });
  }, [user]);
  // const enrolledClass = (cartId) => {
  //   // console.log(enrol);
  //   if (user) {
  //     const classItem = {
  //       cartId,
  //       instructorName,
  //       email: user?.email,
  //       name,
  //       image,
  //       price,
  //     };
  //     fetch(`https://summer-camp-school-server-khaki.vercel.app/carts`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(classItem),
  //     }).then((res) =>
  //       res.json().then((data) => {
  //         console.log(data);
  //         if (data.insertedId) {
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Your successfully select the class",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       })
  //     );
  //   }
  //   // navigate("/login");
  // };

  // const handleDelete = (_id) => {
  //     console.log(_id, 'specifif id')
  //   }

  return (
    <div>
      <h1 className="text-3xl my-4 font-semibold">
        My Selected Classes : {enrolled.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
              <th className="px-6 py-3 bg-gray-50  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Bank
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {enrolled.length &&
              enrolled?.map((enrol, index) => (
                <MySelectedClassesDetails
                  key={enrol._id}
                  enrol={enrol}
                  index={index}
                  setEnrolled={setEnrolled}
                  enrolled={enrolled}
                  setPayments={setPayments}
                ></MySelectedClassesDetails>
              ))}

            {/* enrolled.length && */}
            {/* {enrolled?.map((enrol, index) => (
              <tr key={enrol._id}>
                <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img
                    src={enrol.image}
                    alt={enrol.name}
                    className="h-14 w-14 rounded-md"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{enrol.name}</td>

                <td className="px-6 py-4 whitespace-no-wrap">{enrol.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    onClick={() => handleDelete(enrolled._id)}
                    className="px-4 py-3 mr-2 bg-red-600 hover:bg-red-400 text-white rounded-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <Link to="/dashboard/payment">
                    <button className="px-4 py-3 ml-2 bg-blue-500 text-white rounded-lg">
                      <FaMoneyCheckAlt></FaMoneyCheckAlt>
                    </button>
                  </Link>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
