import React from "react";
import Search from "./Search";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Search />
        <ul className="float-left">
          <li className="city">New York </li>
          <li className="info">Last updated:Tuesday 10:00 </li>
          <li className="info">Cloudy</li>
        </ul>
        <Weather />
      </div>
    </div>
  );
}
