import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EditIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M19.56 7.839a3 3 0 00-3-3v0l-11 11v3h3l11-11v0z"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.248 6.498s1.19.206 1.908.924c.718.717 1.013 1.746 1.013 1.746"
        stroke="#363837"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EditIcon;
