import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
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

  const preferencesSet = [
    ["pushNotifications", JSON.stringify(preferences.pushNotifications !== false && preferences.pushNotifications)], 
    ["emailMarketing", JSON.stringify(preferences.emailMarketing !== false && preferences.emailMarketing)], ["latestNews", JSON.stringify(preferences.latestNews !== false && preferences.latestNews)]
  ];

  const updatePreferences = async () => {
    try {
      await AsyncStorage.multiSet(preferencesSet);
      console.log("Preferences updated successfully", preferencesSet);
    } catch (error) {
      Alert.alert("An error occurred in Update!", error.message);
    }
  };

  useEffect(() => {
    ( async () => {
        try {
          await AsyncStorage.multiSet(preferencesSet);
          console.log("Preferences updated successfully", preferencesSet);
        } catch (error) {
          Alert.alert("An error occurred in Update!", error.message);
        }
      }
    )();
  }, [preferences])

  const fetchPreferences = async () => {
    try {
      const result = await AsyncStorage.multiGet(["pushNotifications", "emailMarketing", "latestNews"]);
      console.log("Result is", result);
      // setPreferences([...preferences, JSON.parse(result)]);
      result.map(lastArr => {
        
        lastArr.map(item => {
          console.log("This is item", item);
          setPreferences({
            ...preferences, 
            item
          });
          console.log("PReferences", preferences);
        });
      });
      console.log("My pref", preferences);
    } catch (error) {
      Alert.alert("An error occurred in Fetch!", error.message);
    }
  }

  useEffect(() => {
    // fetchPreferences();

    (
      async () => {
        try {
          const result = await AsyncStorage.multiGet(["pushNotifications", "emailMarketing", "latestNews"]);
          console.log("Result is", result);
          // setPreferences([...preferences, JSON.parse(result)]);
          result.map(lastArr => {
            
            lastArr.map(item => {
              console.log("This is item", item);
              setPreferences({
                ...preferences, 
                item
              });
            });
          });
          console.log("My pref", preferences);
        } catch (error) {
          Alert.alert("An error occurred in Fetch!", error.message);
        }
      }
    )();
  }, [])  

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
}

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
