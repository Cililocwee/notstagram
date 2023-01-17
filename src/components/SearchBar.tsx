import React from "react";
import { Link } from "react-router-dom";
import Heart from "../assets/heart.png";
export default function SearchBar() {
  return (
    <div id="search-bar">
      <Link to="/feed">
        <p>Notstagram</p>
      </Link>
      <div id="search-bar-right">
        <input className="styled-search-bar" placeholder="Search" />
        <img id="heart-notifications" src={Heart} />
      </div>
    </div>
  );
}
