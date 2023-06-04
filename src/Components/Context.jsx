import React, { createContext, useState } from 'react';

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  return (
    <Context.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </Context.Provider>
  );
};
