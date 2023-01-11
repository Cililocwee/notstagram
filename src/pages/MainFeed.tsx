import React, { useContext, useEffect } from "react";
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

export default function MainFeed() {
  const currentContext: any = useContext(AppContext);
  const { currentUser, users, posts, fetchUserDatabase, fetchPostsDatabase } =
    currentContext;

  function handleClick(): void {
    fetchPostsDatabase();
    fetchUserDatabase();
    // console.log(users);
  }

  useEffect(() => {
    handleClick();
  }, []);

  interface NotstaUser {
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    profile_pic: string;
    user_id: string;
  }

  interface NotstaPost {
    comment: string;
    id: string;
    pic_url: string;
    poster: string;
    time_posted: string;
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
        {/* <button onClick={handleClick}>Test</button> */}
        <ActiveBar />
        {posts?.map((x: NotstaPost) => (
          <PostCard
            profilePic="https://picsum.photos/25"
            user={x.poster}
            picUrl={x.pic_url}
            likeCount={5}
            caption={x.comment}
            time_posted="recently"
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
