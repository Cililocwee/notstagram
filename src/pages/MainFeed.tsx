import React from "react";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import "./mainFeed.css";

export default function MainFeed() {
  return (
    <div id="main-feed">
      <NavBar />

      <div className="main-feed-container">
        <PostCard
          profilePic="https://picsum.photos/25"
          user="Example User"
          picUrl="https://picsum.photos/500/200"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/25"
          user="Example User"
          picUrl="https://picsum.photos/500/200"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/25"
          user="Example User"
          picUrl="https://picsum.photos/500/200"
          likeCount={5}
        />
      </div>
    </div>
  );
}
