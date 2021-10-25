import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './LoadingIndicator.styles';

export const LoadingIndicator = ({}) => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#0000FF" />
    </Container>
  );
};
