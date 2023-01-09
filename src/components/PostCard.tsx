import React from "react";
import PostCardLabel from "./PostCardLabel";

// TODO Expand props later to encompass the comments
interface Props {
  profilePic: string;
  user: string;
  picUrl: string;
  likeCount: number;
}

export default function PostCard({
  profilePic,
  user,
  picUrl,
  likeCount,
}: Props): JSX.Element {
  return (
    <div className="postcard">
      <PostCardLabel profilePic={profilePic} user={user} />

      <div className="centerpiece-photo">
        <img src={picUrl} alt="" />
      </div>
      <div className="friend-interactions">
        <div className="like-share-bar">
          <li>Like</li>
          <li>Comment</li>
          <li>Share</li>
          <li className="save-btn">Save</li>
        </div>
        <div className="like-count">{likeCount} likes</div>
      </div>
      {/* This needs to eventually be its own component function */}
      <div className="caption">
        <p className="caption-username">Example User</p>
        <p className="caption-content">Lorem ipsum dolor et...</p>
      </div>
    </div>
  );
}
