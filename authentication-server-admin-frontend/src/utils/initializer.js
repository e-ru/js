import { retrieveOAuthTokenKey, setOAuthData, requestUsers } from "../actions";
import { isCookieValid, getTokenDataFromCookie, removeCookie } from "./oauth";

export const requestOAuthUsers = (dispatch, accessToken) => dispatch(requestUsers(accessToken));

export const preload = dispatch => {
  dispatch(retrieveOAuthTokenKey());
  if (isCookieValid()) {
    const { tokenData, username, clientId } = getTokenDataFromCookie();
    dispatch(setOAuthData(tokenData, username, clientId));
  } else {
    removeCookie();
  }
};
