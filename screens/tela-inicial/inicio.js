import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Inicio = () => {
    const navigation = useNavigation(); // Obtenha a instância de navegação

    const handleStartPress = () => {
        navigation.navigate('ListPokemon'); // Navegue para a tela 'ListPokemon'
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />

            <Image
                source={require('../../assets/pokeball.png')}
                style={styles.pokeball}
            />

            <Button
                mode="contained"
                onPress={handleStartPress}
                contentStyle={styles.botao}
                labelStyle={{ color: 'black', fontWeight: 'bold' }}
                style={styles.botao}
            >
                Start
            </Button>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#37A7F2',
    },
    logo: {
        width: 250,
        height: 90,
    },
    pokeball: {
        width: 100,
        height: 100,
        marginBottom: 50,
    },
    botao: {
        color: 'black', 
        fontWeight: 'bold',

    },
    botao: {
        backgroundColor: '#FFCC18',
        paddingHorizontal: 15,
        paddingVertical:5,
        borderRadius:50,
        fontSize:50
    },
});

export default Inicio