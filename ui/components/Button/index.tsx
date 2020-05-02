import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '@themes/colors';
import metrics from '@themes/metrics';
import ButtonProps from './ButtonProps';

const themeOverride = {
  roundness: metrics.radius.buttonRadius
};

const styles = StyleSheet.create({
  default: {
    marginVertical: metrics.distance.medium
  }
});

const labelStyles = StyleSheet.create({
  primary: {
    color: colors.white
  }
});

const contentStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary
  }
});

interface IButton extends ButtonProps {
  style?: ViewStyle;
  type?: 'primary';
  children: React.ReactNode;
  labelStyle?: TextStyle;
  contentStyle?: ViewStyle;
}

function CustomButton(props: IButton) {
  const { children, style, type = 'primary', labelStyle, contentStyle } = props;

  function getLabelStyleType() {
    return [labelStyles[type], labelStyle];
  }

  function getContentStyleType() {
    return [contentStyles[type], contentStyle];
  }

  return (
    <Button
      theme={themeOverride}
      style={[styles.default, style]}
      labelStyle={getLabelStyleType()}
      contentStyle={getContentStyleType()}
      {...props}>
      {children}
    </Button>
  );
}

export default CustomButton;
