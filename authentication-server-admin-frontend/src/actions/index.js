import { RSAA, getJSON } from "redux-api-middleware";
import {
  OAUTH_SERVER,
  GRANT_TYPE,
  CLIENT_ID,
  REDIRECT_URL,
  SHOW_OAUTH_WINDOW,
  OAUTH_REQUEST,
  OAUTH_SUCCESS,
  OAUTH_FAILURE,
} from "../constants";

const successPayload = (action, state, res) => {
  console.log("res: ", res);
  return getJSON(res).then(json => json);
};

export const showOAuthLoginWindow = showOAuthWindow => ({
  type: SHOW_OAUTH_WINDOW,
  showOAuthWindow,
});

const getFormBody = code => {
  const formData = new FormData();
  formData.append("grant_type", GRANT_TYPE);
  formData.append("code", code);
  formData.append("redirect_uri", REDIRECT_URL);
  formData.append("client_id", CLIENT_ID);
  return new URLSearchParams(formData);
};

export const retrieveToken = code => ({
  [RSAA]: {
    endpoint: `${OAUTH_SERVER}/token`,
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
