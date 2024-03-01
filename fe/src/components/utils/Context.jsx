import { createContext, useState, useEffect } from "react";
export const StateContext = createContext([]);

export const ContextProvider = ({ children }) => {

  return (
    <StateContext.Provider value={{ schema }}>{children}</StateContext.Provider>
  );
};
