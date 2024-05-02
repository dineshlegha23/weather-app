import { createContext, useContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [city, setCity] = useState("delhi");
  return (
    <Context.Provider value={{ city, setCity }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

export const useWeatherContext = () => {
  return useContext(Context);
};
