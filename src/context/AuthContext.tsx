import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../service/firebase";

type User = any;

export const UserContext = createContext<User | null>(null);

export const useAuth = () => {
  return useContext(UserContext);
};

export const UserContextProvider: React.FC = (props: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const signInGoogle = async () => {
    return await auth.signInWithPopup(provider);
  };

  const logout = async () => {
    return await auth.signOut();
  };

  const value = {
    currentUser,
    signInGoogle,
    logout,
    isLoggedIn,
    loading,
  };

  const checkLoggedIn = async () => {
    setLoading(true);
    await auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user, "AUTH USER");
        setCurrentUser(user);
        setLoading(false);
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  useEffect(() => {
    if (currentUser !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [currentUser]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
