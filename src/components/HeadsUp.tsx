import React from "react";
import SuggestionBubble from "./SuggestionBubble";

interface Props {
  userName: string;
  fullName: string;
  suggestions?: JSX.Element[];
}

export default function HeadsUp({ userName, fullName, suggestions }: Props) {
  return (
    <div className="heads-up">
      <div className="heads-up-user-info">
        <img src="https://picsum.photos/75" />
        <div className="heads-up-user-names">
          <p className="heads-up-user-names-name">{userName}</p>
          <p id="heads-up-user-full-name">{fullName}</p>
        </div>
        <p className="hot-link">Switch</p>
      </div>
      <div className="suggestions-for-you">
        <p>Suggestions For You</p>
        <a>
          <p>See All</p>
        </a>
      </div>
      <SuggestionBubble
        userName="morgiemorg"
        suggestionHighlight="Suggested for you"
        picUrl="https://picsum.photos/50"
      />
      <SuggestionBubble
        userName="timmy_tomas"
        suggestionHighlight="Suggested for you"
        picUrl="https://picsum.photos/51"
      />{" "}
      <SuggestionBubble
        userName="lillylol"
        suggestionHighlight="Suggested for you"
        picUrl="https://picsum.photos/52"
      />{" "}
      <SuggestionBubble
        userName="pasa_the_cat"
        suggestionHighlight="Suggested for you"
        picUrl="https://picsum.photos/53"
      />{" "}
      <SuggestionBubble
        userName="juno_black_cat"
        suggestionHighlight="Suggested for you"
        picUrl="https://picsum.photos/54"
      />
    </div>
  );
}
