import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Switch } from 'react-native-paper';
import Constants from 'expo-constants';
import useUpdate from '../utils/useUpdate';

const Notifications = () => {
  const [preferences, setPreferences] = useState({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false,
  });

  const updateState = (key) => () =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));

  // Fetch preferences when the component mounts
  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const result = await AsyncStorage.multiGet(["pushNotifications", "emailMarketing", "latestNews"]);
        const preferencesObj = {};
        result.forEach(([key, value]) => {
          preferencesObj[key] = value !== null ? JSON.parse(value) : false;
        });
        setPreferences(preferencesObj);
      } catch (error) {
        Alert.alert("An error occurred while fetching preferences!", error.message);
      }
    };

    fetchPreferences();
  }, []);

  // Save preferences whenever they change after the component mounts, not before
  useUpdate(() => {
    const savePreferences = async () => {
      try {
        const preferencesSet = Object.entries(preferences).map(([key, value]) => [key, JSON.stringify(value)]);
        await AsyncStorage.multiSet(preferencesSet);
        console.log("Preferences updated successfully", preferencesSet);
      } catch (error) {
        Alert.alert("An error occurred while updating preferences!", error.message);
      }
    };

    savePreferences();
  }, [preferences]);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Preferences</Text>
      <View style={styles.row}>
        <Text>Push notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState('pushNotifications')}
        />
      </View>
      <View style={styles.row}>
        <Text>Marketing emails</Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState('emailMarketing')}
        />
      </View>
      <View style={styles.row}>
        <Text>Latest news</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState('latestNews')}
        />
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
