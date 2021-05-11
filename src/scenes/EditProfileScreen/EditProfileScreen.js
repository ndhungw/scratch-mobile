import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import CustomizedButton from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import COLORS from "../../constants/colors";

// constants
import {
  USER_AVATAR_SRC,
  USER_DISPLAY_NAME,
  USER_TITLE,
  USER_EMAIL,
  USER_PHONE,
} from "../../constants/defaultValues";

import ArrowLeftIcon from "../../assets/icons/arrow-left";
import { StatusBar } from "react-native";

export default function EditProfileScreen({ route, navigation }) {
  const [fullName, setFullName] = useState(USER_DISPLAY_NAME);
  const [bio, setBio] = useState(USER_TITLE);
  const [email, setEmail] = useState(USER_EMAIL);
  const [phone, setPhone] = useState(USER_PHONE);

  const onChangeFullName = (text) => {
    // !TODO: check by regex
    setFullName(text);
  };
  const onChangeBio = (text) => {
    // !TODO: check by regex
    setBio(text);
  };
  const onChangeEmail = (text) => {
    // !TODO: check by regex
    setEmail(text);
  };
  const onChangePhone = (text) => {
    // !TODO: check by phone
    setPhone(text);
  };
  const onPressBackToProfile = () => {
    navigation.goBack();
  };
  const onPressSaveProfile = () => {
    alert(`Save Profile`);
  };
  const onPressEditAvatar = () => {
    alert(`Edit Profile Picture`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonWrapper}>
        <CustomizedButton
          onPress={onPressBackToProfile}
          style={styles.backButton}
        >
          <ArrowLeftIcon />
          <Text style={styles.backButtonText}>Back to Profile</Text>
        </CustomizedButton>
      </View>

      <Text style={styles.screenTitle}>Edit screen</Text>

      <View style={styles.form}>
        <View style={styles.infoWrapper}>
          <Image style={styles.avatar} source={USER_AVATAR_SRC} />

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

        <CustomizedButton
          onPress={onPressSaveProfile}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save Profile</Text>
        </CustomizedButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 25,
    paddingTop: StatusBar.currentHeight,
  },
  screenTitle: {
    alignSelf: "flex-start",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    // backgroundColor: "violet",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  changeAvtBtnText: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.DarkGreen,
    marginTop: 10,
    marginBottom: 20,
  },
  form: {
    // backgroundColor: "green",
    width: "100%",
    flex: 1,
  },
  infoWrapper: {
    marginTop: 22,
    // flex: 1,
    alignItems: "center",
  },
  textField: {
    // backgroundColor: "violet",
    width: "100%",
    marginVertical: 12,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.VampireBlack,
    alignSelf: "flex-start",
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    fontWeight: "400",
    fontSize: 12,
    color: COLORS.Grey,
  },
  backButtonWrapper: {
    alignSelf: "flex-start",
    marginLeft: -10,
    marginBottom: 15,
  },
  saveButton: {
    marginTop: 18,
    alignSelf: "center",
    width: "100%",
    height: 50,
    borderRadius: 8,
    backgroundColor: COLORS.DarkGreen,
  },
  saveButtonText: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 21,
    color: COLORS.White,
  },
});
