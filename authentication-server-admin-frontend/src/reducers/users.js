import { USERS_GET_REQUEST, USERS_GET_SUCCESS, USERS_GET_FAILURE } from "../constants";

const initialState = {
  loading: false,
  error: null,
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USERS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case USERS_GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: decodeURI(
          `${action.payload.response.error} - ${action.payload.response.error_description.replace(/&amp;/g, "&")}`
        ),
      };
    default:
      return state;
  }
};
