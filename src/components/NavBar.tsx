import React from "react";
import { Link } from "react-router-dom";
import Logout from "../routes/Logout";

const NavBar = () => {
  return (
    <div>
      Google Analytics Test
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>About</Link>
      <Link to={"/"}>Contact</Link>
      <Logout />
    </div>
  );
};

export default NavBar;
