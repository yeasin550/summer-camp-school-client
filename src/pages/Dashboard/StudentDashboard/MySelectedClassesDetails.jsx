/* eslint-disable react/prop-types */

import { FaMoneyCheckAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import useCart from "../../../hooks/UseCart";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";


const MySelectedClassesDetails = ({ enrol, index, setEnrolled, enrolled }) => {
  const { image, email, name, _id } = enrol;
  console.log(enrol);
  // const [axiosSecure] = useAxiosSecure();
  // const [cart, refetch] = useCart();

  const handlePayment = (_id) => {
    console.log(_id);
  };

  const handleDeleteClass = (_id) => {
    Swal.fire({
      title: "Are you sure want to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/carts/${_id}`)
          .then((res) => {
            const data = res.data;
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Toy has been deleted.", "success");
              const remaining = enrolled.filter((item) => item._id !== _id);
              setEnrolled(remaining);
            }
          })
          // .catch((error) => {
          //   toast.error(error.message);
          // });
      }
    });
  };

  // const handleDelete = (_id) => {
  //   //   console.log(_id);
  //   axiosSecure(`http://localhost:5000/carts/${_id}`, {
  //     method: "DELETE",
  //   }).then((data) => {
  //     console.log(data);
  //     if (data.data.deletedCount) {
  //       // refetch();
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Your class has been saved",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   });
  // };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <img src={image} alt={name} className="h-14 w-14 rounded-md" />
      </td>
      <td className="px-6 py-4 whitespace-no-wrap">{name}</td>

      <td className="px-6 py-4 whitespace-no-wrap">{email}</td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <button
          onClick={() => handleDeleteClass(_id)}
          className="px-4 py-3 mr-2 bg-red-600 hover:bg-red-400 text-white rounded-lg"
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
      <td>
        <Link to="/dashboard/payment">
          <button
            onClick={() => handlePayment(_id)}
            className="px-4 py-3 ml-2 bg-blue-500 text-white rounded-lg"
          >
            <FaMoneyCheckAlt></FaMoneyCheckAlt>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MySelectedClassesDetails;