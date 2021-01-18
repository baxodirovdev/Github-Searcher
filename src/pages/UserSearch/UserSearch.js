import React, { useContext } from "react";
import { Search } from "../../components/Search/Search";
import GitHubContext from "../../context/GitHubContext";
import "./UserSearch.css";
import { UsersList } from "./UsersList";
export const UserSearch = () => {
  const { searchUsers } = useContext(GitHubContext);

  return (
    <div className="userSearch">
      <Search setSearch={searchUsers} />
      <UsersList />
    </div>
  );
};
