import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '_navigations/AuthStack';

export default () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);
