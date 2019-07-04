import { OAUTH_SET_DATA, USERS_PATH } from "../constants";

import { requestOAuthUsers } from "../utils/initializer";

export default function createPreloadMiddleware() {
  return store => next => async action => {
    if (action.type === OAUTH_SET_DATA) {
      if (window.location.href.includes(USERS_PATH) || store.getState().oauth.users.length === 0)
        requestOAuthUsers(store.dispatch, action.authData.access_token);
    }
    next(action);
  };
}
