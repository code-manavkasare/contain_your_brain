import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/Header';
import {AddWorry, Tips} from '../screens';

const Stack = createNativeStackNavigator();

export default function AddWorryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddWorryScreen"
        component={AddWorry}
        options={{header: () => <Header />}}
      />
      <Stack.Screen
        name="Tips"
        component={Tips}
        options={{header: () => <Header showBack />}}
      />
    </Stack.Navigator>
  );
}
