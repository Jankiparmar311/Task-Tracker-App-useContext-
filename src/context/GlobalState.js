import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  tasks: [
    {
      id: 1,
      text: "meeting appoiment",
      day: "meeting 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Doctor appoiment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "food appoiment",
      day: "Feb 5th at 2:30pm",
      reminder: false
    }
  ]
};

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
