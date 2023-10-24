import { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"
import CardPoke from "../../components/CardPoke"
import listCardPokeStyles from "../../styles/listCardPokeStyles"
import apiPoke from "../../services/apiPoke"


const ListPokemon = ({ navigation }) => {

  const [pokemons, setpokemons] = useState([])

  useEffect(() => {
    getAllPokemon()
  }, [])

  function getAllPokemon() {
    apiPoke.get('/pokemon').then(async (resultado) => {
      const pokemonList = resultado.data.results
      const detailsPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const response = await apiPoke.get("/pokemon/" + pokemon.name);
          return response.data
        })
      )
      setpokemons(detailsPokemonList)
    })
  }

  return (
    <>
      <ScrollView>
        <View style={listCardPokeStyles.container}>
          {pokemons.map(item => (
            <TouchableOpacity key={item.id} onPress={() => navigation.push('details-pokemon', { id: item.id, type: item.types[0].type.name })}>
              <CardPoke key={item.id} infos={item}></CardPoke>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </>
  )
 }

export default ListPokemon