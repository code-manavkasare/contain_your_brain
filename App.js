import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';

import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <DataProvider>
        <AppNavigation />
      </DataProvider>
    </Provider>
  );
}
