import React from 'react';
import { Image, Text } from 'react-native';

import { RECIPE_IMAGE_SOURCE_SAMPLE } from '../../constants/defaultValues';

import CustomizedButton from '../Button/Button';

export default function SimpleCard({ imageUri, title, onPress, imageStyle, textStyle, ...rest }) {
  return (
    <CustomizedButton onPress={onPress} {...rest}>
      <Image
        style={imageStyle}
        source={imageUri ? { uri: imageUri } : RECIPE_IMAGE_SOURCE_SAMPLE}
      />
      <Text style={textStyle}>{title || 'Title'}</Text>
    </CustomizedButton>
  );
}
