import { ActivityIndicator, Button, Card, Text } from "react-native-paper"
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import apiPoke from "../../services/apiPoke"
import { useEffect, useState } from "react"
import { View } from "react-native"
import gamesPageStyles from "../../styles/gamesPageStyles"
import cardPokeStyles from "../../styles/cardPokeStyles"
import COLORS from "../../util/colorsTypePoke"

const ListPokemon = ({ navigation }) => {

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom && !isLoading) {
      loadMorePokemons();
    }
  };

  const loadMorePokemons = async () => {
    setIsLoading(true);
    try {
      const response = await apiPoke.get('/pokemon', {
        params: {
          offset: pokemons.length,
          limit: 20,
        },
      });

      const pokemonList = response.data.results;
      const detailedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const response = await apiPoke.get(pokemon.url);
          return response.data;
        })
      );

      setPokemons((prevPokemons) => [...prevPokemons, ...detailedPokemonList]);
    } catch (error) {
      console.error('Error loading more pokémons', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMorePokemons();
  }, []);

  const getBackgroundColor = (pokemon) => {
    if (pokemon.types && pokemon.types.length > 0) {
      const primaryType = pokemon.types[0].type.name;
      return { backgroundColor: COLORS[primaryType] || '#000000' };
    }
    return { backgroundColor: '#000000' };
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll}>
      <View style={gamesPageStyles.container}>
        {pokemons.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => navigation.push('Detalhes-Poke', { id: item.name })}>
            <View key={item.id}>
              <Card style={[cardPokeStyles.card, getBackgroundColor(item)]}>
                {item.sprites && (
                  <Card.Cover source={{ uri: item.sprites.other.home.front_default }} style={cardPokeStyles.image} />
                )}
                <Text variant="titleLarge" style={{textAlign:'center'}}>{item.name}</Text>
              </Card>
            </View>
          </TouchableOpacity>
        ))}
      </View>
         {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
    </ScrollView>
  )
}

export default ListPokemon

