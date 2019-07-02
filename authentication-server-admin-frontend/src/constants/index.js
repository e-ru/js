// general
export const OAUTH_SERVER = "http://localhost:9191";
export const RESPONSE_TYPE = "code";
export const CLIENT_ID = "auth_server";
export const REDIRECT_URL = "http://localhost:8889/redirect.html";
export const GRANT_TYPE = "authorization_code";
export const SCOPE = "create_oauth read_oauth update_oauth delete_oauth";
export const AUTHORIZATION_URL = `${OAUTH_SERVER}/oauth/authorize?response_type=${RESPONSE_TYPE}&scope=${SCOPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`;

// actions
export const OAUTH_SET_RANDOM_STATE = "OAUTH_SET_RANDOM_STATE";
export const OAUTH_SET_DATA = "OAUTH_SET_DATA";

export const OAUTH_TOKEN_KEY_REQUEST = "OAUTH_TOKEN_KEY_REQUEST";
export const OAUTH_TOKEN_KEY_SUCCESS = "OAUTH_TOKEN_KEY_SUCCESS";
export const OAUTH_TOKEN_KEY_FAILURE = "OAUTH_TOKEN_KEY_FAILURE";

export const OAUTH_TOKEN_REQUEST = "OAUTH_TOKEN_REQUEST";
export const OAUTH_TOKEN_SUCCESS = "OAUTH_TOKEN_SUCCESS";
export const OAUTH_TOKEN_FAILURE = "OAUTH_TOKEN_FAILURE";

export const OAUTH_REVOKE_REFRESH_TOKEN_REQUEST = "REVOKE_REFRESH_TOKEN_REQUEST";
export const OAUTH_REVOKE_REFRESH_TOKEN_SUCCESS = "REVOKE_REFRESH_TOKEN_SUCCESS";
export const OAUTH_REVOKE_REFRESH_TOKEN_FAILURE = "REVOKE_REFRESH_TOKEN_FAILURE";

export const USERS_GET_REQUEST = "USERS_GET_REQUEST";
export const USERS_GET_SUCCESS = "USERS_GET_SUCCESS";
export const USERS_GET_FAILURE = "USERS_GET_FAILURE";

export const TOGGLE_SIDE_DRAWER = "TOGGLE_SIDE_DRAWER";

// ui
export const EXPANDABLE_LIST_ITEM_CLASS = "expandable-list-item";
export const MIN_DESKTOP_WIDTH = "600px";
export const CONTENT_MARGIN_TOP_DESKTOP = "64px";
export const CONTENT_MARGIN_TOP_MOBILE = "56px";

// cookies
export const OAUTH_TOKEN_COOKIE = "oauth-token-cookie";
