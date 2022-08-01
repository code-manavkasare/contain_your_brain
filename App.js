import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

import Toast from 'react-native-toast-message';
import AppNavigation from './src/navigation/App';

import store from './src/redux/store';
import {toastConfig} from './src/services/toast';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RNBootSplash from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigation />
        <Toast config={toastConfig} />
      </Provider>
    </GestureHandlerRootView>
  );
}
