import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {Text} from '../../atoms';

export const Favourite = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text
          margin="60px 0 0 35px"
          fontSize="30px"
          fontWeight={900}
          lineHeight="35px">
          Favourite
        </Text>
      </View>
    </SafeAreaView>
  );
};
