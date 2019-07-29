import { requestOAuthUsers } from "../actions/oauthadmin";

class OAuthAdminHandler {
  constructor(store) {
    this.store = store;
  }

  requestAuthUsers() {
    setTimeout(() => this.store.dispatch(requestOAuthUsers(this.store.getState().oauth.authData.access_token)), 1000);
  }
}

export default OAuthAdminHandler;
