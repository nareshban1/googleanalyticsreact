import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useAuth();
  return <div>{JSON.stringify(currentUser?.displayName)}</div>;
};

export default Home;
