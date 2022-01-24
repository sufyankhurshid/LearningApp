import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Signup, Support} from '../screens';
import {MAIN_SCREEN} from '../constants/screens';

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
        name={MAIN_SCREEN.SUPPORT}
        component={Support}
        options={{
          headerShown: false,
        }}
      />
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
