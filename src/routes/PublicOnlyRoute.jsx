import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";

const PublicOnlyRoute = ({ element }) => {
  const { user } = useAuthValue();

  return !user ? element : <Navigate to="/" />;
};

export default PublicOnlyRoute;
