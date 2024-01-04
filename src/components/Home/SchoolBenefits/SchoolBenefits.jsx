import box from "../../../assets/box.png";
const SchoolBenefits = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">
        Our school benefits
          </h1>
          <p className="border-2 border-red-500 mx-auto mt-3 w-44"></p>
      <div className="lg:flex items-center space-y-4 w-11/12 mx-auto">
        <div className="space-y-5">
          <div className="space-y-2">
            {" "}
            <h1 className="font-bold text-red-500 text-2xl">
              Experienced trainers
            </h1>
            <p>
              Sed sed condimentum massa. Morbi auctor vestibulum urna, ut
              interdum.
            </p>
          </div>
          <div className="space-y-2">
            {" "}
            <h1 className="font-bold text-red-500 text-2xl">
              Large comfortable halls
            </h1>
            <p>Morbi auctor vestibulum urna, ut interdum ipsum maximus et.</p>
          </div>
          <div className="space-y-2">
            {" "}
            <h1 className="font-bold text-red-500 text-2xl">
              Reasonable prices
            </h1>
            <p>
              Vestibulum urna, ut interdum ipsum maximus et. Sed sed
              condimentum.
            </p>
          </div>
        </div>
        <div>
          <img className="w-[900px] h-[500px]" src={box} alt="" />
        </div>
        <div className="space-y-5 text-right">
          <div className="space-y-2">
            {" "}
            <h1 className="font-bold text-red-500 text-2xl">
              Effective workouts{" "}
            </h1>
            <p>Sed sed condimentum massa. Morbi auctor vestibulum urna,</p>
          </div>
          <div className="space-y-2">
            {" "}
            <h1 className="font-bold text-red-500 text-2xl">
              Individual approach
            </h1>
            <p>Morbi auctor vestibulum urna, ut interdum ipsum maximus et.</p>
          </div>
          <div className="space-y-2">
            {" "}
            <h1 className="font-bold text-red-500 text-2xl">
              Professional outfit
            </h1>
            <p>
              Vestibulum urna, ut interdum ipsum maximus et. Sed sed
              condimentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolBenefits;
