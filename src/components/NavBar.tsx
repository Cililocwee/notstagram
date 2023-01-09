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
  return (
    <div id="navbar">
      <div className="insta-home-div">
        <div id="insta-when-big">
          <a href="/#/feed">
            <p>Notstagram</p>
          </a>
        </div>
        <div id="insta-when-small">
          <a href="/#/feed">
            <img src={InstaBtn} />
            <p className="navbar-label">Label</p>
          </a>
        </div>
      </div>

      <a href="/#/feed">
        <img src={HomeBtn} />
        <p className="navbar-label">Home</p>
      </a>
      <a>
        <img src={SearchBtn} />
        <p className="navbar-label">Search</p>
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
      <a>
        <img src={NotificationBtn} />
        <p className="navbar-label">Notifications</p>
      </a>
      <a>
        <img src={NewBtn} />
        <p className="navbar-label">Create</p>
      </a>
      <a>
        <img className="profile-picture-small" src="https://picsum.photos/50" />{" "}
        <p className="navbar-label">Profile</p>
      </a>
      <div id="user-and-settings">
        <a>
          <img src={MenuBtn} />
          <p className="navbar-label">More</p>
        </a>
      </div>
    </div>
  );
}
