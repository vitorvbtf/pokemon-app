import React, { useEffect, useState } from 'react'
import apiPoke from '../../services/apiPoke'
import { Image, ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'

const DetalhesPoke = ({route}) => {
  const id = route.params.id
    const [detalhes, setDetalhes] = useState({})
    useEffect(() => {
    
     apiPoke.get('/pokemon/'+id).then(resultado => {
        setDetalhes(resultado.data)
      })
  
    }, [])
console.log(id);
  return (
    <>
      <Image source={{uri: detalhes.sprites?.other?.dream_world?.front_default}}
      style={{width:100, height:100}}/>

      <Text>{detalhes.name}</Text> 
    </>
  )
}

export default DetalhesPoke