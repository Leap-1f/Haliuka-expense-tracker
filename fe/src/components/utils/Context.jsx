import React, { createContext, useState, useContext } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const value = {
    userData,
    setUserData,
  };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
};

export const useUserData = () => {
  return useContext(StateContext);
};
