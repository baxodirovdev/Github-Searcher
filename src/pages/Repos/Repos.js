import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import GitHubContext from "../../context/GitHubContext";
import "./Repos.css";
export const Repos = ({ match }) => {
  const { getRepos, getCommits, repo, commits } = useContext(GitHubContext);
  const [commitsToShow, setCommitsToShow] = useState([]);
  const [comittersToShow, setComittersToShow] = useState([]);
  const [commitEnd, setCommitEnd] = useState(5);
  const [commitersEnd, setCommitersEnd] = useState(3);

  useEffect(() => {
    getRepos(match.params.owner, match.params.repo);
    getCommits(match.params.owner, match.params.repo);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (commits.length >= commitEnd) {
      setCommitsToShow([...commits.slice(0, commitEnd)]);
    }

    if (commits.length >= commitersEnd) {
      setComittersToShow([...commits.slice(0, commitersEnd)]);
    }

    // eslint-disable-next-line
  }, [commits, commitEnd, commitersEnd]);

  const showMoreCommits = () => {
    setCommitEnd(commitEnd + 5);
  };

  const showMoreCommitters = () => {
    setCommitersEnd(commitersEnd + 3);
  };

  let unique = [];

  comittersToShow.map((comitter) => {
    return (unique = [...unique, comitter.author.login]);
  });

  unique = [...new Set(unique)];

  return (
    <div className="repos">
      <h3>
        <span className="repos__owner">{match.params.owner}</span>
        <a
          className="repos__link"
          target="_blank"
          rel="noreferrer"
          href={repo.html_url}
        >
          /{repo.name}
        </a>
      </h3>
      <h4>Commits</h4>
      <div className="repos__commits">
        {commitsToShow.map((commit) => {
          return (
            <div key={commit.sha} className="repos__commit">
              <p>{commit.commit.message}</p>
            </div>
          );
        })}
      </div>
      {commits.length > commitEnd ? (
        <Button
          onClick={showMoreCommits}
          className="repos__button"
          variant="contained"
        >
          More
        </Button>
      ) : null}
      <h4>Comitter</h4>
      <div className="repos__commits">
        {unique.map((commit, index) => {
          return (
            <div key={index} className="repos__commit">
              <p>{commit}</p>
            </div>
          );
        })}
      </div>
      {unique > commitersEnd ? (
        <Button
          onClick={showMoreCommitters}
          className="repos__button"
          variant="contained"
        >
          More
        </Button>
      ) : null}
    </div>
  );
};
