import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
} from "react-native";

// constants
import COLORS from "../../constants/colors";
import SCREENS from "../../constants/screenNames";

// images
import imageSrc from "../../assets/images/login-bg.png";

// components
import CustomizedButton from "../../components/Button/Button";

// test
import TextField from "../../components/TextField/TextField";

export default function LogIn({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: SCREENS.FEEDS,
          params: { username, password },
        },
      ],
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imageSrc} style={styles.image}>
        <View style={styles.imgMask}>
          <Text style={styles.title}>Welcome back</Text>
        </View>
      </ImageBackground>

      <Text style={[styles.subText, styles.subTitle]}>
        Please log in to continue
      </Text>

      <View style={styles.formContainer}>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(username) => setUsername(username)}
          />
        </View>
        <View style={styles.inputView}>
          <View style={styles.labelRow}>
            <Text style={styles.inputLabel}>Password</Text>
            <CustomizedButton style={styles.forgotButton} activeOpacity={0.8}>
              <Text style={styles.forgotButtonText}>Forgot Password?</Text>
            </CustomizedButton>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <CustomizedButton
          onPress={handleLogin}
          style={styles.loginButton}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </CustomizedButton>

        <Text style={styles.subText}>New to scratch?</Text>
        <CustomizedButton style={styles.textButton} activeOpacity={0.8}>
          <Text style={styles.strongText}>Create Account Here</Text>
        </CustomizedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: COLORS.White,
  },
  image: {
    height: 285,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imgMask: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    paddingLeft: 25,
  },
  subText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.Zambezi,
  },
  subTitle: {
    marginLeft: 25,
    marginTop: 20,
  },
  formContainer: {
    marginTop: 80,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputView: {
    marginBottom: 30,
  },
  inputLabel: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.DarkGrey,
  },
  labelRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: 280,
    height: 35,
    paddingHorizontal: 5,
    // outline: "none",
    borderBottomWidth: 3,
    borderBottomColor: COLORS.VeryLightGrey,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
  },
  forgotButtonText: {
    color: COLORS.Zambezi,
  },
  loginButton: {
    backgroundColor: COLORS.DarkGreen,
    borderRadius: 8,
    width: 280,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  loginButtonText: {
    color: COLORS.White,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 21,
  },
  strongText: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.DarkGreen,
  },
});
