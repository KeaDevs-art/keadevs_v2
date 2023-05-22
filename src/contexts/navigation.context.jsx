/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const NavigationContext = createContext({});

export const NavigationContextProvider = ({ children }) => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleMenu = () => setIsNavActive(!isNavActive);

  const value = {
    isNavActive,
    setIsNavActive,
    handleMenu,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
