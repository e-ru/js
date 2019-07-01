import {
  OAUTH_SET_RANDOM_STATE,
  OAUTH_SET_DATA,
  OAUTH_TOKEN_FAILURE,
  OAUTH_REVOKE_REFRESH_TOKEN_FAILURE,
  OAUTH_TOKEN_KEY_SUCCESS,
  OAUTH_TOKEN_KEY_FAILURE,
  OAUTH_LOGOUT_SUCCESS,
  OAUTH_LOGOUT_FAILURE,
} from "../constants";

import { decodeAuthErrorResponse } from "../utils/oauth";

const initialState = {
  tokenKey: "",
  username: null,
  clientId: null,
  error: null,
  authState: "",
  loggedIn: true,
  authData: {},
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
    case OAUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
      };
    case OAUTH_LOGOUT_FAILURE:
      return {
        ...state,
        error: "Could not logout",
      };
    default:
      return state;
  }
};
