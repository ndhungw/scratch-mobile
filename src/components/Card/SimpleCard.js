import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import CustomizedButton from "../Button/Button";

export default function SimpleCard({
  imageSrc,
  title,
  onPress,
  imageStyle,
  textStyle,
  ...rest
}) {
  return (
    <CustomizedButton onPress={onPress} {...rest}>
      <Image style={imageStyle} source={imageSrc} />
      <Text style={textStyle}>{title || "Title"}</Text>
    </CustomizedButton>
  );
}
