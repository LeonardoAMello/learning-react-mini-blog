import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";

const PrivateRoute = ({ element }) => {
  const { user } = useAuthValue();

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
