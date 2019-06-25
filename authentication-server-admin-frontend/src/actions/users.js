import { RSAA, getJSON } from "redux-api-middleware";
import { OAUTH_SERVER, USERS_GET_REQUEST, USERS_GET_SUCCESS, USERS_GET_FAILURE } from "../constants";

const successPayload = (action, state, res) => {
  return getJSON(res).then(json => json);
};

const getUsers = accessToken => ({
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

export default getUsers;
