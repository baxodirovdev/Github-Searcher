import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GitHubContext from "../../context/GitHubContext";

export const UserItem = ({ userImg, userName }) => {
  return (
    <div className="useritem">
      <img src={userImg} alt="userimg" className="useritem__img" />
      <Link to={`/user/${userName}`} className="useritem__name">
        {userName}
      </Link>
    </div>
  );
};
