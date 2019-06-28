import { OAUTH_SET_RANDOM_STATE, OAUTH_REQUEST, OAUTH_SUCCESS, OAUTH_FAILURE } from "../constants";

const initialState = {
  loading: false,
  error: null,
  oauthData: {},
  loggedIn: false,
  authState: "",
};

export default (state = initialState, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case OAUTH_SET_RANDOM_STATE:
      return {
        ...state,
        authState: action.authState,
      };
    case OAUTH_REQUEST:
      return {
        ...state,
        loading: true,
        loggedIn: false,
      };
    case OAUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        oauthData: action.payload,
      };
    case OAUTH_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: decodeURI(
          `${action.payload.response.error} - ${action.payload.response.error_description.replace(/&amp;/g, "&")}`
        ),
      };
    default:
      return state;
  }
};
