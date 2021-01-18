import React, { useContext } from "react";
import GitHubContext from "../../context/GitHubContext";
import { UserItem } from "./UserItem";

export const UsersList = () => {
  const { users } = useContext(GitHubContext);

  return (
    <div className="userList">
      {users.map(({ avatar_url, login, id }) => {
        return <UserItem userName={login} userImg={avatar_url} key={id} />;
      })}
    </div>
  );
};
