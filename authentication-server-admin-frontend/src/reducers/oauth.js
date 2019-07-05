import {
  OAUTH_SET_RANDOM_STATE,
  OAUTH_SET_DATA,
  OAUTH_TOKEN_FAILURE,
  OAUTH_REVOKE_REFRESH_TOKEN_FAILURE,
  OAUTH_TOKEN_KEY_SUCCESS,
  OAUTH_TOKEN_KEY_FAILURE,
  USERS_GET_SUCCESS,
  USERS_GET_FAILURE,
  USERS_REFRESHED_AFTER_USER_UPDATE,
} from "../constants";

import { decodeAuthErrorResponse } from "../utils/oauth";

export const initialState = {
  tokenKey: "",
  username: null,
  clientId: null,
  error: null,
  authState: "",
  loggedIn: false,
  authData: {},
  users: [],
  usersRefreshedAfterUserUpdate: false,
};

export default (state = initialState, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case OAUTH_SET_RANDOM_STATE:
      return {
        ...state,
        authState: action.authState,
      };
    case OAUTH_SET_DATA:
      return {
        ...state,
        loggedIn: true,
        authData: action.authData,
        username: action.username,
        clientId: action.clientId,
      };
    case OAUTH_TOKEN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        error: decodeAuthErrorResponse(action.payload.response.error, action.payload.response.error_description),
      };
    case OAUTH_REVOKE_REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        error: decodeAuthErrorResponse(action.payload.response.error, action.payload.response.error_description),
      };
    case OAUTH_TOKEN_KEY_SUCCESS:
      return {
        ...state,
        tokenKey: action.payload.value,
      };
    case OAUTH_TOKEN_KEY_FAILURE:
      return {
        ...state,
        tokenKey: "",
        error: "Auth server not reachable",
      };
    case USERS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case USERS_GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Unable to get users",
      };
    case USERS_REFRESHED_AFTER_USER_UPDATE:
      return {
        ...state,
        usersRefreshedAfterUserUpdate: action.usersRefreshedAfterUserUpdate,
      };
    default:
      return state;
  }
};
