/* eslint-disable react/prop-types */

import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth;
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();
  console.log(location);

  if (loading || isInstructorLoading) {
    return <progress className="progress w-56 text-center"></progress>;
  }
  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
