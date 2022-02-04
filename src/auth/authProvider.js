import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  useEffect(() => {
    try {
      localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
      localStorage.removeItem('user');
      console.log(err);
    }
  }, [user]);

  const setLogin = (name) => {
    return setUser({ id: 1, name: name });
  };

  const setLogout = () => {
    return setUser(null);
  };

  const isLogged = () => {
    return !!user;
  };

  const contextValue = {
    user,
    login: setLogin,
    logout: setLogout,
    isLogged: isLogged(),
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
