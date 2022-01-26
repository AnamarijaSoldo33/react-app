import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
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
      </div>
    </div>
  );
}
