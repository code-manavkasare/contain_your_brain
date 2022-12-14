import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/Header';
import {Tips, Worries, WorriesList, Worry} from '../screens';

const Stack = createNativeStackNavigator();

export default function WorriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WorriesList"
        component={WorriesList}
        options={{header: () => <Header />}}
      />
      <Stack.Screen
        name="WorriesScreen"
        component={Worries}
        options={{header: () => <Header showBack />}}
      />
      <Stack.Screen
        name="Worry"
        component={Worry}
        options={{header: () => <Header showBack />}}
      />
      <Stack.Screen
        name="Tips"
        component={Tips}
        options={{header: () => <Header showBack />}}
      />
    </Stack.Navigator>
  );
}
