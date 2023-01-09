import React from "react";

interface Props {
  picUrl: string;
  userName: string;
  suggestionHighlight: string;
}

export default function SuggestionBubble({
  picUrl,
  userName,
  suggestionHighlight,
}: Props): JSX.Element {
  return (
    <div className="suggestion-bubble">
      <img className="small-profile-picture" src={picUrl} />
      <div className="suggestion-info">
        <p className="heads-up-user-names-name">{userName}</p>
        <p className="suggestion-highlight">{suggestionHighlight}</p>
      </div>

      <p className="hot-link">Follow</p>
    </div>
  );
}
