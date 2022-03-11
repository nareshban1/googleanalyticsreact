import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ReactGA from "react-ga";
const Login = () => {
  const navigate = useNavigate();

  const { signInGoogle, isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const signInClick = async () => {
    await signInGoogle().then((response: any) => {
      console.log(response);
      ReactGA.event({
        category: "Logged In",
        action: "Logged In using Google Account",
        label: `${response?.user?.displayName} has Logged In`,
      });
      ReactGA.set({ dimension2: response?.user?.uid });
      navigate("/");
    });
  };
  return <button onClick={signInClick}>Login with Google</button>;
};

export default Login;
