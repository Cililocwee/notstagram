import React from "react";
import NewPostIcon from "../assets/media.png";

export default function NewPost() {
  function hideSplash(): void {
    const splash: HTMLElement | null =
      document.getElementById("new-post-splash");
    splash?.classList.add("new-post-inactive");
    splash?.classList.remove("new-post-active");
  }

  // TODO Correctly type this
  function preventHidingOnChildren(e: any): void {
    e.stopPropagation();
  }

  return (
    <div
      id="new-post-splash"
      className="new-post-inactive"
      onClick={hideSplash}
    >
      <div id="new-post-box" onClick={preventHidingOnChildren}>
        <div style={{ borderBottom: "1px solid lightgray" }}>
          <h3>Create new post</h3>
        </div>
        <img id="new-post-icon" src={NewPostIcon} />
        Drag photos and videos here
        <button id="upload-btn">Select from computer</button>
      </div>
    </div>
  );
}
