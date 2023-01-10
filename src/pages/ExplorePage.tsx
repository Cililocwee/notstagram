import React from "react";
import NavBar from "../components/NavBar";
import NewPost from "../components/NewPost";
import NotificationOverlay from "../components/NotificationOverlay";
import SearchBar from "../components/SearchBar";
import SearchOverlay from "../components/SearchOverlay";
import NavBarSmall from "../components/NavBarSmall";

import ExploreBrickFlex from "../components/ExploreBrickFlex";

export default function ExplorePage() {
  function imitateInsta(): string[] {
    let urlsQueue: string[] = [];
    let addressString: string = "https://picsum.photos/";
    for (let i = 0; i < 4; i++) {
      urlsQueue.push(addressString + "2" + Math.floor(Math.random() * 89 + 10));
    }
    urlsQueue.push(addressString + "4" + Math.floor(Math.random() * 89 + 10));
    return urlsQueue;
  }

  return (
    <div id="explore-page">
      <NavBar />
      <NavBarSmall />
      <SearchBar />
      <SearchOverlay />
      <NotificationOverlay />
      <NewPost />
      <div className="explore-page-container">
        <ExploreBrickFlex fakeRandom={imitateInsta()} />
        <ExploreBrickFlex flag="right" fakeRandom={imitateInsta()} />
        <ExploreBrickFlex fakeRandom={imitateInsta()} />
        <ExploreBrickFlex flag="right" fakeRandom={imitateInsta()} />
        <ExploreBrickFlex fakeRandom={imitateInsta()} />
        <ExploreBrickFlex flag="right" fakeRandom={imitateInsta()} />
        <ExploreBrickFlex fakeRandom={imitateInsta()} />
        <ExploreBrickFlex flag="right" fakeRandom={imitateInsta()} />
      </div>
    </div>
  );
}
