import React from "react";
import PostCardLabel from "./PostCardLabel";
import CommentIcon from "../assets/comments.png";
import LikeIcon from "../assets/notificationgrad.png";
import ShareIcon from "../assets/sharegrad.png";
import BookmarkIcon from "../assets/bookmark.png";
import { uuidv4 } from "@firebase/util";

// TODO Expand props later to encompass the comments

interface Props {
  profilePic: string;
  user: string;
  picUrl: string;
  likeCount: number;
  caption: string;
  time_posted?: number | undefined;
  comments?: string[];
}

export default function PostCard({
  profilePic,
  user,
  picUrl,
  likeCount,
  caption,
  time_posted,
  comments,
}: Props): JSX.Element {
  function makeDateReadable(time: any): string {
    const stepOne = new Date(time * 1000);
    return stepOne.toLocaleString();
  }

  function handleClick(e: any): void {
    e.target.parentElement.lastChild.classList.toggle("visible");
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
      <div className="caption">
        <p className="caption-content">
          <strong>{user}&nbsp;</strong>
          {caption}
        </p>
      </div>

      <div className="comment-frame">
        <div className="comment-expand" onClick={handleClick}>
          View all {comments?.length} comments
        </div>
        <div className="comment-substance">
          {comments?.map((comment: string) => (
            <p key={uuidv4()}>
              <strong>{comment.split(", ")[0]}</strong> {comment.split(", ")[1]}
            </p>
          ))}
        </div>
      </div>
      <div className="postcard-date">
        <p>Posted on {makeDateReadable(time_posted)}</p>
      </div>
    </div>
  );
}
