import { Pressable, View, Image, Text, StyleSheet, } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/little-lemon-logo.png")}
        style={styles.image}
      />

      <Text style={styles.introText}>Little Lemon, your local Mediterranean Bistro</Text>

      <Pressable 
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.button}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
    textAlign: "center",
  },
  image: {
    resizeMode: "center",
    width: 200,
    height: 200,
    margin: 60,
    marginBottom: 20,
  },
  introText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600"
  },
  button: {
    color: "white",
    backgroundColor: "#567ffd",
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 20,
    fontWeight: "600",
  }
});
