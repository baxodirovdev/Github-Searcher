import React from "react";
import { Link } from "react-router-dom";
import "./ReposSearch.css";
export const ReposItem = ({ owner, repoName }) => {
  return (
    <div className="reposItem">
      <span>{owner}</span>
      <Link className='repositem__link' to={`/repos/${owner}/${repoName}`}>/{repoName}</Link>
    </div>
  );
};
