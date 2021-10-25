import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const TimingIcon = ({color}) => (
  <Svg
    height="35"
    width="35"
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}>
    <Path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </Svg>
);
