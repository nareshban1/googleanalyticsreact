import React from "react";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  const logoutuser = async () => {
    await logout();
  };
  return <button onClick={logoutuser}>Logout</button>;
};

export default Logout;
