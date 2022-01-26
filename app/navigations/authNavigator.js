import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgetPassword,
  Login,
  Signup,
  Support,
  VerificationCode,
} from '../screens';
import {MAIN_SCREEN} from '../constants/screens';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  const isSupport = useSelector(state => state?.user?.isSupport);
  return (
    <>
      {!isSupport && (
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
            name={MAIN_SCREEN.FORGET}
            component={ForgetPassword}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={MAIN_SCREEN.VERIFICATION_CODE}
            component={VerificationCode}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
      {isSupport && (
        <Stack.Navigator
          initialRouteName={MAIN_SCREEN.SUPPORT}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={MAIN_SCREEN.SUPPORT}
            component={Support}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </>
  );
}

export default AuthNavigator;
