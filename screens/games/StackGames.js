import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Games from "./Games";
import LevelsGame from "./LevelsGame";

const Stack = createNativeStackNavigator();

const StackGames = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="list-games" component={Games} options={{ title: 'Games' }} />
        <Stack.Screen name="level-memory-game" component={LevelsGame} options={{ title: 'Nível' }} />
      </Stack.Navigator>
    </>
  )
}

export default StackGames