import { FaPlus } from "react-icons/fa";
import boxer from "../../../assets/boxer.png";

const ImproveSkills = () => {
  return (
    <div className="lg:flex items-center gap-8 px-16 py-20 my-5 justify-around">
      <div className="space-y-9">
        <h1 className="font-bold text-4xl text-red-500">
          WHAT SKILLS <br /> WILL YOU IMPROVE?
          
        </h1>
        <p className="border-b-4 border-red-500 w-28"></p>
        <p className="flex items-center">
          Nulla facilisi. Suspendisse malesuada, diam ut mattis lacinia, nibh mi
          ultrices felis, ultricies. Suspendisse malesuada, diam ut mattis
          lacinia, nibh mi ultrices felis, ultricies.
        </p>
        <button className="bg-red-500 px-5 py-3 rounded-md font-bold hover:bg-black text-white">
          Join Network
        </button>
      </div>

      <div className="font-semibold text-lg space-y-5">
        <p className="flex items-center gap-2">
          <FaPlus className="text-red-500" />
          RAPIDITY
        </p>
        <p className="flex items-center gap-2">
          <FaPlus className="text-red-500" />
          REACTION
        </p>
        <p className="flex items-center gap-2">
          <FaPlus className="text-red-500" />
          IMPACT_FORCE
        </p>
        <p className="flex items-center gap-2">
          <FaPlus className="text-red-500" />
          ENDURANCE
        </p>
        <p className="flex items-center gap-2">
          <FaPlus className="text-red-500" />
          TACTICS
        </p>
        <p className="flex items-center gap-2">
          <FaPlus className="text-red-500" />
          STRENGTH
        </p>
      </div>
      <div>
        <img className="lg:w-[800px] lg:h-[300px]" src={boxer} alt="" />
      </div>
    </div>
  );
};

export default ImproveSkills;
