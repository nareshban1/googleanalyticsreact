import React, { ReactElement, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ReactGA from "react-ga";

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      ReactGA.event({
        category: "Logged In",
        action: "Logged In using Google Account",
        label: "Logged In Users",
      });

      ReactGA.set({ dimension1: currentUser });
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
