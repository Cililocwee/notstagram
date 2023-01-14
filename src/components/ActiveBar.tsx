import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import UserBubble from "./UserBubble";
import { uuidv4 } from "@firebase/util";

export default function ActiveBar() {
  const currentContext: any = useContext(AppContext);
  const { users } = currentContext;

  interface UserIndividual {
    email: string;
    first_name: string;
    last_name: string;
    profile_pic: string;
    user_id: string;
  }

  return (
    <div id="active-bar">
      {users?.map(
        (user: UserIndividual, index: number) =>
          index < 6 && (
            <UserBubble
              userName={user.user_id}
              picUrl={user.profile_pic}
              key={uuidv4()}
            />
          )
      )}
    </div>
  );
}
