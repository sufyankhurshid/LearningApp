import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';
import {MAIN_SCREEN} from "../constants/screens";


const Stack = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={'main'}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name={MAIN_SCREEN.HOME}
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
}

export default AuthNavigator;
