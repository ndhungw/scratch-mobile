import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

// constants
import {
  USER_AVATAR_SRC,
  USER_DISPLAY_NAME,
  USER_TITLE,
  USER_EMAIL,
  USER_PHONE,
} from '../../constants/defaultValues';
import COLORS from '../../constants/colors';
import { STORAGE_KEY } from '../../constants/defaultValues';

// components
import CustomizedButton from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';

// icons
import ArrowLeftIcon from '../../assets/icons/arrow-left';

import { isValidName, isValidBio, isValidEmail, isValidPhoneNumber } from './validate';
import SCREENS from '../../constants/screenNames';

export default function EditProfileScreen({ route, navigation }) {
  const [avatarUri, setAvatarUri] = useState('');
  const [fullName, setFullName] = useState(USER_DISPLAY_NAME);
  const [bio, setBio] = useState(USER_TITLE);
  const [email, setEmail] = useState(USER_EMAIL);
  const [phone, setPhone] = useState(USER_PHONE);
  const [user, setUser] = useState({});

  // key: @ScratchMobile_HungND73_UserProfileData
  const { getItem, mergeItem } = useAsyncStorage(`${STORAGE_KEY}_USER_user01`);

  const onChangeFullName = (userFullName) => {
    setFullName(userFullName);
    // if (isValidName(userFullName)) {
    // } else {
    //   console.log("Invalid full name");
    // }
  };
  const onChangeBio = (userBio) => {
    setBio(userBio);
    // if (isValidBio(userBio)) {
    // }
  };
  const onChangeEmail = (userEmail) => {
    setEmail(userEmail);
    // if (isValidEmail(userEmail)) {
    // } else {
    //   console.log("Invalid email");
    // }
  };
  const onChangePhone = (userPhoneNumber) => {
    setPhone(userPhoneNumber);
    // if (isValidPhoneNumber(userPhoneNumber)) {
    // } else {
    //   console.log("Invalid Phone");
    // }
  };

  const onPressBackToProfile = () => {
    navigation.goBack();
  };

  const onPressSaveProfile = async () => {
    if (!isValidName(fullName)) {
      console.log('Invalid full name');
      alert('Invalid full name');
      return;
    }
    if (!isValidBio(bio)) {
      console.log('Invalid bio');
      alert('Invalid bio');
      return;
    }
    if (!isValidEmail(email)) {
      console.log('Invalid email');
      alert('Invalid email');
      return;
    }
    if (!isValidPhoneNumber(phone)) {
      console.log('Invalid phone number');
      alert('Invalid phone');
      return;
    }

    const userProfileDataToMerge = {
      fullName,
      bio,
      email,
      phone,
      avatarUri,
    };

    try {
      const userDataStringified = JSON.stringify(userProfileDataToMerge);
      await mergeItem(userDataStringified); // attempt to save data to local
      // console.log("userDataStringified", userDataStringified);
      alert('Save Profile Successfully!'); // !TODO: Custom alert here for more info
    } catch (err) {
      alert('An error occurs when trying to save!\nPlease try again');
      console.log(err);
    }

    // Pass and merge params back to Profile screen
    console.log('Prepare for pass params back - userToUpdate.id: ', user.id);
    navigation.navigate({
      name: SCREENS.PROFILE_SCREEN,
      params: {
        userToUpdate: { id: user.id },
        // idUserNeedToUpdate: userProfileData.
      },
      merge: true,
    });
    console.log('route:', route);
  };

  const onPressEditAvatar = async () => {
    console.log('Edit Profile Picture');
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setAvatarUri(result.uri);
        alert('Update avatar successfully');
      }
    } catch (err) {
      console.log('Error occurs in onPressEditAvatar', err);
    }
  };

  const readDataFromStorage = async () => {
    const userProfileData = await getItem();
    console.log('readDataFromStorage: userProfileData=', userProfileData);

    if (!userProfileData) {
      return;
    }

    const userProfileObj = JSON.parse(userProfileData);
    setUser(userProfileObj);

    if (userProfileObj.avatarUri) {
      console.log(`SET AVATAR URI: ${typeof userProfileObj.avatarUri} `, userProfileObj.avatarUri);
      setAvatarUri(userProfileObj.avatarUri);
    }
    if (userProfileObj.fullName) {
      setFullName(userProfileObj.fullName);
    }
    if (userProfileObj.bio) {
      setBio(userProfileObj.bio);
    }
    if (userProfileObj.email) {
      setEmail(userProfileObj.email);
    }
    if (userProfileObj.phone) {
      setPhone(userProfileObj.phone);
    }
  };

  // read data on mount
  useEffect(() => {
    readDataFromStorage();
  }, []);

  // useEffect(() => {
  //   console.log("avatarUri:", avatarUri);
  // }, [fullName]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonWrapper}>
        <CustomizedButton onPress={onPressBackToProfile} style={styles.backButton}>
          <ArrowLeftIcon />
          <Text style={styles.backButtonText}>Back to Profile</Text>
        </CustomizedButton>
      </View>

      <Text style={styles.screenTitle}>Edit screen</Text>

      <View style={styles.form}>
        <View style={styles.infoWrapper}>
          <Image
            style={styles.avatar}
            source={avatarUri ? { uri: `${avatarUri}` } : USER_AVATAR_SRC}
            onLoad={() => {
              console.log('loaded image!', avatarUri);
            }}
            onLoadStart={() => {
              console.log('load starting', avatarUri);
            }}
          />

          <CustomizedButton onPress={onPressEditAvatar}>
            <Text style={styles.changeAvtBtnText}>Edit Profile Picture</Text>
          </CustomizedButton>

          <TextField
            value={fullName}
            onChangeText={onChangeFullName}
            label="Full name"
            textContentType="name"
            style={styles.textField}
          />
          <TextField
            value={bio}
            onChangeText={onChangeBio}
            label="Bio"
            textContentType="none"
            style={styles.textField}
          />
        </View>

        <View style={styles.infoWrapper}>
          <Text style={styles.sectionTitle}>Private information</Text>

          <TextField
            value={email}
            onChangeText={onChangeEmail}
            label="Email"
            textContentType="email"
            style={styles.textField}
          />
          <TextField
            value={phone}
            onChangeText={onChangePhone}
            label="Phone"
            textContentType="phone"
            style={styles.textField}
          />
        </View>

        <CustomizedButton onPress={onPressSaveProfile} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Profile</Text>
        </CustomizedButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
    paddingTop: StatusBar.currentHeight,
  },
  screenTitle: {
    alignSelf: 'flex-start',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    // backgroundColor: "violet",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvtBtnText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.DarkGreen,
    marginTop: 10,
    marginBottom: 20,
  },
  form: {
    // backgroundColor: "green",
    width: '100%',
    flex: 1,
  },
  infoWrapper: {
    marginTop: 22,
    // flex: 1,
    alignItems: 'center',
  },
  textField: {
    // backgroundColor: "violet",
    width: '100%',
    marginVertical: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.VampireBlack,
    alignSelf: 'flex-start',
  },
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.Grey,
  },
  backButtonWrapper: {
    alignSelf: 'flex-start',
    marginLeft: -10,
    marginBottom: 15,
  },
  saveButton: {
    marginTop: 18,
    alignSelf: 'center',
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: COLORS.DarkGreen,
  },
  saveButtonText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
    color: COLORS.White,
  },
});
