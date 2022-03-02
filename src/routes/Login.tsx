import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ReactGA from "react-ga";
const Login = () => {
  const navigate = useNavigate();
  const { signInGoogle } = useAuth();
  const signInClick = async () => {
    await signInGoogle().then((response: any) => {
      navigate("/");
      ReactGA.event({
        category: "Logged In",
        action: "Logged In using Google Account",
        label: "Logged In Users",
      });
      ReactGA.set({ dimension2: response?.user });
    });
  };
  return <button onClick={signInClick}>Login with Google</button>;
};

export default Login;
