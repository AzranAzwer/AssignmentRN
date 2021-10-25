import AsyncStorage from '@react-native-community/async-storage';

const setToken = tokenObj => {
  AsyncStorage.setItem('access_token', tokenObj.token);
  AsyncStorage.setItem('refresh_token', tokenObj.refreshToken);
  AsyncStorage.setItem('token_type', tokenObj.tokenType);
};
const getAccessToken = () => {
  return AsyncStorage.getItem('access_token');
};
const getAccessTokenType = () => {
  return AsyncStorage.getItem('token_type');
};

const getRefreshToken = () => {
  return AsyncStorage.getItem('refresh_token');
};
const clearToken = () => {
  AsyncStorage.removeItem('access_token');
  AsyncStorage.removeItem('refresh_token');
};

export default {
  setToken: setToken,
  getAccessToken: getAccessToken,
  getRefreshToken: getRefreshToken,
  getAccessTokenType: getAccessTokenType,
  clearToken: clearToken,
};
