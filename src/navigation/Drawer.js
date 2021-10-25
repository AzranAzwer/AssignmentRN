/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import {Login, Home} from '../components/pages';
import {userSignout} from '../redux/actions/userAction';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

const Drawer = () => {
  const DrawerStack = createDrawerNavigator();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(userSignout());
    navigation.navigate('Login');
  };

  const CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem label="Logout" onPress={() => alert('Link to help')} /> */}
        <View
          style={{
            justifyContent: 'center',
          }}>
          <DrawerItem
            onPress={userLogout}
            label="Logout"
            labelStyle={{
              color: '#292925',
              fontSize: 18,
              fontFamily: 'AvenirNext-Medium',
              fontWeight: '500',
            }}
          />
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <DrawerStack.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <DrawerStack.Screen name="BottomTab" component={BottomTab} />
      <DrawerStack.Screen name="Login" component={Login} />
    </DrawerStack.Navigator>
  );
};

export default Drawer;
