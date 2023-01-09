import React from "react";

export default function SearchOverlay() {
  return (
    <div id="search-overlay" className="overlay overlay-inactive">
      <h2>Search</h2>
      <input className="styled-search-bar" type="text" placeholder="Search" />
      -------------------
      <h4>Recent</h4>
      <p>No recent searches.</p>
    </div>
  );
}
