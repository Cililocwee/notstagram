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
    setSortedPosts(
      posts?.sort(
        (a: any, b: any) => b.time_posted.seconds - a.time_posted.seconds
      )
    );
  }, [posts]);

  interface NotstaPost {
    caption: string;
    id: string;
    pic_url: string;
    poster: string;
    time_posted: TimePosted;
    comments: string[];
    profile_pic: string;
    likes: number;
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
            profilePic={x.profile_pic}
            user={x.poster}
            picUrl={x.pic_url}
            likeCount={x.likes}
            caption={x.caption}
            time_posted={x.time_posted.seconds}
            key={uuidv4()}
            comments={x.comments}
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
