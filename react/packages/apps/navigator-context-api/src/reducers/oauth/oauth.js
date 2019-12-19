import {
  OAUTH_SET_RANDOM_STATE,
  OAUTH_SET_DATA,
  OAUTH_TOKEN_FAILURE,
  OAUTH_REVOKE_REFRESH_TOKEN_FAILURE,
} from "../../actions/oauth";

import { decodeAuthErrorResponse } from "../../utils/oauth";

export const initialState = {
  tokenKey: "",
  authData: {},
  username: null,
  clientId: null,
  error: null,
  authState: "",
  loggedIn: false,
};

export const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
