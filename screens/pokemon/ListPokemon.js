import { Button, Card, Text } from "react-native-paper"
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import apiPoke from "../../services/apiPoke"
import { useEffect, useState } from "react"
import { View } from "react-native"
import gamesPageStyles from "../../styles/gamesPageStyles";
import CardPoke from "../../components/CardPoke"




const ListPokemon = ({ navigation }) => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
      apiPoke.get('/pokemon').then(resultado => {
      setPokemons(resultado.data.results)
    })
  }, [])

 
  return (
      <View style={gamesPageStyles.container}>
        {pokemons.map(item => (
          <TouchableOpacity key={item.id} onPress={() => navigation.push(item.page)}>
            <CardPoke key={item.id} style={gamesPageStyles.card} infos={item}></CardPoke>
          </TouchableOpacity>
        ))}
      </View>

      
  )
}


export default ListPokemon

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#131016',
    padding: 45,
  },
  card:{
   
  }
})

