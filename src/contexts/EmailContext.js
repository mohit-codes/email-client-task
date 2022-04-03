import { createContext, useReducer } from "react";
import { emailReducer, initialState } from "../reducers/emailReducer";

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(emailReducer, initialState);
  return (
    <EmailContext.Provider value={{ state, dispatch }}>
      {children}
    </EmailContext.Provider>
  );
};
