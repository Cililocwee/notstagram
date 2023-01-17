import React from "react";

interface Props {
  profilePic?: string;
  user?: string;
  full_name?: string;
}
export default function PostCardLabel({ profilePic, user, full_name }: Props) {
  return (
    <div className="card-user-info">
      <div className="card-user-info-left">
        <img className="small-profile-picture" src={profilePic} />
      </div>

      <div className="card-user-info-middle">
        <p className="black-bold-mid-size">{user}</p>
        <p className="gray-thin-mid-size">{full_name}</p>
      </div>

      <div className="card-user-info-right">...</div>
    </div>
  );
}
