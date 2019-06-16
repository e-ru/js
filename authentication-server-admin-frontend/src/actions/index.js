import { DO_TEST_REQUEST, DO_TEST_SUCCESS, DO_TEST_FAILURE,
    OAUTH_REQUEST, OAUTH_SUCCESS, OAUTH_FAILURE
} from "../constants";

import { RSAA, getJSON } from "redux-api-middleware";

const success_payload = (action, state, res) => {
    console.log("res: ", res)
    return getJSON(res).then(json => json);
  };

export const doTest = () => ({
    [RSAA]: {
        // endpoint: `https://gturnquist-quoters.cfapps.io/api/random`,
        // endpoint: 'http://localhost:4000/',
        endpoint: 'http://localhost:9191/oauth/authorize?response_type=code&client_id=mobile_2&redirect_uri=http://localhost:8889/redirect.html',
        method: "GET",
        // headers: { "Content-Type": "application/json" },
        types: [
            DO_TEST_REQUEST,
          {
            type: DO_TEST_SUCCESS,
            payload: success_payload
          },
          DO_TEST_FAILURE
        ]
      }
}); 


export const setWindowClose = e => ({
    type: "WINDOW_CLOSE",
    e
})

export const setNewWindow = newWindow => ({
    type: "NEW_WINDOW",
    newWindow
})

const getFormBody = code => {
    const formData = new FormData();
    formData.append("grant_type", "authorization_code");
    formData.append("code", code);
    formData.append("redirect_uri", "http://localhost:8889/redirect.html");
    formData.append("client_id", "mobile_2");
    return new URLSearchParams(formData);
}

// make a redux-api-middleware request, see doTEst
export const retrieveToken = code => ({
    [RSAA]: {
        endpoint: 'http://localhost:9191/oauth/token',
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: getFormBody(code),
        types: [
            OAUTH_REQUEST,
          {
            type: OAUTH_SUCCESS,
            payload: success_payload
          },
          OAUTH_FAILURE
        ]
      }
})