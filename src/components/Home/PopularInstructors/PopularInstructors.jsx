import { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
    .then(res => res.json())
      .then(data => {
        console.log(data)
        setInstructors(data.slice(0, 6))
    })
  }, [])



    return (
      <div>
        <h1 className="text-center my-12 font-bold text-4xl">
          Popular Instructors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:ml-9 my-5">
          {instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card card-compact w-96 bg-base-100 hover:shadow-xl border-2"
            >
              <figure>
                <img src={instructor.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name : {instructor.name }</h2>
                <p>Email :  {instructor.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn w-full btn-primary">Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PopularInstructors;