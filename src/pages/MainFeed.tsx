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
  const { users, posts, fetchUserDatabase, fetchPostsDatabase } =
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
    time_posted: object;
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
        <button onClick={handleClick}>Test</button>
        <ActiveBar />
        {/* {users?.map((x: NotstaUser) => (
          <p>{x.user_id}</p>
        ))} */}

        {posts?.map((x: NotstaPost) => (
          <PostCard
            profilePic="https://picsum.photos/25"
            user={x.poster}
            picUrl={x.pic_url}
            likeCount={5}
            caption={x.comment}
          />
        ))}

        {/* <PostCard
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
        /> */}
      </div>

      <HeadsUp userName="corrie_stroup" fullName="Corrie Stroup" />
    </div>
  );
}
