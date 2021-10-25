import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LocalStorageService from '../config/LocalStorageService';

import {Login} from '../components/pages';
import BottomTab from './BottomTab';
import Drawer from './Drawer';

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
  const [authUser, setAuthUser] = useState(false);

  useEffect(() => {
    getToken();
  });

  const getToken = async () => {
    const token = await LocalStorageService.getAccessToken();
    if (token) {
      setAuthUser(true);
    } else {
      setAuthUser(false);
    }
  };
  if (authUser) {
    return (
      <Drawer>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AppStack.Screen name="BottomTab" component={BottomTab} />
        </AppStack.Navigator>
      </Drawer>
    );
  } else {
    return (
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    );
  }
};

export default AppStackNavigator;
