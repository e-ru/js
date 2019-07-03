import { RSAA, getJSON } from "redux-api-middleware";
import {
  OAUTH_SERVER,
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
  USERS_GET_FAILURE,
  USER_PUT_REQUEST,
  USER_PUT_SUCCESS,
  USER_PUT_FAILURE,
} from "../constants";

const successPayload = (action, state, res) => {
  return getJSON(res).then(json => json);
};

export const getUsers = accessToken => ({
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
