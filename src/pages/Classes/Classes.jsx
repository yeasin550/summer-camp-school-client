import { useEffect, useState } from "react";
import ClassesDetails from "./ClassesDetails";

const Classes = () => {
  const [enrolClasses, setEnrolClasses] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-school-server-khaki.vercel.app/activeClasses")
      .then((res) => res.json())
      .then((data) => {
        setEnrolClasses(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="dark:text-black mt-5 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {enrolClasses.map((enrol) => (
        <ClassesDetails key={enrol._id} enrol={enrol}></ClassesDetails>
      ))}
    </div>
  );
};
export default Classes;
