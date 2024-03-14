import React, { createContext, useState, useContext } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [loading, setLoading] = useState(false);

  const value = {
    userData,
    setUserData,
    loading,
    setLoading,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useData = () => {
  return useContext(StateContext);
};
