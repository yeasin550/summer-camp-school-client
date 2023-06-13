import { useEffect, useState } from 'react';
import ClassesDetails from '../../../pages/Classes/ClassesDetails';
// import martial from '../../../assets/46885-fighting-stick-wishu'
const PopularClasses = () => {
  const [allClasses, setAllClasses] = useState([])
  // const classes = allClasses.map()
  useEffect(() => {
    fetch("http://localhost:5000/SixClasses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slice(2));
        setAllClasses(data.slice(0, 6));
      });
  }, [])

    return (
      <div>
        <h1 className="text-center font-bold text-4xl  my-12">
          Popular Classes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:ml-9">
          {/* {allClasses.map((classes) => (
            <div
              key={classes._id}
              className=" card-compact w-96 bg-base-100 border-2 border-gray-200 shadow-xl"
            >
              <figure>
                <img
                  className="class-image h-72"
                  src={classes.image}
                  alt="Class Image"
                />
              </figure>
              <div className="card-body ">
                <h3 className="text-lg">Name : {name}</h3>
                <p className=" text-lg">
                  InstructorName : {classes.instructorName}
                </p>
                <p className=" text-lg">
                  AvailableSeats : {classes.availableSeats}
                </p>
                <p className="text-lg ">Price: {classes.price}</p>
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
          ))} */}

          {allClasses.map((enrol) => (
            <ClassesDetails key={enrol._id} enrol={enrol}></ClassesDetails>
          ))}
        </div>
      </div>
    );
};

export default PopularClasses;