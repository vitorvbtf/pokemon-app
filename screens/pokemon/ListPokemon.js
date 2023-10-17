import { Button, Card, Text } from "react-native-paper"
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import apiPoke from "../../services/apiPoke"
import { useEffect, useState } from "react"
import { View } from "react-native"
import gamesPageStyles from "../../styles/gamesPageStyles"
import cardPokeStyles from "../../styles/cardPokeStyles"
import COLORS from "../../util/colorsTypePoke"


const ListPokemon = ({ navigation }) => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    apiPoke.get('/pokemon').then(async (resultado) => {
      const pokemonList = resultado.data.results;
      const detailedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const response = await apiPoke.get(pokemon.url);
          return response.data;
        })
      );
      setPokemons(detailedPokemonList);
    });
  }, []);

  const getBackgroundColor = (pokemon) => {
    if (pokemon.types && pokemon.types.length > 0) {
      const primaryType = pokemon.types[0].type.name;
      return { backgroundColor: COLORS[primaryType] || '#000000' }; // Cor padrão, caso o tipo não corresponda a nenhuma cor
    }
    return { backgroundColor: '#000000' }; // Cor padrão, caso não haja tipos
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={gamesPageStyles.container}>
        {pokemons.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => navigation.push('Detalhes-Poke', { id: item.name })}>
            <View key={item.id}>
              <Card style={[cardPokeStyles.card, getBackgroundColor(item)]}>
                {item.sprites && (
                  <Card.Cover source={{ uri: item.sprites.other.home.front_default }} style={cardPokeStyles.image} />
                )}
                <Text variant="titleLarge">{item.name}</Text>
              </Card>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}


export default ListPokemon

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#131016',
    padding: 45,
  },
  card: {

  }
})
