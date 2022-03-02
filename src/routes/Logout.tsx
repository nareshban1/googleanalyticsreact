import React from "react";
import { useAuth } from "../context/AuthContext";
import ReactGA from "react-ga";
const Logout = () => {
  const { logout, currentUser } = useAuth();
  const logoutuser = async () => {
    await logout();
    ReactGA.event({
      category: "Logged Out",
      action: "Logged Out of the System",
      label: `${currentUser?.displayName} has Logged Out`,
    });
  };
  return <button onClick={logoutuser}>Logout</button>;
};

export default Logout;
