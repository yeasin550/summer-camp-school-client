/* eslint-disable react/prop-types */

const InstructorsDetails = ({ ins }) => {
    const { profile, name, email } = ins;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 h-96 border-2 border-gray-400 hover:shadow-xl lg:mx-10 mt-5">
        <figure>
          <img className="w-full" src={profile} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <h2>Email : {email}</h2>
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
    </div>
  );
};

export default InstructorsDetails;