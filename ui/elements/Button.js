import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import propTypes from 'prop-types';
import theme from '../themes/default';

const buttonTheme = theme.Button;

function CustomButton(props) {
  const { children, style, type } = props;

  function getLabelStyleType() {
    return buttonTheme.labelStyles[type];
  }

  function getContentStyleType() {
    return buttonTheme.containerStyles[type];
  }

  return (
    <Button
      style={[buttonTheme.styles.default, style]}
      labelStyle={getLabelStyleType()}
      contentStyle={getContentStyleType()}
      theme={buttonTheme.themeOverride}>
      {children}
    </Button>
  );
}

CustomButton.defaultProps = {
  type: 'primary',
};

CustomButton.propTypes = {
  type: propTypes.oneOf(['primary', 'primaryOutline']),
  style: propTypes.instanceOf(StyleSheet),
};

export default CustomButton;
