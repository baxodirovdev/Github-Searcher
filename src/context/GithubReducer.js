import {
  SEARCH_USERS,
  SEARCH_REPOS,
  GET_USER,
  GET_REPOS,
  GET_USERREPOS,
  GET_COMMITS,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USERREPOS: {
      return {
        ...state,
        userRepos: action.payload,
      };
    }
    case SEARCH_REPOS: {
      return {
        ...state,
        repos: action.payload,
      };
    }
    case GET_REPOS: {
      return {
        ...state,
        repo: action.payload,
      };
    }
    case GET_COMMITS: {
      return {
        ...state,
        commits: action.payload,
      };
    }
    default:
      return state;
  }
};
