import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '_features/login';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="loginScreen">
    <Stack.Screen
      name="loginScreen"
      component={Login}
      options={{ title: 'Login' }}
    />
  </Stack.Navigator>
);
