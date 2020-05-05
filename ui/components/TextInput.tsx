import React from 'react';
import { TextInput } from 'react-native-paper';
import { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';
import metrics from '@themes/metrics';
import { ViewStyle, StyleSheet, StyleProp } from 'react-native';

const themeOverride = {
  roundness: 0
};

const styles = StyleSheet.create({
  default: {
    marginVertical: metrics.distance.m
  }
});

interface IView extends Omit<TextInputProps, 'theme'> {
  style?: StyleProp<ViewStyle>;
}

function CustomTextInput(props: IView) {
  const { style } = props;
  return (
    <TextInput
      mode="outlined"
      theme={themeOverride}
      style={[styles.default, style]}
      {...props}
    />
  );
}

export default CustomTextInput;
