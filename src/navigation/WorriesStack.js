import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/Header';
import {Worries, Worry} from '../screens';

const Stack = createNativeStackNavigator();

export default function SetupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WorriesScreen"
        component={Worries}
        options={{header: () => <Header />}}
      />
      <Stack.Screen
        name="Worry"
        component={Worry}
        options={{header: () => <Header showBack />}}
      />
    </Stack.Navigator>
  );
}
