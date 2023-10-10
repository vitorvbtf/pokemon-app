import React, { useEffect, useState } from 'react'
import apiPoke from '../../services/apiPoke'
import { ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'

const DetalhesPoke = ({route}) => {
    const [detalhes, setDetalhes] = useState({})
    useEffect(() => {
        const id = route.params.id
    
     apiPoke.get('/pokemon').then(resultado => {
        setDetalhes(resultado.data.results)
      })
  
    }, [])

  return (
    <>
    <ScrollView>
       <Card style={{margin : 5}}>
                 <Card.Cover source={{uri: detalhes.sprites?.other?.dream_world?.front_default}} />
                 <Card.Content>
                 </Card.Content>  
                 <Text variant="titleLarge">{detalhes.name}</Text>
             </Card>
       </ScrollView>
    </>
  )
}

export default DetalhesPoke