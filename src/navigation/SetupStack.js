import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/Header';
import {AddWorryTime, Setup} from '../screens';

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
    </Stack.Navigator>
  );
}
