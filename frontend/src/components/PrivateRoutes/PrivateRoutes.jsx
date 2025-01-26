import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const PrivateRoute = ({ children }) => {
  const { userId } = useAuth();

  return userId ? children : <Navigate to="/Login" />;
};

export default PrivateRoute;
