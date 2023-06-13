import { useEffect, useState } from "react";
import MyClassDetails from "./MyClassDetails";

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
      <h1 className=" text-3xl font-semibold ">
        Total Add Class : {approved?.length}
      </h1>
      <div className=" w-full overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead>
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
              <MyClassDetails
                key={approve._id}
                approve={approve}
                index={index}
              ></MyClassDetails>
            ))}
            {/* {approved?.map((approve, index) => (
                <tr key={approve._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={approve.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td> Yeasin </td>
                  <td>yeasin@gmail.com</td>
                  <td className="flex gap-1">
                    {isPending ? (
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleApproved(approved._id)}
                      >
                        Pending
                      </button>
                    ) : (
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Approved
                      </button>
                    )}
                  </td>
                  <td>
                    {isDenied ? (
                      <button
                        className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDenied(approved._id)}
                      >
                        Denied
                      </button>
                    ) : (
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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
              ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
