import jwt from "jsonwebtoken";

import { setOAuthData, setUsersRefreshedAfterUserUpdate } from "../actions";

import { requestOAuthUsers } from "../utils/initializer";

class OAuthHandler {
  constructor(store) {
    this.store = store;

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

    this.store.dispatch(setOAuthData(tokenData, username, clientId));
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
