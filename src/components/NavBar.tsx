import React from "react";
import "./components.css";
import DiscoverBtn from "../assets/discovergrad.png";
import HomeBtn from "../assets/homecute.png";
import InstaBtn from "../assets/instagram.png";
import NewBtn from "../assets/newgrad.png";
import NotificationBtn from "../assets/notificationgrad.png";
import ReelBtn from "../assets/reelgrad.png";
import SearchBtn from "../assets/searchgrad.png";
import ShareBtn from "../assets/sharegrad.png";
import MenuBtn from "../assets/menu.png";

export default function NavBar() {
  return (
    <div id="navbar">
      <a>
        <img src={InstaBtn} />
      </a>
      <a>
        <img src={HomeBtn} />
      </a>
      <a>
        <img src={SearchBtn} />
      </a>
      <a>
        <img src={DiscoverBtn} />
      </a>
      <a>
        <img src={ReelBtn} />
      </a>
      <a>
        <img src={ShareBtn} />
      </a>
      <a>
        <img src={NotificationBtn} />
      </a>
      <a>
        <img src={NewBtn} />
      </a>
      <div id="user-and-settings">
        <a>
          <img
            className="profile-picture-small"
            src="https://picsum.photos/50"
          />
        </a>
        <a>
          <img src={MenuBtn} />
        </a>
      </div>
    </div>
  );
}
