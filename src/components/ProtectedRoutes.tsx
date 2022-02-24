import React, { ReactElement, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <>
      <Link to={"/"}>HOME</Link>
      <Link to={"/about"}>ABOUT</Link>
      <Link to={"/contact"}>CONTACT</Link>
      {children}
    </>
  );
};

export default ProtectedRoutes;
