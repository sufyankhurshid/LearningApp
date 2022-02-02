import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreatePost,
  DeleteAccount,
  Home,
  HooksPractice,
  Setting,
  ShowDetailsPost,
  UserCode,
} from '../screens';
import {MAIN_SCREEN} from '../constants/screens';
import BottomTab from './bottomTabNavigator';
import {isEmpty} from 'lodash';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  const loginUser = useSelector(state => state?.user?.loginStatus);

  return (
    <>
      {!isEmpty(loginUser?.userCode) && (
        <Stack.Navigator
          initialRouteName={MAIN_SCREEN.HOOK_PRACTICE}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={'tab'}
            component={BottomTab}
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
          <Stack.Screen
            name={MAIN_SCREEN.CREATE_POST}
            component={CreatePost}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={MAIN_SCREEN.SHOW_DETAILS_POST}
            component={ShowDetailsPost}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={MAIN_SCREEN.SETTING}
            component={Setting}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={MAIN_SCREEN.DELETE_ACCOUNT}
            component={DeleteAccount}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={MAIN_SCREEN.HOOK_PRACTICE}
            component={HooksPractice}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      )}
      {isEmpty(loginUser?.userCode) && (
        <Stack.Navigator
          initialRouteName={MAIN_SCREEN.USER_CODE}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={MAIN_SCREEN.USER_CODE}
            component={UserCode}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </>
  );
}

export default MainStackNavigator;
