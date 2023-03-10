import React, { useContext } from "react";
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
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

export default function NavBar() {
  const currentContext: any = useContext(AppContext);
  const { currentUser } = currentContext;
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
    const splash: HTMLElement | null =
      document.getElementById("new-post-splash");

    splash?.classList.add("new-post-active");
    splash?.classList.remove("new-post-inactive");
  }

  return (
    <div id="navbar">
      <div className="insta-home-div">
        <div id="insta-when-big">
          <a href="/">
            <p>Notstagram</p>
          </a>
        </div>
        <div id="insta-when-small">
          <a href="/">
            <img src={InstaBtn} />
            <p className="navbar-label">Label</p>
          </a>
        </div>
      </div>

      <a href="/">
        <img src={HomeBtn} />
        <p className="navbar-label">Home</p>
      </a>
      <a onClick={openSearch}>
        <img src={SearchBtn} />
        <p className="navbar-label">Search</p>
      </a>
      <Link to="/explore">
        <img src={DiscoverBtn} />
        <p className="navbar-label">Explore</p>
      </Link>
      <Link to="">
        <img src={ReelBtn} />
        <p className="navbar-label">Reels</p>
      </Link>
      <Link to="">
        <img src={ShareBtn} />
        <p className="navbar-label">Messages</p>
      </Link>

      <a onClick={openNotifications}>
        <img src={NotificationBtn} />
        <p className="navbar-label">Notifications</p>
      </a>

      <a onClick={popUp}>
        <img src={NewBtn} />
        <p className="navbar-label">Create</p>
      </a>
      <Link to="/">
        <img className="profile-picture-small" src={currentUser.pic_url} />
        <p className="navbar-label">Profile</p>
      </Link>

      <div id="user-and-settings">
        <a>
          <img src={MenuBtn} />
          <p className="navbar-label">More</p>
        </a>
      </div>
    </div>
  );
}
