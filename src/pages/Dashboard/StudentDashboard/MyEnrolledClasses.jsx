// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

const MyEnrolledClasses = () => {
  // const {id} = useParams()
  // const [enrolled, setEnrolled] = useState([])

  // useEffect(() => {
  //   fetch("https://summer-camp-school-server-khaki.vercel.app/carts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setEnrolled(data);
  //     });
  // }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold">My Enrolled Classes</h1>
      {/* <div className="overflow-x-auto">
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
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Bank
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enrolled.map((enrol, index) => (
                <tr key={enrol._id}>
                  <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <img
                      src={enrol.image}
                      alt={enrol.name}
                      className="h-14 w-14 rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">{enrol.name}</td>

                  <td className="px-6 py-4 whitespace-no-wrap">
                    {enrol.email}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-lg">
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-lg">
                      Payment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
    </div>
  );
};

export default MyEnrolledClasses;
