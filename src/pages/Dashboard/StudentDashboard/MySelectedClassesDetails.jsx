/* eslint-disable react/prop-types */

import { FaMoneyCheckAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MySelectedClassesDetails = ({enrol, index}) => {
    const { image, email, name, _id} = enrol;
    console.log(enrol);



  const handleDelete = (_id) => {
      console.log(_id);
      fetch(`http://localhost:5000/carts/${_id}`, {
          method: 'DELETE',
      })
          .then(res => res.json())
          .then(data => {
          console.log(data)
      })
  };



  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-md"
        />
      </td>
      <td className="px-6 py-4 whitespace-no-wrap">{name}</td>

      <td className="px-6 py-4 whitespace-no-wrap">{email}</td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <button
          onClick={() => handleDelete(_id)}
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
  );
};

export default MySelectedClassesDetails;