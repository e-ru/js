import { DO_TEST_REQUEST, DO_TEST_SUCCESS, DO_TEST_FAILURE } from "../constants";

import { RSAA, getJSON } from "redux-api-middleware";

const success_payload = (action, state, res) => {
    // console.log("res: ", res)
    return getJSON(res).then(json => json);
  };

export const doTest = () => ({
    [RSAA]: {
        // endpoint: `https://gturnquist-quoters.cfapps.io/api/random`,
        endpoint: 'http://localhost:4000/',
        method: "GET",
        headers: { "Content-Type": "application/json" },
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