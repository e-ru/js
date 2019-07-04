import {
  OAUTH_TOKEN_SUCCESS,
  OAUTH_REVOKE_REFRESH_TOKEN_SUCCESS,
  OAUTH_SERVER,
  GET_USERS,
  USER_PUT_SUCCESS,
  USERS_GET_SUCCESS,
} from "../constants";

import OAuthHandler from "../lib/OAuthHandler";

export default function createOAuthMiddleware() {
  return store => {
    const oAuthHandler = new OAuthHandler(store);
    return next => async action => {
      let skipAction = false;

      if (action.type === OAUTH_TOKEN_SUCCESS) {
        oAuthHandler.storeTokenData(action.payload);
        skipAction = true;
      }
      if (action.type === OAUTH_REVOKE_REFRESH_TOKEN_SUCCESS) {
        oAuthHandler.removeCookies();
        document.location.href = `${OAUTH_SERVER}/logout`;
        skipAction = true;
      }
      if (action.type === GET_USERS) {
        oAuthHandler.requestAuthUsers();
        skipAction = true;
      }
      if (action.type === USER_PUT_SUCCESS) {
        oAuthHandler.userUpdated = true;
        oAuthHandler.requestAuthUsers();
        skipAction = true;
      }
      if (action.type === USERS_GET_SUCCESS) {
        oAuthHandler.refreshAfterUpdateState();
      }

      if (!skipAction) next(action);
    };
  };
}
