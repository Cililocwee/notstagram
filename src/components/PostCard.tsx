import React from "react";
import PostCardLabel from "./PostCardLabel";
import CommentIcon from "../assets/comments.png";
import LikeIcon from "../assets/notificationgrad.png";
import ShareIcon from "../assets/sharegrad.png";
import BookmarkIcon from "../assets/bookmark.png";

// TODO Expand props later to encompass the comments

interface Props {
  profilePic: string;
  user: string;
  picUrl: string;
  likeCount: number;
  caption: string;
  time_posted?: number | undefined;
}

export default function PostCard({
  profilePic,
  user,
  picUrl,
  likeCount,
  caption,
  time_posted,
}: Props): JSX.Element {
  function makeDateReadable(time: any): string {
    const stepOne = new Date(time * 1000);
    return stepOne.toLocaleString();
  }
  return (
    <div className="postcard">
      <PostCardLabel profilePic={profilePic} user={user} />

      <div className="centerpiece-photo">
        <img loading="lazy" src={picUrl} alt="" />
      </div>
      <div className="friend-interactions">
        <div className="like-share-bar">
          <li>
            <img src={LikeIcon} />
          </li>
          <li>
            <img src={CommentIcon} />
          </li>
          <li>
            <img src={ShareIcon} />
          </li>
          <li className="save-btn">
            <img src={BookmarkIcon} />
          </li>
        </div>
        <div className="like-count">{likeCount} likes</div>
      </div>
      {/* This needs to eventually be its own component function */}
      <div className="caption">
        <p className="caption-username">
          <strong>{user}</strong>
        </p>
        <p className="caption-content">{caption}</p>
        <p>{makeDateReadable(time_posted)}</p>
      </div>
    </div>
  );
}
