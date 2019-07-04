import jwt from "jsonwebtoken";
import Cookies from "universal-cookie";

import { OAUTH_TOKEN_COOKIE } from "../constants";

import { setOAuthData, setUsersRefreshedAfterUserUpdate } from "../actions";

import { requestOAuthUsers } from "../utils/initializer";

class OAuthHandler {
  constructor(store) {
    this.store = store;
    this.cookies = new Cookies();

    this._userUpdated = false;
  }

  set userUpdated(userUpdated) {
    this._userUpdated = userUpdated;
  }

  get userUpdated() {
    return this._userUpdated;
  }

  storeTokenData(tokenData) {
    const decoded = jwt.verify(tokenData.access_token, this.store.getState().oauth.tokenKey);
    const username = decoded.user_name;
    const clientId = decoded.client_id;
    const expire = decoded.exp;

    this.store.dispatch(setOAuthData(tokenData, username, clientId));
    this.cookies.set(OAUTH_TOKEN_COOKIE, { tokenData, username, clientId, expire });
  }

  removeCookies() {
    this.cookies.remove(OAUTH_TOKEN_COOKIE);
  }

  requestAuthUsers() {
    requestOAuthUsers(this.store.dispatch, this.store.getState().oauth.authData.access_token);
  }

  refreshAfterUpdateState() {
    if (this.userUpdated) {
      this.userUpdated = false;
      this.store.dispatch(setUsersRefreshedAfterUserUpdate(true));
    }
  }
}

export default OAuthHandler;
