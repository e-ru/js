import { RSAA, getJSON } from "redux-api-middleware";
import {
  OAUTH_SERVER,
  GRANT_TYPE,
  CLIENT_ID,
  REDIRECT_URL,
  SCOPE,
  OAUTH_SET_RANDOM_STATE,
  OAUTH_SET_DATA,
  OAUTH_TOKEN_REQUEST,
  OAUTH_TOKEN_SUCCESS,
  OAUTH_TOKEN_FAILURE,
  OAUTH_REVOKE_REFRESH_TOKEN_REQUEST,
  OAUTH_REVOKE_REFRESH_TOKEN_SUCCESS,
  OAUTH_REVOKE_REFRESH_TOKEN_FAILURE,
  OAUTH_TOKEN_KEY_REQUEST,
  OAUTH_TOKEN_KEY_SUCCESS,
  OAUTH_TOKEN_KEY_FAILURE,
  GET_USERS,
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
  USERS_GET_FAILURE,
  USER_PUT_REQUEST,
  USER_PUT_SUCCESS,
  USER_PUT_FAILURE,
  UPDATE_USER_COMPLETE,
} from "../constants";

const successPayload = (action, state, res) => {
  return getJSON(res).then(json => json);
};

const getFormBody = code => {
  const formData = new FormData();
  formData.append("grant_type", GRANT_TYPE);
  formData.append("code", code);
  formData.append("redirect_uri", REDIRECT_URL);
  formData.append("client_id", CLIENT_ID);
  formData.append("scope", SCOPE);
  return new URLSearchParams(formData);
};

export const retrieveToken = code => ({
  [RSAA]: {
    endpoint: `${OAUTH_SERVER}/oauth/token`,
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: getFormBody(code),
    types: [
      OAUTH_TOKEN_REQUEST,
      {
        type: OAUTH_TOKEN_SUCCESS,
        payload: successPayload,
      },
      OAUTH_TOKEN_FAILURE,
    ],
  },
});

export const retrieveOAuthTokenKey = () => ({
  [RSAA]: {
    endpoint: `${OAUTH_SERVER}/oauth/token_key`,
    method: "GET",
    types: [
      OAUTH_TOKEN_KEY_REQUEST,
      {
        type: OAUTH_TOKEN_KEY_SUCCESS,
        payload: successPayload,
      },
      OAUTH_TOKEN_KEY_FAILURE,
    ],
  },
});

export const revokeRefreshToken = (username, clientId, accessToken) => ({
  [RSAA]: {
    endpoint: `${OAUTH_SERVER}/tokens/refreshTokens?username=${username}&clientid=${clientId}`,
    method: "DELETE",
    headers: { Authorization: `Bearer ${accessToken}` },
    types: [
      OAUTH_REVOKE_REFRESH_TOKEN_REQUEST,
      {
        type: OAUTH_REVOKE_REFRESH_TOKEN_SUCCESS,
        payload: successPayload,
      },
      OAUTH_REVOKE_REFRESH_TOKEN_FAILURE,
    ],
  },
});

export const setRandomState = authState => ({
  type: OAUTH_SET_RANDOM_STATE,
  authState,
});

export const setOAuthData = (authData, username, clientId) => ({
  type: OAUTH_SET_DATA,
  authData,
  username,
  clientId,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const requestUsers = accessToken => ({
  [RSAA]: {
    endpoint: `${OAUTH_SERVER}/admin/users`,
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
    types: [
      USERS_GET_REQUEST,
      {
        type: USERS_GET_SUCCESS,
        payload: successPayload,
      },
      USERS_GET_FAILURE,
    ],
  },
});

export const updateUser = (id, user, accessToken) => ({
  [RSAA]: {
    endpoint: `${OAUTH_SERVER}/admin/users/${id}`,
    method: "PUT",
    headers: { Authorization: "Bearer " + accessToken, "Content-type": "application/json" },
    body: JSON.stringify(user),
    types: [
      USER_PUT_REQUEST,
      {
        type: USER_PUT_SUCCESS,
        payload: successPayload,
      },
      USER_PUT_FAILURE,
    ],
  },
});
