import { OAUTH_USER_PUT_REQUEST, OAUTH_USERS_GET_REQUEST, OAUTH_USERS_GET_SUCCESS } from "../../actions/oauthadmin";

export const initialState = {
  getOAuthUsersInProgress: false,
  oAuthUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OAUTH_USERS_GET_REQUEST:
      return {
        ...state,
        getOAuthUsersInProgress: true,
      };
    case OAUTH_USER_PUT_REQUEST:
      return {
        ...state,
        getOAuthUsersInProgress: true,
      };
    case OAUTH_USERS_GET_SUCCESS:
      return {
        ...state,
        getOAuthUsersInProgress: false,
        oAuthUsers: action.payload,
      };
    default:
      return state;
  }
};
