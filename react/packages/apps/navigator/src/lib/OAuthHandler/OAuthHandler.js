import { setOAuthData } from "../../actions/oauth";

class OAuthHandler {
  constructor(store) {
    this.store = store;
  }

  storeTokenData(tokenData) {
    const decoded = JSON.parse(atob(tokenData.access_token.split(".")[1]));
    const username = decoded.user_name;
    const clientId = decoded.client_id;

    this.store.dispatch(setOAuthData(tokenData, username, clientId));
  }
}

export default OAuthHandler;
