import * as Types from '../actions/actionTypes';

const initialState = {
  company: null,
  isFetching: false,
};

const CompanyReducer = (state = initialState, action) => {
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
    case Types.GET_COMPANY_DETAILS:
      return {
        ...state,
        company: action.payload,
      };
    default:
      return state;
  }
};

export default CompanyReducer;
