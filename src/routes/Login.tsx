import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ReactGA from "react-ga";
import {
  GAEventActions,
  GAEventCategory,
  GAEventDetails,
} from "../helpers/enums";
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
    await signInGoogle()
      .then((response: any) => {
        console.log(response);

        // ReactGA.set({ dimension2: response?.user?.uid });
        ReactGA.event({
          category: GAEventCategory.LOGIN,
          action: "Logged In using Google Account",
          label: `${response?.user?.displayName} has Logged In`,
          dimension2: response?.user?.uid,
        });
        ReactGA.set({ userId: response?.user?.uid });

        navigate("/");
      })
      .catch((error: any) => {
        ReactGA.exception({
          description: "An error ocurred" + error.message,
          fatal: true,
        });
        navigate("/login");
      });
  };
  return (
    <>
      <button onClick={signInClick}>Login with Google</button>
    </>
  );
};

export default Login;
