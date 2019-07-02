import Cookies from "universal-cookie";
import { OAUTH_TOKEN_COOKIE } from "../constants";

export const parseHrefForCode = href => {
  let code = "no-code";
  if (href !== null && href !== undefined) {
    code = href.substring(href.indexOf("=") + 1);
    code = code.substring(0, code.indexOf("&"));
  }
  return code;
};

export const parseHrefForState = href =>
  href !== null && href !== undefined ? href.substring(href.lastIndexOf("=") + 1) : "no-state";

export const generateRandomOAuthState = () =>
  Math.random()
    .toString(36)
    .substring(2, 15);

export const compareGeneratedWithReceivedState = (generatedState, receivedState) =>
  generatedState.localeCompare(receivedState) === 0;

export const decodeAuthErrorResponse = (error, errorDescription) =>
  decodeURI(`${error} - ${errorDescription.replace(/&amp;/g, "&")}`);

export const checkCookies = setOAuthDataHandler => {
  const cookies = new Cookies();
  const cookie = cookies.get(OAUTH_TOKEN_COOKIE);
  // console.log("cookie: ", cookie);
  if (cookie === null || cookie === undefined) return false;

  const { tokenData, username, clientId, expire } = cookie;
  if (tokenData && username && clientId && expire && expire * 1000 - Date.now() > 0) {
    setOAuthDataHandler(tokenData, username, clientId);
    return true;
  }
  cookies.remove(OAUTH_TOKEN_COOKIE);
  return false;
};
