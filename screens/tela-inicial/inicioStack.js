import React from 'react'
import Inicio from './Inicio'
import ListPokemon from '../pokemon/ListPokemon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const InicioStack = () => {
    return (
        <>

            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={Inicio} options={{ title: 'Inicio' }} />
                <Stack.Screen name="ListPokemon" component={ListPokemon} />
            </Stack.Navigator>

        </>
    )
}

export default InicioStack