import React, { useContext } from "react";
import { Search } from "../../components/Search/Search";
import GitHubContext from "../../context/GitHubContext";
import { ReposItem } from "./ReposItem";

export const ReposSearch = () => {
  const { searchRepos, repos } = useContext(GitHubContext);
  return (
    <div className="reposSearch">
      <Search setSearch={searchRepos} />
      <div className="reposSearch__list">
        {repos.map(({ id, name, owner: { login } }) => {
          return <ReposItem key={id} owner={login} repoName={name} />;
        })}
      </div>
    </div>
  );
};
