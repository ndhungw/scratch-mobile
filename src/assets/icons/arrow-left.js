import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowLeftIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M15 5l-6 7 6 7" stroke="#363837" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default ArrowLeftIcon;
