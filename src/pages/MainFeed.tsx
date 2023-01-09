import React from "react";
import ActiveBar from "../components/ActiveBar";
import HeadsUp from "../components/HeadsUp";
import NavBar from "../components/NavBar";
import NavBarSmall from "../components/NavBarSmall";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import "./mainFeed.css";

export default function MainFeed() {
  return (
    <div id="main-feed">
      <NavBar />
      <NavBarSmall />
      <SearchBar />

      <div className="main-feed-container">
        {" "}
        <ActiveBar />
        <PostCard
          profilePic="https://picsum.photos/25"
          user="Example User"
          picUrl="https://picsum.photos/600/300"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/25"
          user="Example User"
          picUrl="https://picsum.photos/550/300"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/25"
          user="Example User"
          picUrl="https://picsum.photos/500/300"
          likeCount={5}
        />
      </div>

      <HeadsUp userName="corrie_stroup" fullName="Corrie Stroup" />
    </div>
  );
}
