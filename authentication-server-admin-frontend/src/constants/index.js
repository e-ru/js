export const OAUTH_SERVER = "http://localhost:9191";
export const RESPONSE_TYPE = "code";
export const CLIENT_ID = "auth_server";
export const REDIRECT_URL = "http://localhost:8889/redirect.html";
export const GRANT_TYPE = "authorization_code";
export const SCOPE = "create_oauth read_oauth update_oauth delete_oauth";
export const AUTHORIZATION_URL = `${OAUTH_SERVER}/oauth/authorize?response_type=${RESPONSE_TYPE}&scope=${SCOPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`;

export const SHOW_OAUTH_WINDOW = "SHOW_OAUTH_WINDOW";
export const OAUTH_REQUEST = "OAUTH_REQUEST";
export const OAUTH_SUCCESS = "OAUTH_SUCCESS";
export const OAUTH_FAILURE = "OAUTH_FAILURE";
