import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function FeedIcon({ stroke, ...rest }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <Path
        // stroke="#363837"
        stroke={stroke || '#363837'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 6h8v12H8zM18 6h1v12h-1M6 6H5v12h1"
      />
    </Svg>
  );
}

export default FeedIcon;
