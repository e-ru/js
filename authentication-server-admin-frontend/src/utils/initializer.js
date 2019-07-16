import { retrieveOAuthTokenKey, requestUsers } from "../actions";

export const requestOAuthUsers = (dispatch, accessToken) => dispatch(requestUsers(accessToken));

export const preload = dispatch => {
  dispatch(retrieveOAuthTokenKey());
};
