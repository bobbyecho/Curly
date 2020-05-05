import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from '@src/features/TransactionList';
import DetailTransaction from '@src/features/DetailTransaction';

const Stack = createStackNavigator();

export type MainStackList = {
  TransactionList: undefined;
  DetailTransaction: {
    id: string;
    sender_bank: string;
    beneficiary_bank: string;
    beneficiary_name: string;
    amount: number | string;
    created_at: string;
    status: string;
    account_number: string;
    unique_code: number;
    remark: string;
  };
};

export default () => (
  <Stack.Navigator initialRouteName="TransactionList">
    <Stack.Screen
      name="TransactionList"
      component={TransactionList}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DetailTransaction"
      component={DetailTransaction}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
