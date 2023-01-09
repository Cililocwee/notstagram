import React from "react";
import Heart from "../assets/heart.png";
export default function SearchBar() {
  return (
    <div id="search-bar">
      <p>Notstagram</p>
      <div id="search-bar-right">
        <input placeholder="Search" />
        <img id="heart-notifications" src={Heart} />
      </div>
    </div>
  );
}
