import jwt from "jsonwebtoken";

import { OAUTH_TOKEN_SUCCESS, OAUTH_REVOKE_REFRESH_TOKEN_SUCCESS } from "../constants";

import { setOAuthData, logout } from "../actions";

export default function createOAuthMiddleware() {
  return store => {
    // add object here
    // const instance = new Instance(store);
    return next => async action => {
      let skipAction = false;

      if (action.type === OAUTH_TOKEN_SUCCESS) {
        const decoded = jwt.verify(action.payload.access_token, store.getState().oauth.tokenKey);

        store.dispatch(setOAuthData(action.payload, decoded.user_name, decoded.client_id));
        skipAction = true;
      }
      if (action.type === OAUTH_REVOKE_REFRESH_TOKEN_SUCCESS) {
        store.dispatch(logout());
        skipAction = true;
      }

      if (!skipAction) next(action);
    };
  };
}
