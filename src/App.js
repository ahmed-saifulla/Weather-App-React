import React from "react";

import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <WeatherCard temp="14"/>
      <WeatherCard temp="25"/>
      <WeatherCard temp="10"/>
    </div>
  );
}

export default App;
