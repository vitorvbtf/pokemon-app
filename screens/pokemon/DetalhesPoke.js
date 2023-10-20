import React, { useEffect, useState } from 'react'
import apiPoke from '../../services/apiPoke'
import { Image, ScrollView, View } from 'react-native'
import { Button, Card, IconButton, Text } from 'react-native-paper'
import cardPokeStyles from '../../styles/cardPokeStyles'
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



      <View style={{backgroundColor: COLORS[type]}} >
        <View style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'flex-end' }}>

          <IconButton style={{}} icon="cards-heart-outline" onPress={() => console.log('Pressed')} />


        </View>
        <View style={cardDetailsPokeStyles.card}>
          <Image source={{ uri: detalhes.sprites?.other?.home?.front_default }} style={cardDetailsPokeStyles.image} />
        </View>
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 25, padding: 10 }}>{detalhes.name}</Text>
      </View>


    </>
  )
}

export default DetalhesPoke