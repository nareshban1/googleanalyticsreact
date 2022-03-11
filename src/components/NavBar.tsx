import React from "react";
import { Link } from "react-router-dom";
import Logout from "../routes/Logout";

const NavBar = () => {
  return (
    <div>
      Google Analytics Test
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Logout />
    </div>
  );
};

export default NavBar;
