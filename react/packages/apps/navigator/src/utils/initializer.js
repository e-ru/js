import { retrieveOAuthTokenKey } from "../actions/oauth";

export const preload = dispatch => {
  dispatch(retrieveOAuthTokenKey());
};

export default preload;
