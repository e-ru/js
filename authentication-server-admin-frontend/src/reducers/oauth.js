import { SHOW_OAUTH_WINDOW, OAUTH_REQUEST, OAUTH_SUCCESS, OAUTH_FAILURE } from "../constants";

const initialState = {
  loading: false,
  error: null,
  showOAuthWindow: false,
  oauthData: {},
};

export default (state = initialState, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case SHOW_OAUTH_WINDOW:
      return {
        ...state,
        showOAuthWindow: action.showOAuthWindow,
      };
    case OAUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OAUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        oauthData: action.payload,
      };
    case OAUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
