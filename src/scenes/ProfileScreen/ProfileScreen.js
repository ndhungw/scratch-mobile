import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

// constants
import Constants from "expo-constants";
import COLORS from "../../constants/colors";

// icons
import SettingsIcon from "../../assets/icons/settings";
import SeparatorLine from "../../assets/icons/separator-line";

// components
import CustomizedButton from "../../components/Button/Button";

// local components
import UserInfo from "./components/UserInfo";
import UserKitchen from "./components/UserKitchen";

// dummy data
import { USER_DATA } from "./../../assets/data/data";

export default function UserProfile({ route, navigation }) {
  const [user, setUser] = useState(USER_DATA);

  const handleClickSettings = () => {
    alert(`Clicked settings button`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Kitchen</Text>
        <CustomizedButton
          onPress={() => handleClickSettings()}
          style={styles.settingsButton}
        >
          <SettingsIcon />
          <Text style={styles.settingsText}>Settings</Text>
        </CustomizedButton>
      </View>

      <View style={styles.contentWrapper}>
        <UserInfo
          avatarSrc={user.avatarSrc}
          displayName={user.displayName}
          title={user.title}
          followersCount={user.followersCount}
          likesCount={user.likesCount}
          style={styles.userInfo}
        />
        <SeparatorLine style={styles.separatorLine} />
        <UserKitchen kitchen={user.kitchen} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
    padding: 25,
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
  },
  settingsButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  settingsText: {
    color: COLORS.DarkGreen,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    marginLeft: 5,
  },
  contentWrapper: {
    marginTop: 30,
  },
  userInfo: {
    marginBottom: 25,
  },
  separatorLine: {
    width: 290,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
