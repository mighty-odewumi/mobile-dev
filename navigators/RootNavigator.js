import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Fetcher from "../components/Fetcher";
import NameEntry from "../components/NameEntry";
import Notifications from "../components/Notifications_Copilot";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#567ffd" }}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Menu" component={Fetcher} />
      <Stack.Screen name="Dashboard" component={NameEntry} />
      <Stack.Screen name="Settings" component={Notifications} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
