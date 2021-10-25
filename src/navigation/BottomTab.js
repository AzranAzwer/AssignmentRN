import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Account, List, Favourite, Timing} from '../components/pages';
import {
  HomeIcon,
  AccountIcon,
  ListIcon,
  FavouriteIcon,
  TimingIcon,
  Filter,
  ArrowLeft,
} from '../../images';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon color={focused ? '#1652B7' : '#14142B4A'} />;
            case 'Account':
              return <AccountIcon color={focused ? '#1652B7' : '#14142B4A'} />;
            case 'List':
              return (
                <ListIcon color={focused ? '#1652B7' : '#14142B4A'} size="35" />
              );
            case 'Favourite':
              return (
                <FavouriteIcon color={focused ? '#1652B7' : '#14142B4A'} />
              );
            case 'Timing':
              return <TimingIcon color={focused ? '#1652B7' : '#14142B4A'} />;
          }
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          headerTitle: '',
          headerRight: () => <Filter />,
          headerLeft: () => <ArrowLeft />,
        }}
      />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Timing" component={Timing} />
    </Tab.Navigator>
  );
};

export default BottomTab;
