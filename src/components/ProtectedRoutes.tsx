import React, { ReactElement, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ReactGA from "react-ga4";
const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      ReactGA.event({
        category: "Logged In",
        action: "Logged In",
        label: "Logged In Users",
      });

      ReactGA.set(currentUser);
      ReactGA.send({ hitType: "user_login", userInfo: currentUser });
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
