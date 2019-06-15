import { DO_TEST_REQUEST, DO_TEST_SUCCESS, DO_TEST_FAILURE } from "../constants";

const initialState = {
    loading: false,
    result: {},
    error: null
  };

export default (state = initialState, action) => {
    console.log("action: ", action)
    switch (action.type) {
      case DO_TEST_REQUEST:
        return {
          ...state,
          loading: true
        };
      case DO_TEST_SUCCESS:
        return {
          ...state,
          result: action.payload,
          loading: false,
          error: null
        };
      case DO_TEST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.message
        }
      default:
        return state;
    }
  };