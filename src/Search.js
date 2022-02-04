import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const[temperature, setTemperature]= useState(null)
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "b5a2d192f3a1859ed576767031687843";
  let city = "New York";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <form className="Search ">
      <input type="search" />
      <input type="submit" className="btn btn-primary w-100" value="Search" />
    </form>

    <div className="row">
      <div className="col-6">
        <div className="description">
          <div className="image">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
          </div>
          <div className="temperature">
            <strong>19</strong>
            <span className="units">
              <a href="/">C°</a>/<a href="/">F°</a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity:80%</li>
          <li>Wind:10km/h</li>
        </ul>
        <span>
          {" "}
          <a href="https://github.com/AnamarijaSoldo33/react-app">
            Open sourced code{" "}
          </a>{" "}
          by Anamarija Soldo
        </span>
      </div>
    </div>
  ;

  );
  }
