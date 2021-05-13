import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Animated } from 'react-native';
import COLORS from '../../constants/colors';

export default function TextField({ value, onChangeText, label, placeholder, ...rest }) {
  //   console.log("from TextField: value = ", value);
  const [isFocused, setIsFocused] = useState(false);
  //   const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);

    // !TODO: how to self-check if value prop of TextInput has value?
    // if (value) {
    //   console.log("run handleBlur");
    //   console.log(value);
    //   setHasValue(true);
    // }
  };

  //   const [_animatedIsFocused] = useState(new Animated.Value(0));

  //   useEffect(() => {
  //     Animated.timing(_animatedIsFocused, {
  //       toValue: isFocused ? 1 : 0,
  //       duration: 100,
  //     }).start();
  //   }, [_animatedIsFocused]);

  //   const topOffset = _animatedIsFocused.interpolate({
  //     inputRange: [0, 1],
  //     outputRange: [25, 0],
  //   });

  return (
    <View style={styles.container} {...rest}>
      <Text
        style={
          [styles.label, (isFocused || value) && styles.labelFocus]
          //   , { top: topOffset }
        }>
        {label || 'Label'}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.VeryLightGrey,
    fontWeight: '400',
    lineHeight: 22,
    fontSize: 16,
  },
  label: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    position: 'relative',
    top: 25,
    color: COLORS.VampireBlack,
  },
  labelFocus: {
    fontSize: 14,
    color: COLORS.DarkGrey,
    top: 0,
  },
});
