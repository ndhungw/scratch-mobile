import * as React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

// constants
import COLORS from '../../../../constants/colors';

// icons
import LoupeIcon from '../../../../assets/icons/loupe';
import FilterIcon from '../../../../assets/icons/filter';

// components
import CustomizedButton from '../../../../components/Button/Button';

export default function SearchBar({
  style,
  text,
  onChangeText,
  onPressFilter,
  placeholder,
  ...rest
}) {
  return (
    <View style={[styles.container, style]} {...rest}>
      <LoupeIcon style={styles.loupeIcon} />
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.textInput}
        placeholder={placeholder}
      />
      <CustomizedButton onPress={onPressFilter}>
        <FilterIcon style={styles.filterIcon} />
      </CustomizedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 11,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 12,
  },
  textInput: {
    width: '100%',
    marginHorizontal: 9,
    // outline: "none",
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
  },
});
