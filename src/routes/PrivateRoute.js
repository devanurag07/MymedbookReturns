import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const is_authenticated = false;

  return <>{is_authenticated ? children : <Navigate to={"/login"} />}</>;
};

export default PrivateRoute;
