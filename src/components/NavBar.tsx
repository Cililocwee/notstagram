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
  function openSearch(): void {
    const searchDrawer: HTMLElement | null =
      document.getElementById("search-overlay");

    const notifDrawer: HTMLElement | null = document.getElementById(
      "notification-overlay"
    );

    if (notifDrawer?.classList.contains("overlay-active")) {
      notifDrawer?.classList.toggle("overlay-active");
      notifDrawer?.classList.toggle("overlay-inactive");
    }

    searchDrawer?.classList.toggle("overlay-inactive");
    searchDrawer?.classList.toggle("overlay-active");
  }

  function openNotifications(): void {
    const notifDrawer: HTMLElement | null = document.getElementById(
      "notification-overlay"
    );
    const searchDrawer: HTMLElement | null =
      document.getElementById("search-overlay");

    if (searchDrawer?.classList.contains("overlay-active")) {
      searchDrawer?.classList.toggle("overlay-active");
      searchDrawer?.classList.toggle("overlay-inactive");
    }

    notifDrawer?.classList.toggle("overlay-inactive");
    notifDrawer?.classList.toggle("overlay-active");
  }

  function popUp(): void {
    const splash: HTMLElement = document.getElementById("new-post-splash");

    splash?.classList.add("new-post-active");
    splash?.classList.remove("new-post-inactive");
  }

  return (
    <div id="navbar">
      <div className="insta-home-div">
        <div id="insta-when-big">
          <a className="hidden-when-small" href="/#/feed">
            <p>Notstagram</p>
          </a>
        </div>
        <div id="insta-when-small">
          <a className="hidden-when-small" href="/#/feed">
            <img src={InstaBtn} />
            <p className="navbar-label">Label</p>
          </a>
        </div>
      </div>

      <a href="/#/feed">
        <img src={HomeBtn} />
        <p className="navbar-label">Home</p>
      </a>
      <a className="hidden-when-small" onClick={openSearch}>
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
      <a className="hidden-when-small" onClick={openNotifications}>
        <img src={NotificationBtn} />
        <p className="navbar-label">Notifications</p>
      </a>
      <a onClick={popUp}>
        <img src={NewBtn} />
        <p className="navbar-label">Create</p>
      </a>
      <a>
        <img className="profile-picture-small" src="https://picsum.photos/50" />{" "}
        <p className="navbar-label">Profile</p>
      </a>
      <div className="hidden-when-small" id="user-and-settings">
        <a>
          <img src={MenuBtn} />
          <p className="navbar-label">More</p>
        </a>
      </div>
    </div>
  );
}
