import { useEffect, useState, } from "react";
import { View, Text, FlatList, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Fetcher() {

  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    try {
      await fetch(url).then(value => {
        const response = value.json();
        // const data = JSON.parse(response);
        // console.log(data);
        console.log(response);
        setData(data);
      })
    } catch (error) {
      console.error("An Error occurred", error);
    }
    
  };

  const saveData = () => {
    const myStr = '[{ "name": "hello", "id": 1}, { "name": "world", "id": 2} ]';
    const result = JSON.parse(myStr);
    setData(result);
  };

  const render = ({item}) => {
    return (
      <View>
        <Text>This is {item.name}</Text>
        <Text>This is {item.id}</Text>
      </View>
    )
  };

  const updatePreferences = async (newPreferences) => {
    try {
      // const value = JSON.stringify(newPreferences);
      // await AsyncStorage.setItem("myKey", value);
      // await AsyncStorage.mergeItem("myKey", value);
      const result = await AsyncStorage.getItem("myKey");
      console.log("Process completed!", result);

    } catch (error) {
      console.error("There was an error while operating");
    }
  };

  const myPreferences = {
    pushNotifications: true,
    smsNotifications: true,
    emailNotifications: true,
  }


  const USER_1 = {
    name: "Tom",
    age: 24,
    traits: {
      hair: "brown"
    },
  };

  const USER_1_DELTA = {
    age: 25,
    traits: {
      eyes: "blue"
    },
  };


  const USER_2 = {
    name: "Harley",
    age: 22,
    traits: {
      hair: "pink"
    },
  };

  const USER_2_DELTA = {
    name: "Sarah",
    age: 24,
    traits: {
      hair: "blonde"
    },
  };

  const multiSet = [
    ['@myApp_USER_2', JSON.stringify(USER_2)],
    ['@myApp_USER_1', JSON.stringify(USER_1)],
  ]

  const multiMerge = [
    ['@myApp_USER_1', JSON.stringify(USER_1_DELTA)],
    ['@myApp_USER_2', JSON.stringify(USER_2_DELTA)],
  ]

  const mergeMultiple = async () => {
    let allMerged;

    try {
      await AsyncStorage.multiSet(multiSet);
      console.log("Done 1", await AsyncStorage.getItem("@myApp_USER_1"), await AsyncStorage.getItem("@myApp_USER_2"));
      await AsyncStorage.multiMerge(multiMerge);
      console.log("Done 2", await AsyncStorage.getItem("@myApp_USER_1"), await AsyncStorage.getItem("@myApp_USER_2"));

      allMerged = await AsyncStorage.multiGet(['@myApp_USER_1', '@myApp_USER_2']);
      console.log(allMerged);
    } catch (error) {
      console.error("Operation unsuccessful");
    }
    
  }


  useEffect(() => {
    // fetchData();
    saveData();
    updatePreferences(myPreferences);
    mergeMultiple();
  }, []);

  return (
    <View>
      <Text>This is the menu list</Text>

      <FlatList 
        data={data}
        renderItem={render}
      />

      <Text>Life's good!</Text>
      
    </View>
  )
}
