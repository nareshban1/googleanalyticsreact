import React, { ReactElement, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ReactGA from "react-ga";
import Logout from "../routes/Logout";

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(currentUser, "CURRENT USER");
    if (currentUser === null) {
      console.log(currentUser, "USER NOT SIGNED IN");
      navigate("/login");
    } else {
      navigate("/");
      console.log(currentUser, "USER SIGNED IN");
    }
  }, [currentUser]);

  return (
    <>
      <Link to={"/"}>HOME</Link>
      <Link to={"/about"}>ABOUT</Link>
      <Link to={"/contact"}>CONTACT</Link>
      <Logout />
      {children}
    </>
  );
};

export default ProtectedRoutes;
