import React from 'react';
import { View, Text } from '@ui';
import { StyleSheet } from 'react-native';
import metrics from '@ui/themes/metrics';

interface IDetailItem {
  title: string;
  subtitle: string;
}

function DetailItem(props: IDetailItem) {
  const { title, subtitle } = props;

  return (
    <View>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 17
  },
  subtitle: {
    fontSize: 15,
    marginTop: metrics.distance.xs
  }
});

export default DetailItem;
