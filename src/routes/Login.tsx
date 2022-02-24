import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { signInGoogle } = useAuth();
  const signInClick = async () => {
    await signInGoogle().then(() => {
      navigate("/");
    });
  };
  return <button onClick={signInClick}>Login with Google</button>;
};

export default Login;
