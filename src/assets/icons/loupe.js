import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function LoupeIcon({ stroke, ...rest }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <Circle cx={11} cy={11} r={6} stroke={stroke || '#363837'} />
      <Path
        d="M15.5 15.5l3.187 3.187"
        stroke={stroke || '#363837'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LoupeIcon;
