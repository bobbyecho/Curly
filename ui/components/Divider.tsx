import React from 'react';
import { Divider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import colors from '@ui/themes/colors';
import metrics from '@ui/themes/metrics';

const styles = StyleSheet.create({
  default: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginVertical: metrics.distance.m
  }
});
function CustomDivider() {
  return <Divider style={styles.default} />;
}

export default CustomDivider;
