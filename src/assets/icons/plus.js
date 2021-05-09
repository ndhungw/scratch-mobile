import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function PlusIcon(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7 2.917v8.166M2.917 7h8.166"
        stroke="#30BE76"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
