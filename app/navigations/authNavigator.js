import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Profile, Signup} from '../screens';
import {MAIN_SCREEN} from "../constants/screens";


const Stack = createNativeStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={MAIN_SCREEN.LOGIN}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name={MAIN_SCREEN.LOGIN}
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={MAIN_SCREEN.SIGN_UP}
                component={Signup}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={MAIN_SCREEN.PROFILE}
                component={Profile}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={MAIN_SCREEN.HOME}
                component={Home}
                options={{
                    headerShown: true,
                }}
            />

        </Stack.Navigator>
    );
}

export default AuthNavigator;
