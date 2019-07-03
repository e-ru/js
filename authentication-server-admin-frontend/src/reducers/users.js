import { USERS_GET_REQUEST, USERS_GET_SUCCESS, USERS_GET_FAILURE } from "../constants";

export const initialState = {
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
        error: "Unable to get users",
      };
    default:
      return state;
  }
};
