import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import CustomizedButton from '../../components/Button/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../../constants/colors';
import { USER_DATA } from '../../assets/data/data';
import { STORAGE_KEY } from '../../constants/defaultValues';

export default function TestScreen() {
  // const [username, setUsername] = useState("");
  // const handleChangeUsername = (text) => {
  //   setUsername(text);
  // };

  const handleClearStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('CLEAR STORAGE!');
      const allKeys = await AsyncStorage.getAllKeys();
      console.log('allKeys: ', allKeys);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveUserData = async () => {
    try {
      await AsyncStorage.removeItem(`${STORAGE_KEY}_USER_${USER_DATA.id}`);
      console.log('handleRemoveUserData');
    } catch (err) {
      console.log(err);
    }
  };

  const handleGenerateSampleData = async () => {
    try {
      await AsyncStorage.setItem(`${STORAGE_KEY}_USER_${USER_DATA.id}`, JSON.stringify(USER_DATA));
      const allKeys = await AsyncStorage.getAllKeys();
      console.log('allKeys after generate data: ', allKeys);
    } catch (err) {
      console.log(err);
    }
  };

  const handleReadUserData = async () => {
    try {
      const userDataStringified = await AsyncStorage.getItem(`${STORAGE_KEY}_USER_user01`);
      console.log('userData:', JSON.parse(userDataStringified));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <TextField
        value={username}
        onChangeText={handleChangeUsername}
        label={"Username"}
        placeholder={"Enter your username"}
      /> */}
      {/* <TextField label={"Password"} placeholder={"Enter your password"} /> */}

      {/* Generate sample data */}
      <View>
        <CustomizedButton onPress={handleGenerateSampleData} style={styles.button}>
          <Text style={styles.buttonText}>Generate Sample User Data</Text>
        </CustomizedButton>

        <CustomizedButton
          onPress={handleClearStorage}
          style={[styles.button, { backgroundColor: COLORS.DarkGrey }]}>
          <Text style={styles.buttonText}>Clear storage</Text>
        </CustomizedButton>

        <CustomizedButton
          onPress={handleRemoveUserData}
          style={[styles.button, { backgroundColor: COLORS.Red }]}>
          <Text style={styles.buttonText}>Remove User Data</Text>
        </CustomizedButton>
        <CustomizedButton onPress={handleReadUserData} style={[styles.button]}>
          <Text style={styles.buttonText}>Read User Data</Text>
        </CustomizedButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    backgroundColor: COLORS.DarkGreen,
    height: 40,
    marginVertical: 20,
  },
  buttonText: {
    color: COLORS.Ivory,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
    fontWeight: '700',
  },
});
