import React from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
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
  );
}
