import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './Rating.styles';
import {Star, HalfStar} from '../../../../images';

export const Ratings = ({margin, color}) => {
  return (
    <Container marginValue={margin}>
      <Star color={color} />
      <Star color={color} />
      <Star color={color} />
      <Star color={color} />
      <HalfStar color={color} />
    </Container>
  );
};

Ratings.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
};

Ratings.defaultProps = {
  color: '#000000',
};
