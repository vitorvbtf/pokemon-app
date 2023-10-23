import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { Card } from 'react-native-paper'; 
import { addFavorite, getFavorites } from '../../util/storage'



const Favorites = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then((fav) => setFavorites(fav));
    console.log(favorites)
  }, []);

  return (
    <View>
      <Text>Minha Lista de Favoritos</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            {/* Renderize os dados do Pokémon favorito */}
            <Card.Title title={item.name} />
          </Card>
        )}
      />
      <Button
        title="Voltar para a lista de Pokémon"
        onPress={() => navigation.navigate('list-pokemon')}
      />
    </View>
  );
};

export default Favorites;
