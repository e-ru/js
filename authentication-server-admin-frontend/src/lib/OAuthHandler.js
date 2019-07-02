import jwt from "jsonwebtoken";
import Cookies from "universal-cookie";

import { OAUTH_TOKEN_COOKIE } from "../constants";

import { setOAuthData } from "../actions";

class OAuthHandler {
  constructor(store) {
    this.store = store;
    this.cookies = new Cookies();
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
}

export default OAuthHandler;
