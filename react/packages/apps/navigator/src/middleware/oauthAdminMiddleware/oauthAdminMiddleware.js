import { OAUTH_USER_PUT_SUCCESS } from "../../actions/oauthadmin";

import OAuthAdminHandler from "../../lib/OAuthAdminHandler";

const oAuthAdminMiddleware = store => {
  const oAuthAdminHandler = new OAuthAdminHandler(store);
  return next => async action => {
    let skipAction = false;
    if (action.type === OAUTH_USER_PUT_SUCCESS) {
      oAuthAdminHandler.requestAuthUsers();
      skipAction = true;
    }

    if (!skipAction) next(action);
  };
};

export default oAuthAdminMiddleware;
