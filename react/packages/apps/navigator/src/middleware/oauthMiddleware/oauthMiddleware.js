import { OAUTH_SERVER } from "../../constants/constants";
import { OAUTH_TOKEN_SUCCESS, OAUTH_REVOKE_REFRESH_TOKEN_SUCCESS } from "../../actions/oauth";

import OAuthHandler from "../../lib/OAuthHandler";

const oAuthMiddleware = store => {
  const oAuthHandler = new OAuthHandler(store);
  return next => async action => {
    let skipAction = false;

    if (action.type === OAUTH_TOKEN_SUCCESS) {
      oAuthHandler.storeTokenData(action.payload);
      skipAction = true;
    }
    if (action.type === OAUTH_REVOKE_REFRESH_TOKEN_SUCCESS) {
      document.location.href = `${OAUTH_SERVER}/logout`;
      skipAction = true;
    }

    if (!skipAction) next(action);
  };
};

export default oAuthMiddleware;
