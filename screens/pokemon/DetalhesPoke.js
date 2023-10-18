import React, { useEffect, useState } from 'react'
import apiPoke from '../../services/apiPoke'
import { Image, ScrollView } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { addFavorite } from '../../util/storage'

const DetalhesPoke = ({ route }) => {
  const navigation = useNavigation();
  const id = route.params.id;
  const [detalhes, setDetalhes] = useState({});
  useEffect(() => {

    apiPoke.get('/pokemon/' + id).then(resultado => {
      setDetalhes(resultado.data)
    })

  }, [])

  const addToFavorites = () => {
    // Adicione o Pokémon atual aos favoritos
    addFavorite({
      id: detalhes.id, // Supondo que detlhes.id seja o ID do Pokémon
      name: detalhes.name, // Nome do Pokémon
      // Outros detalhes do Pokémon que você deseja adicionar
    });
  };


  console.log(id);
  return (
    <>
      <Card style={{ width: 'auto', margin: 15 }}>
        <Button icon="cards-heart-outline" onPress={addToFavorites}>


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