import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import AppStack from './src/navigation/AppStack';
import store from './src/redux/store';

const App = () => {
  const MyTheme = {
    colors: {
      background: 'white',
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
