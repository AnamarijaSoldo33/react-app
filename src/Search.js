import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search ">
      <input type="search" />
      <input type="submit" className="btn btn-primary w-100" value="Search" />
    </form>
  );
}
