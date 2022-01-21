import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import {useSelector} from 'react-redux';
import {printLogs} from '../utils/logUtils';
import MainStackNavigator from './mainStackNavigator';

function RootNavigator() {
  const isLogin = useSelector(state => state?.user?.isLoggedIn);
  printLogs({isLogin});
  return (
    <NavigationContainer>
      {isLogin ? <MainStackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
