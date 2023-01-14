import React from "react";
import NavBar from "../components/NavBar";
import NewPost from "../components/NewPost";
import NotificationOverlay from "../components/NotificationOverlay";
import SearchBar from "../components/SearchBar";
import SearchOverlay from "../components/SearchOverlay";
import NavBarSmall from "../components/NavBarSmall";

export default function Inbox() {
  return (
    <div id="inbox">
      <NavBar />
      <NavBarSmall />
      <SearchBar />
      <SearchOverlay />
      <NotificationOverlay />
      <NewPost />
      <p className="in-progress">This feature is not yet functional</p>
    </div>
  );
}
