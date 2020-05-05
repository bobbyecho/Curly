import 'react-native-gesture-handler';
import React from 'react';
import { store } from '@src/store';
import { Provider } from 'react-redux';
import { Provider as ThemeProvider } from 'react-native-paper';
import RootNavigation from '@navigations/index';

export default () => (
  <Provider store={store}>
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  </Provider>
);
