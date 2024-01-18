import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div classNmae="container">
        <Weather defaultCity="Toronto" />
        <footer>
          This project was coded by Jasmyn Garrido and is {""}
          <a
            href="https://github.com/Jazzi27/weather-search-engine"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
