import React from "react";
import "./components.css";
import DiscoverBtn from "../assets/discovergrad.png";
import HomeBtn from "../assets/homecute.png";
import InstaBtn from "../assets/instagramalt.png";
import NewBtn from "../assets/newgrad.png";
import NotificationBtn from "../assets/notificationgrad.png";
import ReelBtn from "../assets/reelgrad.png";
import SearchBtn from "../assets/searchgrad.png";
import ShareBtn from "../assets/sharegrad.png";
import MenuBtn from "../assets/menu.png";

export default function NavBar() {
  function popUp(): void {
    const splash: HTMLElement | null =
      document.getElementById("new-post-splash");

    splash?.classList.add("new-post-active");
    splash?.classList.remove("new-post-inactive");
  }
  return (
    <div id="navbar-small-screen">
      <a href="/#/feed">
        <img src={HomeBtn} />
        <p className="navbar-label">Home</p>
      </a>

      <a>
        <img src={DiscoverBtn} />
        <p className="navbar-label">Explore</p>
      </a>
      <a>
        <img src={ReelBtn} />
        <p className="navbar-label">Reels</p>
      </a>
      <a>
        <img src={ShareBtn} />
        <p className="navbar-label">Messages</p>
      </a>

      <a onClick={popUp}>
        <img src={NewBtn} />
        <p className="navbar-label">Create</p>
      </a>
      <a>
        <img className="profile-picture-small" src="https://picsum.photos/50" />{" "}
        <p className="navbar-label">Profile</p>
      </a>
    </div>
  );
}
