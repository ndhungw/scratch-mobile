import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// constants
import COLORS from '../../../constants/colors';
import {
  USER_AVATAR_SRC,
  USER_DISPLAY_NAME,
  USER_TITLE,
  USER_FOLLOWERS_COUNT,
  USER_LIKES_COUNT,
} from '../../../constants/defaultValues';

// icons
import EditIcon from '../../../assets/icons/edit';
import DotIcon from '../../../assets/icons/dot';

// components
import CustomizedButton from '../../../components/Button/Button';

// utils
import { simplify } from '../../../utils/utils';

export default function UserInfo({
  style,
  // UserInfo props
  // id,
  avatarUri,
  fullName,
  bio,
  followersCount,
  likesCount,
  onPressEditProfile,
  ...rest
}) {
  return (
    <View style={[style, styles.container]} {...rest}>
      <View style={styles.userInfoLeft}>
        {/* <Avatar
          // source={avatarSrc || USER_AVATAR_SRC}
          source={avatarSrc ? { uri: avatarSrc } : USER_AVATAR_SRC}
          rounded
          style={styles.avatar}
        /> */}
        <Image style={styles.avatar} source={avatarUri ? { uri: avatarUri } : USER_AVATAR_SRC} />
      </View>
      <View style={styles.userInfoRight}>
        <View>
          <View style={styles.userInfoNameWrapper}>
            <Text style={styles.userInfoName}>{fullName || USER_DISPLAY_NAME}</Text>
            <CustomizedButton onPress={onPressEditProfile} style={styles.editButton}>
              <EditIcon />
            </CustomizedButton>
          </View>

          <Text style={styles.userTitle}>{bio || USER_TITLE}</Text>
        </View>

        <View style={styles.popularCounts}>
          <Text style={styles.popularCountsText}>
            {simplify(followersCount || USER_FOLLOWERS_COUNT)} followers
          </Text>
          <DotIcon />
          <Text style={styles.popularCountsText}>
            {simplify(likesCount || USER_LIKES_COUNT)} likes
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 50,
  },
  userInfoLeft: {
    marginRight: 15,
  },
  userInfoRight: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  userInfoNameWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoName: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
  },
  editButton: {},
  userTitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.Zambezi,
  },
  popularCounts: {
    display: 'flex',
    flexDirection: 'row',
  },
  popularCountsText: {
    color: COLORS.Zambezi,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
});
