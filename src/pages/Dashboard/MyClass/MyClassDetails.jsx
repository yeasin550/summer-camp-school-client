/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const MyClassDetails = ({ enrol }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();

  // console.log(isAdmin)

  const navigate = useNavigate();
  //  const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  // console.log(user)
  console.log(enrol);
  // eslint-disable-next-line react/prop-types
  const {
    image,
    name,
    instructorName,
    seats,
    price,
    _id,
    availableSeats,
    feedback,
    status,
  } = enrol;
  // console.log(sea)

  const notAvailable = () => {
    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "This class not available",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSelect = (cartId) => {
    // console.log(cartId);
    if (!user) {
      navigate("/login");
    } else {
      const classItem = {
        cartId,
        instructorName,
        email: user?.email,
        name,
        image,
        price,
      };
      fetch(`https://summer-camp-school-server-khaki.vercel.app/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classItem),
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your successfully select the class",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      );
    }
    // navigate("/login");
  };

  return (
    <div>
      {availableSeats === 0 ? (
        <>
          <div className=" card-compact h-full w-full bg-red-400  shadow-xl">
            <figure>
              <img className="w-full h-72" src={image} alt="Class Image" />
            </figure>
            <div className="card-body ">
              <h3 className="text-lg ">Name : {name}</h3>
              <p className="text-lg">InstructorName : {instructorName}</p>
              <p className="text-lg">AvailableSeats : {availableSeats}</p>
              <p className="text-lg">TotalSeats : {seats}</p>
              <p className="text-lg">Price: ${price}</p>

              {/* <div className="text-center">
                <button
                  onClick={notAvailable}
                  className="w-full bg-primary py-2 px-3 rounded text-white font-bold "
                >
                  Select
                </button>
              </div> */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="  card-compact w-72 h-full bg-base-100 border-2 border-gray-200 shadow-xl">
            <figure>
              <img className="class-image h-72" src={image} alt="Class Image" />
            </figure>
            <div className="card-body ">
              <h3 className="text-lg">Name : {name}</h3>
              <p className=" text-lg">InstructorName : {instructorName}</p>
              <p className=" text-lg">AvailableSeats : {availableSeats}</p>

              <p className="text-lg ">Price: {price}</p>
              <p className="text-lg ">
                Status:{" "}
                <span className="bg-red-500 py-1 px-2 text-white font-bold rounded">
                  {status}
                </span>
              </p>
              <p className="text-lg ">
                <span className="bg-green-500 py-1 px-2 rounded font-bold text-white">
                  Feedback
                </span>{" "}
                : {feedback ? feedback : "No Feedback"}
              </p>
              {/* <div className="text-center ">
                <button
                  onClick={() => handleSelect(_id)}
                  // className="w-full bg-primary py-2 px-3 rounded text-white font-bold "
                  className={
                    isAdmin === true || isInstructor === true
                      ? "w-full cursor-not-allowed bg-blue-300 py-2 px-3 rounded text-white font-bold "
                      : "w-full bg-primary py-2 px-3 rounded text-white font-bold "
                  }
                >
                  Select
                </button>
              </div> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyClassDetails;
