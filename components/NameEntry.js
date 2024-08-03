import { useEffect, useState, } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function NameEntry() {
  const [customers, setCustomers] = useState([]);
  const [entry, setEntry] = useState("");

  const saveCustomer = async () => {
    try {
      await AsyncStorage.setItem("customers", JSON.stringify(customers));
      console.log("Customer saved successfully", JSON.parse(customers)); 
      // await AsyncStorage.removeItem("customers");
    } catch (error) {
      // console.error("Operation unsuccessful", error);
    }
  };

  const fetchCustomerData = async () => {
    try {
      const result = await AsyncStorage.getItem("customers");
      console.log("Data fetched", result);
      setCustomers(result === null ? [] : JSON.parse(result));
      console.log("Here is the customers' data", result);
    } catch (error) {
      // console.error("An error occurred while fetching data.", error);
    }
  }
  
  useEffect(() => {
    /* (async () => {
      try {
        const result = await AsyncStorage.getItem("customers");
        console.log("Data fetched", result);
        setCustomers(result === null ? [] : JSON.parse(result));
        console.log("Here is the customers' data", result);
      } catch (error) {
        // console.error("An error occurred while fetching data.", error);
      }
    })(); */
    fetchCustomerData();
  }, []);


  useEffect(() => {
    /* (async () => {
      try {
        await AsyncStorage.setItem("customers", JSON.stringify(customers));
        console.log("Customer saved successfully", JSON.parse(customers)); 
        // await AsyncStorage.removeItem("customers");
      } catch (error) {
        // console.error("Operation unsuccessful", error);
      }
    })(); */
    saveCustomer();
  }, [customers]);
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gr1ntch's Bistro</Text>
      <TextInput 
        inputMode="text" 
        placeholder="Enter a customer's name"
        onChangeText={setEntry}
        value={entry}
        style={styles.textInput}
      >
      </TextInput>

      <Button 
        title="Save Customer"
        onPress={() => {
          entry &&  setCustomers([...customers, entry]);
          setEntry("");
        }}
        style={styles.button}
      >
      </Button>

      <Text style={styles.customerHeader}>Customers:</Text>
      {customers.map((item, index) => {
        return (
          <Text 
            key={index} 
            style={styles.customerList}
          >
            {item}
          </Text>
        )
      })}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  button: {
    marginBottom: 24,
  }, 
  textInput: {
    borderColor: "blue",
    borderWidth: 1,
    padding: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
  },
  customerHeader: {
    fontSize: 20,
  },
});
