import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import colors from '../themes/default/colors';
import metrics from '../themes/default/metrics';

const styles = StyleSheet.create({
  default: {
    height: metrics.screen.fullHeight,
    backgroundColor: colors.white,
    paddingVertical: metrics.distance.small,
    paddingHorizontal: metrics.distance.medium,
  },
});

function Container(props) {
  const { children, style } = props;
  return (
    <SafeAreaView {...props} style={[styles.default, style]}>
      {children}
    </SafeAreaView>
  );
}

export default Container;
