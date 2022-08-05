import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BigHeader from '../components/BigHeader';
import Header from '../components/Header';
import {About, Home} from '../screens';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{header: () => <BigHeader />}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{header: () => <Header showBack />}}
      />
    </Stack.Navigator>
  );
}
