import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

export default function NotificationIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse cx={12} cy={12} rx={6} ry={5} stroke="#363837" />
      <Path
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5h2v1h-2zM7 19h10"
      />
    </Svg>
  );
}
