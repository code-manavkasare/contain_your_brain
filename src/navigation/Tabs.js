import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {colors} from '../constants/colors';
import {sizes} from '../constants/sizes';
import {AddWorry, Home, Tips} from '../screens';
import Worries from '../navigation/WorriesStack';

import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SetupStack from './SetupStack';
import Header from '../components/Header';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colors.card,
          height: sizes.height * 0.1,
          elevation: 10,
          shadowOpacity: 1,
          shadowColor: colors.shadow,
        },
        headerStyle: {
          backgroundColor: colors.card,
        },
        tabBarActiveTintColor: colors.tertiary,
        tabBarInactiveTintColor: colors.primary,
        tabBarLabelStyle: {marginBottom: sizes.padding, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="home"
              color={focused ? colors.tertiary : colors.primary}
              size={sizes.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Worries"
        component={Worries}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Fontisto
              name="file-1"
              color={focused ? colors.tertiary : colors.primary}
              size={sizes.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddWorry"
        component={AddWorry}
        options={{
          tabBarLabelStyle: {
            color: colors.secondary,
            marginBottom: sizes.padding * 2,
            fontWeight: 'bold',
          },
          header: () => <Header />,
          tabBarLabel: 'Add a Worry',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 88,
                height: 87,
                borderRadius: 44,
                backgroundColor: colors.background,
                marginTop: -sizes.padding * 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                name="plus-circle"
                color={focused ? colors.tertiary : colors.secondary}
                size={sizes.icon * 2}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={Tips}
        options={{
          header: () => <Header />,
          tabBarIcon: ({focused}) => (
            <Feather
              name="info"
              color={focused ? colors.tertiary : colors.primary}
              size={sizes.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setup"
        component={SetupStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Feather
              name="settings"
              color={focused ? colors.tertiary : colors.primary}
              size={sizes.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
