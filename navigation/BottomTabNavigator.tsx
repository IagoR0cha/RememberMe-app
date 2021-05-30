import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Alarms from '../screens/Alarms';
import { BottomTabParamList, HomeParamList, AlarmsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].textLight,
        inactiveTintColor: Colors[colorScheme].disableColor,
        activeBackgroundColor: Colors[colorScheme].tint,
        inactiveBackgroundColor: Colors[colorScheme].tint
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Alarms"
        component={AlarmsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="alarm-outline" color={color} />,

        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

const AlarmsStack = createStackNavigator<AlarmsParamList>();

function AlarmsNavigator() {
  return (
    <AlarmsStack.Navigator>
      <AlarmsStack.Screen
        name="AlarmsScreen"
        component={Alarms}
        options={{ headerShown: false }}
      />
    </AlarmsStack.Navigator>
  );
}
