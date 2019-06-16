import { RSAA, getJSON } from "redux-api-middleware";
import { OAUTH_REQUEST, OAUTH_SUCCESS, OAUTH_FAILURE } from "../constants";

const successPayload = (action, state, res) => {
  console.log("res: ", res);
  return getJSON(res).then(json => json);
};

export const setNewWindow = newWindow => ({
  type: "NEW_WINDOW",
  newWindow,
});

const getFormBody = code => {
  const formData = new FormData();
  formData.append("grant_type", "authorization_code");
  formData.append("code", code);
  formData.append("redirect_uri", "http://localhost:8889/redirect.html");
  formData.append("client_id", "mobile_3");
  return new URLSearchParams(formData);
};

export const retrieveToken = code => ({
  [RSAA]: {
    endpoint: "http://localhost:9191/oauth/token",
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
