import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../constants/colors';
import {setWorries} from '../redux/actions/worries';
import {navigationRef} from '../services/navigation';
import {getJson} from '../services/store';
import Tabs from './Tabs';
export default function () {
  const dispatch = useDispatch();
  useEffect(() => {
    getCachedWorries();
    StatusBar.setBackgroundColor(colors.card);
  }, []);

  const getCachedWorries = async () => {
    const worries = await getJson('worries');
    if (worries) dispatch(setWorries(worries));
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Tabs />
    </NavigationContainer>
  );
}
