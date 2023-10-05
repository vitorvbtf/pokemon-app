import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "./Favorites";

const Stack = createNativeStackNavigator();

const StackFavorites = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="list-favorite" component={Favorites} options={{ title: 'Favoritos' }} />
      </Stack.Navigator>
    </>
  )
}

export default StackFavorites