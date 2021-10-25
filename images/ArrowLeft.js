import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowLeft = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    viewBox="0 0 80 20"
    fill="#000000"
    height="150"
    width="150">
    <Path
      fill-rule="evenodd"
      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
      clip-rule="evenodd"
    />
  </Svg>
);
