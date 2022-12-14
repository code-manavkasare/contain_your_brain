import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/Header';
import {AddWorryTime, Setup, Tips} from '../screens';

const Stack = createNativeStackNavigator();

export default function SetupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SetupScreen"
        component={Setup}
        options={{header: () => <Header />}}
      />
      <Stack.Screen
        name="AddWorryTime"
        component={AddWorryTime}
        options={{
          header: () => <Header showBack />,
        }}
      />
      <Stack.Screen
        name="Tips"
        component={Tips}
        options={{header: () => <Header showBack />}}
      />
    </Stack.Navigator>
  );
}
