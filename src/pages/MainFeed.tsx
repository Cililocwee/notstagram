import React from "react";
import ActiveBar from "../components/ActiveBar";
import HeadsUp from "../components/HeadsUp";
import NavBar from "../components/NavBar";
import NavBarSmall from "../components/NavBarSmall";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import SearchOverlay from "../components/SearchOverlay";
import NotificationOverlay from "../components/NotificationOverlay";
import "./mainFeed.css";
import NewPost from "../components/NewPost";

export default function MainFeed() {
  return (
    <div id="main-feed">
      <NavBar />
      <NavBarSmall />
      <SearchBar />
      <SearchOverlay />
      <NotificationOverlay />
      <NewPost />

      <div className="main-feed-container">
        <ActiveBar />
        <PostCard
          profilePic="https://picsum.photos/25"
          user="Example User"
          picUrl="https://picsum.photos/600/300"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/26"
          user="Example User"
          picUrl="https://picsum.photos/550/301"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/27"
          user="Example User"
          picUrl="https://picsum.photos/500/302"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/28"
          user="Example User"
          picUrl="https://picsum.photos/500/303"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/29"
          user="Example User"
          picUrl="https://picsum.photos/500/304"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/30"
          user="Example User"
          picUrl="https://picsum.photos/500/305"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/31"
          user="Example User"
          picUrl="https://picsum.photos/500/306"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/32"
          user="Example User"
          picUrl="https://picsum.photos/500/307"
          likeCount={5}
        />
        <PostCard
          profilePic="https://picsum.photos/33"
          user="Example User"
          picUrl="https://picsum.photos/500/308"
          likeCount={5}
        />
      </div>

      <HeadsUp userName="corrie_stroup" fullName="Corrie Stroup" />
    </div>
  );
}
