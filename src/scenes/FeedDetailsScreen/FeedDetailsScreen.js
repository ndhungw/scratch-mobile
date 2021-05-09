import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// constants
import Constants from "expo-constants";
import COLORS from "../../constants/colors";
import SCREENS from "../../constants/screenNames";

// components
import Header from "../../components/Header/Header";
import CustomizedButton from "../../components/Button/Button";

export default function FeedDetails({ route, navigation }) {
  const { profileName, time, title, description } = route.params;

  const handleGoBack = () => {
    navigation.pop();
  };
  const handleGoNext = () => {
    navigation.push(SCREENS.FEED_DETAILS_SCREEN, {
      profileName,
      time,
      title,
      description,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContent}>
        <Text>{`${profileName}\n${time}\n${title}\n${description}`}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomizedButton
          onPress={handleGoBack}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Go back (pop)</Text>
        </CustomizedButton>
        <CustomizedButton
          onPress={handleGoNext}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Go next (push)</Text>
        </CustomizedButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: COLORS.WhiteSmoke,

    padding: 25,
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.DarkGreen,
    width: 280,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.White,
    fontWeight: "700",
  },
});
