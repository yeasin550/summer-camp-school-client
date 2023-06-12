/* eslint-disable react/prop-types */
import { useState } from "react";

const ManageClassesDetails = ({ approve, index }) => {
    console.log(approve);
    const { image, instructorEmail, name } = approve;
  const [isPending, setIsPending] = useState(true);
  const [isDenied, setIsDenied] = useState(true);

  const handleApproved = (_id) => {
    console.log(_id);
    setIsPending(false);
  };
  const handleDenied = (_id) => {
    console.log(_id);
    setIsDenied(false);
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
        {isPending ? (
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
        <button className="bg-red-600 hover:bg-red-400 rounded px-3 py-2 text-white">
          Feedback
        </button>
      </td>
    </tr>
  );
};

export default ManageClassesDetails;

