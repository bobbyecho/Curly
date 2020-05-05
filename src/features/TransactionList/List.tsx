import React from 'react';
import { View } from '@ui';
import TransactionCard, { transactionData } from '@ui/fusions/TransactionCard';
import { StyleSheet } from 'react-native';

interface IList {
  data: transactionData[];
}

function List(props: IList) {
  const { data } = props;

  return (
    <View size="plain" style={styles.container}>
      {data.map((v) => {
        return <TransactionCard key={v.id} transactionData={v} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 15
  }
});

export default List;
