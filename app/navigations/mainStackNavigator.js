import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreatePost,
  DeleteAccount,
  Home,
  Setting,
  ShowDetailsPost,
  UserCode,
} from '../screens';
import {MAIN_SCREEN} from '../constants/screens';
import BottomTab from './bottomTabNavigator';
import {isEmpty} from 'lodash';

const Stack = createNativeStackNavigator();
const userCode = '2345';

function MainStackNavigator() {
  return (
    <>
      {!isEmpty(userCode) && (
        <Stack.Navigator
          initialRouteName={'tab'}
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
        </Stack.Navigator>
      )}
      {isEmpty(userCode) && (
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
