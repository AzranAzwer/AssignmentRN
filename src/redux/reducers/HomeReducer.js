import * as Types from '../actions/actionTypes';

const initialState = {
  data: null,
  isFetching: false,
};

const HomeReducer = (state = initialState, action) => {
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
    case Types.GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
