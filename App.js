import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

import Toast from 'react-native-toast-message';
import AppNavigation from './src/navigation/App';

import store from './src/redux/store';
import {toastConfig} from './src/services/toast';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
      <Toast config={toastConfig} />
    </Provider>
  );
}
