import { RSAA, getJSON } from "redux-api-middleware";
import {
  OAUTH_SERVER,
  GRANT_TYPE,
  CLIENT_ID,
  REDIRECT_URL,
  SCOPE,
  OAUTH_SET_RANDOM_STATE,
  OAUTH_REQUEST,
  OAUTH_SUCCESS,
  OAUTH_FAILURE,
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
      OAUTH_REQUEST,
      {
        type: OAUTH_SUCCESS,
        payload: successPayload,
      },
      OAUTH_FAILURE,
    ],
  },
});

export const setRandomState = authState => ({
  type: OAUTH_SET_RANDOM_STATE,
  authState,
});
