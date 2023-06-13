import { useEffect, useState } from "react";
import MyClassDetails from "./MyClassDetails";
// import MyClassDetails from "./MyClassDetails";
// import ClassesDetails from "../../Classes/ClassesDetails";
// import MyClassDetails from "./MyClassDetails";

const MyClass = () => {
  const [approved, setApproved] = useState();

  // const [isDenied, setIsDenied] = useState(true);

  console.log(approved);

  useEffect(() => {
    fetch("http://localhost:5000/allClasses")
      .then((res) => res.json())
      .then((data) => {
        setApproved(data);
        // console.log(data);
      });
  }, []);

  //  const handleDenied = (_id) => {
  //   console.log(_id)
  //    setIsDenied(false);
  //  };

  return (
    <div className="w-full ml-8">
      <h1 className=" text-3xl mt-5 font-semibold ">
        Total Add Class : {approved?.length}
      </h1>
      <div className=" w-full overflow-x-auto mt-4">
        <div className="mt-5 md:mx-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {approved?.map((enrol) => (
            <MyClassDetails key={enrol._id} enrol={enrol}></MyClassDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyClass;
