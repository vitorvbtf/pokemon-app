import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Games from "./Games";

const Stack = createNativeStackNavigator();

const StackGames = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="list-games" component={Games} options={{ title: 'Games' }} />
      </Stack.Navigator>
    </>
  )
}

export default StackGames