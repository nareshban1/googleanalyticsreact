import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../service/firebase";

type User = any;

export const UserContext = createContext<User | null>(null);

export const useAuth = () => {
  return useContext(UserContext);
};

export const UserContextProvider: React.FC = (props: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>();

  console.log(currentUser);
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
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [currentUser]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
