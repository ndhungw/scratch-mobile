import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import TextField from "../../components/TextField/TextField";

export default function TestScreen() {
  const [username, setUsername] = useState("");
  const handleChangeUsername = (text) => {
    setUsername(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextField
        value={username}
        onChangeText={handleChangeUsername}
        label={"Username"}
        placeholder={"Enter your username"}
      />
      {/* <TextField label={"Password"} placeholder={"Enter your password"} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "violet",
    padding: 20,
  },
});
