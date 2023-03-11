import { useContext } from "react";
import "./components.css";
import DiscoverBtn from "../assets/discovergrad.png";
import HomeBtn from "../assets/homecute.png";
import NewBtn from "../assets/newgrad.png";
import ReelBtn from "../assets/reelgrad.png";
import ShareBtn from "../assets/sharegrad.png";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const currentContext: any = useContext(AppContext);
  const { currentUser } = currentContext;

  function popUp(): void {
    const splash: HTMLElement | null =
      document.getElementById("new-post-splash");

    splash?.classList.add("new-post-active");
    splash?.classList.remove("new-post-inactive");
  }
  return (
    <div id="navbar-small-screen">
      <a href="/">
        <img src={HomeBtn} />
      </a>

      <Link to="/explore">
        <img src={DiscoverBtn} />
      </Link>

      <Link to="">
        <img src={ReelBtn} />
      </Link>

      <Link to="">
        <img src={ShareBtn} />
      </Link>

      <a onClick={popUp}>
        <img src={NewBtn} />
      </a>

      <div id="profile-picture-small">
        <img className="profile-picture-small" src={currentUser.pic_url} />
      </div>
    </div>
  );
}
