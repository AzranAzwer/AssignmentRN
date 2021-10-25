import * as Types from './actionTypes';
import {BASE_URL, API_END_POINTS, API_CONFIG} from '../../api/config';
import LocalStorageService from '../../config/LocalStorageService';

//user login
export const userSignIn = data => dispatch => {
  const apiEndpoint = BASE_URL + API_END_POINTS.USER_SIGNIN;
  dispatch({type: Types.FETCHING});
  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: API_CONFIG.client_id,
      client_secret: API_CONFIG.client_secret,
      grant_type: API_CONFIG.grant_type,
      username: data.username,
      password: data.password,
    }),
  })
    .then(response => response.json())
    .then(response => {
      console.log('response', response);
      if (response && response.status === 'OK') {
        dispatch({type: Types.FETCHED});
        dispatch({type: Types.AUTH_USER, payload: response});
        let tokenObj = {
          token: `${response.result.access_token}`,
          refreshToken: `${response.result.refresh_token}`,
          tokenType: `${response.result.token_type}`,
        };
        LocalStorageService.setToken(tokenObj);
      } else if (response && response.status === 'Unauthorized') {
        dispatch({type: Types.FETCHED});
        dispatch({type: Types.AUTH_USER, payload: response.status});
      } else {
        dispatch({type: Types.FETCHED});
      }
    })
    .catch(error => console.log('error', error));
};

// user get data on home screen
export const getData = () => async dispatch => {
  const token = await LocalStorageService.getAccessToken();
  const tokenType = await LocalStorageService.getAccessTokenType();
  const apiEndpoint = BASE_URL + API_END_POINTS.HOME_DATA;
  dispatch({type: Types.FETCHING});
  fetch(apiEndpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: tokenType + ' ' + token,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response && response.status === 'OK') {
        dispatch({type: Types.FETCHED});
        dispatch({type: Types.GET_DATA, payload: response.result});
      } else {
        dispatch({type: Types.FETCHED});
      }
    })
    .catch(error => console.log('error', error));
};

// user get data on home screen
export const getCompanyDetails = () => async dispatch => {
  const token = await LocalStorageService.getAccessToken();
  const tokenType = await LocalStorageService.getAccessTokenType();
  const apiEndpoint = BASE_URL + API_END_POINTS.COMPANY_LIST;
  dispatch({type: Types.FETCHING});
  fetch(apiEndpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: tokenType + ' ' + token,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response && response.status === 'OK') {
        dispatch({type: Types.FETCHED});
        dispatch({type: Types.GET_COMPANY_DETAILS, payload: response.result});
      } else {
        dispatch({type: Types.FETCHED});
      }
    })
    .catch(error => console.log('error', error));
};

//user logout
export const userSignout = () => async dispatch => {
  const token = await LocalStorageService.getAccessToken();
  const tokenType = await LocalStorageService.getAccessTokenType();
  const apiEndpoint = BASE_URL + API_END_POINTS.USER_LOGOUT;
  dispatch({type: Types.FETCHING});
  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: tokenType + ' ' + token,
    },
  })
    .then(response => response.json())
    .then(response => {
      if (response && response.status === 'OK') {
        dispatch({type: Types.FETCHED});
        dispatch({type: Types.USER_LOGOUT, payload: response});
      }
      dispatch({type: Types.FETCHED});
    })
    .catch(error => console.log('error', error));
};
