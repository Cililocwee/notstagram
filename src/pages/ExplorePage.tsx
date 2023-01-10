import React from "react";
import NavBar from "../components/NavBar";
import NewPost from "../components/NewPost";
import NotificationOverlay from "../components/NotificationOverlay";
import SearchBar from "../components/SearchBar";
import SearchOverlay from "../components/SearchOverlay";
import NavBarSmall from "../components/NavBarSmall";

export default function ExplorePage() {
  return (
    <div id="explore-page">
      <NavBar />
      <NavBarSmall />
      <SearchBar />
      <SearchOverlay />
      <NotificationOverlay />
      <NewPost />
      <p>This is a page for users to explore new content</p>
    </div>
  );
}
