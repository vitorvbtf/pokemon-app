import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const MyComponent = ({ navigation }) => (
    <View style={styles.container}>
        {/* Imagem acima do botão */}
        <Image
            source={require('./logo.png')}
            style={styles.image}
        />

        {/* Botão */}
        <Button
            mode="contained"
            onPress={() => navigation.navigate('ListPokemon')}
            contentStyle={styles.customButtonContent}
            labelStyle={{ color: 'black', fontWeight: 'bold' }}
        >
            Start
        </Button>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centralize o conteúdo verticalmente
        alignItems: 'center', // Centralize o conteúdo horizontalmente
        backgroundColor: '#37A7F2',
    },
    image: {
        width:'20%', // Ajuste a largura da imagem conforme necessário
        height: '20%',
        marginBottom: 30, // Espaço entre a imagem e o botão
    },
    customButtonContent: {
        backgroundColor: '#FFCC18',
    },
});

export default MyComponent;
