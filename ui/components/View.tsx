import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import metrics from '@themes/metrics';

const styles = StyleSheet.create({
  default: {
    padding: metrics.distance.small
  }
});

interface IView {
  children: React.ReactNode;
  style: ViewStyle;
}

function CustomView(props: IView) {
  const { children, style } = props;
  return (
    <View {...props} style={[styles.default, style]}>
      {children}
    </View>
  );
}

export default CustomView;
