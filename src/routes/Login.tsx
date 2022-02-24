import React from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { signInGoogle } = useAuth();
  const signInClick = async () => {
    await signInGoogle();
  };
  return <button onClick={signInClick}>Login with Google</button>;
};

export default Login;
