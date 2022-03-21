import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      Naresh Ban is doing research in google analytics with netlify. Naresh Ban
      is doing research in google analytics with netlify.Naresh Ban is doing
      research in google analytics with netlify.Naresh Ban is doing research in
      google analytics with netlify.Naresh Ban is doing research in google
      analytics with netlify.Naresh Ban is doing research in google analytics
      with netlify.Naresh Ban is doing research in google analytics with
      netlify.Naresh Ban is doing research in google analytics with
      netlify.Naresh Ban is doing research in google analytics with
      netlify.Naresh Ban is doing research in google analytics with
      netlify.Naresh Ban is doing research in google analytics with netlify.
      {JSON.stringify(currentUser?.displayName)}
      {JSON.stringify(currentUser?.uid)}
    </div>
  );
};

export default Home;
