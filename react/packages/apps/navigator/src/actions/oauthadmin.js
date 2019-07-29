import { RSAA, getJSON } from "redux-api-middleware";
import { OAUTH_ADMIN_SERVER } from "../constants/constants";

export const GET_OAUTH_USERS = "GET_OAUTH_USERS";

export const OAUTH_USERS_GET_REQUEST = "OAUTH_USERS_GET_REQUEST";
export const OAUTH_USERS_GET_SUCCESS = "OAUTH_USERS_GET_SUCCESS";
export const OAUTH_USERS_GET_FAILURE = "OAUTH_USERS_GET_FAILURE";

export const OAUTH_USER_PUT_REQUEST = "OAUTH_USER_PUT_REQUEST";
export const OAUTH_USER_PUT_SUCCESS = "OAUTH_USER_PUT_SUCCESS";
export const OAUTH_USER_PUT_FAILURE = "OAUTH_USER_PUT_FAILURE";

const successPayload = (action, state, res) => {
  return getJSON(res).then(json => json);
};

export const getOAuthUsers = () => ({
  type: GET_OAUTH_USERS,
});

export const requestOAuthUsers = accessToken => ({
  [RSAA]: {
    endpoint: `${OAUTH_ADMIN_SERVER}/admin/users`,
    method: "GET",
    headers: { Authorization: "Bearer " + accessToken },
    types: [
      OAUTH_USERS_GET_REQUEST,
      {
        type: OAUTH_USERS_GET_SUCCESS,
        payload: successPayload,
      },
      OAUTH_USERS_GET_FAILURE,
    ],
  },
});

export const updateOAuthUser = (id, user, accessToken) => ({
  [RSAA]: {
    endpoint: `${OAUTH_ADMIN_SERVER}/admin/users/${id}`,
    method: "PUT",
    headers: { Authorization: "Bearer " + accessToken, "Content-type": "application/json" },
    body: JSON.stringify(user),
    types: [
      OAUTH_USER_PUT_REQUEST,
      {
        type: OAUTH_USER_PUT_SUCCESS,
        payload: successPayload,
      },
      OAUTH_USER_PUT_FAILURE,
    ],
  },
});
