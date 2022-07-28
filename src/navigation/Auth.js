import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Onboard} from '../screens';

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
