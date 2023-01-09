import React from "react";
import UserBubble from "./UserBubble";

export default function ActiveBar() {
  return (
    <div id="active-bar">
      <UserBubble userName="james_jim" picUrl="https://picsum.photos/75" />
      <UserBubble userName="sarah_sara" picUrl="https://picsum.photos/76" />
      <UserBubble userName="john_jack" picUrl="https://picsum.photos/77" />
      <UserBubble userName="lee_leigh" picUrl="https://picsum.photos/78" />
      <UserBubble userName="thanh_nguyen" picUrl="https://picsum.photos/79" />
      <UserBubble userName="allison_y" picUrl="https://picsum.photos/80" />
    </div>
  );
}
