import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {colors} from '../constants/colors';
import {navigationRef} from '../services/navigation';
import Tabs from './Tabs';
export default function () {
  useEffect(() => {
    StatusBar.setBackgroundColor(colors.card);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Tabs />
    </NavigationContainer>
  );
}
