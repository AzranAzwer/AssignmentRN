import React from 'react';
import PropTypes from 'prop-types';

import {Container, Image} from './PicUpload.styles';

export const PicUpload = ({onPress, DefaultImage, path}) => {
  return (
    <Container onPress={onPress}>
      {path === '' ? <DefaultImage /> : <Image source={{uri: path}} />}
    </Container>
  );
};

PicUpload.propTypes = {
  DefaultImage: PropTypes.func,
  path: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};
