import React from 'react';
import { StyleSheet, SafeAreaView, ViewStyle } from 'react-native';
import colors from '@themes/colors';
import metrics from '@themes/metrics';

const styles = StyleSheet.create({
  default: {
    height: metrics.screen.fullHeight,
    backgroundColor: colors.white,
    paddingVertical: metrics.distance.small,
    paddingHorizontal: metrics.distance.medium
  }
});

interface IContainer {
  style?: ViewStyle;
  children: React.ReactNode;
}

function Container(props: IContainer) {
  const { children, style } = props;
  return (
    <SafeAreaView {...props} style={[styles.default, style]}>
      {children}
    </SafeAreaView>
  );
}

export default Container;
