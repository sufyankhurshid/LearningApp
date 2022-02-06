import * as React from 'react';
import {ICON_TYPES} from '../constants/constant';
import {Home, Setting, Todo} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MAIN_SCREEN} from '../constants/screens';
import VectorIconComponent from '../components/VectorIconComponent';
import {AppStyles, MetricsMod} from '../themes';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={MAIN_SCREEN.HOME}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === MAIN_SCREEN.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === MAIN_SCREEN.SETTING) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (rn === MAIN_SCREEN.TODO) {
            iconName = focused
              ? 'ios-list-circle-sharp'
              : 'ios-list-circle-outline';
          }
          return (
            <VectorIconComponent
              name={iconName}
              size={MetricsMod.section}
              color={AppStyles.colorSet.bgOrange}
              type={ICON_TYPES.IonIcons}
            />
          );
        },
        tabBarStyle: {
          height: 65,
        },
      })}>
      <Tab.Screen
        name={MAIN_SCREEN.HOME}
        component={Home}
        options={{
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: AppStyles.fontSet.small,
            color: AppStyles.colorSet.bgOrange,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={MAIN_SCREEN.SETTING}
        component={Setting}
        options={{
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: AppStyles.fontSet.small,
            color: AppStyles.colorSet.bgOrange,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={MAIN_SCREEN.TODO}
        component={Todo}
        options={{
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: AppStyles.fontSet.small,
            color: AppStyles.colorSet.bgOrange,
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
