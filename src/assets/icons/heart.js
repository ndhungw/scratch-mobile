import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function HeartIcon({ fillColor, ...rest }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={fillColor || 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <Path
        clipRule="evenodd"
        d="M12.001 19s-6.546-6.053-7.681-8.499C3.185 8.055 5.254 5 7.64 5 10.024 5 12 7.341 12 7.341S14.184 5 16.293 5c2.108 0 4.657 2.562 3.35 5.501C18.339 13.441 12.002 19 12.002 19z"
        stroke="#363837"
        strokeLinecap="square"
        opacity={0.5}
      />
    </Svg>
  );
}
