import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavBar from "./NavBar";

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
      <NavBar />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
