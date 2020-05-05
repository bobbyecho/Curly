import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ViewStyle,
  StyleProp,
  View
} from 'react-native';
import colors from '@themes/colors';
import metrics from '@themes/metrics';

const styles = StyleSheet.create({
  default: {
    height: metrics.screen.fullHeight,
    backgroundColor: colors.lightGray,
    paddingVertical: metrics.distance.s,
    paddingHorizontal: metrics.distance.m
  }
});

interface IContainer {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  scrollable?: boolean;
}

function Container(props: IContainer) {
  const { children, style, scrollable } = props;
  const ContainerElem = scrollable ? ScrollView : View;
  return (
    <ContainerElem {...props} style={[styles.default, style]}>
      {children}
    </ContainerElem>
  );
}

export default Container;
