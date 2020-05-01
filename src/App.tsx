import 'react-native-gesture-handler';
import React from 'react';
import store from '_models';
import { Provider } from 'react-redux';
import ThemeProvider from '_ui/ThemeProvider';
import RootNavigation from '_navigations';

export default () => (
  <ThemeProvider>
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  </ThemeProvider>
);
