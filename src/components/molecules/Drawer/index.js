import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './Drawer.styles';
import {ListIcon} from '../../../../images';

export const Drawer = ({onPress}) => {
  return (
    <Container onPress={onPress}>
      <ListIcon size="45" color="#FFFFFF" />
    </Container>
  );
};

Drawer.propTypes = {
  onPress: PropTypes.func,
};
