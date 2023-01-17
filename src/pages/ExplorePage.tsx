import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NewPost from "../components/NewPost";
import NotificationOverlay from "../components/NotificationOverlay";
import SearchBar from "../components/SearchBar";
import SearchOverlay from "../components/SearchOverlay";
import NavBarSmall from "../components/NavBarSmall";
import ExploreBrickFlex from "../components/ExploreBrickFlex";
import { v4 as uuidv4 } from "uuid";
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

  const [extentOfImitation, setExtentOfImitation] = useState([1, 1]);

  function continueTheImitation() {
    let queuedList = [...extentOfImitation];
    setExtentOfImitation([...queuedList]);
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
        <button onClick={continueTheImitation}>Discover</button>
        {extentOfImitation.map((num) => (
          <>
            <ExploreBrickFlex fakeRandom={imitateInsta()} key={uuidv4()} />
            <ExploreBrickFlex
              flag="right"
              fakeRandom={imitateInsta()}
              key={uuidv4()}
            />
          </>
        ))}
      </div>
    </div>
  );
}
