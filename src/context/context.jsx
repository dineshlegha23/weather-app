import { createContext, useContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [city, setCity] = useState("delhi");
  const [selectedCity, setSelectedCity] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: "28.6517178",
    lon: "77.2219388",
  });
  const [cities, setCities] = useState([]);
  const [currentTemp, setCurrentTemp] = useState([]);

  return (
    <Context.Provider
      value={{
        city,
        setCity,
        cities,
        setCities,
        coordinates,
        setCoordinates,
        currentTemp,
        setCurrentTemp,
        selectedCity,
        setSelectedCity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

export const useWeatherContext = () => {
  return useContext(Context);
};
