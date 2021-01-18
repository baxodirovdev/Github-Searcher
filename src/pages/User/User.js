import React, { useContext, useEffect } from "react";
import GitHubContext from "../../context/GitHubContext";
import "./User.css";
export const User = ({ match }) => {
  const { user, userRepos, getUserRepos, getUser } = useContext(GitHubContext);

  useEffect(() => {
    getUserRepos(match.params.login);
    getUser(match.params.login);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="user">
      <div className="user__img">
        <img src={user.avatar_url} alt="user" />
      </div>

      <div className="user__repoList">
        {userRepos.map((repo) => {
          return (
            <div className="user__repo" key={repo.id}>
              <a
                className="user__repoName"
                target="_blank"
                rel="noreferrer"
                href={repo.html_url}
              >
                {repo.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
