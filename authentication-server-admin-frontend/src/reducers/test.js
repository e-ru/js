import { DO_TEST_REQUEST, DO_TEST_SUCCESS, DO_TEST_FAILURE,
OAUTH_REQUEST, OAUTH_SUCCESS, OAUTH_FAILURE } from "../constants";

const initialState = {
    loading: false,
    result: {},
    error: null,
    newWindow: false,
    oauthPayload: {},
  };

export default (state = initialState, action) => {
    console.log("action: ", action)
    switch (action.type) {
      case "NEW_WINDOW":
          return {
              ...state,
              newWindow: action.newWindow
          }
      case DO_TEST_REQUEST:
        return {
          ...state,
          loading: true
        };
      case DO_TEST_SUCCESS:
        return {
          ...state,
        //   result: action.payload,
          loading: false,
          error: null
        };
      case DO_TEST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.message
        }
        case OAUTH_REQUEST:
          return {
            ...state,
            loading: true
          };
        case OAUTH_SUCCESS:
          return {
            ...state,
          //   result: action.payload,
            loading: false,
            oauthPayload: action.payload
          };
        case OAUTH_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.message
          }
      default:
        return state;
    }
  };