import React from 'react';
import PropTypes from 'prop-types';

import {CircleContainer} from './Button.styles';
import {Circle} from '../../atoms';

export const Button = ({children, onSubmit, margin}) => {
  return (
    <CircleContainer>
      <Circle
        height="84px"
        bgColor="#0058DD"
        radius="42px"
        margin={margin}
        onPress={onSubmit}>
        {children}
      </Circle>
    </CircleContainer>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  margin: PropTypes.string,
};
