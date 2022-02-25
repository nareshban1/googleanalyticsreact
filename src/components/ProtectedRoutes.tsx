import React, { ReactElement, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ReactGA from "react-ga";

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(currentUser, "CURRENT USER");
    if (currentUser === null) {
      navigate("/login");
    } else {
      navigate("/");
      console.log(currentUser, "USER SIGNED IN");
      ReactGA.set({ dimension1: currentUser });
    }
  }, [currentUser]);

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
