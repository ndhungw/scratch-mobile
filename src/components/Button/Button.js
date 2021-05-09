import * as React from "react";
import { TouchableOpacity } from "react-native";

export default function CustomizedButton({ onPress, children, ...rest }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} {...rest}>
      {children}
    </TouchableOpacity>
  );
}
