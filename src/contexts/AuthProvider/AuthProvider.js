import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = { name: "Habib" };
  const AuthInfo = { user };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
