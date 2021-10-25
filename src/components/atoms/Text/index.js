import React from 'react';
import PropTypes from 'prop-types';

import {TextElement} from './Text.styles';

export const Text = ({
  children,
  fontSize,
  fontColor,
  fontWeight,
  align,
  margin,
  lineHeight,
}) => {
  return (
    <TextElement
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
      alignValue={align}
      marginValue={margin}
      lineHeight={lineHeight}>
      {children}
    </TextElement>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  fontWeight: PropTypes.number,
  align: PropTypes.string,
  margin: PropTypes.string,
  lineHeight: PropTypes.string,
};

Text.defaultProps = {
  fontSize: '12px',
  fontColor: '#000000',
  fontWeight: 400,
  align: 'left',
  margin: '0',
  lineHeight: '18px',
};
