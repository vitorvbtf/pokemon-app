import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListPokemon from "./ListPokemon";
import DetailsPokemon from "./DetailsPokemon";
import DetalhesPoke from "./DetalhesPoke";

const Stack = createNativeStackNavigator();

const StackPokemon = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="list-pokemon" component={ListPokemon} options={{ title: 'Pokémon' }} />
        <Stack.Screen name="details-pokemon" component={DetalhesPoke} options={{ title: 'Pokémon' }} />
      </Stack.Navigator>
    </>
  )
}

export default StackPokemon