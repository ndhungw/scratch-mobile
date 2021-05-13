import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function SeparatorLine(props) {
  return (
    <Svg height={1} viewBox="0 0 325 1" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Rect width={325} height={1} rx={0.5} fill="#E6E6E6" />
    </Svg>
  );
}

export default SeparatorLine;
