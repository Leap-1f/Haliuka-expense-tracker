import { createContext, useState, useEffect } from "react";
export const StateContext = createContext([]);
import * as yup from "yup";

export const ContextProvider = ({ children }) => {

  return (
    <StateContext.Provider value={{ schema }}>{children}</StateContext.Provider>
  );
};
