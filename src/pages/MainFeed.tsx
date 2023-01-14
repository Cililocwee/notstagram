import React, { useContext, useEffect, useState } from "react";
import ActiveBar from "../components/ActiveBar";
import HeadsUp from "../components/HeadsUp";
import NavBar from "../components/NavBar";
import NavBarSmall from "../components/NavBarSmall";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import SearchOverlay from "../components/SearchOverlay";
import NotificationOverlay from "../components/NotificationOverlay";
import "./pages.css";
import NewPost from "../components/NewPost";
import { AppContext } from "../AppContext";
import { v4 as uuidv4 } from "uuid";

export default function MainFeed() {
  const currentContext: any = useContext(AppContext);
  const { currentUser, posts, fetchUserDatabase, fetchPostsDatabase } =
    currentContext;

  const [sortedPosts, setSortedPosts] = useState<any>();

  function fetchFromDatabase(): void {
    fetchPostsDatabase();
    fetchUserDatabase();
  }

  useEffect(() => {
    fetchFromDatabase();
  }, []);

  useEffect(() => {
    console.log(
      posts?.sort(
        (a: any, b: any) => a.time_posted.seconds - b.time_posted.seconds
      )
    );
    setSortedPosts(
      posts?.sort(
        (a: any, b: any) => b.time_posted.seconds - a.time_posted.seconds
      )
    );
  }, [posts]);

  interface NotstaPost {
    comment: string;
    id: string;
    pic_url: string;
    poster: string;
    time_posted: TimePosted;
  }

  interface TimePosted {
    seconds: number;
    nanoseconds: number;
  }

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
        {sortedPosts?.map((x: NotstaPost) => (
          <PostCard
            profilePic="https://picsum.photos/25"
            user={x.poster}
            picUrl={x.pic_url}
            likeCount={5}
            caption={x.comment}
            time_posted={x.time_posted.seconds}
            key={uuidv4()}
          />
        ))}
      </div>

      <HeadsUp
        userName={currentUser.username}
        fullName={currentUser.full_name}
        pic_url={currentUser.pic_url}
      />
    </div>
  );
}
