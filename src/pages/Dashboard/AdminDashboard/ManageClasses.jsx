import { useEffect, useState } from "react";
import ManageClassesDetails from "./ManageClassesDetails";

const ManageClasses = () => {
  const [approved, setApproved] = useState();

  // const [isDenied, setIsDenied] = useState(true);

  console.log(approved);

  useEffect(() => {
    fetch("https://summer-camp-school-server-khaki.vercel.app/allClasses")
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
      <h1 className=" text-3xl my-5 font-semibold ">
        Total Add Class : {approved?.length}
      </h1>
      <div className=" w-full overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead className=" bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 text-black font-bold">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Status</th>

              <th className="text-center">X</th>
              <th className="text-center">FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {approved?.map((approve, index) => (
              <ManageClassesDetails
                key={approve._id}
                approve={approve}
                index={index}
                setApproved={setApproved}
                approved={approved}
              ></ManageClassesDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
