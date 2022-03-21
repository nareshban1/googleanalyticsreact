import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      https://googleanalyticstest.netlify.app
      https://googleanalyticstest.netlify.app
      https://googleanalyticstest.netlify.app
      https://googleanalyticstest.netlify.app
      https://googleanalyticstest.netlify.app
      {JSON.stringify(currentUser?.displayName)}
      {JSON.stringify(currentUser?.uid)}
    </div>
  );
};

export default Home;
