import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

export default function DotIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={12} cy={12} r={2} fill="#979797" opacity={0.5} />
    </Svg>
  );
}
