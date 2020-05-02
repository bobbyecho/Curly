import 'react-native-gesture-handler';
import React from 'react';
import store from '@models/index';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@ui';
import RootNavigation from '@navigations/index';

export default () => (
  <ThemeProvider>
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  </ThemeProvider>
);
