import React, { useEffect, useState } from "react";

interface Props {
  picUrl: string;
  userName: string;
}

export default function UserBubble({ picUrl, userName }: Props) {
  const [shortName, setShortname] = useState<string>("");

  function truncateName(name: string): string {
    let nameQueue: string[] = name.split("");
    let nameShortened: string = nameQueue.splice(0, 8).join("") + "...";
    return nameShortened;
  }

  useEffect(() => {
    setShortname(truncateName(userName));
  }, []);

  return (
    <div className="user-bubble">
      <div className="active-user">
        <img src={picUrl} />
      </div>
      {shortName}
    </div>
  );
}
