/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

import MySelectedClassesDetails from "./MySelectedClassesDetails";
const MyEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  console.log(enrolled);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://summer-camp-school-server-khaki.vercel.app/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPayments(data);
          setEnrolled(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl my-4 font-semibold">
        My Selected Classes : {enrolled.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
              <th className="px-6 py-3 bg-gray-50  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Bank
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {enrolled.length &&
              enrolled?.map((enrol, index) => (
                <MySelectedClassesDetails
                  key={enrol._id}
                  enrol={enrol}
                  index={index}
                  setEnrolled={setEnrolled}
                  enrolled={enrolled}
                  setPayments={setPayments}
                ></MySelectedClassesDetails>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
