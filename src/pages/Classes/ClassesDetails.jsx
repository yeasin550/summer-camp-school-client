/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ClassesDetails = ({ enrol }) => {
  const { user } = useContext(AuthContext)
  console.log(user)
    console.log(enrol)
  // eslint-disable-next-line react/prop-types
  const { image, name, instructorName, availableSeats, price, _id } = enrol;

  const notAvailable = () => {
     Swal.fire({
       position: "top-end",
       icon: "info",
       title: "This class not available",
       showConfirmButton: false,
       timer: 1500,
     });
  }


  const enrolledClass = (cartId) => {
    // console.log(enrol);
    if (user) {
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
  };



    return (
      <div>
        {availableSeats === 0 ? (
          <>
            <div className=" card-compact w-96 bg-red-400  shadow-xl">
              <figure>
                <img className="w-full h-72" src={image} alt="Class Image" />
              </figure>
              <div className="card-body ">
                <h3 className="text-lg ">Name : {name}</h3>
                <p className="text-lg">InstructorName : {instructorName}</p>
                <p className="text-lg">AvailableSeats : {availableSeats}</p>
                <p className="text-lg">Price: ${price}</p>
                <div className="text-center">
                  <button
                    onClick={notAvailable}
                    className="w-full bg-primary py-2 px-3 rounded text-white font-bold "
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=" card-compact w-96 bg-base-100 border-2 border-gray-200 shadow-xl">
              <figure>
                <img
                  className="class-image h-72"
                  src={image}
                  alt="Class Image"
                />
              </figure>
              <div className="card-body ">
                <h3 className="text-lg">Name : {name}</h3>
                <p className=" text-lg">InstructorName : {instructorName}</p>
                <p className=" text-lg">AvailableSeats : {availableSeats}</p>
                <p className="text-lg ">Price: {price}</p>
                <div className="text-center">
                  <button
                    onClick={() => enrolledClass(_id)}
                    className="w-full bg-primary py-2 px-3 rounded text-white font-bold "
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
};

export default ClassesDetails;