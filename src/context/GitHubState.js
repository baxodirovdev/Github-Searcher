import React, { useReducer } from "react";
import GithubReducer from "./GithubReducer";
import GitHubContext from "./GitHubContext";
import axios from "axios";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  SEARCH_REPOS,
  GET_USERREPOS,
  GET_COMMITS,
} from "./types";
export const GitHubState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    userRepos: [],
    repos: [],
    repo: {},
    commits: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const getUser = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  const getUserRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc`
    );
    dispatch({
      type: GET_USERREPOS,
      payload: res.data,
    });
  };

  const searchRepos = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}`
    );
    dispatch({
      type: SEARCH_REPOS,
      payload: res.data.items,
    });
  };

  const getRepos = async (owner, repo) => {
    const res = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  const getCommits = async (owner, repo) => {
    const res = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/commits`
    );

    dispatch({
      type: GET_COMMITS,
      payload: res.data,
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        userRepos: state.userRepos,
        repos: state.repos,
        repo: state.repo,
        commits: state.commits,
        searchUsers,
        searchRepos,
        getUser,
        getUserRepos,
        getRepos,
        getCommits,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
