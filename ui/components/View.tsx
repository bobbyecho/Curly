import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import metrics from '@themes/metrics';

const sizeStyles = StyleSheet.create({
  small: {
    padding: metrics.distance.s
  },
  normal: {
    padding: metrics.distance.m
  },
  plain: {
    padding: 0
  }
});

interface IView {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  size?: 'small' | 'normal' | 'plain';
  row?: boolean;
  verticalCenter?: boolean;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  height?: number | string;
  width?: number | string;
  flex?: boolean;
  backgroundColor?: string;
}

function CustomView(props: IView) {
  const {
    children,
    style,
    size = 'normal',
    row,
    verticalCenter,
    justifyContent,
    height,
    width,
    flex,
    backgroundColor
  } = props;

  return (
    <View
      {...props}
      style={[
        sizeStyles[size],
        {
          ...(row && { flexDirection: 'row' }),
          ...(verticalCenter && { alignItems: 'center' }),
          ...(justifyContent && { justifyContent }),
          ...(height && { height }),
          ...(width && { width }),
          ...(flex && { flex: 1 }),
          ...(backgroundColor && { backgroundColor })
        },
        style
      ]}>
      {children}
    </View>
  );
}

export default CustomView;
