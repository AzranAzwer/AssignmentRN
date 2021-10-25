import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './Circle.styles';

export const Circle = ({
  bgColor,
  height,
  radius,
  margin,
  children,
  onPress,
}) => {
  return (
    <Container
      onPress={onPress}
      height={height}
      width={height}
      radius={radius}
      bgColor={bgColor}
      marginValue={margin}>
      {children}
    </Container>
  );
};

Circle.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string.isRequired,
  radius: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};
