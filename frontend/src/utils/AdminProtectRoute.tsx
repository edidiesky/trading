import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/reduxtoolkit";

interface LayoutProps {
  children?: React.ReactNode
}
const AdminProtectRoute: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const {  userInfo } = useAppSelector(store => store.auth)
  // console.log(userInfo)
  if (userInfo?.isAdmin) {
    return <>{children}</>; // Render the children when authenticated
  } else {
    return <Navigate to="/login" />; // Redirect to the login page when not authenticated
  }

  return <>{children}</>

};

export default AdminProtectRoute
