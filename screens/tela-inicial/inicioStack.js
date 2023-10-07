import React from 'react'
import inicio from './inicio'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const inicioStack = () => {
    return (
        <>

            <Stack.Navigator>
                <Stack.Screen name="inicio" component={inicio} options={{ title: 'Inicio' }} />
            </Stack.Navigator>

        </>
    )
}

export default inicioStack