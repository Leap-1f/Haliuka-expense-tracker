import { createContext, useState, useEffect } from "react";
export const StateContext = createContext([]);

export const ContextProvider = ({ children }) => {
  const createUser = async (event) => {
    event.preventDefault();

    let data = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      repassword: event.target[3].value,
    };

    const isValid = await userSchema.isValid(data);

    let formData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await fetch("http://localhost:8080/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, id: uuidv4() }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error("Failed to create new user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <StateContext.Provider value={{createUser}}>
      {children}
    </StateContext.Provider>
  );
};
