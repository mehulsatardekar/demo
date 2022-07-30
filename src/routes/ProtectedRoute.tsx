import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const ProtectedRoute = () => {
  const location = useLocation();
  const { userToken } = useSelector(
    (state) => (state as RootState).authentication
  );
  return userToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { ProtectedRoute };
