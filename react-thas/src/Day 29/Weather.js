import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import { useSelector } from "react-redux";
import ToggleTheme from "./components/ToggleTheme";

const Weather = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`weather-app-redux ${theme ? "dark" : ""}`}>
      <ToggleTheme />
      <Form />
      <WeatherCard />
    </div>
  );
};

export default Weather;
