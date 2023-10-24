import React, { useEffect, useState } from 'react'
import apiPoke from '../../services/apiPoke'
import { Image, View } from 'react-native'
import { Button, Card, IconButton, Text } from 'react-native-paper'
import cardDetailsPokeStyles from '../../styles/cardDetailsPokeStyles'
import COLORS from '../../util/colorsTypePoke'

const DetalhesPoke = ({ navigation, route }) => {

  const [detalhes, setDetalhes] = useState({})
  const type = route.params.type
  useEffect(() => {
    const id = route.params.id
    apiPoke.get('/pokemon/' + id).then(resultado => {
      setDetalhes(resultado.data)
    })
  }, [])



  return (
    <>

      <View style={{ backgroundColor: COLORS[type] }} >
        <View style={{  alignItems: 'flex-end' }}>
        
          <IconButton  icon="cards-heart-outline" onPress={() => console.log('Pressed')} />  
       
        </View> 
        
          <Text style={{marginLeft:10, marginStart:0}} > Nº  {detalhes.id}</Text>
          
     
        <View style={cardDetailsPokeStyles.card}>
          <Image source={{ uri: detalhes.sprites?.other?.home?.front_default }} style={cardDetailsPokeStyles.image} />
        </View>
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 25, padding: 10 }}>{detalhes.name}</Text>
      </View>
      <Card style={{margin:10}}>
    <Card.Actions>
      <Button>Sobre</Button>
      <Button>Estatistica</Button>
      <Button>Habilidade</Button>
    
    </Card.Actions> 
    <Text>{detalhes.evolves_from_species}</Text>
  </Card>
    </>
  )
}

export default DetalhesPoke