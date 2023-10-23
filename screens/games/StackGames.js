import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Games from "./Games";
import LevelsGame from "./LevelsGame";
import Comparator from "./Comparator";

const Stack = createNativeStackNavigator();

const StackGames = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="list-games" component={Games} options={{ title: 'Games' }} />
        <Stack.Screen name="level-memory-game" component={LevelsGame} options={{ title: 'Nível' }} />
        <Stack.Screen name="comparator-page" component={Comparator} options={{ title: 'Comparador' }} />
      </Stack.Navigator>
    </>
  )
}

export default StackGames