import React, { useState, createContext } from "react";

export const AuthContex = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };
  const logout = () => {
    setAuth(undefined);
  };

  const valueContex = {
    auth,
    login,
    logout,
  };
  return (
    <AuthContex.Provider value={valueContex}>{children}</AuthContex.Provider>
  );
};
