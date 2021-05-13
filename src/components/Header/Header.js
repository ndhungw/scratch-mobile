import * as React from 'react';
import { View, StyleSheet } from 'react-native';

// icons
import Logo from '../../assets/icons/logo';
import NotificationIcon from '../../assets/icons/notification';
import MessagesIcon from '../../assets/icons/messages';

// local components
import CustomizedButton from './../Button/Button';

export default function Header({ style }) {
  return (
    <View style={[styles.headerContainer, style]}>
      <View style={styles.headerLeft}>
        <Logo />
      </View>
      <View style={styles.headerRight}>
        <View style={styles.iconButton}>
          <CustomizedButton onPress={() => alert('Notification clicked')}>
            <NotificationIcon />
          </CustomizedButton>
        </View>
        <View style={styles.iconButton}>
          <CustomizedButton onPress={() => alert('Message clicked')}>
            <MessagesIcon />
          </CustomizedButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logoText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
  },
  iconButton: {
    marginLeft: 15,
  },
});
