import React, { createContext, useState, useContext } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [userId, setUserId] = useState("");
  
  const [toggle, setToggle] = useState("expense");
  const [state, setState] = useState({
    selectedOption: "Newest first",
    isOpen: false,
    openModal: false,
  });

  const [transactions, setTransactions] = useState("");

  const handleOptionSelect = (option) => {
    setState({ selectedOption: option, isOpen: false });
  };
  const handleOpenModal = () => {
    setState({ openModal: !state.openModal });
  };

  const handleCloseModal = () => {
    setState({ openModal: !state.openModal });
  };
  const handleToggle = (toggle) => {
    setToggle(toggle);
  };
  const renderIcon = (iconName, color) => {
    const Icon = iconName;
    return <Icon className={`h-5 w-5 ${color}`} />;
  };

  const value = {
    userData,
    setUserData,
    data,
    setData,
    handleOptionSelect,
    handleOpenModal,
    handleCloseModal,
    handleToggle,
    toggle,
    setToggle,
    state,
    setState,
    renderIcon,
    setUserId,
    userId,
    setTransactions,
    transactions
  };

  return (
    <StateContext.Provider value={ value }>
      {children}
    </StateContext.Provider>
  );
};

export const useData = () => useContext(StateContext);
