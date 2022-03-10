import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      Home
      {JSON.stringify(currentUser?.displayName)}
    </div>
  );
};

export default Home;
