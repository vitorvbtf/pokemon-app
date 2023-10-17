import React, { useEffect, useState } from 'react'
import apiPoke from '../../services/apiPoke'
import { Image, ScrollView } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

const DetalhesPoke = ({ navigation, route }) => {
  const id = route.params.id
  const [detalhes, setDetalhes] = useState({})
  useEffect(() => {

    apiPoke.get('/pokemon/' + id).then(resultado => {
      setDetalhes(resultado.data)
    })

  }, [])
  console.log(id);
  return (
    <>
      <Card style={{ width: 'auto', margin: 15 }}>
        <Button icon="cards-heart-outline" onPress={() => console.log('Pressed')}>

        </Button>
        <Card.Cover source={{ uri: detalhes.sprites?.other?.dream_world?.front_default }} />
        <Card.Actions>

        </Card.Actions>
      </Card>
      <Text style={{ color: 'black', textAlign: 'center', fontSize: 25 }}>{detalhes.name}</Text>
    </>
  )
}

export default DetalhesPoke