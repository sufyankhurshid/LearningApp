import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import MainStackNavigator from './mainStackNavigator';
import {useSelector} from 'react-redux';

function RootNavigator() {
  const isLogin = useSelector(state => state?.user?.isLoggedIn);

  return (
    <NavigationContainer>
      {isLogin ? <MainStackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
