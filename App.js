import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';
import Toast from 'react-native-toast-message';

import store from './src/redux/store';
import {toastConfig} from './src/services/toast';

export default function App() {
  return (
    <Provider store={store}>
      <DataProvider>
        <AppNavigation />
        <Toast config={toastConfig} />
      </DataProvider>
    </Provider>
  );
}
