import { createContext, useContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [city, setCity] = useState("delhi");
  const [coordinates, setCoordinates] = useState({});
  const [cities, setCities] = useState([]);
  console.log(coordinates);
  return (
    <Context.Provider
      value={{ city, setCity, cities, setCities, coordinates, setCoordinates }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

export const useWeatherContext = () => {
  return useContext(Context);
};
