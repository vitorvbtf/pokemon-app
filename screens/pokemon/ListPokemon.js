import { Button, Card, Text } from "react-native-paper"
import { Image, ScrollView, StyleSheet } from "react-native"
import { View } from "react-native-web"
import apiPoke from "../../services/apiPoke"
import { useEffect, useState } from "react"




const ListPokemon = ({ navigation }) => {

  const [pokemons, setPokemons] = useState([])



  useEffect(() => {
      apiPoke.get('/pokemon').then(resultado => {
      setPokemons(resultado.data.results)
    })
  }, [])

 
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

      {pokemons.map((item, index) => (
        <div key={index}>
        <Card  style={styles.card} >
          <Text variant="titleLarge">{item.name}</Text>
        <Card.Cover source={{uri: item.sprites?.other?.dream_world?.front_default}} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      </div>
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

