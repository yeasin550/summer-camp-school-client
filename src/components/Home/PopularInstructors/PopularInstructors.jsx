import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-school-server-khaki.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setInstructors(data.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <Fade  delay={1e1} cascade damping={1e-1}>
        <h1 className="text-center my-12 font-bold text-4xl">
          Popular Instructors
        </h1>
      </Fade>
      <div className="dark dark:text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:ml-9 my-5">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card card-compact w-96 bg-base-100 hover:shadow-xl border-2"
          >
            <figure>
              <img
                className="w-full h-72"
                src={instructor.profile}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name : {instructor.name}</h2>
              <p>Email : {instructor.email}</p>
              <button
                href="#_"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
              >
                <span className="absolute top-0 right-0 inline-block w- h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-6 h-20 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Contact Me
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
