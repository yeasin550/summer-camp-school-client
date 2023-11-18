import { useEffect, useState } from "react";
import ClassesDetails from "../../../pages/Classes/ClassesDetails";
// import martial from '../../../assets/46885-fighting-stick-wishu'
// animation
import { Slide } from "react-awesome-reveal";


const PopularClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  // const classes = allClasses.map()
  useEffect(() => {
    fetch("https://summer-camp-school-server-khaki.vercel.app/SixClasses")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.slice(2));
        setAllClasses(data.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <Slide>
        <h1 className="text-center font-bold text-4xl my-12">
          Popular Classes
        </h1>
      </Slide>
      <div className="dark dark:text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:ml-9">
        {allClasses.map((enrol) => (
          <ClassesDetails key={enrol._id} enrol={enrol}></ClassesDetails>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
