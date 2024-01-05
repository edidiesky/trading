import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/reduxtoolkit";

interface LayoutProps {
  children?: React.ReactNode
}
const ProtectRoute: React.FC<LayoutProps> = ({ children }) => {
  // const navigate = useNavigate()
  const { registerisLoading, registerisSuccess, userInfo } = useAppSelector(store => store.auth)
  // if (userInfo !== null) {
  //   return <>{children}</>; // Render the children when authenticated
  // } else {
  //   return <Navigate to="/i/flow/login" />; // Redirect to the login page when not authenticated
  // }

  return <>{children}</>

};

export default ProtectRoute
