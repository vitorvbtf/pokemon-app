import { Button, Card, Text } from "react-native-paper"
import { Image, ScrollView, StyleSheet } from "react-native"
import apiPoke from "../../services/apiPoke"
import { useEffect, useState } from "react"
import { View } from "react-native"




const ListPokemon = ({ navigation }) => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
      apiPoke.get('/pokemon').then(resultado => {
      setPokemons(resultado.data.results)
    })
  }, [])

 
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

      {pokemons.map(item => (
        <View>
        <Card    
          onPress={()=>navigation.push('Detalhes-Poke', {id: item.name})}  >
        <Card.Cover source={{uri: item.sprites?.other?.dream_world?.front_default}} />
          <Text variant="titleLarge">{item.name}</Text>
       
      </Card>
      </View>
      ))}

      <Text>Lista Pokemon</Text>


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
  card:{
   
  }
})

