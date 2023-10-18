import AsyncStorage from '@react-native-async-storage/async-storage';

export const addFavorite = async (pokemon) => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = favorites ? JSON.parse(favorites) : [];
    favoritesArray.push(pokemon);
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  } catch (error) {
    console.error(error);
  }
};

export const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
