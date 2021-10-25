import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import HomeReducer from './HomeReducer';
import CompanyReducer from './CompanyReducer';

export default combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
  company: CompanyReducer,
});
