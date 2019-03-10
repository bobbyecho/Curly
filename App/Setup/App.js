import React from 'react';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store from './Store';
import './Reactotron';

const persistor = getPersistor();

const curly = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default curly;
