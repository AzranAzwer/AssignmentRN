import * as Types from '../actions/actionTypes';

const initialState = {
  authUser: null,
  isFetching: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case Types.FETCHED:
      return {
        ...state,
        isFetching: false,
      };
    case Types.AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    case Types.USER_LOGOUT:
      return {
        ...state,
        authUser: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
