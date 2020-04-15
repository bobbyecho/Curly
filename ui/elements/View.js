import React from 'react';
import { View, StyleSheet } from 'react-native';
import metrics from '../themes/default/metrics';

const styles = StyleSheet.create({
  default: {
    padding: metrics.distance.small,
  },
});

function CustomView(props) {
  const { children, style } = props;
  return (
    <View {...props} style={[styles.default, style]}>
      {children}
    </View>
  );
}

export default CustomView;
