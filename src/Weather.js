import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "b5a2d192f3a1859ed576767031687843";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let city = "New York";
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row">
      <div className="col-6">
        <form className="Search ">
          <input type="search" />
          <input
            type="submit"
            className="btn btn-primary w-100"
            value="Search"
          />
        </form>
      </div>
      <div className="col-6">
        <ul>
          <li className="city">New York </li>
          <li className="info">Last updated:Tuesday 10:00 </li>
          <li className="info">Cloudy</li>
        </ul>
      </div>

      <div className="col-6">
        <div className="description">
          <div className="image">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
          </div>
          <div className="temperature">
            <strong>{props.temperature}</strong>
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
      </div>
    </div>
  );
}
