/* eslint-disable react/prop-types */
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
// import useCart from "../../../hooks/UseCart";

const ManageClassesDetails = ({ approve, index, setApproved, approved }) => {
  console.log(approve);
  const { image, instructorEmail, name } = approve;
  // const [isPending, setIsPending] = useState(true);
  const [isDenied, setIsDenied] = useState(true);
  const [axiosSecure] = useAxiosSecure();
  // const { data: users = [], refetch } = useQuery(["allClasses"], async () => {
  //   const res = await axiosSecure.get("/allClasses");
  //   const data = await res.data;
  //   return data;
  // });
  // const [cart, refetch] = useCart();
  // console.log(cart);
  const handleApproved = (_id) => {
    console.log(_id);
    // setIsPending(false);
    axiosSecure(`/statusUpdate/${_id}`, {
      method: "PATCH",
    }).then((data) => {
      console.log(data);
      if (data.data.acknowledged) {
        // refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your class has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        const remaining = approved.filter((item) => item._id !== _id);
        setApproved(remaining);
      }
    });
  };

  const handleDenied = (_id) => {
    console.log(_id);
    setIsDenied(false);
  };

  const handleFeedback = async (_id) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Wright your feedback",
      inputPlaceholder: "Type your feedback here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text) {
      console.log(text);

      fetch(`http://localhost:5000/classFeedback/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ feedback: text }),
      }).then((data) => {
        if (data.data.acknowledged) {
          // refetch();
          Swal.fire(text);
        }
      });
    }
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td> {name} </td>
      <td>{instructorEmail}</td>
      <td className="flex gap-1">
        {approve?.status === "pending" ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white mt-2 font-bold py-2 px-4 rounded"
            onClick={() => handleApproved(approve._id)}
          >
            Pending
          </button>
        ) : (
          <button className="bg-green-300  text-white mt-2 font-bold py-2 px-4 rounded">
            Approved
          </button>
        )}
      </td>
      <td>
        {isDenied ? (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDenied(approve._id)}
          >
            Denied
          </button>
        ) : (
          <button className="bg-red-300 text-white font-bold py-2 px-4 rounded">
            Deny
          </button>
        )}
      </td>

      <td>
        <button
          onClick={() => handleFeedback(approve._id)}
          className="bg-red-600 hover:bg-red-400 rounded px-3 py-2 text-white"
        >
          Feedback
        </button>
      </td>
    </tr>
  );
};

export default ManageClassesDetails;

