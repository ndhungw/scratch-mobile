import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

// constants
import Constants from "expo-constants";
import COLORS from "../../constants/colors";
import { STORAGE_KEY } from "../../constants/defaultValues";

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
import SCREENS from "../../constants/screenNames";

export default function UserProfile({ route, navigation }) {
  const [user, setUser] = useState(USER_DATA);
  // st { getItem, setItem, removeItem } = useAsyncStorage(
  // `${STORAGE_KEY}_USER_user01`
  // );

  const onPressSettings = () => {
    alert(`Clicked settings button`);
  };

  const onPressEditProfile = () => {
    navigation.navigate(SCREENS.EDIT_PROFILE_SCREEN, {
      userId: user.id,
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      // const unsubscribe = API.subscribe(userId, (user) => setUser(data));

      // return () => unsubscribe();

      console.log("useFocusEffect- route:", route);
      readDataFromStorage("user01");
    }, [])
  );

  useEffect(() => {
    console.log("HELLOOOOOO, route", route);
    if (route.params?.userToUpdate) {
      //!TODO: care this when actually save many user on this device.
      // just demo, so still not handle this
      const { userToUpdate } = route.params;
      // recall to update user data
      readDataFromStorage(userToUpdate.id);
      console.log("ProfileScreen-useEffect-userToUpdate: ", userToUpdate);
      // setUser(updatedUserData);
    }
  }, [route.params?.userToUpdate]);

  const readDataFromStorage = async (id) => {
    try {
      const userProfileStringified = await AsyncStorage.getItem(
        `${STORAGE_KEY}_USER_user01`
      );
      const userProfileObject = JSON.parse(userProfileStringified);
      console.log("userProfileObject:", userProfileObject);
      if (userProfileStringified) {
        setUser(userProfileObject);
      } else {
        console.log(
          "userProfileStringified is undefined: ",
          userProfileStringified
        );
        console.log("still setUser");
        setUser(userProfileObject);
      }
    } catch (err) {
      console.log("Error in read data from storage - Profile Screen - ", err);
    }
  };
  // read user data on mount
  useEffect(() => {
    readDataFromStorage("user01"); // pretend we got user.id in route.params from prev screen
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>My Kitchen</Text>
        <CustomizedButton
          onPress={onPressSettings}
          style={styles.settingsButton}
        >
          <SettingsIcon />
          <Text style={styles.settingsText}>Settings</Text>
        </CustomizedButton>
      </View>

      <View style={styles.contentWrapper}>
        <UserInfo
          id={user.id}
          avatarUri={user.avatarUri}
          fullName={user.fullName}
          bio={user.bio}
          followersCount={user.followersCount}
          likesCount={user.likesCount}
          onPressEditProfile={onPressEditProfile}
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
    paddingBottom: 5,
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
    flex: 1,
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
