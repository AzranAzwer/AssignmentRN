import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ListIcon = ({color, size}) => (
  <Svg
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}>
    <Path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 10h16M4 14h16M4 18h16"
    />
  </Svg>
);
